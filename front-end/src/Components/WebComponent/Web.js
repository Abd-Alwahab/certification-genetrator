import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver'; 
import './Web.css';



class Bacloru extends Component {


    state = {
  
      name: '',
      univerv: '',
      certi: '',
      'moreinfo': ''
  
    }
  
  
    handelChange = (name) => {
       name = name.target.value;  
      this.setState({
  
        name,
      })  
      
    }
  
    
    handeluniver = (univer) => {
  
      univer = univer.target.value;
  
     this.setState({
  
       univer 
     })  
     
   }
  
  
   
   handelinfo = (info) => {
  
    info = info.target.value;
  
   this.setState({
  
     moreinfo: info 
   })  
   
  }
   
  
    createPDF = () => {
      axios.post('/create-pdf', this.state)
      .then(() => axios.get('fetchpdf', {responseType: 'blob'}))
      .then((res) => {
  
        const resblobe = new Blob([res.data], {type: 'application/pdf'});
        saveAs(resblobe,'new.pdf')
      })
    }
  
  
    getcertificate = (event) => {
  
      this.setState({certi: event.target.value})
      
  
    }
  
  
  
  
    render() {
      return (
        <div className="bac">
  
  
        <h1>Get Your Web Development Certification</h1>

          <form className='form'>
           
          <input id="name" type="text" placeholder="Enter Your Name" name="name" className="username" onChange={this.handelChange} required/>
          
          <input id="univer" type="text" placeholder="Enter Your university" name="univer" className="username" onChange={this.handeluniver} required/>
      
          
          <input id="univer" type="text" placeholder="Enter more info" name="univer" className="username" onChange={this.handelinfo} required/>
      
      
    
          </form>
          <button onClick={this.createPDF} >Download </button>
      
      
        
          </div>
      );
    }
  }
  
  export default Bacloru;
  