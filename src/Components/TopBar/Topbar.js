import React, {Component} from 'react';
import styles from './Topbar.module.css';
import {Link} from 'react-router-dom';

export class TopBar extends Component {

    render(){
        
        return (
            <nav className = {styles.navBarContainer}>
                <div className = {styles.logoContainer}>
                    <span>Simple Grocery</span>
                </div>
                <div className = {styles.listDiv}>
                <ul className = {styles.listContainer}>
                    <li className = {styles.list}><Link to="/cart">Cart</Link></li>
                    <li className = {styles.list}><a href="#contact">Contact Us</a></li>
                </ul>
                </div>
            </nav>
        )
    }
}