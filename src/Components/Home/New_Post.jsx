import React from 'react'

function New_Post(props) {

    let inputPost = React.createRef(); 
    
    let addPost = () => {
        props.dispatch({ type: 'ADD-POST'});  
    }; 

    let updatePost = () => 
    {
        let textPost = inputPost.current.value; 
        props.dispatch({ type: 'UPDATE-POST', newPost: textPost }); 
    }; 

    return (
        <div className="main__new-post">
                    <input type="text" placeholder="New post" ref={inputPost} onChange={updatePost} value={props.posts.profilePage.newPost}></input>
                    
                   <button onClick={addPost}> Опубликовать </button>
                    
        </div>
    )
}

export default New_Post
