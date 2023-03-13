import React, { useContext } from 'react'
import User from './User'
function Data() {
    const userActive=true
    const userData=[
        {
            id:1,
            name:'Prudhvi',
            role:'Software Engineer'

        },
        {
            id :2,
            name:'Dileep',
            role:'Support engineer'
        }
    ]
    const items=userData.map(data=><User userDetails={data} key={data.id}/>)
  return (
    //condition rendering this is...
    //We use braces for passing the objects into them
    <div>
       {/* {userActive ? userData.map(data=><User userDetails={data}/>):<p>User is'nt active</p>} */}
       {items}
       
       <h2></h2>
    </div>
  )
}

export default Data
