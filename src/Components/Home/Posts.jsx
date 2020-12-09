import React from 'react'; 
import Post from './Post'; 

function Posts(props) {

    let statePosts = props.posts.profilePage.savePost.map(item => <Post text={item.text} />); 
    
    return (
    <div>
        {
          statePosts
        }
    </div>
                 
        
    )
}

export default Posts
