# DevOps Mini Project - Backend

Backend API xây dựng bằng Node.js + Express + MongoDB

## Tính năng

- ✅ API GET: Lấy danh sách tasks
- ✅ API POST: Tạo task mới
- ✅ API PUT: Cập nhật task
- ✅ API DELETE: Xóa task
- ✅ Health Check: `/health`
- ✅ Thông tin sinh viên: `/about`
- ✅ Environment Variables
- ✅ Docker support

## Endpoints

- `GET /health` - Health check
- `GET /about` - Thông tin sinh viên
- `GET /api/tasks` - Lấy tất cả tasks
- `GET /api/tasks/:id` - Lấy task theo ID
- `POST /api/tasks` - Tạo task mới
- `PUT /api/tasks/:id` - Cập nhật task
- `DELETE /api/tasks/:id` - Xóa task

## Chạy locally

```bash
npm install
npm start
```

## Docker

```bash
docker build -t devops-mini-backend .
docker run -p 5000:5000 --env-file .env devops-mini-backend
```
