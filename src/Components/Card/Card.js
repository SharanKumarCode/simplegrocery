import React, {Component} from 'react';
import { connect } from 'react-redux';
import styles from './Card.module.css';
import { cartAction } from '../../actions/cartAction';

class Card extends Component{

    constructor(props){
        super(props);
        this.state = {
            hoverChange: {},
            quantity: 0,
        }
    }

    hoverEnter(){
        this.setState({
            hoverChange : {
                background: this.props.color,
                clipPath: "polygon(0 0, 0% 20%, 0 51%, 0% 80%, 0 100%, 53% 100%, 100% 100%, 100% 80%, 100% 49%, 100% 20%, 100% 0, 50% 0)"
            }
        })
    }

    hoverExit(){
        this.setState({
            hoverChange : {
                background: "none",
                clipPath: "polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)"
            }
        })
    }

    quantityChange(operation){
        if(operation === "minus"){
            if(this.state.quantity >= 0.5){
                this.setState({
                    quantity: this.state.quantity - 0.5
                })
            }
        } else {
            if(this.state.quantity <= 10){
                this.setState({
                    quantity: this.state.quantity + 0.5
                })
            }
        }
    }

    addCart(){
        if(this.state.quantity > 0){
        this.props.cartAction({
            type: "addCart",
            payload: {
            ID: this.props.id,
            quantity: this.state.quantity
        }})
        this.props.cartAction({
            type: "changeLoadingStatus",
            payload: {
                isLoading: true
            }
        })
        setTimeout(()=>{
            this.props.cartAction({
                type: "changeLoadingStatus",
                payload: {
                    isLoading: false
                }
        })},3000);
        }
    }

    render(){
        const imageStyle = {
            backgroundImage : "url("+this.props.imageurl+")"
        }

        let cartStatusStyle = {}
        if(this.props.cartStatus){
            cartStatusStyle = {
                background: "whitesmoke",
                color: "grey"
            }
        } else {
            cartStatusStyle = {
                background: "rgb(39, 38, 38)",
                color: "white"
            }
        }

        return(
            <div className = {styles.cardContainer} onMouseEnter = {this.hoverEnter.bind(this)} onMouseLeave = {this.hoverExit.bind(this)}>
                <div className = {styles.mainCardContainer}>
                <div className = {styles.product}>
                    <div className = {styles.title}>
                        <span>{this.props.name}</span>
                    </div>
                    <div className = {styles.image} style = {imageStyle}>
                    </div>
                </div>
                <div className = {styles.details}>
                    <div className = "price">
                        <span>{`Rs. ${this.props.price} / kg`}</span>
                    </div>
                    <div className = {styles.quantity}>
                        <span>Quantity</span>
                        <div className = {styles.innerButtons} onClick = {this.quantityChange.bind(this,"minus")}>-</div>
                        <label htmlFor = "quantity">
                            <input 
                            className = {styles.input} 
                            name = "quantity" 
                            type = "text" 
                            placeholder = "0"
                            value = {this.state.quantity}
                            readOnly
                            onKeyDown = {()=>{return false}} />
                        </label>
                        <div className = {styles.innerButtons} onClick = {this.quantityChange.bind(this,"plus")}>+</div>
                        <span>Kg</span>
                    </div>
                    <div className = {styles.cartAdd} onClick = {this.addCart.bind(this)} style = {cartStatusStyle}>
                        <span>ADD TO CART</span>
                    </div>
                </div>
                </div>
                <div className = {styles.backGround} style={this.state.hoverChange}>
                </div>
            </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
    cartAction: (payload) => dispatch(cartAction(payload))
});

export default connect(null,mapDispatchToProps)(Card);