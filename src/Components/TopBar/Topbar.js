import React, {Component} from 'react';
import { connect } from 'react-redux';
import styles from './Topbar.module.css';
import {Link} from 'react-router-dom';

class TopBar extends Component {

    render(){

        let cartQuantity = Object.values(this.props.datas).length;
        console.log(Object.values(this.props.datas));
        
        return (
            <nav className = {styles.navBarContainer}>
                <div className = {styles.logoContainer}>
                    <span>Simple Grocery</span>
                </div>
                <div className = {styles.listDiv}>
                <ul className = {styles.listContainer}>
                    <li className = {styles.list}>
                        <Link to="/cart">
                            <div className = {styles.cartNavContainer}>
                                <div className = {styles.cartNavName}>
                                    Cart
                                </div>
                                <div className = {styles.cartNavBadge}>
                                    {cartQuantity}
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li className = {styles.list} style = {{fontSize: "0.8em", marginRight: "0.2em"}}><a href="#contact">Contact Us</a></li>
                </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => {
    let filteredState = Object.values(state).filter(data=>{
        return data.cartDetails.cartAdded === true;
    })

    return {datas:{...filteredState}}
}

export default connect(mapStateToProps)(TopBar)