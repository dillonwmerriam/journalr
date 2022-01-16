import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './taskList.scss';
import CancelIcon from '@material-ui/icons/Cancel';
import currentDate from '../../App';

function TaskList() {
  
  const state = useSelector(state => state.tasks)
  const [newTask, setNewTask] = useState('')
  const [deletedTasks, setDeletedTasks] = useState([''])
  const dispatch = useDispatch()

  const handleSubmit = () => {
    
    dispatch({
      type: 'ADD_TASK',
      payload: {key: currentDate, task: newTask}
    })
    setNewTask('')
    
  }

  const handleDeleteTask = async (task) => {
    setDeletedTasks([...deletedTasks, task])
    dispatch({
      type: 'DELETE_TASK',
      payload: task
    })
  }

  const handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      handleSubmit()
    }
  }

  return (
    <div className="wrapper">
      <div className="title">
        <span>Daily Tasks</span>
      </div>
  
      <div className="tasklist">
        {state.tasks.filter(item => !deletedTasks.includes(item)).map(item => (
          <div className='tasks'>
            <li key={item.key}>{item.task}</li>
            <CancelIcon className="delete"
            type='delete' 
            
            onClick={() => handleDeleteTask(item)}
            
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
          onClick={handleSubmit}>Submit</button>
        <button onClick={console.log(state)}>tasks?</button>
      </div>
    </div>
  )
}

export default TaskList;
