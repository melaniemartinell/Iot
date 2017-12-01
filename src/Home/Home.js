import React, { Component } from 'react';
import {Link} from 'react-component-routing';
import { PageHeader, Button } from 'react-bootstrap';
import AppContent from '../App/AppContent';
import frog from '../Home/frog_green.png';
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 

class Home extends Component {
  render() {
    return ( 
      <AppContent className="Home" >
        <PageHeader>Home <small> IOT Ecosystem </small></PageHeader>
      <div style={{backgroundColor: '#96858F', padding: '10px'}}>
      <div style={{textAlign: 'center', marginLeft: '20%'}}>
        <div style={{marginBottom: '30px', width: '70%', textAlign: 'center', backgroundColor: '#F4F4F4', padding: '30px', border: '10px solid black'}}>
          <button style={{padding: '20px', width: '200px', backgroundColor: '#DCD0C0', }}>
            <Link to={'Data'} >  <span style={{color: 'white', fontSize: '20px'}} className="fa fa-table"> Data </span> </Link>
          </button>
        </div>
        <div style={{padding: '30px', width: '70%', textAlign: 'center', border: '10px solid black', backgroundColor: '#F4F4F4'}}>
        <img src={frog} style={{height: '200px', width: '200px', border: '2px solid black'}} alt="logo"/>
          <div style={{marginTop: '15px'}}>
         
            <button style={{padding: '14px', backgroundColor: '#DCD0C0', width: '200px'}}> <span style={{color: 'white', fontSize: '20px'}} className="fa fa-cutlery"> Feed Frog </span> </button>
          </div>
        </div>
      </div>
      </div>
      </AppContent>
    );
  }
}

export default Home;
