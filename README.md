# CertEye

CertEye is a Zero-trust AI SaaS platform for governance, risk, compliance and quality management 
of enterprise-wide AI solutions.

## Architecture

![architecture](https://github.com/ngatilio/CertEye/assets/17088165/ddf739ae-d80c-434c-865d-94552a8f4190)


CertEye has 5 core features:

`certeye-governance`: choose, prioritize, time, implement, track, and review AI ethics policies and controls suitable for your organization (https://doi.org/10.1109/TAI.2022.3225132).


`certeye-pcp`: continuously identify AI ethics issues in your AI pipelines using CI/CDs, playbooks, and testing sandboxes (https://arxiv.org/abs/2206.11981). Testing sandboxes use the concept of ethical twins to run multiple tests on AI components using a virtual emulator. 


`certeye-pep`: continuously fix AI ethics issues in your AI pipelines using CI/CDs, playbooks, and patching sandboxes. Patching sandboxes use the
concept of ethical twins to run and validate multiple patches on AI components using a virtual emulator. 


`certeye-observability`: monitor various metrics such as fairness loss, PII exposure, carbon footprint per unit, audit traces, and well-know metrics (e.g., response time, peak load, cache hit rate) during the execution of AI models in deployment and post-deployment stages (https://arxiv.org/abs/2306.01788). Compliance reports are generated to help organizations having a 360 view on AI trustworthy postures on
their AI products. Automatic suggestions are also proposed to fix these issues through the `certeye-pep` feature.


`certeye-eoar`: prevent and mitigate threats on AI assets using a custom Threat Mitigation Matrix based on MITRE ATLAS and D3FEND (https://arxiv.org/pdf/2207.00091.pdf, https://doi.org/10.1109/COMST.2019.2922584).


https://github.com/ngatilio/CertEye/assets/17088165/41cad582-a84d-4cc7-8abe-4d59a12dfea9


## CertEye-Admin Prerequisites

You can either work with this project locally (directly on your machine) or use
a pre-configured Docker environment. We'll differentiate this in the README with
a table like this one:

| Local mode                      | OR  | Docker mode                              |
| ------------------------------- | :-: | ---------------------------------------- |
| _command for local development_ | or  | _command for docker-compose development_ |

**Be careful not to mix and match Docker-mode vs local-mode for development.**
You should make a choice and stick to it. (Developing locally but deploying with
`production.Docker` is absolutely fine.)

**IMPORTANT**: If you choose the Docker mode, be sure to read
[docker/README.md](docker/README.md).

For users of Visual Studio Code (VSCode), a `.vscode` folder is included with
editor settings and debugger settings provided, plus a list of recommended
extensions. Should you need it, there is also a `.devcontainer` folder which
enables you to use
[VSCode's remote containers](https://code.visualstudio.com/docs/remote/containers)
giving you a local-like development experience whilst still using docker
containers.

### Local development

Requires:

- Node.js v16+ must be installed
- PostgreSQL v10+ server must be available
- `pg_dump` command must be available (or you can remove this functionality)
- VSCode is recommended, but any editor will do

This software has been developed under Mac and Linux, and should work in a
`bash` environment.


### Docker development

Requires:

- [`docker`](https://docs.docker.com/install/)
- [`docker-compose`](https://docs.docker.com/compose/install/)
- Ensure you've allocated Docker **at least** 4GB of RAM; significantly more
  recommended
  - (Development only, production is much more efficient)

Has been tested on Windows and Linux (Ubuntu 18.04LTS).

## Getting started

This project is designed to work with `yarn`. If you don't have `yarn`
installed, you can install it with `npm install -g yarn`. The Docker setup
already has `yarn` & `npm` installed and configured.

To get started, please run `yarn`, followed by:

| Local mode   | OR  | Docker mode                     |
| ------------ | :-: | ------------------------------- |
| `yarn setup` | or  | `export UID; yarn docker setup` |

This command will lead you through the necessary steps, and create a `.env` file
for you containing your secrets.

**NOTE:** `export UID` is really important on Linux Docker hosts, otherwise the
files and folders created by Docker will end up owned by root, which is
non-optimal. We recommend adding `export UID` to your `~/.profile` or
`~/.bashrc` or similar so you don't have to remember it.

**Do not commit `.env` to version control!**

## Running

You can bring up the stack with:

| Local mode   | OR  | Docker mode                     |
| ------------ | :-: | ------------------------------- |
| `yarn start` | or  | `export UID; yarn docker start` |

After a short period you should be able to load the application at
http://localhost:5678

This main command runs a number of tasks:

- uses [`certeye-migrate`] to watch
  the`migrations/current.sql` file for changes, and automatically runs it
  against your database when it changes
- watches the TypeScript source code of the server, and compiles it from
  `@app/*/src` to `@app/*/dist` so node/`graphile-worker`/etc. can run the
  compiled code directly
- runs the node server (includes PostGraphile and Next.js middleware)
- runs `certeye-worker` to execute your tasks (e.g. sending emails)
- watches your GraphQL files and your PostGraphile schema for changes and
  generates your TypeScript React hooks for you automatically, leading to
  strongly typed code with minimal effort
- runs the `jest` tests in watch mode, automatically re-running as the database
  or test files change

**NOTE**: `docker-compose up server` also runs the PostgreSQL server that the
system connects to.

You may also choose to develop locally, but use the PostgreSQL server via
`docker-compose up -d db`.

Then for development you may need a console; you can open one with:

| Local mode | OR  | Docker mode                    |
| ---------- | :-: | ------------------------------ |
| `bash`     | or  | `export UID; yarn docker bash` |

To shut everything down:

| Local mode | OR  | Docker mode                    |
| ---------- | :-: | ------------------------------ |
| Ctrl-c     | or  | `export UID; yarn docker down` |


## Docker development

Be sure to read [docker/README.md](docker/README.md).

## Building the production docker image

To build the production image, use `docker build` as shown below. You should
supply the `ROOT_URL` build variable (which will be baked into the client code,
so cannot be changed as envvars); if you don't then the defaults will apply
(which likely will not be suitable).

To build the worker, pass `TARGET="worker"` instead of the default
`TARGET="server"`.

```sh
docker build \
  --file production.Dockerfile \
  --build-arg ROOT_URL="http://localhost:5678" \
  --build-arg TARGET="server" \
  .
```

When you run the image you must pass it the relevant environmental variables,
for example:

```sh
docker run --rm -it --init -p 5678:5678 \
  -e GRAPHILE_LICENSE="$GRAPHILE_LICENSE" \
  -e SECRET="$SECRET" \
  -e JWT_SECRET="$JWT_SECRET" \
  -e DATABASE_VISITOR="$DATABASE_VISITOR" \
  -e DATABASE_URL="$DATABASE_URL" \
  -e AUTH_DATABASE_URL="$AUTH_DATABASE_URL" \
  -e GITHUB_KEY="$GITHUB_KEY" \
  -e GITHUB_SECRET="$GITHUB_SECRET" \
  docker-image-id-here
```

Currently if you miss required envvars weird things will happen; we don't
currently have environment validation (PRs welcome!).

Note: If you are using the `production.Dockerfile` to run graphile/starter in a
Docker container on eg. Kubernetes, AWS ECS, DigitalOcean App Platform (or
similar) and you are trying to connect to Amazon RDS or DigitalOcean databases
(or probably other managed databases), make sure to replace
`/data/amazon-rds-ca-cert.pem` with the CA certificate of your own database.
This file is copied into your Docker image during build time and can therefore
be referenced in your env variables `DATABASE_URL` and `AUTH_DATABASE_URL`:  
`DATABASE_URL="postgres://name:password@host:port/dbname?ssl=true&sslrootcert=/app/data/amazon-rds-ca-cert.pem"`

## Production build for local mode

Use `yarn run build` to generate a production build of the project

## CertEye License

This is open source software; you may use, modify and distribute it under the
terms of the  `LICENSE.md`


Copyright (c) CertKOR AI, 2023.
