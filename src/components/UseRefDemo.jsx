import React, { createRef, useEffect } from 'react'

function UseRefDemo() {
    const useRefvariable=createRef();
    useEffect(()=>{
        useRefvariable.current.focus()

    },[])
  return (
    <div>
        <input ref={useRefvariable}/>
      
    </div>
  )
}

export default UseRefDemo
