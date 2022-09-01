import React, { Component } from 'react'
//statefull
 class Main extends Component {
        constructor(){
            super()
            this.state = {
                title:'Here you can count this number',
                number: 0
            }
        }
        increaseNumber = () => {
            this.setState({
                number: this.state.number +1
            })
            
        }
        decreaseNumber = () => {
            this.setState({
                number: this.state.number -1
            })
            
        }
        resetNumber = () => {
            this.setState({
                number: 0 
            })
            
        }
        render() {
            return (
               <div id='count-number'>
                <h3>{this.state.title}</h3>
                <p id='number'>{this.state.number}</p>
                <button onClick={this.increaseNumber}>increase</button>
                <button onClick={this.decreaseNumber}>decrease</button>
                <button onClick={this.resetNumber}>Reset</button>
              </div>
            )
    }
}


export default Main