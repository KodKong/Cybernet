import React from 'react';
import MyProfile from './My_Profile'; 
import New_Post_Container from './New_Post_Container';
import Posts from './Posts'; 

function Home(props) {
    return (
        <div className="main__profile">
            <MyProfile />
            <div className="main__posts">
                <New_Post_Container  />
                <Posts posts={props.posts}/>
            </div>
        </div>
    )
}

export default Home
