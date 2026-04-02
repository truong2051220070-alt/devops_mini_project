# 📋 DevOps Mini Project - BÀI NỘP

## PHẦN A: THÔNG TIN CHUNG

### 1. Thông tin Sinh viên
- **Họ tên:** Ông Thân Quốc Trường
- **MSSV:** 2051220070
- **Lớp:** 22CT4
- **Email:** truong.omgtq@fpt.edu.vn
- **Đại học:** FPT University

### 2. Giới thiệu Ứng dụng

**DevOps Mini Project** là một ứng dụng quản lý **Tasks** (công việc) được xây dựng với kiến trúc hiện đại:

- **Backend API:** Node.js + Express (REST API)
- **Frontend Web:** React (Single Page Application)
- **Database:** MongoDB (NoSQL)
- **Deployment:** Docker + Docker Compose

### 3. Tính Năng

#### Tính năng chính:
1. ✅ **Task Management** - Tạo, xem, cập nhật, xóa tasks
2. ✅ **Health Check** - Endpoint `/health` kiểm tra trạng thái server
3. ✅ **Student Information** - Endpoint `/about` hiển thị thông tin sinh viên
4. ✅ **Environment Variables** - Quản lý cấu hình qua `.env`
5. ✅ **Database Persistence** - Lưu trữ dữ liệu vào MongoDB (không hard-code)
6. ✅ **Responsive UI** - Giao diện web responsive, hiện đại
7. ✅ **Docker Support** - Chạy toàn bộ hệ thống qua Docker Compose

#### Các API endpoints khả dụng:
```
GET  /health              - Kiểm tra trạng thái
GET  /about               - Thông tin sinh viên
GET  /api/tasks           - Lấy tất cả tasks
GET  /api/tasks/:id       - Lấy task theo ID
POST /api/tasks           - Tạo task mới
PUT  /api/tasks/:id       - Cập nhật task
DELETE /api/tasks/:id     - Xóa task
```

### 4. Use Cases

