import { combineReducers } from "redux";
import journalReducer from "./journalReducer";
import tasksReducer from "./tasksReducer";

const reducers = combineReducers({
  tasks: tasksReducer,
  journal: journalReducer
})

export default reducers;