import React from 'react'; 

function My_Profile(props) {
    return (
        <div className="main__profile_info">
                <div className="main__avatar">
                    <img src={props.ownerPage.photos} alt=""></img>
                </div>
                <div className="main__info">
                <div className="main__name">
                    {props.ownerPage.fullName}
                </div>
                <div className="main__company_list">
                    Status: 
                    <div className="main__company">
                      {props.ownerPage.status}
                    </div>
                </div>
            </div>
            <div className="user__location">
                <h1>{props.ownerPage.location.city}</h1><h2>{props.ownerPage.location.country}</h2>
            </div>
            </div>
    )
}

export default My_Profile
