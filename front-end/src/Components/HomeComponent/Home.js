import React, { Component } from 'react';
import './Home.css';
import {NavLink} from 'react-router-dom';


class Home extends Component {

    
 
    render() {

        return (

            <div className="home_layout">
                <ul className="buttons">
                    <li className="item"><NavLink to="/bacloru" exact >Web Development</NavLink> </li>
                    <li className="item"><NavLink to="/master" >Android Development</NavLink></li>
                    <li className="item"><NavLink to="/doctor" >Ethical Hacking</NavLink></li>           
                </ul>     
            </div>

          


 
        );
    }
}


export default Home;