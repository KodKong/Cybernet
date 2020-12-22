import React from 'react'
import { NavLink } from 'react-router-dom'

function Dialogs(props) {
    return (
        <div className="messages__dialog">
        <img src={props.img} alt=""/>
        <NavLink to="/Messages"><p>{props.name}</p></NavLink>
        </div>
    )
}

export default Dialogs
