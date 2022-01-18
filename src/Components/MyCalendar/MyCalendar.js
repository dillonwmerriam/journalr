import { useState, useEffect } from 'react'
import Calendar from 'react-calendar';
import {useDispatch, useSelector} from 'react-redux';
import './myCalendar.scss'

export default function MyCalendar() {

  const state = useSelector(state => state.date)
  const dispatch = useDispatch()
  const[date, setDate] = useState(new Date());
  const dateString = date.toDateString()

  useEffect(() => {
    dispatch({
      type: 'SET_DATE',
      payload: {dateString}
    })
  })

  return (
    <div className='calendar_wrapper'>
      <h1 className='calendar_title'>My Calendar</h1>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {state.date}
      </p>
    </div>
  );
}
