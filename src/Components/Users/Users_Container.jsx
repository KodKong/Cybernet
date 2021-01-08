import React from "react";
import {connect} from "react-redux";
import { followActionCreator, setUserActionCreator, unfollowActionCreator } from "../../redux/users-reducer";
import Users from "./Users";


let mapStateToProps = (state) => 
{
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => 
{
    return {
        followAC: (userId) => {
            dispatch(followActionCreator(userId)); 
        }, 
        unfollowAC: (userId) => {
            dispatch(unfollowActionCreator(userId)); 
        }, 
        setUsersAC: (users) => {
            dispatch(setUserActionCreator(users)); 
        }
    }
}


const users_container = connect(mapStateToProps,mapDispatchToProps)(Users); 

export default users_container; 