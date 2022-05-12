import React, { Component } from 'react'

import ProtpTypes from "prop-types";


 class User extends Component {
   state={
     isVisible:false
   }
  //  constructor(props){
  //    super(props);
  //    this.state={
  //     isVisible:false
  //    }
  //  }


// constructor(props){
//   super(props)
//   this.onClickEvent=this.onClickEvent.bind(this);
// }
  // onClickEvent(event){
  //   console.log(this);
  // }

  onClickEvent=(number,e)=>{
    //console.log(number);
   this.setState({
     isVisible:!this.state.isVisible,
     


   })
   //console.log(this.state.isVisible);
  }
  render() {

    //Destructing0
    const {name,department,salary}=this.props;
    const{isVisible}=this.state;
    //this.stateden veri cekilir
    return (
      <div className='col-md-8 mb-4'>
        <div className='card' style={{cursor:"pointer"}} >
          <div className='card-header d-flex justify-content-between'>
            <h4 className='d-inline' onClick={this.onClickEvent.bind(this,34)}>{name}</h4>
            
            <i className='far fa-trash-alt' style={{cursor:"pointer"}}></i>
          </div>
          {
            isVisible?   <div className='card-body'>
            <p className='card-text'>salary : {salary}</p>
            <p className='card-text'>department : {department}</p>
          
          </div>:null
          }
       
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
