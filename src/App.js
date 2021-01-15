import React from 'react'; 
import Header from './Components/Header'; 
import Home from './Components/Home/Home'
import Companys_Container from './Components/Companys/Companys_Container';
import News_Container from './Components/News/News_Container'
import { Redirect, Route } from 'react-router-dom';
import Messages_Container from './Components/Messager/Messages_Container';
import Users_Container from './Components/Users/Users_Container';
import User_Page_Container from './Components/Users/User-Page/User_Page_Container';

function App(props) {
  return (
    <div>
      <Header/>
    <section className="main">
        <Route exact path="/Home" render={() => <Home />} />
        <Route exact path="/News" render={() => <News_Container/>} /> 
        <Route exact path="/Profile/:user" render={() => <User_Page_Container/>} />
        <Route exact path="/Messages" render={() => <Messages_Container/>} />
        <Route exact path="/Users" render={() => <Users_Container/>} />   
        <Redirect from="/" to="/Home" />
        <aside>   
        <Companys_Container />
        </aside> 
    </section>
    </div>
  );
}

export default App;
