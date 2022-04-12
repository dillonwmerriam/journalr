import { useState, useEffect } from 'react'
import Calendar from 'react-calendar';
import './MyCalendar.scss';

//import { Link } from 'react-router-dom'

export default function MyCalendar() {

  const[date, setDate] = useState(new Date());
  //useEffect(()=>{console.log(date)})
  //useEffect( () => {<Link to={date.toString}/>} )

  return (
    <div className='calendar_wrapper'>
      <h1 className='calendar_title'>My Calendar</h1>
      <div className='calendar-container'>
        <Calendar value={date} />
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
    </div>
  );
}
