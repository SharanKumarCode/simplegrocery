import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartCard from '../CartCard/CartCard';
import styles from '../Cart/Cart.module.css';

class Cart extends Component{

    
    render(){

        const dataArrays = Object.values(this.props.datas).map(data=>{
            return <CartCard 
                    key = {data.productDetails.id}
                    id = {data.productDetails.id}
                    category = {data.productDetails.category}
                    name = {data.productDetails.productName} 
                    price = {data.productDetails.price} 
                    imageurl = {data.productDetails.productImg}
                    quantity = {data.cartDetails.quantity}
                    color = {data.productDetails.productColor}
                    />
        });

        const totalPrice = Object.values(this.props.datas).map(data=> {
            return data.productDetails.price * data.cartDetails.quantity
        }).reduce((a,b)=>{return a+b},0)

        console.log(totalPrice);

        return(
            <div className = {styles.wholeCartContainer}>
                <div className = {styles.container}>
                    {dataArrays}
                </div>
                <div className = {styles.total}>
                    <div style = {{paddingTop: "8%", fontSize: "1.2em"}}>
                        <span>TOTAL</span>
                    </div>
                    <div style = {{paddingTop: "2.5%", fontSize: "1.5em"}}>
                        <span>{`${dataArrays.length} ${dataArrays.length > 1 ? "items" : "item"}`}</span>
                    </div>
                    <div style = {{fontSize: "3em", marginRight: "10%"}}>
                        <span>{`Rs. ${totalPrice}`}</span>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    let filteredState = Object.values(state.Products).filter(data=>{
        return data.cartDetails.cartAdded === true;
    })

    return {datas:{...filteredState}}
}

export default connect(mapStateToProps)(Cart);