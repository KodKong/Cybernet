import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import {addPost, updatePost} from './state'

export let drawPage = (state) =>
{
ReactDOM.render(
  <React.StrictMode>
    <App state={state} addPost={addPost} updatePost={updatePost}/>
  </React.StrictMode>,
  document.getElementById('root')
);
}