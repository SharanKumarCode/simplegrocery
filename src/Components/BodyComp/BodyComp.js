import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import styles from './BodyComp.module.css';

import Cart from '../Cart/Cart';
import PagesComponent from '../PagesComponent/PagesComponent';

export class BodyComp extends Component{

    render(){
        const pageCompNames = ["Vegetables","Fruits","DryFruits","FoodGrains","Masalas"]
        return (
            <div className = {styles.container}>
                <Switch>
                    <Route path = "/" exact render = {()=><PagesComponent pageCategoryName = {pageCompNames[0]}/>}></Route>
                    <Route path = "/vegetables" render = {()=><PagesComponent pageCategoryName = {pageCompNames[0]}/>}></Route>
                    <Route path = "/fruits" render = {()=><PagesComponent pageCategoryName = {pageCompNames[1]}/>}></Route>
                    <Route path = "/dryFruits" render = {()=><PagesComponent pageCategoryName = {pageCompNames[2]}/>}></Route>
                    <Route path = "/foodGrains" render = {()=><PagesComponent pageCategoryName = {pageCompNames[3]}/>}></Route>
                    <Route path = "/masalas" render = {()=><PagesComponent pageCategoryName = {pageCompNames[4]}/>}></Route>
                    <Route path = "/cart" component = {Cart} />
                </Switch>
            </div>
        )
    }
}