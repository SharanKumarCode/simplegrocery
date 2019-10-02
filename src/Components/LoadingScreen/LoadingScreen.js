import React, { Component } from 'react';
import styles from '../LoadingScreen/LoadingScreen.module.css'

export class LoadingScreen extends Component{
    render(){
        return(
            <div className = {styles.loadingContainer}>
                <div className = {styles.loadingBarContainer}>
                <div className = {styles.item1}></div>
                <div className = {styles.item2}></div>
                <div className = {styles.item3}></div>
                <div className = {styles.item4}></div>
                <div className = {styles.item5}></div>    
                </div>
                <div className = {styles.backgroundContainer}>
                </div>
            </div>
        )
    }
}