import React, {Component} from 'react';
import styles from './Navbar.module.css';
import {Link} from 'react-router-dom';

export class NavBar extends Component {


    render(){

        return (
            
            <nav className = {styles.navBarContainer}>
                <div className = {styles.listDiv}>
                    <ul className = {styles.listContainer}>
                        <li className = {styles.list}><Link to ="/vegetables">Vegetables</Link></li>
                        <li className = {styles.list}><Link to ="/fruits">Fruits</Link></li>
                        <li className = {styles.list}><Link to ="/dryFruits">Dry Fruits</Link></li>
                        <li className = {styles.list}><Link to ="/foodGrains">Food Grains</Link></li>
                        <li className = {styles.list}><Link to ="/masalas">Masalas & Spices</Link></li>
                        <li className = {styles.list}><Link to ="/kitchen">Kitchen Accessories</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}