import React from 'react';
import MyProfile from './My_Profile'; 
import New_Post_Container from './New_Post_Container';
import Posts_Container from './Posts_Container';

function Home() {
    return (
        <div className="main__profile">
            <MyProfile />
            <div className="main__posts">
                <New_Post_Container  />
                <Posts_Container />
            </div>
        </div>
    )
}

export default Home
