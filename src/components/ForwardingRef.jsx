import React, { createRef, forwardRef } from 'react'

// function ForwardingRef() {
//   return (
//     <div>
//       <input />
//     </div>
//   )
// }
const ForwardingRef=forwardRef((props,ref)=>{
   return(
    <>
    <input type='text' ref={ref}/>
    </>
   )
 })
export default ForwardingRef
