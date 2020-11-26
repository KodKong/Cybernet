import React from 'react'; 
import Header from './Components/Header'; 
import MyProfile from './Components/My_Profile'; 
import NewPost from './Components/New_Post';
import Posts from './Components/Posts'; 
import Companys from './Components/Companys';

function App() {
  return (
    <div>
      <Header/>
      
    <section className="main">
        <div className="main__profile">
            <MyProfile />
            <div className="main__posts">
                <NewPost />
                <Posts/>
            </div>
        </div>
        <aside>   
        <Companys />
        </aside> 
    </section>
    </div>
  );
}

export default App;
