import React, {Component} from 'react';
import styles from './Card.module.css';

export class Card extends Component{

    constructor(props){
        super(props);
        this.state = {
            hoverChange: {},
            color: '',
            imageUrl : ''
        }
    }

    componentDidMount(){
        this.setState({
            color: this.props.color,
            imageUrl : this.props.imageurl
        });
        console.log(this.state.imageUrl);
    }

    hoverEnter(){
        this.setState({
            hoverChange : {
                background: this.state.color,
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

    render(){
        const imageStyle = {
            backgroundImage : "url("+this.state.imageUrl+")"
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
                    <div className = "quantity">
                        <label htmlFor = "quantity"> Quantity
                            <input 
                            className = {styles.input} 
                            name = "quantity" 
                            type = "number" 
                            min = "0" 
                            max = "10" 
                            step="0.5" 
                            placeholder = "0"
                            onKeyDown = {()=>{return false}} />Kg
                        </label>
                    </div>
                    <div className = {styles.cartAdd}>
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