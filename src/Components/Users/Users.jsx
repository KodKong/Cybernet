import React from 'react'
import * as axios from 'axios'
import userImage from "../../img/user-image.png";


class Users extends React.Component {
    
    componentDidMount(props)
    {
        axios.get("http://localhost:3000/db1.json")
        .then(response => {
            this.props.setUsersAC(response.data.items); 
            this.props.setTotalCountAC(response.data.totalCount); 
        }); 
    }

    changePage = (pageNumber) => {
        this.props.setCurrentPageAC(pageNumber); 
        axios.get(`http://localhost:3000/db${pageNumber}.json`)
        .then(response => {
            this.props.setUsersAC(response.data.items)
        }); 
    }
    
    render() {  

        let countPage = Math.ceil(this.props.totalCount / this.props.pageSize); 

        let pages = []; 

        for(let i = 1; i <= countPage; i++)
            pages.push(i); 


       return <div>
           <div className="number_page_users">
              <div className="number_page_users_wrapper">
                {
                    pages.map(item => {
                        return <span className={this.props.currentValue === item ? "number_page_users_user number_page_users_currentValue" : "number_page_users_user"} 
                          onClick={() => {this.changePage(item)}}  >
                            {item}
                            </span>
                    })
                }
              </div>
           </div>
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