import { combineReducers } from "redux";
import journalReducer from "./journalReducer";
import tasksReducer from "./tasksReducer";
import dateReducer from "./dateReducer";

const reducers = combineReducers({
  tasks: tasksReducer,
  journal: journalReducer,
  date: dateReducer
})

export default reducers;