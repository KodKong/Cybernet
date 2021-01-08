import {combineReducers, createStore} from 'redux'
import message_reducer from './message-reducer';
import post_reducer from './post-reducer';
import news_reducers from './news-reducer'; 

let reducers = combineReducers({
    profilePage: post_reducer, 
    messagesStore: message_reducer,
    newsPage: news_reducers, 
})


let store = createStore(reducers); 



export default store; 