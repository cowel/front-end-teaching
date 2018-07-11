import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREASE':
      console.log('action ', action)
      return state + action.value
    default:
      break;
  }
  return state
}

const store = createStore(reducer)

const render = () => ReactDOM.render(
  <App store={store}/>, 
  document.getElementById('root')
);

render()
// registerServiceWorker();

store.subscribe(render)
