import React from 'react'

function DatePicker() {
    const myComponents={
        DatePicker:function DatePicker(props){
            return <> Imagine a {props.color} datepicker here.</>
        }
        
    }
  return (
    <div>
      <myComponents.DatePicker color="blue"/>
    </div>
  )
}

export default DatePicker
