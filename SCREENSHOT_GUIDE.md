# 📸 HƯỚNG DẪN CHỤP SCREENSHOT - PHẦN B: MINH CHỨNG

## 1️⃣ ÁNH VSCODE - COMMIT HISTORY

### Cách chụp:
1. Mở VS Code
2. Mở terminal (Ctrl + `)
3. Chạy lệnh:
```bash
git log --oneline --graph --all
```

4. Chụp toàn bộ output hiển thị 8 commits

**Kỳ vọng:**
```
* 1899216 (HEAD -> master) Add project completion summary...
* 95161e3 Add detailed instructions for completing...
* 73335c9 Add comprehensive project submission...
* f8a2fed (develop) Add complete API documentation...
* 23db70a Add Docker build and deployment...
* b73d40a (feature/frontend-ui) Add frontend React...
* 8664a27 (feature/backend-api) Add middleware...
* 72c81aa Initial project setup...
```

---

## 2️⃣ ÁNH GITHUB - BRANCHES & COMMITS

### Cách 1: Push lên GitHub trước

```bash
cd d:\CHUYENDECONGNGHEMOI\devops-mini-project

# Tạo repository SSH hoặc HTTPS

# Thêm remote
git remote add origin https://github.com/YOUR_USERNAME/devops-mini-project.git
# hoặc
git remote add origin git@github.com:YOUR_USERNAME/devops-mini-project.git

# Push all
git push -u origin master
git push -u origin develop
git push --all  # Push tất cả branches
```

### Cách 2: Kiểm tra push thành công

```bash
git remote -v
git log --all  # Kiểm tra commits
```

### Cách 3: Screenshot Branches trên GitHub

Vào https://github.com/YOUR_USERNAME/devops-mini-project

1. **Screenshot 1: Branches**
   - Click vào "Branches" tab
   - Chụp ảnh hiển thị 4 branches:
     - master
     - develop
     - feature/backend-api
     - feature/frontend-ui

2. **Screenshot 2: Commits**
   - Click vào "Code" tab
   - Chụp ảnh commit history
   - Hiển thị tất cả 8 commits

3. **Screenshot 3: File Structure**
   - Chụp ảnh folder structure
   - Hiển thị backend, frontend, docker-compose.yml

---

## 3️⃣ ÁNH DOCKER RUNNING

### Cách chạy Docker Compose:

```bash
cd d:\CHUYENDECONGNGHEMOI\devops-mini-project
docker-compose up --build
```

### Chụp ảnh:

1. **Screenshot 1: Services Running**
   ```bash
   # Chạy lệnh trong terminal khác
   docker-compose ps
   ```
   
   Kỳ vọng:
   ```
   NAME                COMMAND             STATUS            PORTS
   devops-mongo        mongod              Up (healthy)      27017->27017/tcp
   devops-backend      npm start           Up                5000->5000/tcp
   devops-frontend     serve ...           Up                3000->3000/tcp
   ```
   
   📸 **Chụp ảnh này**

2. **Screenshot 2: Docker Compose Logs**
   ```bash
   docker-compose logs
   ```
   
   📸 **Chụp ảnh logs hiển thị:**
   - mongo: MongoDB connected
   - backend: running on http://localhost:5000
   - frontend: Compiled successfully

---

## 4️⃣ ÁNH FRONTEND - TRANG /ABOUT

### Cách xem:

1. Docker/Service đang chạy
2. Mở browser: http://localhost:3000
3. Click button "Thông tin sinh viên" (trên header)

### Chụp ảnh:

**Screenshot - About Page:**
- Hiển thị thông tin sinh viên:
  - Họ tên: Ông Thân Quốc Trường
  - MSSV: 2051220070
  - Lớp: 22CT4
- Hiển thị thông tin dự án:
  - Tên: DevOps Mini Project API
  - Version: 1.0.0
- Hiển thị công nghệ:
  - Backend: Node.js + Express
  - Frontend: React
  - Database: MongoDB

📸 **Chụp ảnh toàn bộ trang About**

---

## 5️⃣ ÁNH FRONTEND - TASKS MANAGEMENT

### Cách xem:

1. Browser: http://localhost:3000
2. Trang chính hiển thị danh sách tasks

### Chụp ảnh:

**Screenshot 1: Main Page**
- Hiển thị form "Tạo Task mới"
- Input fields: Title, Description
- Button "Tạo Task"
- Danh sách tasks (có hoặc trống)

**Screenshot 2: After Creating Task**
- Tạo một task mới
- Hiển thị task mới trong danh sách
- Hiển thị status (pending, in-progress, completed)
- Hiển thị buttons (Update status dropdown, Delete button)

**Screenshot 3: Task Interactions**
- Chụp ảnh khi:
  - Thay đổi status task (dropdown)
  - Hiển thị các task với status khác nhau
  - Responsive design (nếu có thể hiển thị trên mobile width)

📸 **Chụp 3 ảnh này**

---

## 6️⃣ ENDPOINT /HEALTH

### Cách test:

**Cách 1: Postman**
1. Mở Postman
2. GET http://localhost:5000/health
3. Click Send
4. Chụp ảnh response

**Expected Response:**
```json
{
  "status": "ok",
  "app": "DevOps Mini Project API",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

**Cách 2: Browser**
1. Vào URL: http://localhost:5000/health
2. Chụp ảnh response

**Cách 3: curl (nên dùng)**
```bash
curl http://localhost:5000/health
```

📸 **Chụp ảnh response của /health endpoint**

---

## 7️⃣ ENDPOINT /ABOUT

### Cách test:

**Cách 1: Postman**
1. GET http://localhost:5000/about
2. Chụp ảnh response đầy đủ

**Expected Response:**
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

**Cách 2: curl**
```bash
curl http://localhost:5000/about
```

📸 **Chụp ảnh response của /about endpoint**

---

## 8️⃣ LINK DOCKER HUB (Optional - nếu push)

### Cách push Docker images:

```bash
# Login Docker Hub
docker login

# Build Backend image
cd backend
docker build -t YOUR_DOCKERHUB_USERNAME/devops-mini-backend:latest .
docker push YOUR_DOCKERHUB_USERNAME/devops-mini-backend:latest

# Build Frontend image
cd ../frontend
docker build -t YOUR_DOCKERHUB_USERNAME/devops-mini-frontend:latest .
docker push YOUR_DOCKERHUB_USERNAME/devops-mini-frontend:latest
```

### Screenshot:

Vào https://hub.docker.com/r/YOUR_USERNAME/devops-mini-backend

📸 **Chụp ảnh Docker Hub page** hiển thị:
- Image name
- Tags
- Push date

---

## 📋 CHECKLIST SCREENSHOTS

- [ ] VS Code - Commit history (git log)
- [ ] GitHub - Branches page
- [ ] GitHub - Commits history
- [ ] GitHub - File structure
- [ ] Docker - docker-compose ps (services running)
- [ ] Docker - Compose logs
- [ ] Frontend - Main page (tasks list)
- [ ] Frontend - Create task
- [ ] Frontend - About page
- [ ] API - /health endpoint response (Postman/curl)
- [ ] API - /about endpoint response (Postman/curl)
- [ ] Database - MongoDB data (optional)
- [ ] Docker Hub - Backend image (optional)
- [ ] Docker Hub - Frontend image (optional)

---

## 🎯 QUICK COMMANDS FOR TESTING

```bash
# Vào project
cd d:\CHUYENDECONGNGHEMOI\devops-mini-project

# Docker setup
docker-compose up --build

# Trong terminal khác:
docker-compose ps                    # Check services
docker-compose logs                  # View logs
curl http://localhost:5000/health    # Test health
curl http://localhost:5000/about     # Test about
curl http://localhost:5000/api/tasks # Test API

# Git commands:
git log --oneline --graph --all      # Commits
git branch -a                        # Branches
```

---

## 💡 CẬP NHẬT SUBMISSION.MD

Sau khi có đủ screenshots, cập nhật SUBMISSION.md:

1. Insert screenshot vào phần B
2. Thay thế placeholder links với GitHub URL
3. Thay thế placeholder links với Docker Hub URL (nếu có)
4. Add datetime khi hoàn thành
5. Final check tất cả endpoints

---

**Ready to capture evidence! 📸✨**
