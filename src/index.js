import React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, connect} from 'redux';
import tasksReducer from './reducers/tasksReducer';
import './index.css';
import App from './App';

const store = createStore(
  tasksReducer,
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
