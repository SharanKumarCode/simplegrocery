import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';

import styles from './PagesComponent.module.css';

class PagesComponent extends Component{

    constructor(props){
        super(props);
    }
    
    render(){
        let products = Object.values(this.props.datas).filter(data=>{
            return data.productDetails.category === this.props.pageCategoryName;
        }).map(data=>{
            return data;
        })
        const dataArrays = products.map(data=>{
            return <Card 
                    key = {data.productDetails.id}
                    id = {data.productDetails.id} 
                    name = {data.productDetails.productName} 
                    price = {data.productDetails.price} 
                    imageurl = {data.productDetails.productImg} 
                    color = {data.productDetails.productColor} 
                    cartStatus = {data.cartDetails.cartAdded}
                    />
        });

        return (
            <div>
            <div className = {styles.container}>
                {dataArrays}
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {datas: {...state}}
}

export default connect(mapStateToProps)(PagesComponent);