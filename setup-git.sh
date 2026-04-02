cd /d/CHUYENDECONGNGHEMOI/devops-mini-project
git init

# Configure git (if not set globally)
git config user.email "truong.omgtq@fpt.edu.vn"
git config user.name "Ong Than Quoc Truong"

# Stage all files
git add .

# Initial commit
git commit -m "Initial project setup with folder structure"

# Create develop branch
git checkout -b develop

# Add to staging
git add .

# Commit setup on develop
git commit -m "Add project configuration files"

# Create feature branch
git checkout -b feature/backend
git add .
git commit -m "Setup backend with Express and MongoDB"

# Switch back to develop
git checkout develop
git merge feature/backend

# Create feature branch for frontend
git checkout -b feature/frontend
git add .
git commit -m "Setup React frontend with Task management UI"

# Merge to develop
git checkout develop
git merge feature/frontend

# Add docker configuration
git add .
git commit -m "Add Docker and Docker Compose configuration"

# Back to main
git checkout main
git merge develop

# Final documentation
git add .
git commit -m "Add comprehensive documentation and final setup"

# Show commit history
git log --oneline --graph --all
