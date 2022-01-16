import React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { combineReducers, createStore} from 'redux';
import tasksReducer from './reducers/tasksReducer';
import journalReducer from './reducers/journalReducer';
import './index.css';
import App from './App';

const reducer = combineReducers({
  tasks: tasksReducer,
  journal: journalReducer
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && 
  window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />  
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
