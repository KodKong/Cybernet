import React from 'react'
import Dialogs from "./Dialogs";
import Message from "./Dialogs_messages"

function Messages(props) {
     
    let inputMessage = React.createRef(); 

    return (
       <div className="messages"> 
       <div className="messages__wrapper">
            <div class='messages__dialogs'>
               
            {
                props.messagesState.dialogsStore.map(item => <Dialogs img={item.avatar} name={item.name}/>)
            }; 
               
            </div>
            <div className="messages__messages">
               {
                   props.messagesState.messageStore.map(item => <Message name={item.name} text={item.text} />)
               }; 
                <div className="messages__messages__input">
                <input type="text" ref={inputMessage}/>
                <button>Отправить</button>
                </div>
                
            </div>
        </div>
        </div>
    )
}

export default Messages
