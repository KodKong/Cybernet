import * as axios from 'axios'
import React from 'react'
import User_Page from './User_Page'
import {connect} from "react-redux";
import { setUserPageAC } from "../../../redux/users-reducer";
import { withRouter } from 'react-router-dom';

class User_Page_APIContainer extends React.Component {
    
    componentDidMount(props)
    {
       
       
        axios.get(`http://localhost:3000/bd/users/user1.json`)
        .then(response => 
        {
            this.props.setUserPageAC(response.data.user); 
        })
       
       
    }

    render() {
        return <User_Page user={this.props.user}/>
    }
}

let mapStateToProps = (state) => 
{
    return {
        user: state.usersPage.userPage
    }
}

let UserWihRoute = withRouter(User_Page_APIContainer); 


const User_Page_Container = connect(mapStateToProps, {setUserPageAC})(UserWihRoute);

export default User_Page_Container