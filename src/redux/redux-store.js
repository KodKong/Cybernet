import {combineReducers, createStore} from 'redux'
import message_reducer from './message-reducer';
import profile_reducer from './profile-reducer';
import news_reducers from './news-reducer'; 
import users_reducer from './users-reducer';

let reducers = combineReducers({
    profilePage: profile_reducer, 
    messagesStore: message_reducer,
    newsPage: news_reducers, 
    usersPage: users_reducer
})


let store = createStore(reducers); 



export default store; 