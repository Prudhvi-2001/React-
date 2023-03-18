import React from 'react'

function SpreadOperator() {
    const Button=(props)=>{
     const {kind,...inputProps}=props;
     const classname=kind==="primary" ?"Primary Buttton" :
     "secondary Button"
     return <button className={classname} {...inputProps}></button>

    }
  return (
    <div>
      <Button kind="" onClick={()=>console.log("Clicked")}>Hello world</Button>
    </div>
  )
}

export default SpreadOperator
