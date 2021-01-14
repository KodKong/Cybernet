import React from "react";
import {connect} from "react-redux";
import { followAC, setCurrentPageAC, setLoadingAC, setTotalCountAC, setUsersAC, unfollowAC, getUsersThunkCreator, getPageNumberThunkCreator } from "../../redux/users-reducer";
import Users from "./Users";
import Loading from "../Common/Loading";
import {  getPageNumber} from "../Api/Api";

class UsersAPIContainer extends React.Component {
    
    componentDidMount(props)
    {
        this.props.getUsersThunkCreator(); 

        // this.props.setLoadingAC(true); 
        // getAllUser()
        // .then(data => {
        //     this.props.setUsersAC(data.items); 
        //     this.props.setTotalCountAC(data.totalCount); 
        //     this.props.setLoadingAC(false);
        // }); 
    }

    changePage = (pageNumber) => {
        this.props.getPageNumberThunkCreator(pageNumber); 
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

// let mapDispatchToProps = (dispatch) => 
// {
//     return {
//         followAC: (userId) => {
//             dispatch(followActionCreator(userId)); 
//         }, 
//         unfollowAC: (userId) => {
//             dispatch(unfollowActionCreator(userId)); 
//         }, 
//         setUsersAC: (users) => {
//             dispatch(setUserActionCreator(users)); 
//         }, 
//         setCurrentPageAC: (pageNumber) => 
//         {
//             dispatch(setCurrentPageActionCreator(pageNumber)); 
//         }, 
//         setTotalCountAC: (number) => 
//         {
//             dispatch(setTotalCountActionCreator(number)); 
//         }, 
//         setLoadingAC: (isFetching) => 
//         {
//             dispatch(setLoadingActionCreator(isFetching)); 
//         }
//     }
// }


const users_container = connect(mapStateToProps,
    {followAC, unfollowAC,  
     getUsersThunkCreator, getPageNumberThunkCreator})
        (UsersAPIContainer); 

export default users_container; 