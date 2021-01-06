import React from 'react'
import New_Post from "./New_Post";
import { addPostActionCreator, updatePostActionCreator } from "../../redux/state";


function New_Post_Container(props) {

     
    
    let addPost = () => {
        props.dispatch(addPostActionCreator());  
    }; 

    let updatePost = (text) => 
    {
        let action = updatePostActionCreator(text); 
        props.dispatch(action); 
    }; 

    return (
       <New_Post updatePostText={updatePost} addPost={addPost} posts={props.posts}></New_Post>
    )
}

export default New_Post_Container; 
