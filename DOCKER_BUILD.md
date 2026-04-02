# Docker Build Instructions

## Build Backend Image

```bash
docker build -t truongomgtq/devops-mini-backend:latest ./backend
docker push truongomgtq/devops-mini-backend:latest
```

## Build Frontend Image

```bash
docker build -t truongomgtq/devops-mini-frontend:latest ./frontend
docker push truongomgtq/devops-mini-frontend:latest
```

## Run with Docker Compose

```bash
docker-compose up --build
```

## Verify Deployment

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- Health Check: http://localhost:5000/health
- Student Info: http://localhost:5000/about
