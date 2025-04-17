# BestBuy Staff-Service

## Description
A microservice for managing staff information at BestBuy. It provides RESTful CRUD APIs and is designed using 12-factor principles.

## Features
- Create, Read, Update, Delete staff members.
- Deployed with Azure Kubernetes Service (AKS).
- CI/CD via GitHub Actions.
- Dockerized and hosted on Docker Hub.

## API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/staff` | Add a new staff |
| GET    | `/staff` | Get all staff |
| GET    | `/staff/:id` | Get staff by ID |
| PUT    | `/staff/:id` | Update staff |
| DELETE | `/staff/:id` | Delete staff |

## Docker Image
[Docker Hub Link](https://hub.docker.com/r/mohitsp21/staff-service)

## Deployment
Deployed to AKS using Kubernetes deployment.yaml.

## CI/CD
Automated CI/CD using GitHub Actions with Docker push and AKS deployment steps.

## Issues Faced
- kube config file was to long to reduce the size of config file i used 
"kubectl config view --minify --raw > minimal_kubeconfig.yaml
base64 -w 0 minimal_kubeconfig.yaml > kube_config_base64.txt" this command and it worked.
- Time taken to configure GitHub secrets for Docker Hub login.



