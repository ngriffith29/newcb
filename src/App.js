import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import Broken from './components/Broken'
import NavBar from './components/navBar'
function App() {
  return (
    <div >
    
    <BrowserRouter>   

   <NavBar />
   <Route exact path="/" component={Home} />
   <Route path="/broken" component={Broken} />




   
    </BrowserRouter>
 
    </div>
  );
}

export default App;
