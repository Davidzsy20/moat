import React, { Component } from 'react'
export default class Location extends React.Component {
    constructor(props) {
        super(props);
        this.state = {start: '', dest: ''};
        this.handleInputStart = this.handleInputStart.bind(this);
        this.handleInputDest = this.handleInputDest.bind(this);
    }
    componentDidUpdate() {
        const start = this.state.start; 
        const dest = this.state.dest; 
        console.log(start, dest);
    }
    handleInputStart(e) {
    this.setState({start: e.target.value })
    }
    handleInputDest(e) {
        this.setState({dest : e.target.value })
        }
render () {

    return (
        <div>
           
           <p1> Starting City </p1><input value = {this.state.start} onChange = {this.handleInputStart}/>
           <p1> Destination</p1> <input value = {this.state.dest} onChange = {this.handleInputDest} />
            
           
        </div>
            )
         }
}
