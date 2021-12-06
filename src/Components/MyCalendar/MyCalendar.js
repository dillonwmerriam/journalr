import { useState } from 'react'
import Calendar from 'react-calendar';
import './myCalendar.scss'

export default function MyCalendar() {

  const[date, setDate] = useState(new Date());

  return (
    <div className='calendar_wrapper'>
      <h1 className='calendar_title'>My Calendar</h1>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
    </div>
  );
}
