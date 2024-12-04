import React, { useState } from 'react';
import axios from 'axios';

function ProjectForm({ setProjects }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const response = await axios.post('/api/projects', { name, description }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProjects(prevProjects => [...prevProjects, response.data]);
      setName('');
      setDescription('');
    } catch (error) {
      console.error('Project creation failed:', error);
    }
  };

  return (
    <div>
      <h3>Create Project</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
        <button type="submit" className="btn btn-primary">Create Project</button>
      </form>
    </div>
  );
}

export default ProjectForm;