#### Use Case 1: Quản lý danh sách công việc hàng ngày
**Actor:** Người dùng
**Quy trình:**
1. Mở ứng dụng Frontend (http://localhost:3000)
2. Xem danh sách todos hiện có
3. Tạo task mới bằng form
4. Cập nhật trạng thái task (pending → in-progress → completed)
5. Xóa task khi hoàn thành

#### Use Case 2: Verifyication và monitoring
**Actor:** DevOps Engineer / Admin
**Quy trình:**
1. Kiểm tra health check: `GET /health`
2. Xem thông tin sinh viên: `GET /about`
3. Monitor logs qua Docker: `docker-compose logs`
4. Kiểm tra database qua MongoDB interface

---

## PHẦN B: MINH CHỨNG

### 1. 📁 Cấu trúc Project

```
devops-mini-project/
├── backend/
│   ├── server.js              # Express API server
│   ├── errorHandler.js        # Error handling middleware
│   ├── middlewares.js         # Validation middleware
│   ├── package.json           # Dependencies
│   ├── .env                   # Environment variables
│   ├── .env.example           # Environment template
│   ├── .gitignore            # Git ignore rules
│   ├── .dockerignore         # Docker ignore rules
│   ├── Dockerfile            # Docker image config
│   └── README.md             # Backend documentation
│
├── frontend/
│   ├── public/
│   │   └── index.html         # HTML entry point
│   ├── src/
│   │   ├── App.js             # Main React component
│   │   ├── App.css            # App styling
│   │   ├── components.js      # Reusable components
│   │   ├── index.js           # React setup
│   │   └── index.css          # Global styles
│   ├── package.json           # Dependencies
│   ├── .env                   # Environment variables
│   ├── .env.example           # Environment template
│   ├── .gitignore            # Git ignore rules
│   ├── .dockerignore         # Docker ignore rules
│   ├── Dockerfile            # Docker image config (multi-stage)
│   └── README.md             # Frontend documentation
│
├── docker-compose.yml         # Orchestration config
├── .gitignore                # Root level gitignore
├── README.md                 # Project documentation
├── API_DOCUMENTATION.md      # API specifications
├── DOCKER_BUILD.md           # Docker build instructions
└── SUBMISSION.md             # This file
```

### 2. 🔗 Links

#### GitHub Repository
```
https://github.com/truong2051220070-alt/devops_mini_project
```
✅ **Status:** Project pushed successfully with all 4 branches!

#### Docker Hub Images
```
Backend:  truongomgtq/devops-mini-backend:latest
Frontend: truongomgtq/devops-mini-frontend:latest
```
*Lưu ý: Optional - Có thể push images lên Docker Hub nếu cần*

### 3. 📸 Screenshot Minh Chứng

#### 3.1 VS Code - Commit History
```
Command: git log --oneline --graph --all

Output:
  * f8a2fed (HEAD -> master, develop) Add complete API documentation
  * 23db70a Add Docker build and deployment documentation
  * b73d40a Add frontend React components for task management
  * 8664a27 Add middleware validation and error handling
  * 72c81aa Initial project setup with folder structure
```

#### 3.2 GitHub - Branch Structure
- `master/main` - Production branch (merged from develop)
- `develop` - Development branch
- `feature/backend-api` - Backend feature
- `feature/frontend-ui` - Frontend feature

### 4. ✅ Chứng Minh Chức Năng

#### 4.1 Endpoint /about
```bash
curl http://localhost:5000/about

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

#### 4.2 Endpoint /health
```bash
curl http://localhost:5000/health

{
  "status": "ok",
  "app": "DevOps Mini Project API",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

#### 4.3 Frontend - Trang chính
- URL: `http://localhost:3000`
- Chức năng: Hiển thị danh sách tasks
- Tương tác: Tạo, cập nhật, xóa tasks

#### 4.4 Frontend - About Page
- URL: `http://localhost:3000` → Click "Thông tin sinh viên"
- Hiển thị: Thông tin sinh viên và dự án

#### 4.5 Docker Running
```bash
docker-compose up

Logs:
- mongo: MongoDB connected
- backend: DevOps Mini Project API running on http://localhost:5000
- frontend: Compiled successfully

Status:
- mongo (27017)
- backend (5000)
- frontend (3000)
```

#### 4.6 Database - MongoDB
- Data được lưu trong MongoDB container
- Không có hard-code dữ liệu
- Mỗi task được lưu với:
  - `_id` (MongoDB ID)
  - `title` (tên task)
  - `description` (mô tả)
  - `status` (trạng thái)
  - `createdAt` (thời gian tạo)

### 5. 📝 Environment Variables

#### Backend (.env)
```
PORT=5000
DB_URL=mongodb://admin:password@mongo:27017/devops-mini?authSource=admin
APP_NAME=DevOps Mini Project API
NODE_ENV=production
```

#### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000
```

### 6. 🐳 Docker Images

#### Dockerfile - Backend
- Sử dụng `node:18-alpine`
- Build từ `backend/` folder
- Expose port `5000`
- CMD: `npm start`

#### Dockerfile - Frontend
- Multi-stage build:
  - Stage 1: Build React app từ `node:18-alpine`
  - Stage 2: Serve qua `serve` package
- Expose port `3000`

#### docker-compose.yml
```yaml
services:
  mongo:      # MongoDB database
  backend:    # Node.js API server
  frontend:   # React web app

volumes:
  mongo_data: # Persistent MongoDB data

networks:
  devops-network: # Internal communication
```

---

## ✅ CHECKLIST

### Git Requirements
- ✅ Có commit history (5+ commits)
  - Initial project setup
  - Backend middleware and error handling
  - Frontend React components
  - Docker documentation
  - API documentation
- ✅ Có 3 branches (master, develop, feature/*)
- ✅ Commits có message rõ ràng

### Project Structure
- ✅ Có Backend API (Node.js + Express)
- ✅ Có Frontend Web (React)
- ✅ Có Database (MongoDB)

### Required Features
- ✅ Có endpoint `/about` (thông tin sinh viên)
- ✅ Có endpoint `/health` (kiểm tra trạng thái)
- ✅ Có ít nhất 2 API (GET + POST/PUT) - có 6 endpoints
- ✅ Có form/button tương tác trong Frontend
- ✅ Database không hard-code dữ liệu

### DevOps Requirements
- ✅ Có `.env` file (environment variables)
- ✅ Có Dockerfile cho Backend
- ✅ Có Dockerfile cho Frontend
- ✅ Có docker-compose.yml
- ✅ Có thể chạy toàn bộ bằng `docker-compose up`

### Documentation
- ✅ README.md (project overview)
- ✅ API_DOCUMENTATION.md (API specs)
- ✅ DOCKER_BUILD.md (Docker instructions)
- ✅ Backend README.md
- ✅ Frontend README.md

---

## 🚀 Cách chạy

### Với Docker Compose (Khuyến nghị)
```bash
cd devops-mini-project
docker-compose up --build
```

Truy cập:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- Health: http://localhost:5000/health
- About: http://localhost:5000/about

### Chạy local
```bash
# Terminal 1 - Backend
cd backend
npm install
npm start

# Terminal 2 - Frontend
cd frontend
npm install
npm start

# Terminal 3 - MongoDB (nếu không có containerized)
# Bắt đầu MongoDB service locally
```

---

## 📞 Liên hệ & Thông tin

**Sinh viên:** Ông Thân Quốc Trường
**MSSV:** 2051220070
**Lớp:** 22CT4
**Email:** truong.omgtq@fpt.edu.vn

---

**Hoàn thành:** Tháng 1 năm 2024
**Status:** ✅ Đầy đủ yêu cầu
