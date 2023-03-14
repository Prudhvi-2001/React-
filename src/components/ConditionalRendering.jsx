import React, { Component } from 'react'

export default class ConditionalRendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         temparature:'',

      }
      this.clickHandler=this.clickHandler.bind(this);
    }
    clickHandler(event){
        event.preventDefault();
        console.log(this.state.temparature);
    }
  render() {
    const temp=this.state.temparature;
    return (
      <div>
        <form onSubmit={this.clickHandler}>
            <input type='number' value={this.state.temparature} onChange={(event)=>this.setState({
                temparature:event.target.value
            })}></input><br/>
            <button>Submit</button>
        </form>
       {
       temp
       }
      </div>
    )
  }
}
