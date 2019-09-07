import React, {Component} from 'react';
import styles from './Navbar.module.css';

export class NavBar extends Component {


    render(){

        return (
            <nav className = {styles.navBarContainer}>
                <div className = {styles.listDiv}>
                <ul className = {styles.listContainer}>
                    <li className = {styles.list}><a href="#vegetables">Vegetables</a></li>
                    <li className = {styles.list}><a href="#fruits">Fruits</a></li>
                    <li className = {styles.list}><a href="#dryFruits">Dry Fruits</a></li>
                    <li className = {styles.list}><a href="#foodGrains">Food Grains</a></li>
                    <li className = {styles.list}><a href="#masalas">Masalas & Spices</a></li>
                    <li className = {styles.list}><a href="#kitchen">Kitchen Accessories</a></li>
                </ul>
                </div>
            </nav>
        )
    }
}