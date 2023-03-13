import React, { Component } from 'react'

export default class LifecycleHooks extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    componentDidMount(){

    document.title=`You clicked this button ${this.state.count} times`       

    }
    componentDidUpdate(){
        document.title=`Clicked ${this.state.count} times`
    }
  render() {
    return (
      <div>
        <button onClick={()=>this.setState({
            count:this.state.count+1
            
        })}>Click Here</button>
      <p>  {this.state.count}</p>


      </div>
    )
  }
}
