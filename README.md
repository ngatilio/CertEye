<p align="center">
  <img src="logo_certeye.png" alt="Sublime's custom image"/>
</p>

<div align="center">

![](https://img.shields.io/badge/version-v0.1.0%20-%23EC591A)
![](https://img.shields.io/static/v1?label=license&message=BSD-3&color=%23385177)
![](https://img.shields.io/discord/762976922531528725.svg?label=discord&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2)
[![](https://img.shields.io/github/contributors/ngatilio/certeye)](https://github.com/ngatilio/certeye/graphs/contributors)

</div>

<h1 align="center">The fast, secure, transparent, and scalable <br /> AI regulation sandbox platform</h1>

<div align="center">
	CertEye sandbox evaluates your AI/LLM apps, inference APIs, and pipelines based on regulation policies in your region and generates compliance reports with repairing suggestions (code linting, model patching); enabling you to anticipate incidents and legal fines.
</div>
<br />

## Features

- **AI Policy As Code (AIPaC) Language** ⚡
   - A specification language that turns AI policies into code with a syntax similar to `Go` and `Drools`.
   - The code is translated and compiled with `gc` to be used at runtime on the operating system during the sandbox analysis

- **Licy** 🧩
   - Licy is a `policy rule management system` that enables AI community to validate, commit, push, pull, delete, and audit AIPaC policy rules.
   - Licy supports a `AIPaC registry` to get and publish `policy packages`. A policy package contains rules and a manifest file describing policy scenarios, a mapping between attributes (e.g., fairness, sustainability, privacy) and rule sets.
   - Licy uses `Agentic RAG` approach to mine regulation databases and extract step-by-step policies, automatically transformed as `AIPaC policy templates`.
   - AI community uses AIPaC policy templates to create custom policies for their organization. An AIPaC policy template essentially consists of rule skeletons with metadata based on policies (e.g., description, references) but without the code.

- **Sandboxing** 📚
   - CertEye sandbox leverages `SPDX` (ISO/IEC 5962:2021) and analyzes `samples`, containing a `twin` of the initial artifact (app, api url, pipeline), libraries, and auto-generated configuration files. Libraries include pre-compiled policy rules and dependencies (e.g., libtensorflow.so, libtorch.so).
   - The sandbox uses an agnostic GPU acceleration engine (`vAccel`, `CUDA`) and virtualization ([`VirtIO`](https://github.com/oasis-tcs/virtio-spec), `libvrt`) based on security-oriented OS (e.g., `Qubes`) and unikernels (e.g., `Unikraft`) on top of secure microkernels such as `seL4` and `hardened Xen`.
   - The sandbox distributes twin instance workloads accross multiple machines (nodes) and monitors the executing services on the network using the `gRPC` protocol.
   - Sandbox results (i.e., compliance reports) is automatically pushed as PDF to your cloud storage (S3, Azure, GCP) or as open issues in your repository (Git, DVC, Azure DevOps, AWS).

- **Repairing (Linting)** ☀️ 
   - Based on the results, non-compliance part of your code, api or app  is highlighted in red with the specific policy violated and a fix recommendation
   - The `Responsible AI (RAI) Pair Assistant` suggests appropriate fixes to you based on the violated policies.

- **Metrics** 📈
   - A prometheus wrapper can be added in AIPaC rules as library to collect and push metrics to the Prometheus server. Metric formats are fully customizable into standard formats such as `Common Event Format (CEF)`
   - Prometheus data can sent to a dashboard for monitoring (e.g., Kibana or Grafana)

- **Optimized for Performance** 🚀
   - Unikernels minimizes overheads and leverages platform-specific optimizations, ensuring applications achieve peak performance levels.
   - Microkernels such as `seL4` is very performant and the world's most highly assured OS kernel

- **Reduced Attack Surface** 🛡️
   - Policy rules uses a Go-like syntax making more robust
   - Unikraft reduces the attack surface, enhancing security in deployment scenarios.
   - Secure microkernels such as `seL4` and security-oriented OS such as `Qubes` and `unikraft` make the sandbox more secure


## AI Policy As Code 

### Language 

An example of `PII Exposure Policy Rule` is described. The rule checks PII information using different popular tools such as `detect-secrets`, `presidio analyzer`, `trivy secret scanner`, and custom regex. The average of the output risk scores from the tools is computed and must be greater or equal to 0.5.


```go
package pii_exposure_101
import (
    "secret_checker",
    "net/http",
    "prometheus_wrapper"
)

rule pii_exposure {

include 
    "pii_exposure_120"
    "secret_detection_230"
metadata 
    gid:= "002"
    author := "Lionel Tidjon"
    date := "2016-06-26"
    description := "PII Exposure"
    targets := {"input", "output", "model", "pipeline"}
    models := {
        "gpt-3.5-turbo", "mixtral-8x7b-32768", "gemini-1.0-pro",
        "llama3-8b-8192", "claude-instant-1.2"
    }
    tools:= {
        "detect_secrets", "regex", 
        "presidio_analyzer", "trivy"
    }
    references := {
        "OWASP TOP 10 LLM (LLM06, LLM02)", "GDPR", 
        "ISO 42001:2023", "EU AI Act"
    }
when 
    results:= secret_checker.PolicyEngine(metadata.tools, metadata.targets).Check();
    results != nil && (Average(results.RiskScore) >= 0.5 || results.PIIFound)
then 
    // riskScore and piiCount metrics are already registered in the prometheus wrapper
    prometheus_wrapper.riskScore.Set(Average(results.RiskScore));
    prometheus_wrapper.piiCount.Set(results.UniqueCount);
    http.Handle("/metrics", prometheus_wrapper.Handler());
    http.ListenAndServe(":9094", nil);
}
```

### Package

The package consists of AIPaC rules and a manifest file. The manifest file is written in YAML. It describes input, feature, model, and output scenarios by mapping policy attributes to rule sets.

```yaml
Version: 1.0
Authors: Lionel Tidjon 
Date: "2024-06-02 12:45:00PM EST" 
Description: "An example of scenarios following ISO 42001:2023"
Input scenario:
    privacy: 
        rules:  ["~/iso42001/privacy/pii_exposure_101.aipac"]
    fairness: 
        rules: ["~/iso42001/fairness/bais_detection_98.aipac",
                "~/iso4200/fairness/toxicity_output_156.aipac"]
Model scenario:
    sustainability: 
        rules: ["~/iso42001/sust/train_carbonfootprint_274.aipac",
                "~/iso42001/sust/gpu_optimization_145.aipac"]
Output scenario:
    fairness: 
        rules: ["~/iso4200/fairness/toxicity_output_156.aipac"]
    privacy: 
        rules:  ["~/iso42001/privacy/pii_exposure_101.aipac"]
```

## Licy

Licy uses the following commands. The commands are very similar to other package management such as docker and kubenetes.

```console
$licy registry login
$licy registry add helloworld-rule@V1
$licy registry commit c3f279d17e0a  helloworld-rule@v1
$licy registry commit --change "PII exposure" c3f279d10a  helloworld-rule@v1
$licy registry push
$licy registry pull
$licy registry delete --id 5ec45d
$licy registry logout
```

Licy supports `audit` and `validate` commands allowing to audit your AIPaC policy packages and fix errors before committing to the AIPaC registry.

```console
$licy registry audit helloworld-rule@V1
0 vulnerabilities. Done
$licy registry validate helloworld-rule@V1
0 errors. Done.
```

# Sandbox CLI

CertEye Sandbox CLI uses the following commands.

```console
certeye sandbox submit --help
Usage: certeye sandbox submit [OPTIONS] [TARGET]...

  Submit one or more AI/LLM app packages, API URLs, and pipelines to certeye sandbox.

Options:
  -u, --url           Submitting URLs instead of samples
  -o, --options TEXT  Options for these tasks
  --package TEXT      Analysis package to use
  --pipeline TEXT     Analysis the current pipeline directory
  --custom TEXT       Custom information to pass along this task
  --owner TEXT        Owner of this task
  --timeout INTEGER   Analysis time in seconds
  --priority INTEGER  Priority of this task
  --machine TEXT      VM to analyze these tasks on (qubes, unikraft)
  --platform TEXT     Analysis platform (seL4, Xen)
  --memory            Enable memory dumping
  --enforce-timeout   Don't terminate the analysis early
  --clock TEXT        Set the system clock
  --tags TEXT         Analysis tags
  --baseline          Create baseline task
  --remote TEXT       Submit to a remote Sandbox instance
  --shuffle           Shuffle the submitted tasks
  --pattern TEXT      Provide a glob-pattern when submitting a
                      directory
  --max INTEGER       Submit up to X tasks at once
  --unique            Only submit samples that have not been
                      analyzed before
  -d, --debug         Enable verbose logging
  -q, --quiet         Only log warnings and critical messages
  --json  TEXT        Output results in JSON format
  --help              Show this message and exit.
```

For example, you can submit your inference APIs for analysis as follows:

```console
certeye sandbox submit --url https://api.mycompany.serve.us/v1/predict
```
You can also submit your app or the current directory of your LLM/AI pipeline:

```console
certeye sandbox submit --machine qubes-test --platform Xen --priority 2 --timeout 60 --package llm-appv1.deb ~/pkgs/apps/ 
```


# CI/CD integration

The sandbox can be seamlessly integrated into your CI/CD pipelines

```yaml

version: 0.1
orbs: 
  certeye: certeye/certeye@0.1

jobs:
  certeye-sandbox:
    docker:
      - image: golang:latest
      - image: golangci/golangci-lint:latest
    steps:
      - checkout
      - run:
          name: pull policy rules
          command: licy registry pull --auth CERTEYE_TOKEN
      - certeye/sandbox:
          command: submit
          token-variable: CERTEYE_TOKEN
          additional-arguments: --machine qubes --platform xen --priority 1 --timeout 60 --pipeline . --json=results.json

workflows:
  build-test-certeye:
    jobs:
      - certeye-sandbox

```

### Docker development

Requires:

- [`docker`](https://docs.docker.com/install/)
- [`docker-compose`](https://docs.docker.com/compose/install/)
- Ensure you've allocated Docker **at least** 4GB of RAM; significantly more
  recommended
  - (Development only, production is much more efficient)

Has been tested on Windows and Linux (Ubuntu 18.04LTS).


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

## CertEye License

This is open source software; you may use, modify and distribute it under the
terms of the  `LICENSE.md`


Copyright (c) CertKOR AI, 2023.
