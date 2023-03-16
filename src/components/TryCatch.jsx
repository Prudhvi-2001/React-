import React, { Component } from 'react'

export default class TryCatch extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError:null
      }
      this.clickSubmitHandler=this.clickSubmitHandler.bind(this)
    }
    componentDidMount(){
        console.log("What is this state",+this);
    }
    clickSubmitHandler(){
        try{
     

        }catch(error){
        this.setState({
            hasError:error
        })

        }
    }
  render() {
    if(this.state.hasError){
        return <h3>Caught an Error</h3>
    }
    return (
    <button onClick={this.clickSubmitHandler}>Try Catch</button>

  
    )
    }
}
