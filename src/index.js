import React from 'react';
import ReactDOM from 'react-dom';
import './sass/main.scss';
import store from './redux/redux-store';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';



let drawPage = () =>
{
ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);
} 
drawPage(store.getState()); 
store.subscribe(() =>
{
  let state = store.getState()
  drawPage(state);
}); 

