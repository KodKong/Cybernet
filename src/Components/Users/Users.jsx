import * as axios from 'axios'
import React from 'react'
import userImage from "../../img/user-image.png";
function Users(props) {
   
    function showUsers() { 
        if(props.users.length === 0)
        {
        axios.get("http://localhost:3000/db.json")
        .then(response => {
            props.setUsersAC(response.data.items)
        }); 
        }
   }
    


    return <div>
        <button onClick={showUsers}>Отобразить</button>
        {
            props.users.map(item => 
                <div className="user">
                <div className="user__img">
                <img src={item.photos ? item.photos : userImage} alt=""/>
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
