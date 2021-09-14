import './App.scss';
import Header from './Components/Header.js'
import TaskList from './Components/Tasks/TaskList.js'

function App() {

  var currentDate = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"long", day:"numeric"}) 
  
  return (
    <div className="App">
        <div className="sections">
        <Header />
        <div className="date">
          <span>{currentDate}</span>
        </div>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
