import * as axios from 'axios'
import React from 'react'
import User_Page from './User_Page'
import {connect} from "react-redux";
import { setUsersAC } from "../../../redux/users-reducer";
import { withRouter } from 'react-router-dom';
import { getUserPage } from "../../Api/Api";

class User_Page_APIContainer extends React.Component {
    
    componentDidMount(props)
    {
        debugger
        getUserPage()
        .then(data => 
        {
            this.props.setUsersAC(data.items); 
        })
    }

    render() {
        return <User_Page user={this.props.user} params={this.props.match.params}/>
    }
}

let mapStateToProps = (state) => 
{
    return {
        user: state.usersPage.users
    }
}

let UserWihRoute = withRouter(User_Page_APIContainer); 


const User_Page_Container = connect(mapStateToProps, {setUsersAC})(UserWihRoute);

export default User_Page_Container