import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Profile from './components/Auth/Profile';
import Dashboard from './components/Dashboard/Dashboard';
import ProjectList from './components/Projects/ProjectList';
import TaskList from './components/Tasks/TaskList';
import CalendarView from './components/Calendar/CalendarView';
import ReportDownload from './components/Reports/ReportDownload';
import DepartmentList from './components/Departments/DepartmentList';
import Notifications from './components/Notifications/Notifications';
import './styles.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/projects" component={ProjectList} />
        <Route path="/tasks" component={TaskList} />
        <Route path="/calendar" component={CalendarView} />
        <Route path="/reports" component={ReportDownload} />
        <Route path="/departments" component={DepartmentList} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
