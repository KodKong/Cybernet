import {applyMiddleware, combineReducers, createStore} from 'redux'
import message_reducer from './message-reducer';
import profile_reducer from './profile-reducer';
import news_reducers from './news-reducer'; 
import users_reducer from './users-reducer';
import thunkMiddleWare from "redux-thunk"; 
import companys_reducer from './companys-reducer';

let reducers = combineReducers({
    profilePage: profile_reducer, 
    messagesStore: message_reducer,
    newsPage: news_reducers, 
    usersPage: users_reducer, 
    companysStore: companys_reducer
})


let store = createStore(reducers, applyMiddleware(thunkMiddleWare)); 



export default store; 