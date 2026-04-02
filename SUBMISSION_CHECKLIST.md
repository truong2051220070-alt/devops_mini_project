# ✅ SUBMISSION CHECKLIST - BÀI NỘP

## 📝 PHẦN A: THÔNG TIN CHUNG ✅ (DONE)

Tất cả thông tin đã được chuẩn bị trong **SUBMISSION.md**:

- ✅ Thông tin sinh viên
  - Họ tên: Ông Thân Quốc Trường
  - MSSV: 2051220070
  - Lớp: 22CT4
  - Email: truong.omgtq@fpt.edu.vn

- ✅ Giới thiệu ứng dụng
  - DevOps Mini Project: Task Management App
  - Backend: Node.js + Express
  - Frontend: React
  - Database: MongoDB

- ✅ Tính năng (7 tính năng chính)
  - Task Management
  - Health Check
  - Student Info
  - Environment Variables
  - Database Persistence
  - Responsive UI
  - Docker Support

- ✅ Use Cases (2 use cases)
  - Tasks Management
  - Verification & Monitoring

---

## 📸 PHẦN B: MINH CHỨNG (TODO - Guide Ready)

Xem **SCREENSHOT_GUIDE.md** cho hướng dẫn chi tiết.

### ✅ 1. Link GitHub
- [ ] Push project lên GitHub
- [ ] Repository: devops-mini-project
- [ ] Command: `git push -u origin master && git push --all`
- [ ] **Link:** https://github.com/YOUR_USERNAME/devops-mini-project

### ✅ 2. Link Docker Hub (Optional)
- [ ] Build & push backend image
- [ ] Build & push frontend image
- [ ] **Backend:** truongomgtq/devops-mini-backend:latest
- [ ] **Frontend:** truongomgtq/devops-mini-frontend:latest

### ✅ 3. Screenshots (Total: 13 screenshots)

#### Git Proofs (3 screenshots):
- [ ] **Screenshot 1:** VS Code - `git log --oneline --graph --all`
  - Hiển thị 8 commits
  - File: `vscode-commits.png`

- [ ] **Screenshot 2:** GitHub - Branches page
  - Hiển thị 4 branches
  - File: `github-branches.png`

- [ ] **Screenshot 3:** GitHub - Commits history
  - Hiển thị full commit history
  - File: `github-commits.png`

#### Docker Proofs (2 screenshots):
- [ ] **Screenshot 4:** `docker-compose ps`
  - Hiển thị 3 services running
  - mongo, backend, frontend
  - File: `docker-services.png`

- [ ] **Screenshot 5:** `docker-compose logs`
  - Hiển thị logs từ tất cả services
  - File: `docker-logs.png`

#### Backend API Proofs (2 screenshots):
- [ ] **Screenshot 6:** Health Check
  - Endpoint: GET /health
  - Response: {"status": "ok", ...}
  - Tool: Postman hoặc curl
  - File: `health-endpoint.png`

- [ ] **Screenshot 7:** About Page
  - Endpoint: GET /about
  - Response: Thông tin sinh viên + dự án
  - Tool: Postman hoặc curl
  - File: `about-endpoint.png`

#### Frontend Proofs (4 screenshots):
- [ ] **Screenshot 8:** Main Page
  - URL: http://localhost:3000
  - Hiển thị form + danh sách tasks
  - File: `frontend-main.png`

- [ ] **Screenshot 9:** Create Task
  - Tạo task mới qua form
  - Hiển thị task vừa tạo
  - File: `frontend-create.png`

- [ ] **Screenshot 10:** About Page
  - Click "Thông tin sinh viên" button
  - Hiển thị sinh viên info + dự án info
  - File: `frontend-about.png`

- [ ] **Screenshot 11:** Task Interactions
  - Cập nhật status task
  - Xóa task
  - Hiển thị responsive design
  - File: `frontend-interactions.png`

#### Database Proof (1 screenshot - Optional):
- [ ] **Screenshot 12:** MongoDB Data (Optional)
  - Connect to MongoDB
  - Show devops-mini database
  - Show tasks collection with data
  - File: `mongodb-data.png`

#### Repository Proof (1 screenshot):
- [ ] **Screenshot 13:** Project Files
  - GitHub hoặc VS Code
  - Hiển thị folder structure
  - File: `project-structure.png`

---

## 🚀 WORKFLOW - HOÀN THIỆN BÀI NỘP

### Step 1: Push GitHub (5 phút)
```bash
cd d:\CHUYENDECONGNGHEMOI\devops-mini-project

# Add remote
git remote add origin https://github.com/YOUR_USERNAME/devops-mini-project.git

# Push tất cả
git push -u origin master
git push -u origin develop
git push --all

# Hoặc nếu remote đã có:
git push -u origin --all
```

**Verify:**
- [ ] Tất cả 4 branches đã push
- [ ] 8 commits hiển thị trên GitHub
- [ ] Tất cả files đã push

---

### Step 2: Chạy Docker (5 phút)
```bash
cd d:\CHUYENDECONGNGHEMOI\devops-mini-project
docker-compose up --build
```

