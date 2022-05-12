import React from 'react'

 function navbar(props) {
  
  return (
    <div>
      <h3>{props.title}</h3>
    </div>
  )
}
//zorunlu olan bir string title gönderilmeli

// navbar.propTypes={
//   title:ProtpTypes.string.isRequired
// };
// //default props
// navbar.defaultProps={
//   title:"Default Title"
// };
export default navbar;