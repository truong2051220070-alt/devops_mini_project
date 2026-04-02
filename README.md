# DevOps Mini Project

**Một dự án hoàn chỉnh về DevOps với Backend, Frontend, và Database**

## 👤 Thông tin sinh viên

- **Họ tên:** Ông Thân Quốc Trường
- **MSSV:** 2051220070
- **Lớp:** 22CT4
- **Đại học:** Đại Học Kiến Trúc Đà Nẵng

## 📋 Mô tả dự án

Dự án này là một ứng dụng quản lý Tasks với Backend API + Frontend Web + Database. Ứng dụng được triển khai hoàn toàn trên Docker với Docker Compose.

### Tính năng chính:

- ✅ **Backend API:** REST API với Node.js + Express
- ✅ **Frontend Web:** React UI với giao diện responsive
- ✅ **Database:** MongoDB lưu trữ dữ liệu thực
- ✅ **Health Check:** Endpoint `/health` kiểm tra trạng thái
- ✅ **Thông tin sinh viên:** Endpoint `/about` hiển thị thông tin
- ✅ **Environment Variables:** Cách quản lý biến môi trường
- ✅ **Docker & Docker Compose:** Triển khai toàn bộ hệ thống

## 🏗️ Cấu trúc project

```
devops-mini-project/
├── backend/                 # Backend API (Node.js + Express)
│   ├── server.js           # File chính
│   ├── package.json        # Dependencies
│   ├── Dockerfile          # Docker image
│   ├── .env                # Environment variables
│   └── README.md           # Backend documentation
├── frontend/               # Frontend Web (React)
│   ├── src/
│   │   ├── App.js          # React component chính
│   │   ├── App.css         # Styling
│   │   └── index.js        # Entry point
│   ├── package.json        # Dependencies
│   ├── Dockerfile          # Docker image
│   └── README.md           # Frontend documentation
├── docker-compose.yml      # Docker Compose orchestration
└── README.md              # Project documentation
```

## 🛠️ Công nghệ sử dụng

### Backend
- **Node.js 18** - JavaScript runtime
- **Express 4** - Web framework
- **MongoDB + Mongoose** - Database & ODM
- **Dotenv** - Environment variables management
- **CORS** - Cross-origin resource sharing

### Frontend
- **React 18** - UI library
- **Axios** - HTTP client
- **CSS3** - Styling

### Infrastructure
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration
- **MongoDB 6.0** - NoSQL database

## 📦 API Endpoints

### Health & Info
- `GET /health` - Kiểm tra trạng thái server
- `GET /about` - Thông tin sinh viên và dự án

### Task Management
- `GET /api/tasks` - Lấy tất cả tasks
- `GET /api/tasks/:id` - Lấy task theo ID
- `POST /api/tasks` - Tạo task mới
- `PUT /api/tasks/:id` - Cập nhật task
- `DELETE /api/tasks/:id` - Xóa task

## 🚀 Cách chạy project

### Cách 1: Dùng Docker Compose (Khuyến nghị)

```bash
# Clone hoặc vào thư mục project
cd devops-mini-project

# Build và chạy tất cả services
docker-compose up --build

# Truy cập URL
# Frontend: http://localhost:3000
# Backend API: http://localhost:5000
# Health check: http://localhost:5000/health
# Student info: http://localhost:5000/about
```

### Cách 2: Chạy local (không dùng Docker)

#### Backend

```bash
cd backend
npm install
npm start
# Server chạy tại http://localhost:5000
```

#### Frontend

```bash
cd frontend
npm install
npm start
# App chạy tại http://localhost:3000
```

**Lưu ý:** Cần cài MongoDB locally hoặc sử dụng MongoDB Atlas

## 🌐 Biến môi trường

### Backend (.env)
```
PORT=5000
DB_URL=mongodb://mongo:27017/devops-mini
APP_NAME=DevOps Mini Project API
NODE_ENV=production
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000
```

## 📝 Commit History

Project có ít nhất 5 commits với message rõ ràng:

1. `Initial project setup` - Tạo cấu trúc project
2. `Setup backend with Express and MongoDB` - Backend API
3. `Setup React frontend with Task management` - Frontend UI
4. `Add Docker and Docker Compose configuration` - Containerization
5. `Add documentation and final setup` - Documentation

## 🌿 Git Branches

Project sử dụng 3 branches:

- **main/master** - Production branch
- **develop** - Development branch
- **feature/*` - Feature branches

## 📊 Screenshots & Proofs

### Backend Health Check

```bash
curl http://localhost:5000/health

# Response:
{
  "status": "ok",
  "app": "DevOps Mini Project API",
  "timestamp": "2026-04-01T12:00:00.000Z"
}
```

### Student Information

```bash
curl http://localhost:5000/about

# Response:
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

## ✅ Checklist

- ✅ Có commit history (5+ commits)
- ✅ Có Backend + Frontend + Database
- ✅ Có endpoint `/about`
- ✅ Có endpoint `/health`
- ✅ Có `.env` file
- ✅ Có Dockerfile cho Backend
- ✅ Có Dockerfile cho Frontend
- ✅ Có docker-compose.yml
- ✅ Database không hard-code dữ liệu
- ✅ Environment variables được sử dụng
- ✅ Giao diện Frontend responsive
- ✅ Project có Git repository

## 🔗 Links

- **GitHub:** [Tạo khi push]
- **Docker Hub:** [Tạo khi push]
- **Frontend:** `http://localhost:3000`
- **Backend:** `http://localhost:5000`

## 📚 Tài liệu tham khảo

- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)

## 👨‍💻 Author

**Ông Thân Quốc Trường**
- MSSV: 2051220070
- Email: truong_2051220070@dau.edu.vn
- Lớp: 22CT4

---

**Hoàn thành:** Tháng 4 năm 2026
