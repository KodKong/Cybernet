import React from 'react';
import ReactDOM from 'react-dom';
import './sass/main.scss';
import store from './redux/state';
import App from './App';



let drawPage = (state) =>
{
ReactDOM.render(
  <React.StrictMode>
    <App state={state} addPost={store.addPost.bind(store)} updatePost={store.updatePost.bind(store)}/>
  </React.StrictMode>,
  document.getElementById('root')
);
} 
drawPage(store.getState()); 
store.subscribe(drawPage); 
// ReactDOM.render(
//   <React.StrictMode>
//     <App state={state} addPost={addPost}/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

