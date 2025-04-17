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
[Docker Hub Link](https://hub.docker.com/r/yourdockerhubusername/bestbuy-staff-service)

## Deployment
Deployed to AKS using Kubernetes deployment.yaml.

## CI/CD
Automated CI/CD using GitHub Actions with Docker push and AKS deployment steps.


