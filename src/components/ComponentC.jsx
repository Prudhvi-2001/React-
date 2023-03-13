import React from 'react'
import { useContext } from 'react';
import { userContext } from '../App';
import LifecycleHooks from './LifecycleHooks';
import Toggle from './Toggle';
function ComponentC() {
    const user=useContext(userContext);
   const submitHandler=()=>{
        console.log({user});
    }
  return (
    <div>
        <button onClick={submitHandler}>
            Submit

        </button>
       <p>{user}</p>
       <LifecycleHooks/>
       <Toggle/>
    </div>
  )
}

export default ComponentC
