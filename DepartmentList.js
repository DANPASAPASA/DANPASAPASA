import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DepartmentForm from './DepartmentForm';

function DepartmentList() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/departments', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDepartments(response.data);
    };

    fetchDepartments();
  }, []);

  return (
    <div className="container">
      <h2>Departments</h2>
      <DepartmentForm setDepartments={setDepartments} />
      <ul>
        {departments.map(department => (
          <li key={department.id}>{department.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DepartmentList;