**Verify:**
- [ ] mongo container running
- [ ] backend container running (port 5000)
- [ ] frontend container running (port 3000)
- [ ] No errors in logs

---

### Step 3: Chụp Screenshots (30 phút)

#### 3.1 Git Screenshots (5 phút)
```bash
# Terminal 1 - VS Code
git log --oneline --graph --all
# 📸 Chụp ảnh

# Terminal 2 - Visit GitHub
# https://github.com/YOUR_USERNAME/devops-mini-project
# 📸 Chụp Branches page
# 📸 Chụp Commits page
```

#### 3.2 Docker Screenshots (5 phút)
```bash
# Terminal 3 (trong project folder)
docker-compose ps
# 📸 Chụp ảnh

docker-compose logs
# 📸 Chụp ảnh
```

#### 3.3 API Screenshots (5 phút)
```bash
# Tool: Postman hoặc curl
curl http://localhost:5000/health
# 📸 Chụp response

curl http://localhost:5000/about
# 📸 Chụp response
```

#### 3.4 Frontend Screenshots (15 phút)
```
Browser: http://localhost:3000

1. Main page
   - 📸 Chụp toàn bộ page

2. Create task
   - Input title: "Test DevOps"
   - Input description: "Testing the app"
   - Click "Tạo Task"
   - 📸 Chụp task vừa tạo

3. About page
   - Click "Thông tin sinh viên"
   - 📸 Chụp About page
   - Khác biệt: Student info, Project info, Technologies

4. Interactions
   - Thay đổi status task dropdown
   - Xóa task
   - 📸 Chụp interactions
```

---

### Step 4: Update SUBMISSION.md (10 phút)

Mở **SUBMISSION.md** và update:

```markdown
### 2. 🔗 Links

#### GitHub Repository
https://github.com/YOUR_USERNAME/devops-mini-project

#### Docker Hub Images
Backend:  truongomgtq/devops-mini-backend:latest
Frontend: truongomgtq/devops-mini-frontend:latest
```

Thêm screenshots vào phần B (hoặc tạo folder `screenshots/` và reference):

```markdown
### 3. 📸 Screenshot Minh Chứng

#### 3.1 VS Code - Commit History
![VS Code Commits](screenshots/vscode-commits.png)

#### 3.2 GitHub - Branches
![GitHub Branches](screenshots/github-branches.png)

... (thêm các screenshots khác)
```

---

### Step 5: Chuẩn bị Nộp Bài (5 phút)

#### 5.1 Export SUBMISSION.md to PDF (nếu cần)
```bash
# Nếu có pandoc installed:
pandoc SUBMISSION.md -o SUBMISSION.pdf

# Hoặc dùng VS Code extension "Markdown Preview Enhanced"
# Export as PDF bằng Ctrl+Shift+P
```

#### 5.2 Chuẩn bị thư mục nộp
```
submission/
├── SUBMISSION.md (hoặc SUBMISSION.pdf)
├── screenshots/
│   ├── vscode-commits.png
│   ├── github-branches.png
│   ├── github-commits.png
│   ├── docker-services.png
│   ├── docker-logs.png
│   ├── health-endpoint.png
│   ├── about-endpoint.png
│   ├── frontend-main.png
│   ├── frontend-create.png
│   ├── frontend-about.png
│   ├── frontend-interactions.png
│   └── project-structure.png
└── README.txt (link GitHub)
```

#### 5.3 README.txt Content
```
DevOps Mini Project - Submission

Student: Ông Thân Quốc Trường
MSSV: 2051220070
Class: 22CT4

GitHub: https://github.com/YOUR_USERNAME/devops-mini-project

Instructions:
1. Clone repository
2. Run: docker-compose up --build
3. Access: http://localhost:3000

All requirements completed!
```

---

## ✅ FINAL CHECKLIST

### Before Submission:
- [ ] All 8 commits pushed to GitHub
- [ ] All 4 branches visible on GitHub
- [ ] Docker Compose runs without errors
- [ ] http://localhost:5000/health returns OK
- [ ] http://localhost:5000/about returns student info
- [ ] http://localhost:3000 frontend loads
- [ ] All 13 screenshots captured
- [ ] SUBMISSION.md updated with links
- [ ] Screenshots embedded or referenced

### Submission Package:
- [ ] SUBMISSION.md (main document)
- [ ] Screenshots folder (13 images)
- [ ] GitHub link confirmed working
- [ ] Readme with instructions

---

## ⏱️ TIMELINE

| Step | Time | Status |
|------|------|--------|
| Push GitHub | 5 min | ⬜ |
| Run Docker | 5 min | ⬜ |
| Capture Screenshots | 30 min | ⬜ |
| Update SUBMISSION.md | 10 min | ⬜ |
| Create Submission Package | 10 min | ⬜ |
| **Total** | **60 min** | - |

---

## 🎯 READY TO SUBMIT!

Khi tất cả items được mark [x], bài nộp sẵn sàng! 🎉

---

**Next Step:** Bắt đầu từ Step 1: Push GitHub!

Bạn cần hỗ trợ bước nào? Tôi sẵn sàng hướng dẫn từng bước.
