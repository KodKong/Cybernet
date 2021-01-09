import React from 'react'
import * as axios from 'axios'
import userImage from "../../img/user-image.png";


class Users extends React.Component {
    constructor(props) {
        super(props); 
        if(this.props.users.length === 0)
        {
        axios.get("http://localhost:3000/db.json")
        .then(response => {
            this.props.setUsersAC(response.data.items)
        }); 
        }
    }

    render() {  
       return <div>
        {
            this.props.users.map(item => 
                <div className="user">
                <div className="user__img">
                <img src={item.photos ? item.photos : userImage} alt=""/>
                </div>
                <div className="user__descr">
                    <h1>{item.fullName}</h1>
                    <p className="user__descr__status">{item.status}</p>
                    {
                        item.followed ? <button onClick={() => {this.props.unfollowAC(item.id)}} className="user__descr__button">unfollow</button> : 
                        <button onClick={() => {this.props.followAC(item.id)}} className="user__descr__button">follow</button>
                        
                    }
                
                </div>
                <div className="user__location"><h1>{item.location.city}</h1><h2>{item.location.country}</h2></div>
                
                </div>
            )
        }
        </div>      
    }
}

export default Users