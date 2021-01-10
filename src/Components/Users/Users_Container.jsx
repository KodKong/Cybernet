import React from "react";
import {connect} from "react-redux";
import { followActionCreator, setCurrentPageActionCreator, setTotalCountActionCreator, setUserActionCreator, unfollowActionCreator } from "../../redux/users-reducer";
import Users from "./Users";


let mapStateToProps = (state) => 
{
    return {
        users: state.usersPage.users, 
        pageSize: state.usersPage.pageSize, 
        currentValue: state.usersPage.currentValue, 
        totalCount: state.usersPage.totalCount
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
        }, 
        setCurrentPageAC: (pageNumber) => 
        {
            dispatch(setCurrentPageActionCreator(pageNumber)); 
        }, 
        setTotalCountAC: (number) => 
        {
            dispatch(setTotalCountActionCreator(number)); 
        }
    }
}


const users_container = connect(mapStateToProps,mapDispatchToProps)(Users); 

export default users_container; 