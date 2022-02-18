import './App.scss';
import Header from './Components/Header.js'
import TaskList from './Components/Tasks/TaskList.js'
import MyCalendar from './Components/MyCalendar/MyCalendar.js'
import MyJournal from './Components/MyJournal/MyJournal.js'
import { useSelector } from 'react-redux'



function App() {

  var currentDate = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"long", day:"numeric"}) 
  var selectedDay = new Date().toLocaleDateString('en-us', { month:"numeric", day:"numeric", year:"numeric" }) 
  console.log(selectedDay)

  const state = useSelector((state) => state.journal)
  console.log(JSON.stringify(state));
  
  return (
    <div className="App">
      <div className="sections">
        <Header />
        <div className="date">
          <span>{currentDate}</span>
        </div>
        <TaskList />
        <MyCalendar />
        <MyJournal />
      </div>
    </div>
  );
}

export default App;
