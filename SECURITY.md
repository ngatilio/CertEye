# Security Policy

## Supported Versions

We have updated security fixes following CWE & CVE vulnerabilities reported by ST Electronics:
https://cve.report/vendor/st

| Version | Supported          |
| ------- | ------------------ |
| 1.0     | :white_check_mark: |



## Reporting a Vulnerability

Identified CVE vulnerabilities must be reported under the link below:

https://cve.report/vendor/certeye


Please use a descriptive title for your report.

In addition, please include the following information along with your report:

Your name and affiliation (if any).
A description of the technical details of the vulnerabilities. It is very important to let us know how we can reproduce your findings.
A minimal example of the vulnerabity.
An explanation of who can exploit this vulnerability, and what they gain when doing so -- write an attack scenario. This will help us evaluate your report quickly, especially if the issue is complex.
Whether this vulnerability is public or known to third parties. If it is, please provide details.
After the initial reply to your report, the security team will endeavor to keep you informed of the progress being made towards a fix and announcement. TensorFlow uses the following disclosure process:

When a report is received, we confirm the issue and determine its severity. Please try to maximize impact in the report, going beyond just obtaining unwanted behavior in a fuzzer.
If we know of specific third-party services or software based on TensorFlow that require mitigation before publication, those projects will be notified.
An advisory is prepared (but not published) which details the problem and steps for mitigation.
The vulnerability is fixed and potential workarounds are identified.
We will publish a security advisory for all fixed vulnerabilities.
For each vulnerability, we try to ingress it as soon as possible, given the size of the team and the number of reports. Vulnerabilities will, in general, be batched to be fixed at the same time as a quarterly release.

Past security advisories are listed here. In the future, we might sunset this list and only use GitHub's Security Advisory format, to simplify the post-vulnerability-fix process. We credit reporters for identifying security issues, although we keep your name confidential if you request it
