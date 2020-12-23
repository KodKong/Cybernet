import React from 'react'
import { addPostActionCreator, updatePostActionCreator } from "../../redux/state";


function New_Post(props) {

     
    
    let addPost = () => {
        props.dispatch(addPostActionCreator());  
    }; 

    let updatePost = (e) => 
    {
        let textPost = e.target.value;
        let action = updatePostActionCreator(textPost); 
        props.dispatch(action); 
    }; 

    return (
        <div className="main__new-post">
                    <input type="text" placeholder="New post"  onChange={updatePost} value={props.posts.profilePage.newPost}></input>
                    
                   <button onClick={addPost}> Опубликовать </button>
                    
        </div>
    )
}

export default New_Post
