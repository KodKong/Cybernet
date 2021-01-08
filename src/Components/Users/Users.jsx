import React from 'react'
function Users(props) {
     
    if(props.users.length === 0)
    {
       
        props.setUsersAC(
             
                [
                    {id: 1, fullName: "Finn Jordan", followed: true, status: "I love orange", location: {city: "Berlin", country: "Germany"}}, 
                    {id: 2, fullName: "Kyrie James", followed: false, status: "I love apple", location: {city: "Berlin", country: "Germany"}}, 
                    {id: 3, fullName: "Michel Harden", followed: true, status: "I love kiwi", location: {city: "Berlin", country: "Germany"}}, 
                    {id: 4, fullName: "Dancan Herro", followed: true, status: "I love raspberry", location: {city: "Berlin", country: "Germany"}}        
                ]
        )
    }


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
