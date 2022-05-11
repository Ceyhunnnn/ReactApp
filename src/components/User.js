import React, { Component } from 'react'

import ProtpTypes from "prop-types";


 class User extends Component {
  render() {
    //Destructing
    const {name,department,salary}=this.props;
    return (
      <div className='col-md-8 mb-4'>
        <div className='card'>
          <div className='card-header d-flex justify-content-between'>
            <h4 className='d-inline'>{name}</h4>
            <i className='far fa-trash-alt' style={{cursor:"pointer"}}></i>
          </div>
          <div className='card-body'>
            <p className='card-text'>salary : {salary}</p>
            <p className='card-text'>department : {department}</p>
          </div>
        </div>
      </div>
      
    )
  }
}
User.defaultProps={
  name:"Ahmet",
  salary:"3000",
  department:"Farmer"
};
User.propTypes={
  name:ProtpTypes.string.isRequired,
  salary:ProtpTypes.string.isRequired,
  department:ProtpTypes.string.isRequired
};
export default User;
/*
static defaultProps={
  name:"Ceyhun",
  salary:90000,
  department:"Doctor"
}
*/
