# DevOps CI/CD Pipeline for a Next.js Web Application

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![React](https://img.shields.io/badge/React-18-blue)
![Docker](https://img.shields.io/badge/Docker-Multi--Stage-blue)
![GitHub Actions](https://img.shields.io/badge/CI-GitHub_Actions-success)
![Trivy](https://img.shields.io/badge/Security-Trivy-red)
![Hostinger](https://img.shields.io/badge/CD-Hostinger-purple)
![License](https://img.shields.io/badge/License-MIT-green)

## Project Overview

This project demonstrates how a modern web application can be managed using practical DevOps principles throughout its development lifecycle.

Although the application itself is a Next.js portfolio website, the primary objective of this project is to showcase the complete DevOps workflow behind a production deployment—including Continuous Integration, automated deployment, containerization, security scanning, branch protection, smoke testing, operational endpoints, and secure configuration management.

The project simulates a realistic client environment where developers continuously deliver application updates while the DevOps pipeline ensures quality, security, and deployment consistency.

**Live Application**

https://www.ayushisingh.com

This project is based on a consulting engagement simulation, where the website represents the client application and the repository demonstrates the DevOps automation implemented around it. The emphasis is on the CI/CD pipeline, security, and deployment practices rather than the application's business functionality.

---

# Project Objectives

This project demonstrates:

- CI/CD implementation using GitHub Actions
- Automated deployment workflow
- Multi-stage Docker containerization
- Container vulnerability scanning using Trivy
- Smoke testing after build
- Protected production branch
- Pull Request based deployment workflow
- Secure environment variable management
- Operational health monitoring
- Production-ready deployment practices

---

# Technology Stack

## Application

- Next.js 14
- React 18
- Tailwind CSS
- Framer Motion
- EmailJS

## DevOps

- Git
- GitHub
- GitHub Actions
- Docker
- Trivy
- Hostinger
- Node.js

---

# Architecture

```
Developer
      │
      ▼
Feature Branch
      │
      ▼
Pull Request
      │
      ▼
GitHub Actions (CI)
      │
      ├── Install Dependencies
      ├── ESLint
      ├── Next.js Build
      ├── Docker Image Build
      ├── Trivy Vulnerability Scan
      └── Smoke Test
      │
      ▼
Merge to Protected Main
      │
      ▼
Hostinger Auto Deployment
      │
      ▼
Production Website
```

---

# Docker Build Flow

```
Source Code
      │
      ▼
package.json
package-lock.json
      │
      ▼
Builder Stage
(node:22-alpine)

COPY package*.json
npm ci

COPY Source

npm run build

      │
      ▼

Standalone Production Build

      │
      ▼

Runner Stage
(node:22-alpine)

Copy Runtime Artifacts

Copy Static Files

Copy Public Assets

NODE_ENV=production

node server.js

      │
      ▼

Optimized Production Image
```

---

# CI/CD Pipeline

Every Pull Request triggers the Continuous Integration pipeline.

```
Developer

↓

Pull Request

↓

Install Dependencies

↓

ESLint

↓

Next.js Build

↓

Docker Build

↓

Trivy Security Scan

↓

Smoke Test

↓

All Checks Passed

↓

Merge to Protected Main

↓

Hostinger Auto Deployment

↓

Production
```

Only Pull Requests with successful CI checks are allowed to merge into the protected **main** branch.

---

# Security Practices

This project follows multiple security best practices.

- Branch Protection Rules
- Pull Request based workflow
- Mandatory CI status checks
- Container vulnerability scanning using Trivy
- Environment variable management
- Multi-stage Docker builds
- Minimal production image
- Production-only runtime container

---

# DevOps Practices Implemented

## Continuous Integration

Every Pull Request automatically performs:

- Dependency installation
- Lint validation
- Application build
- Docker image creation
- Vulnerability scanning
- Smoke testing

---

## Continuous Deployment

Hostinger automatically deploys the latest validated code after it has been merged into the protected production branch.

---

## Branch Protection

The production branch is protected through GitHub Branch Protection Rules.

Developers cannot deploy directly to production.

Every deployment must pass the complete CI pipeline before merge.

---

## Containerization

The application is packaged using a multi-stage Docker build.

Benefits include:

- Smaller image size
- Faster deployment
- Better layer caching
- Reduced attack surface
- Production-ready runtime image

---

## Security Scanning

Trivy scans the Docker image for:

- Operating System vulnerabilities
- Node.js package vulnerabilities
- Known CVEs
- High and Critical security issues

The pipeline fails if unacceptable vulnerabilities are detected.

---

## Smoke Testing

After building the application, a smoke test verifies that the application starts successfully and responds correctly before deployment.

This prevents obvious runtime failures from reaching production.

---

## Environment Variables

Sensitive configuration is stored outside the source code.

Examples include:

- EmailJS Service ID
- EmailJS Template ID
- EmailJS Public Key

No secrets are committed to Git.

---

# Operational Endpoints

| Endpoint | Purpose |
|----------|---------|
| `/api/health` | Health endpoint used for monitoring and readiness checks |
| `/api/version` | Returns application version and build metadata |

---

# Local Development

## Clone Repository

```bash
git clone https://github.com/techwithher/portfolio_website.git

cd portfolio_website
```

---

## Install Dependencies

```bash
npm install
```

---

## Configure Environment Variables

Create a `.env.local` file.

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=xxxx

NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=xxxx

NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxx
```

---

## Start Development Server

```bash
npm run dev
```

---

# Build

```bash
npm run build
```

---

# Docker

Build Image

```bash
docker build -t portfolio-website .
```

Run Container

```bash
docker run -p 3000:3000 portfolio-website
```

---

# Project Structure

```
app/
components/
contexts/
public/
.github/
Dockerfile
package.json
next.config.js
```

---

# Preview

```
/screenshots/
├── websiteview1.png
├── websiteview2.png
├── hostinger_dashboard.png
```

---

# DevOps Principles Demonstrated

- Infrastructure as Code mindset
- Continuous Integration
- Continuous Deployment
- Immutable deployments
- Secure Software Supply Chain
- Shift Left Security
- Containerization
- Operational Readiness
- Build Automation
- Release Automation
- Protected Production Branch
- Automated Quality Gates
- Security First Development
- Deployment Consistency

---

# Future Enhancements

- Kubernetes deployment
- Helm charts
- AWS ECS / EKS deployment
- Prometheus metrics
- Grafana dashboards
- OpenTelemetry tracing
- SonarQube integration
- OWASP Dependency Check
- Blue-Green Deployment
- Canary Releases

---

# License

MIT License
