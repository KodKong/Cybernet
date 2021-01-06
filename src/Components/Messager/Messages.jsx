import React from 'react'
import Dialogs from "./Dialogs";
import Message from "./Dialogs_messages"


function Messages(props) {
     
    let onChange = React.createRef(); 

    let addMessage = () => {
        props.addMes(); 
    }

    let updateMessage = (e) => {
        let body = onChange.current.value; 
        props.updateMes(body); 
    }

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
                  props.messagesState.messageStore.map(item => <Message name={item.name} text={item.text} />)
               }; 
                <div className="messages__messages__input">
                <input type="text"  onChange={updateMessage} value={props.messagesState.newMessage} ref={onChange}/>
                <button onClick={addMessage}>Отправить</button>
                </div>
                
            </div>
        </div>
        </div>
    )
}

export default Messages
