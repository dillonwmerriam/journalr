import {useState} from 'react';
import './taskList.scss';
import CancelIcon from '@material-ui/icons/Cancel';

function TaskList() {
  
  //const tasks = useState(['implement task list', 'make calendar', 'get groceries'])
  
  const [tasks, setTasks] = useState(['task 1', 'task 2', 'task 3', 'task 4'])
  const [newTask, setNewTask] = useState('')
  const [deletedTasks, setDeletedTasks] = useState([''])
  const [isActive, setIsActive] = useState(false)

  const handleSubmit = () => {
    setTasks([...tasks, newTask])
    setNewTask('')
  }

  const handleDeleteTask = async (task) => {
    setDeletedTasks([...deletedTasks, task])
  }

  const handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      handleSubmit()
    }
  }

  const handleShowDelete = (e) => {
    setIsActive(true)
  }

  return (
    <div className="wrapper">
      <div className="title">
        <span>Daily Tasks</span>
      </div>
  
      <div className="tasklist">
        {tasks.filter(task => !deletedTasks.includes(task)).map(task => (
          <div className='tasks'>
            <li key={task}>{task}</li>
            <CancelIcon className="delete"
            type='delete' 
            
            onClick={() => handleDeleteTask(task)}
            
            />
          </div>
        ))}
      </div>
      <div className="inputContainer">
        <input 
        type='text' 
        name='add task'
        value={newTask}
        onKeyDown={(e) => handleKeyPress(e)}
        onChange={(e) => {setNewTask(e.target.value)
        }}
        />
      </div>
      <div className="submit">
        <button 
          type='submit' 
          class="block" 
          
          onClick={handleSubmit}>Submit</button>
          
      </div>
    </div>
  )
}

export default TaskList;
