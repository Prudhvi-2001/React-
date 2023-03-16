import React, { Component, createRef } from 'react'
import ForwardingRef from './ForwardingRef'

 class FRParent extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef=createRef();
    }
    clickHandler=()=>{
        this.inputRef.current.focus()
    }
  render() {
    return (
      <div>
        <ForwardingRef ref={this.inputRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FRParent
