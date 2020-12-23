import React from 'react'
import Dialogs from "./Dialogs";
import Message from "./Dialogs_messages"
import { addMessageActionCreator, updateMessageActionCreator } from "../../redux/state";

function Messages(props) {
     
    

    let addMessage = () => {
        props.dispatch(addMessageActionCreator()); 
    }

    let updateMessage = (e) => {
        let body = e.target.value; 
        let action = updateMessageActionCreator(body); 
        props.dispatch(action); 
    }

    let suka = props.messagesState.messageStore.map(item => <Message name={item.name} text={item.text} />); 

    return (
       <div className="messages"> 
       <div className="messages__wrapper">
            <div className='messages__dialogs'>
               
            {
                props.messagesState.dialogsStore.map(item => <Dialogs img={item.avatar} name={item.name}/>)
            }; 
               
            </div>
            <div className="messages__messages">
               {
                   suka 
               }; 
                <div className="messages__messages__input">
                <input type="text"  onChange={updateMessage} value={props.messagesState.newMessage}/>
                <button onClick={addMessage}>Отправить</button>
                </div>
                
            </div>
        </div>
        </div>
    )
}

export default Messages
