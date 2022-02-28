import {React, useState, useEffect} from 'react'
import './App.scss';
import { Link } from "react-router-dom";
import Header from './Components/Header.js'
import TaskList from './Components/Tasks/TaskList.js'
import MyCalendar from './Components/MyCalendar/MyCalendar.js'
import MyJournal from './Components/MyJournal/MyJournal.js'

var date = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"long", day:"numeric"}) 


//useEffect( ()=> setDate({date}))


export default function Home(props) {
  //const[date, setDate] = useState(new Date());
 // useEffect( ()=> setDate({date}), [])
 // useEffect( ()=> console.log('HOME.js line 18: '+{date}), [])


  return (
    <div className="App">
    <div className="sections">
      <Header />
      <span>test</span>
      <div className="date">
        <span>{date}</span>
      </div>
      <TaskList />
      <MyCalendar date={props.date}/>
      <div>
        <Link to="/newpost">New Post</Link>
      </div>
      <MyJournal data={date} />
    </div>
  </div>
  )
}
