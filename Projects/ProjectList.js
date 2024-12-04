import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectForm from './ProjectForm';

function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/projects', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProjects(response.data);
    };

    fetchProjects();
  }, []);

  return (
    <div className="container">
      <h2>Projects</h2>
      <ProjectForm setProjects={setProjects} />
      <ul>
        {projects.map(project => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
