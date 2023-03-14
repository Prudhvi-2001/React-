import React, { Component } from 'react'

export default class DetailedRef extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isOpen:false,
         setText:''
      }
      this.timeOut=null
      this.onClickHandler=this.onClickHandler.bind(this);
      this.onClickBlur=this.onClickBlur.bind(this);
      this.onFucousHandler=this.onFucousHandler.bind(this);   
    }
    onClickHandler(){
        this.setState(prevstate=>({
            isOpen:!prevstate.isOpen
        }))
    }
    onClickBlur(){
        this.timeOut=setTimeout(()=>{
            this.setState({
                isOpen:false
            })
        },1000)
    }
    onFucousHandler(){
        clearTimeout(this.timeOut);
    }
  render() {
    return (
      <div onBlur={this.onClickBlur} onFocus={this.onFucousHandler}>
          <button
          onClick={this.onClickHandler}
          aria-expanded={this.state.isOpen}
          aria-haspopup="true"
          >{this.state.isOpen ? "PleasePick":"Select an Option"}</button>
          {
            this.state.isOpen && (
                <ul>
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>

                </ul>
            )
          }


      </div>
    )
  }
}
