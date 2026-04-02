# API Documentation

## Base URL

- Local: `http://localhost:5000`
- Docker: `http://backend:5000`

## Endpoints

### System Endpoints

#### Health Check
```
GET /health
```

Response:
```json
{
  "status": "ok",
  "app": "DevOps Mini Project API",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

#### Student Information
```
GET /about
```

Response:
```json
{
  "student": {
    "name": "Ông Thân Quốc Trường",
    "id": "2051220070",
    "class": "22CT4",
    "university": "FPT University",
    "email": "truong.omgtq@fpt.edu.vn"
  },
  "project": {
    "name": "DevOps Mini Project API",
    "description": "DevOps Mini Project - Backend + Frontend + Database",
    "version": "1.0.0",
    "technologies": {
      "backend": "Node.js + Express",
      "frontend": "React",
      "database": "MongoDB"
    }
  }
}
```

### Task Management

#### Get All Tasks
```
GET /api/tasks
```

Response:
```json
{
  "success": true,
  "data": [
    {
      "_id": "65a1b2c3d4e5f6g7h8i9j0k1",
      "title": "Learn DevOps",
      "description": "Master Docker and Kubernetes",
      "status": "in-progress",
      "createdAt": "2024-01-01T12:00:00.000Z"
    }
  ],
  "message": "Tasks retrieved successfully"
}
```

#### Get Task by ID
```
GET /api/tasks/:id
```

#### Create Task
```
POST /api/tasks

Content-Type: application/json

{
  "title": "Learn Docker",
  "description": "Master containerization",
  "status": "pending"
}
```

Response:
```json
{
  "success": true,
  "message": "Task created successfully",
  "data": {
    "_id": "65a1b2c3d4e5f6g7h8i9j0k1",
    "title": "Learn Docker",
    "description": "Master containerization",
    "status": "pending",
    "createdAt": "2024-01-01T12:00:00.000Z"
  }
}
```

#### Update Task
```
PUT /api/tasks/:id

Content-Type: application/json

{
  "title": "Learn Docker Advanced",
  "description": "Master Advanced containerization",
  "status": "in-progress"
}
```

#### Delete Task
```
DELETE /api/tasks/:id
```

## Status Values

- `pending` - Chờ xử lý
- `in-progress` - Đang xử lý
- `completed` - Hoàn thành

## Error Handling

All errors return JSON with this structure:

```json
{
  "success": false,
  "message": "Error description",
  "error": "Error details (development only)"
}
```

## Authentication Note

Currently, the API does not require authentication. In production, implement JWT or OAuth2.
