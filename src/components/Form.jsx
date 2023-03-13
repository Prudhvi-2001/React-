import React from 'react'
import { useState } from 'react'
function Form() {
    const [values,setValues]=useState({
        name:'',
        email:''
    })
    const handleSubmit=(e)=>{
      
    e.preventDefault();
    const target=e.target;
    const value=target.value;
    const type=target.type;
    console.log(target)
    console.log(value)
    console.log(type)
    const name=target.name;
    console.log(name)

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' value={values.name} onChange={(event)=>setValues({...values,name:event.target.value})} /><br/>
            <input type='text' value={values.email} onChange={(event)=>setValues({...values,email:event.target.value})} /><br></br>
            <button>Submit</button>

        </form>
      
    </div>
  )
}

export default Form
