import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError:false,
      }
      this.handliClick=this.handleClick.bind(this);
    }
    static getDerrivedFromError(error){
    return {hasError:true};

    }
    handleClick=()=>{
        this.setState(prevstate=>({
            hasError:!prevstate.hasError
        }))
    }
    componentDidCatch(error,errorInfo){
       console.log(errorInfo);
    }
  render() {
    
    if(this.state.hasError) return (
    <h1>Something went wrong</h1>
    )
    return <button onClick={this.handleClick}>See to submit</button>
  }
}
