import React from 'react'
import Messages from "./Messages";
import { addMessageActionCreator, updateMessageActionCreator } from "../../redux/state";
import { connect } from 'react-redux';

// function Messages_Container(props) {
     
    

//     let addMessage = () => {
//         props.dispatch(addMessageActionCreator()); 
//     }

//     let updateMessage = (text) => {
//         let action = updateMessageActionCreator(text); 
//         props.dispatch(action); 
//     }

    

//     return <Messages updateMes={updateMessage} addMes={addMessage} messagesState={props.messagesState}/>
       
// }

let mapStateToProps = (state) => {
    return {
        messagesState: state.messagesStore
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        }, 
        updateMessage: (text) => {
            let action = updateMessageActionCreator(text); 
            dispatch(action);
        }
    }
}


const Messages_Container = connect(mapStateToProps,mapDispatchToProps)(Messages); 

export default Messages_Container
