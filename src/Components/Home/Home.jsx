import React from 'react';
import MyProfile from './My_Profile'; 
import NewPost from './New_Post';
import Posts from './Posts'; 

function Home() {
    return (
        <div className="main__profile">
            <MyProfile />
            <div className="main__posts">
                <NewPost />
                <Posts/>
            </div>
        </div>
    )
}

export default Home
