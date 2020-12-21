import React from 'react'; 
import Header from './Components/Header'; 
import Home from './Components/Home/Home'
import Companys from './Components/Companys/Companys';
import News from './Components/News/News'
import Messages from './Components/Messager/Messages'
import { BrowserRouter, Route } from 'react-router-dom';


function App(props) {
  return (
    <BrowserRouter>
      <Header/>
    <section className="main">
        <Route exact path="/Home" render={() => <Home posts={props.state} dispatch={props.dispatch}/>} />
        <Route exact path="/News" render={() => <News dataNews={props.state.newsPage}/>} />
        <Route exact path="/Messages" render={() => <Messages />} />
        <aside>   
        <Companys />
        </aside> 
    </section>
    </BrowserRouter>
  );
}

export default App;
