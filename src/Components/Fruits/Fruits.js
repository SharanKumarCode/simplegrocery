import React, { Component } from 'react';

export class Fruits extends Component{
    render(){
        const divStyle = {
            position: "relative",
            marginTop: "3%"
        }
        return(
            <h2 style = {divStyle}>Fruits</h2>
        )
    }
}
