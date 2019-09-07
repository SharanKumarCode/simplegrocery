import React, {Component} from 'react';
import styles from './BodyComp.module.css';
import { Card } from '../Card/Card';
import dataArr from '../../data/data'

export class BodyComp extends Component{

    constructor(){
        super();
        this.state = {
            products: [...dataArr]
        }
    }

    componentDidMount(){
        console.log("logging data...");
        this.setState({
            products: dataArr
        })
        console.log(this.state.products);
    }
    
    render(){
        const dataArrays = this.state.products.map(data=>{
            return <Card key = {data.id} name = {data.productName} price = {data.price} imageurl = {data.image} color = {data.color} />
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