const INITIAL_STATE = {
  tasks: [

    
  ],
  deletedTasks: [],
}

function tasksReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    
    case 'ADD_TASK': 
      return {...state, tasks: [...state.tasks, action.payload]}

    case 'DELETE_TASK':
      state.deletedTasks = [...state.deletedTasks, action.payload]
      state.tasks = state.tasks.filter(task => !state.deletedTasks.includes(task.key))
      return {...state, state}
    
    default:
      return state;
  }
}

export default tasksReducer;