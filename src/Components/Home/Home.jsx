import React from 'react';
import MyProfile from './My_Profile'; 
import NewPost from './New_Post';
import Posts from './Posts'; 

function Home(props) {
    return (
        <div className="main__profile">
            <MyProfile />
            <div className="main__posts">
                <NewPost addPost={props.addPost} updatePost={props.updatePost} posts={props.posts}/>
                <Posts posts={props.posts}/>
            </div>
        </div>
    )
}

export default Home
