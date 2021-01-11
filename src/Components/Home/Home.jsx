import React from 'react';
import My_Profile_Container from './My_Profile_Container'; 
import New_Post_Container from './New_Post_Container';
import Posts_Container from './Posts_Container';

function Home() {
    return (
        <div className="main__profile">
            <My_Profile_Container />
            <div className="main__posts">
                <New_Post_Container  />
                <Posts_Container />
            </div>
        </div>
    )
}

export default Home
