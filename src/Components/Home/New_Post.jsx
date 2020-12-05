import React from 'react'

function New_Post(props) {

    let inputPost = React.createRef(); 
    
    let addPost = () => {
        let textPost = inputPost.current.value;
        props.addPost(textPost);  
    }; 

    return (
        <div className="main__new-post">
                    <input type="text" placeholder="New post" ref={inputPost}></input>
                    
                   <button onClick={addPost}> Опубликовать </button>
                    
        </div>
    )
}

export default New_Post
