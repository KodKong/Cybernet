import React from 'react'
// import {  } from "./New_Post_Container";


function New_Post(props) {

     let newPostElement = React.createRef(); 
    
    let addPost = () => {
        props.addPost();   
    }; 

    let updatePost = () => 
    {
        let textPost = newPostElement.current.value; 
        props.updatePostText(textPost); 
    }; 

    return (
        <div className="main__new-post">
                    <input type="text" placeholder="New post"  onChange={updatePost} value={props.posts.newPost} ref={newPostElement}></input>
                    
                   <button onClick={addPost}> Опубликовать </button>
                    
        </div>
    )
}

export default New_Post
