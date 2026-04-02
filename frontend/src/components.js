import React from 'react';

export const TaskCard = ({ task, onUpdate, onDelete }) => {
  const getStatusColor = (status) => {
    switch(status) {
      case 'pending': return '#ff9800';
      case 'in-progress': return '#2196f3';
      case 'completed': return '#4caf50';
      default: return '#999';
    }
  };

  return (
    <div className="task-card">
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
          onChange={(e) => onUpdate(task._id, e.target.value)}
          className="status-select"
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <button onClick={() => onDelete(task._id)} className="btn-delete">
          Xóa
        </button>
      </div>
    </div>
  );
};

export const TaskForm = ({ onSubmit, title, setTitle, description, setDescription }) => {
  return (
    <form onSubmit={onSubmit}>
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
  );
};
