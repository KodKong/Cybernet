import React from 'react'
import { connect } from 'react-redux'
import My_Profile from './My_Profile'


let mapStateToProps = (state) =>
{
    return {
        ownerPage: state.profilePage.ownerPage
    }
}




const My_Profile_Container = connect(mapStateToProps)(My_Profile)

export default My_Profile_Container
