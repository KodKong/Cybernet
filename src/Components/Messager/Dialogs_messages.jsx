import React from 'react'

function Dialogs_messages(props) {
    return (
        <div className="messages__message">
                    <div className="messages__message__author">{props.name}</div>
                    <div className="messages__message__text">{props.text}</div>
        </div>
    )
}

export default Dialogs_messages
