import React, { useState } from 'react'
import Input from './Input'
import './ref.css'
function RefForm() {
    const [values,setValues]=useState({
        fullname:'',
        password:'',
    })
    const userData=[{
        id:1,
        type:'text',
        name:'username'
    
     },
     {
        id:2,
        type:'password',
        name:'password'
    
     }
    

    ]
    const onChangeSubmit=(event)=>{
        setValues({...values,[event.target.name]:event.target.value})


    }
    const clickSubmitHandler=(event)=>{
        event.preventDefault();
         console.log(values.password)
         console.log(values.fullname)


    }
      
  return (
    <div>
      <form onSubmit={clickSubmitHandler}>
       {userData.map((data)=>(<input {...data} key={data.id} value={values[data.name]} onChange={onChangeSubmit}/>))}
      <input type="submit" value='Submit'/>
      </form>
    </div>
  )
}

export default RefForm
