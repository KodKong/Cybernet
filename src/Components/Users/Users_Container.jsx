import React from "react";
import {connect} from "react-redux";
import { followActionCreator, setCurrentPageActionCreator, setLoadingActionCreator, setTotalCountActionCreator, setUserActionCreator, unfollowActionCreator } from "../../redux/users-reducer";
import * as axios from 'axios'
import Users from "./Users";
import Loading from "../Common/Loading";

class UsersAPIContainer extends React.Component {
    
    componentDidMount(props)
    {
        this.props.setLoadingAC(true); 
        axios.get("http://localhost:3000/db1.json")
        .then(response => {
            this.props.setUsersAC(response.data.items); 
            this.props.setTotalCountAC(response.data.totalCount); 
            this.props.setLoadingAC(false);
        }); 
    }

    changePage = (pageNumber) => {
        this.props.setLoadingAC(true);
        this.props.setCurrentPageAC(pageNumber); 
        axios.get(`http://localhost:3000/db${pageNumber}.json`)
        .then(response => {
            this.props.setUsersAC(response.data.items)
            this.props.setLoadingAC(false);
        }); 
    }
    
    render() {  
        
        
        return ( 
        <>
        {
            this.props.isFetching  ? <Loading /> : <Users  currentValue={this.props.currentValue}
            changePage={this.changePage}
            totalCount={this.props.totalCount}
            pageSize={this.props.pageSize}
            followAC={this.props.followAC}
            unfollowAC={this.props.unfollowAC}
            users={this.props.users}

            />
        }
        
        </>
        )
        
    }
}

let mapStateToProps = (state) => 
{
    return {
        users: state.usersPage.users, 
        pageSize: state.usersPage.pageSize, 
        currentValue: state.usersPage.currentValue, 
        totalCount: state.usersPage.totalCount,
        isFetching: state.usersPage.isFetching
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
        }, 
        setLoadingAC: (isFetching) => 
        {
            dispatch(setLoadingActionCreator(isFetching)); 
        }
    }
}


const users_container = connect(mapStateToProps,mapDispatchToProps)(UsersAPIContainer); 

export default users_container; 