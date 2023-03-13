import React, { Component } from 'react'
import axios from 'axios'
export default class UsageofSetState extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           dataF:[]
        }
      }   
      componentDidUpdate(){
          axios.get('https://jsonplaceholder.typicode.com/posts')
          .then((response)=>{
            console.log(response);
              this.setState({
                  dataF: response.data
              });
          })
          .catch((error)=>console.log(error))
  
      }
  render() {
   
    return (
      <>
      {this.state.dataF.map((dum)=><p>{dum}</p>)}
      </>
    )
  }
}
