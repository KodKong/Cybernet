import React from 'react'; 
import Header from './Components/Header'; 
import Home from './Components/Home/Home'
import Companys from './Components/Companys/Companys';
import News from './Components/News/News'
import { Route } from 'react-router-dom';
import Messages_Container from './Components/Messager/Messages_Container';


function App(props) {
  return (
    <div>
      <Header/>
    <section className="main">
        <Route exact path="/Home" render={() => <Home />} />
        <Route exact path="/News" render={() => <News />} />
        <Route exact path="/Messages" render={() => <Messages_Container />} />
        <aside>   
        <Companys />
        </aside> 
    </section>
    </div>
  );
}

export default App;
