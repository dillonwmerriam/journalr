const INITIAL_STATE = {
  entries: [],
  deletedEntries: []
}

function journalReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    
    case 'NEW_ENTRY': 
      
      return {...state, entries: [...state.entries, action.payload]}

    case 'DELETE_ENTRY':
      
      return {...state, deletedEntries: [...state.deletedEntries, action.payload]}

    default:
      return state;
  }
}

export default journalReducer;