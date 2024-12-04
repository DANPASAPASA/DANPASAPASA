import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DepartmentForm({ setDepartments }) {
  const [name, setName] = useState('');
  const [leader, setLeader] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(response.data);
    };

    fetchUsers();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const response = await axios.post('/api/departments', { name, leader }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDepartments(prevDepartments => [...prevDepartments, response.data]);
      setName('');
      setLeader('');
    } catch (error) {
      console.error('Department creation failed:', error);
    }
  };

  return (
    <div>
      <h3>Create Department</h3>
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
          <label>Leader:</label>
          <select
            className="form-control"
            value={leader}
            onChange={(e) => setLeader(e.target.value)}
            required
          >
            <option value="">Select Leader</option>
            {users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Create Department</button>
      </form>
    </div>
  );
}

export default DepartmentForm;
