const INITIAL_STATE = {
  tasks: [],
  deletedTasks: [],
  entries: []
}

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    
    case 'NEWTASK': 
      
      return {...state, tasks: [...state.tasks, action.payload]}

    case 'DELETETASK':
      
      return {...state, deletedTasks: [...state.deletedTasks, action.payload]}

    default:
      return state;
  }
}

export default reducer;