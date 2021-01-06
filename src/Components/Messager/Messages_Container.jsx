import React from 'react'
import Messages from "./Messages";
import { addMessageActionCreator, updateMessageActionCreator } from "../../redux/state";

function Messages_Container(props) {
     
    

    let addMessage = () => {
        props.dispatch(addMessageActionCreator()); 
    }

    let updateMessage = (text) => {
        let action = updateMessageActionCreator(text); 
        props.dispatch(action); 
    }

    

    return <Messages updateMes={updateMessage} addMes={addMessage} messagesState={props.messagesState}/>
       
}

export default Messages_Container
