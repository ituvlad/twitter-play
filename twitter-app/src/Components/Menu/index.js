import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class Menu extends Component {  
  render(){
      return (
        <div style={{paddingBottom : "50px"}}>
            <NavLink exact to="/" style={{marginRight:"20px"}} activeStyle={{color:"red"}}>Home</NavLink>
            <NavLink to="/DonaldTrump" style={{marginRight:"20px"}} activeStyle={{color:"red"}}>Donald Trump</NavLink>
            <NavLink to="/HillaryClinton" style={{marginRight:"20px"}} activeStyle={{color:"red"}}>Hillary Clinton</NavLink>            
        </div>
      );
  }
}