import React from 'react'; 
import Loading from '../../Common/Loading';


function User_Page(props) {
    
    let trueUser = props.user.find(function(item) {
        return item.id == props.params.user
    }); 
    
    if(trueUser.length === 0)
    {
        return (<Loading />)
    }
      return (
      <>
      <div className="main__profile">
      <div className="main__profile_info">
                <div className="main__avatar">
                    <img src={trueUser.photos} alt=""></img>
                </div>
                <div className="main__info">
                <div className="main__name">
                   {trueUser.fullName}
                </div>
                <div className="main__company_list">
                    Status: {trueUser.status}
                    
                </div>
            </div>
            <div className="user__location">
                <h1>{trueUser.location.city}</h1><h2>{trueUser.location.country}</h2>
            </div>
            </div>
            <div className="main__posts">
            {trueUser.posts.map((item) => <div className="main__post">
                <div className="post-avatar">
                 <a href="#"><img src={trueUser.photos} alt=""></img></a>
                </div>
                <div className="main__post__text">
                    <div className="main__post__caption">
                        {trueUser.fullName}
                    </div>
                    {item} 
                </div>
 
        </div>)} 
        </div>
        </div>)
        </>
    )
  
}
export default User_Page; 
