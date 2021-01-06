import React from 'react'; 
import Header from './Components/Header'; 
import Home from './Components/Home/Home'
import Companys from './Components/Companys/Companys';
import News from './Components/News/News'
import { BrowserRouter, Route } from 'react-router-dom';
import Messages_Container from './Components/Messager/Messages_Container';


function App(props) {
  return (
    <BrowserRouter>
      <Header/>
    <section className="main">
        <Route exact path="/Home" render={() => <Home posts={props.state} dispatch={props.dispatch}/>} />
        <Route exact path="/News" render={() => <News dataNews={props.state.newsPage}/>} />
        <Route exact path="/Messages" render={() => <Messages_Container messagesState={props.state.messagesStore} dispatch={props.dispatch}/>} />
        <aside>   
        <Companys />
        </aside> 
    </section>
    </BrowserRouter>
  );
}

export default App;
