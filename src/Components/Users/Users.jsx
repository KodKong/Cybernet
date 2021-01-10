import React from 'react'
import userImage from "../../img/user-image.png";

function Users(props) {

    let countPage = Math.ceil(props.totalCount / props.pageSize); 

    let pages = []; 

    for(let i = 1; i <= countPage; i++)
    {
        pages.push(i); 

    }
      
    return (<div>
    <div className="number_page_users">
    <div className="number_page_users_wrapper">
        {
            
            pages.map(item => {
                return <span className={props.currentValue === item ? "number_page_users_user number_page_users_currentValue" : "number_page_users_user"} 
                onClick={() => {props.changePage(item)}}  >
                {item}
                </span>
            })
        }
        </div>
        </div>
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
    </div> ) 
}

export default Users
