import React from 'react'; 
import Header from './Components/Header'; 
import Home from './Components/Home/Home'
import Companys from './Components/Companys/Companys';
import News from './Components/News/News'
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header/>
    <section className="main">
        <Route path="/Home" component={Home} />
        <Route path="/News" component={News} />
        <aside>   
        <Companys />
        </aside> 
    </section>
    </BrowserRouter>
  );
}

export default App;
