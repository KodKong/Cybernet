import React from 'react'; 
import Loading from '../../Common/Loading';


function User_Page(props) {
    
    if(props.user === 0)
    {
        return (<Loading />)
    }

      return (
      <>
      <div className="main__profile">
      <div className="main__profile_info">
                <div className="main__avatar">
                    <img src={props.user.photos} alt=""></img>
                </div>
                <div className="main__info">
                <div className="main__name">
                   {props.user.fullname}
                </div>
                <div className="main__company_list">
                    Status: {props.user.status}
                    
                </div>
            </div>
            <div className="user__location">
                <h1>{props.user.location.city}</h1><h2>{props.user.location.country}</h2>
            </div>
            </div>
            <div className="main__posts">
      <div className="main__post">
      <div className="post-avatar">
                 <a href="#"><img src={props.user.photos} alt=""></img></a>
              </div>
              <div className="main__post__text">
                  <div className="main__post__caption">
                      Lorem, ipsum
                  </div>
                  {} 
              </div>
 
        </div>
        </div>
        </div>)
        </>
    )
  
}
export default User_Page; 