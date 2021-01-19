import React from 'react'
import { connect } from 'react-redux'
import My_Profile from './My_Profile'
import { setUserStatus } from "../../redux/profile-reducer";


let mapStateToProps = (state) =>
{
    return {
        ownerPage: state.profilePage.ownerPage
    }
}




const My_Profile_Container = connect(mapStateToProps, {setUserStatus})(My_Profile)

export default My_Profile_Container
