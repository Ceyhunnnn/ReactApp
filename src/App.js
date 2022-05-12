import Navbar from "./components/navbar";
import './App.css';
import Users from "./components/Users";

import React, { Component } from 'react'

export default class App extends Component {

  state={
    users:[
      {
        id:1,
        name:"Ceyhun",
        salary:"5000",
        department:"Computer"
      },
      {
        id:2,
        name:"Ali",
        salary:"4000",
        department:"Doctor"
      },
      {
        id:3,
        name:"Mustafa",
        salary:"9000",
        department:"Farmer"
      }
    ]
  }
  render() {
    return (
      <div className='container'>
      <Navbar  title="User App" />
      <hr/>
      <Users users={this.state.users}/>
     
    </div>
    )
  }
}
