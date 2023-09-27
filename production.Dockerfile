# Global args, set before the first FROM, shared by all stages
ARG PORT=5678
ARG NODE_ENV="production"
ARG ROOT_URL="http://localhost:${PORT}"
ARG TARGET="server"

################################################################################
# Build stage 1 - `yarn build`

FROM node:16-alpine as builder
# Import our shared args
ARG NODE_ENV
ARG ROOT_URL

# Cache node_modules for as long as possible
COPY package.json yarn.lock .yarnrc.yml /app/
COPY .yarn/ /app/.yarn/
COPY certeye-admin/ /app/certeye-admin/
WORKDIR /app/
RUN yarn workspaces focus --all

COPY tsconfig.json /app/
# Folders must be copied separately, files can be copied all at once
COPY scripts/ /app/scripts/
COPY data/ /app/data/

# Finally run the build script
RUN yarn run build

################################################################################
# Build stage 2 - COPY the relevant things (multiple steps)

FROM node:16-alpine as clean
# Import our shared args
ARG NODE_ENV
ARG ROOT_URL

# Copy over selectively just the tings we need, try and avoid the rest
COPY --from=builder /app/package.json /app/yarn.lock /app/.yarnrc.yml /app/
COPY --from=builder /app/.yarn/ /app/.yarn/
COPY --from=builder /app/certeye-admin/config/ /app/certeye-admin/config/
COPY --from=builder /app/certeye-admin/db/ /app/certeye-admin/db/
COPY --from=builder /app/certeye-admin/graphql/ /app/certeye-admin/graphql/
COPY --from=builder /app/certeye-admin/lib/ /app/certeye-admin/lib/
COPY --from=builder /app/certeye-admin/components/package.json /app/certeye-admin/components/
COPY --from=builder /app/certeye-admin/components/dist/ /app/certeye-admin/components/dist/
COPY --from=builder /app/certeye-admin/client/package.json /app/certeye-admin/client/package.json
COPY --from=builder /app/certeye-admin/client/src/next.config.js /app/certeye-admin/client/src/next.config.js
COPY --from=builder /app/certeye-admin/client/.next /app/certeye-admin/client/.next
COPY --from=builder /app/certeye-admin/server/package.json /app/certeye-admin/server/
COPY --from=builder /app/certeye-admin/server/postgraphile.tags.jsonc /app/certeye-admin/server/
COPY --from=builder /app/certeye-admin/server/dist/ /app/certeye-admin/server/dist/
COPY --from=builder /app/certeye-admin/worker/package.json /app/certeye-admin/worker/
COPY --from=builder /app/certeye-admin/worker/templates/ /app/certeye-admin/worker/templates/
COPY --from=builder /app/certeye-admin/worker/dist/ /app/certeye-admin/worker/dist/
COPY --from=builder /app/data/amazon-rds-ca-cert.pem /app/data/amazon-rds-ca-cert.pem

# Shared args shouldn't be overridable at runtime (because they're baked into
# the built JS).
#
# Further, they aren't available in ENTRYPOINT (because it's at runtime), so
# push them to a .env file that we can source from ENTRYPOINT.
RUN echo -e "NODE_ENV=$NODE_ENV\nROOT_URL=$ROOT_URL" > /app/.env

RUN rm -Rf /app/node_modules /app/certeye-admin/*/node_modules

################################################################################
# Build stage FINAL - COPY everything, once, and then do a clean `yarn install`

FROM node:16-alpine

EXPOSE $PORT
WORKDIR /app/
# Copy everything from stage 2, it's already been filtered
COPY --from=clean /app/ /app/

# Install yarn ASAP because it's the slowest
RUN yarn workspaces focus --all --production

# Import our shared args
ARG PORT
ARG NODE_ENV
ARG ROOT_URL
ARG TARGET

LABEL description="CertEye $TARGET"

# You might want to disable GRAPHILE_TURBO if you have issues
ENV GRAPHILE_TURBO=1 TARGET=$TARGET PORT=$PORT
ENV DATABASE_HOST="pg"
ENV DATABASE_NAME="certeye"
ENV DATABASE_OWNER="${DATABASE_NAME}"
ENV DATABASE_VISITOR="${DATABASE_NAME}_visitor"
ENV DATABASE_AUTHENTICATOR="${DATABASE_NAME}_authenticator"

# Entrypoint last so that we can run `sh` in previous build steps for debugging
ENTRYPOINT yarn "${TARGET}" start
