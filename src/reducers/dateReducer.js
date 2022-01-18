const INITIAL_STATE = {
  date: ''
}

function tasksReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    
    case 'SET_DATE': 
      return {date: action.payload}

    default:
      return state;
  }
}

export default tasksReducer;