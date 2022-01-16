const INITIAL_STATE = {
  tasks: [{key:'testKey', task:'test task 1'}, {key:'testKey2', task:'test task 2'}],
  deletedTasks: [],
}

function tasksReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    
    case 'ADD_TASK': 
      return {...state, tasks: [...state.tasks, action.payload]}

    case 'DELETE_TASK':
      state.deletedTasks = [...state.deletedTasks, action.payload]
      //state.tasks = state.tasks.filter(task => !state.deletedTasks.includes(task.key))
      return {...state, state}
    
    default:
      return state;
  }
}

export default tasksReducer;