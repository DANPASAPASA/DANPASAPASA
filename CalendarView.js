import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import axios from 'axios';

function CalendarView() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/tasks', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const tasks = response.data.filter(task => task.includeInCalendar);
      const events = tasks.map(task => ({
        title: task.title,
        start: task.startDate,
        end: task.endDate,
        backgroundColor: task.color,
        borderColor: task.color
      }));
      setEvents(events);
    };

    fetchTasks();
  }, []);

  return (
    <div className="container">
      <h2>Calendar</h2>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
      />
    </div>
  );
}

export default CalendarView;
