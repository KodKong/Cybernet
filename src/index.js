import React from 'react';
import ReactDOM from 'react-dom';
import './sass/main.scss';
import store from './redux/state';
import App from './App';



let drawPage = (state) =>
{
ReactDOM.render(
  <React.StrictMode>
    <App state={state} dispatch={store.dispatch.bind(store)}/>
  </React.StrictMode>,
  document.getElementById('root')
);
} 
drawPage(store.getState()); 
store.subscribe(drawPage); 

