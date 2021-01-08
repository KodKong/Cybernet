import React from 'react'

function User(props) {
    
    return (
        <div className="user">
            <div className="user__img">
            <img src="https://games.mail.ru/hotbox/content_files/game/2020/06/16/aed1e04647ec4b64ad63215ef6f57898.jpg" alt=""/>
            </div>
            <div className="user__descr">
                <h1>{props.users.fullName}</h1>
                <p className="user__descr__status">{props.users.status}</p>
                {
                    props.users.followed ? <button onClick={() => {props.follow.followAC(4)}} className="user__descr__button">unfollow</button> : 
                    <button onClick={() => {props.follow.followAC(4)}} className="user__descr__button">follow</button>
                    
                }
               
            </div>
            <div className="user__location"><h1>{props.users.location.city}</h1><h2>{props.users.location.country}</h2></div>
            
        </div>
    )
}



function Users(props) {
    return <div>
        {
            props.users.map(item => 
                <div className="user">
                <div className="user__img">
                <img src="https://games.mail.ru/hotbox/content_files/game/2020/06/16/aed1e04647ec4b64ad63215ef6f57898.jpg" alt=""/>
                </div>
                <div className="user__descr">
                    <h1>{item.fullName}</h1>
                    <p className="user__descr__status">{item.status}</p>
                    {
                        item.followed ? <button onClick={() => {props.unfollowAC(item.id)}} className="user__descr__button">unfollow</button> : 
                        <button onClick={() => {props.followAC(item.id)}} className="user__descr__button">follow</button>
                        
                    }
                
                </div>
                <div className="user__location"><h1>{item.location.city}</h1><h2>{item.location.country}</h2></div>
                
                </div>
            )
        }
        </div>
    
}

export default Users
