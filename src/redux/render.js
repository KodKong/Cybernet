import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

export let drawPage = (props) =>
{
ReactDOM.render(
  <React.StrictMode>
    <App state={props.state} addPost={props.addPost}/>
  </React.StrictMode>,
  document.getElementById('root')
);
}