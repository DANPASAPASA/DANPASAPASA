import React, { useState } from 'react';
import axios from 'axios';

function TaskForm({ setTasks }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('low');
  const [color, setColor] = useState('#000000');
  const [progress, setProgress] = useState(0);
  const [includeInCalendar, setIncludeInCalendar] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const response = await axios.post('/api/tasks', {
        title, description, startDate, endDate, dueDate, priority, color, progress, includeInCalendar
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTasks(prevTasks => [...prevTasks, response.data]);
      setTitle('');
      setDescription('');
      setStartDate('');
      setEndDate('');
      setDueDate('');
      setPriority('low');
      setColor('#000000');
      setProgress(0);
      setIncludeInCalendar(true);
    } catch (error) {
      console.error('Task creation failed:', error);
    }
  };

  return (
    <div>
      <h3>Create Task</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Start Date:</label>
          <input
            type="date"
            className="form-control"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>End Date:</label>
          <input
            type="date"
            className="form-control"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Due Date:</label>
          <input
            type="date"
            className="form-control"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Priority:</label>
          <select
            className="form-control"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            required
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="form-group">
          <label>Color:</label>
          <input
            type="color"
            className="form-control"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Progress (%):</label>
          <input
            type="number"
            className="form-control"
            value={progress}
            onChange={(e) => setProgress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Include in Calendar:</label>
          <input
            type="checkbox"
            className="form-check-input"
            checked={includeInCalendar}
            onChange={(e) => setIncludeInCalendar(e.target.checked)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Create Task</button>
      </form>
    </div>
  );
}

export default TaskForm;
