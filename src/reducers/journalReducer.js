const INITIAL_STATE = {
  entries: [{key:'testKey', entry:'<span>testing testing 123<span>', day: '2/17/2022'}, {key:'testKey2', entry:'<span>what up buttercup<span>', day: '2/18/2022'}],
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