import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/tasks', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTasks(response.data);
    };

    const fetchProjects = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/projects', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProjects(response.data);
    };

    fetchTasks();
    fetchProjects();
  }, []);

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <div>
        <h3>Tasks</h3>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Projects</h3>
        <ul>
          {projects.map(project => (
            <li key={project.id}>{project.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
