import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import styles from './BodyComp.module.css';

import Vegetables from '../Vegetables/Vegetables';
import { Fruits } from '../Fruits/Fruits';
import Cart from '../Cart/Cart';

export class BodyComp extends Component{

    render(){
        return (
            <div className = {styles.container}>
                <Switch>
                    <Route path = "/" exact component = {Vegetables} />
                    <Route path = "/vegetables" component = {Vegetables} />
                    <Route path = "/fruits" component = {Fruits} />
                    <Route path = "/cart" component = {Cart} />
                </Switch>
            </div>
        )
    }
}