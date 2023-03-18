import React from 'react'

function ChildrenProp() {
    const childProp=(props)=>{
        return <p>{props.children}</p>

    }
    
  return (
    <div>
      <childProp  >
        Sample Loaded Child
      </childProp>
    </div>
  )
}

export default ChildrenProp
