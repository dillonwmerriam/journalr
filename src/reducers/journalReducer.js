const INITIAL_STATE = {
  entries: [{key:'testKey', entry:'<span>testing testing 123<span>'}],
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