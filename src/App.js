import React from 'react'; 
import Header from './Components/Header'; 
import Home from './Components/Home/Home'
import Companys from './Components/Companys/Companys';
import News from './Components/News/News'
import { BrowserRouter, Route } from 'react-router-dom';
import { updatePost } from './redux/state';

function App(props) {
  return (
    <BrowserRouter>
      <Header/>
    <section className="main">
        <Route exact path="/Home" render={() => <Home posts={props.state} addPost={props.addPost} updatePost={updatePost}/>} />
        <Route exact path="/News" render={() => <News dataNews={props.state.newsPage}/>} />
        <aside>   
        <Companys />
        </aside> 
    </section>
    </BrowserRouter>
  );
}

export default App;
