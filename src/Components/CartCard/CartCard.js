import React, { Component } from 'react';
import { connect } from 'react-redux';
import { cartAction } from '../../actions/cartAction';

import styles from '../CartCard/CartCard.module.css';

class CartCard extends Component{

    constructor(props){
        super(props);
        this.state = {
            opacity: 1,
            transitionTime: "0.3s"
        }
    }

    onCartRemove(){
        this.props.cartAction({
            type: "removeCart",
            payload: {
            ID: this.props.id,
        }})
    }

    componentWillUnmount(){
        this.setState({
            opacity: 0,
            transitionTime: "1s"
        })
    }
    
    render(){

        const mainContainerOpacity = {
            opacity: this.state.opacity,
            transitionDuration: this.state.transitionTime
        }

        const spanStyle = {
            marginTop: "20%",
            fontSize: "1.2em",
        }

        const smallFontStyle = {
            fontSize: "1em"
        }

        const imgStyle = {
            backgroundImage: "url("+this.props.imageurl+")"
        }

        const divPadding = {
            paddingTop: "10%"
        }

        return(
            <div className = {styles.cartCardContainer} style = {mainContainerOpacity}>
                <div style = {{paddingTop: "10%", background: this.props.color}}>
                    <span className = {styles.spanStyle}>{this.props.category}</span>
                </div>
                <div style = {{paddingTop: "10%", fontSize: "1.3em"}}>
                    <span>{this.props.name}</span>
                </div>
                <div className = {styles.imgDiv} style = {imgStyle}>
                    
                </div>
                <div style = {divPadding}>
                    <span style = {spanStyle}>{`${this.props.quantity} kgs`}</span>
                    <br/>
                    <span style = {smallFontStyle}>{`${this.props.price} / kg`}</span>
                </div>
                <div style = {{paddingTop: "5%", fontSize: "1.5em"}}>
                    <span>{`Rs. ${this.props.price * this.props.quantity}`}</span>
                </div>
                <div>
                    <button onClick = {this.onCartRemove.bind(this)}>X</button>
                </div>
            </div>
            
        )
    }
}

const mapDispatchToProps = dispatch => ({
    cartAction: (payload) => dispatch(cartAction(payload))
})

export default connect(null,mapDispatchToProps)(CartCard);