import React, {useState} from 'react'; 


function Status(props) {
    
    const[isEdit,clickObj] = useState(false); 

    const activedMod = () => 
    {
        clickObj(true); 
    }
    const deactivedMod = () => 
    {
        clickObj(false); 
    }
    // state = {
    //     edit: false
    // }

    // clickObj() 
    // {
    //     this.setState({
    //         edit: true
    //     }) 
    // }

    // clickOutObj()
    // {
    //     this.setState({
    //         edit: false  // асинхроно!!!
    //     })
    // }

    
    
        return (
            <div>
              {!isEdit && <span onDoubleClick={activedMod}>{props.status}</span>} 
              {isEdit && <input autoFocus={true} onBlur={deactivedMod} type="text" value={props.status}></input>}
            </div>
        )
    
}


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
                      <Status status={props.ownerPage.status} />
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
