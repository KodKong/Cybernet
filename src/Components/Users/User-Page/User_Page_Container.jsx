import * as axios from 'axios'
import React from 'react'
import User_Page from './User_Page'
import {connect} from "react-redux";
import { setUserPageAC } from "../../../redux/users-reducer";
import { withRouter } from 'react-router-dom';
import { getUserPage } from "../../Api/Api";

class User_Page_APIContainer extends React.Component {
    
    componentDidMount(props)
    {
        getUserPage()
        .then(data => 
        {
            this.props.setUserPageAC(data.user); 
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