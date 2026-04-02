import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [studentInfo, setStudentInfo] = useState(null);
  const [showAbout, setShowAbout] = useState(false);

  // Fetch tasks
  const fetchTasks = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`${API_URL}/api/tasks`);
      setTasks(response.data.data);
    } catch (err) {
      setError('Lỗi khi tải tasks: ' + err.message);
    }
    setLoading(false);
  };

  // Fetch student info
  const fetchAbout = async () => {
    try {
      const response = await axios.get(`${API_URL}/about`);
      setStudentInfo(response.data);
      setShowAbout(true);
    } catch (err) {
      setError('Lỗi khi tải thông tin: ' + err.message);
    }
  };

  // Load tasks on component mount
  useEffect(() => {
    fetchTasks();
  }, []);

  // Create new task
  const handleCreateTask = async (e) => {
    e.preventDefault();
    
    if (!title.trim()) {
      setError('Vui lòng nhập title');
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/api/tasks`, {
        title,
        description,
        status: 'pending'
      });
      setTasks([response.data.data, ...tasks]);
      setTitle('');
      setDescription('');
      setError('');
    } catch (err) {
      setError('Lỗi khi tạo task: ' + err.message);
    }
  };

  // Update task status
  const handleUpdateTask = async (id, newStatus) => {
    try {
      const task = tasks.find(t => t._id === id);
      const response = await axios.put(`${API_URL}/api/tasks/${id}`, {
        ...task,
        status: newStatus
      });
      setTasks(tasks.map(t => t._id === id ? response.data.data : t));
    } catch (err) {
      setError('Lỗi khi cập nhật task: ' + err.message);
    }
  };

  // Delete task
  const handleDeleteTask = async (id) => {
    if (window.confirm('Bạn chắc chắn muốn xóa task này?')) {
      try {
        await axios.delete(`${API_URL}/api/tasks/${id}`);
        setTasks(tasks.filter(t => t._id !== id));
      } catch (err) {
        setError('Lỗi khi xóa task: ' + err.message);
      }
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'pending': return '#ff9800';
      case 'in-progress': return '#2196f3';
      case 'completed': return '#4caf50';
      default: return '#999';
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>📋 DevOps Mini Project</h1>
        <nav className="nav">
          <button className="nav-btn" onClick={() => setShowAbout(false)}>
            Quản lý Tasks
          </button>
          <button className="nav-btn" onClick={fetchAbout}>
            Thông tin sinh viên
          </button>
        </nav>
      </header>

      <main className="main">
        {showAbout && studentInfo ? (
          <div className="about-container">
            <div className="about-card">
              <h2>👤 Thông tin sinh viên</h2>
              <div className="info-group">
                <p><strong>Họ tên:</strong> {studentInfo.student.name}</p>
                <p><strong>MSSV:</strong> {studentInfo.student.id}</p>
                <p><strong>Lớp:</strong> {studentInfo.student.class}</p>
                <p><strong>Email:</strong> {studentInfo.student.email}</p>
              </div>

              <h2>📱 Thông tin dự án</h2>
              <div className="info-group">
                <p><strong>Tên:</strong> {studentInfo.project.name}</p>
                <p><strong>Mô tả:</strong> {studentInfo.project.description}</p>
                <p><strong>Phiên bản:</strong> {studentInfo.project.version}</p>
              </div>

              <h2>🛠️ Công nghệ</h2>
              <div className="info-group">
                <p><strong>Backend:</strong> {studentInfo.project.technologies.backend}</p>
                <p><strong>Frontend:</strong> {studentInfo.project.technologies.frontend}</p>
                <p><strong>Database:</strong> {studentInfo.project.technologies.database}</p>
              </div>

              <button className="nav-btn" onClick={() => setShowAbout(false)}>
                Quay lại
              </button>
            </div>
          </div>
        ) : (
          <div className="tasks-container">
            <div className="form-container">
              <h2>➕ Tạo Task mới</h2>
              <form onSubmit={handleCreateTask}>
                <input
                  type="text"
                  placeholder="Title..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="input-field"
                />
                <textarea
                  placeholder="Description..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="textarea-field"
                  rows="3"
                ></textarea>
                <button type="submit" className="btn-submit">
                  Tạo Task
                </button>
              </form>
            </div>

            {error && <div className="error-message">{error}</div>}

            <div className="tasks-list">
              <h2>📝 Danh sách Tasks</h2>
              {loading ? (
                <p className="loading">Đang tải...</p>
              ) : tasks.length === 0 ? (
                <p className="empty">Chưa có task nào. Hãy tạo task mới!</p>
              ) : (
                <div className="tasks-grid">
                  {tasks.map((task) => (
                    <div key={task._id} className="task-card">
                      <div className="task-header">
                        <h3>{task.title}</h3>
                        <span
                          className="status-badge"
                          style={{ backgroundColor: getStatusColor(task.status) }}
                        >
                          {task.status}
                        </span>
                      </div>
                      {task.description && (
                        <p className="task-description">{task.description}</p>
                      )}
                      <small className="task-date">
                        {new Date(task.createdAt).toLocaleDateString('vi-VN')}
                      </small>
                      <div className="task-actions">
                        <select
                          value={task.status}
                          onChange={(e) =>
                            handleUpdateTask(task._id, e.target.value)
                          }
                          className="status-select"
                        >
                          <option value="pending">Pending</option>
                          <option value="in-progress">In Progress</option>
                          <option value="completed">Completed</option>
                        </select>
                        <button
                          onClick={() => handleDeleteTask(task._id)}
                          className="btn-delete"
                        >
                          Xóa
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>DevOps Mini Project © 2024 - Ông Thân Quốc Trường (2051220070)</p>
      </footer>
    </div>
  );
}

export default App;
