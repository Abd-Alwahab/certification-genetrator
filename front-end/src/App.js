import React, { Component } from 'react';
import './App.css';
import { BrowserRouter , Route } from 'react-router-dom';
import Home from './Components/HomeComponent/Home';
import Web from './Components/WebComponent/Web';
import Android from './Components/AndroidComponenet/Android';
import Hacking from './Components/HackingComponent/Hacking';


class App extends Component {


  render() {
    return (
      <BrowserRouter>
      <div className="App">
        
        
         <Route path="/" component={Home}/>
         <Route path="/bacloru" component={Web}/>
         <Route path="/master" component={Android}/>
         <Route path="/doctor" component={Hacking}/>

         

         </div>
      </BrowserRouter>
    );
  }
}

export default App;
