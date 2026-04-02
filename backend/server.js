const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Environment Variables
const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL || 'mongodb://mongo:27017/devops-mini';
const APP_NAME = process.env.APP_NAME || 'DevOps Mini Project API';

// MongoDB Connection
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// Schema định nghĩa
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Task = mongoose.model('Task', taskSchema);

// ==================== ROUTES ====================

// Health Check Endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'ok',
    app: APP_NAME,
    timestamp: new Date().toISOString()
  });
});

// Thông tin sinh viên
app.get('/about', (req, res) => {
  res.status(200).json({
    student: {
      name: 'Ông Thân Quốc Trường',
      id: '2051220070',
      class: '22CT4',
      university: 'Đại Học Kiến Trúc Đà Nẵng',
      email: 'truong_2051220070@dau.edu.vn'
    },
    project: {
      name: APP_NAME,
      description: 'DevOps Mini Project - Backend + Frontend + Database',
      version: '1.0.0',
      technologies: {
        backend: 'Node.js + Express',
        frontend: 'React',
        database: 'MongoDB'
      }
    }
  });
});

// GET all tasks
app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: tasks,
      message: 'Tasks retrieved successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving tasks',
      error: error.message
    });
  }
});

// GET task by ID
app.get('/api/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({
        success: false,
        message: 'Task not found'
      });
    }
    res.status(200).json({
      success: true,
      data: task
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving task',
      error: error.message
    });
  }
});

// CREATE task (POST)
app.post('/api/tasks', async (req, res) => {
  try {
    const { title, description, status } = req.body;

    if (!title) {
      return res.status(400).json({
        success: false,
        message: 'Title is required'
      });
    }

    const newTask = new Task({
      title,
      description: description || '',
      status: status || 'pending'
    });

    const savedTask = await newTask.save();
    res.status(201).json({
      success: true,
      message: 'Task created successfully',
      data: savedTask
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating task',
      error: error.message
    });
  }
});

// UPDATE task (PUT)
app.put('/api/tasks/:id', async (req, res) => {
  try {
    const { title, description, status } = req.body;
    
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { title, description, status },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({
        success: false,
        message: 'Task not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Task updated successfully',
      data: updatedTask
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating task',
      error: error.message
    });
  }
});

// DELETE task
app.delete('/api/tasks/:id', async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);

    if (!deletedTask) {
      return res.status(404).json({
        success: false,
        message: 'Task not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Task deleted successfully',
      data: deletedTask
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting task',
      error: error.message
    });
  }
});

// Not Found handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`${APP_NAME} running on http://localhost:${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
  console.log(`About page: http://localhost:${PORT}/about`);
});

module.exports = app;
