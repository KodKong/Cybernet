import React from 'react'
import New_Post from "./New_Post";
import { addPostActionCreator, updatePostActionCreator } from "../../redux/profile-reducer";
import { connect } from 'react-redux';


// function New_Post_Container(props) {

     
    
//     let addPost = () => {
//         props.dispatch(addPostActionCreator());  
//     }; 

//     let updatePost = (text) => 
//     {
//         let action = updatePostActionCreator(text); 
//         props.dispatch(action); 
//     }; 

//     return (
//        <New_Post updatePostText={updatePost} addPost={addPost} posts={props.posts}></New_Post>
//     )
// }

let mapStateToProps = (state) => {
    return {
    posts: state.profilePage
    }
};

let mapDispatchToProps = (dispatch) => 
{
    return {
        updatePostText: (text) => {
            let action = updatePostActionCreator(text); 
            dispatch(action); 
        }, 
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}


const New_Post_Container = connect(mapStateToProps, mapDispatchToProps)(New_Post); 


export default New_Post_Container; 
