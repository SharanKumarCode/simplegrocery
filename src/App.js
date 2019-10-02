import React, {Component} from 'react';
import { connect } from 'react-redux';
import styles from './App.module.css';
import { LoadingScreen } from './Components/LoadingScreen/LoadingScreen'
import { NavBar } from './Components/NavBar/Navbar';
import TopBar from './Components/TopBar/Topbar';
import { BodyComp } from './Components/BodyComp/BodyComp';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      loading: this.props.Others.isLoading
    }
  }

  render(){
  let controlVariab = this.props.Others.isLoading;

  return (
    <div className = {styles.App}>
      
      { 
          controlVariab === true ? 
          <div className = {styles.Loading}>
          <LoadingScreen />
          </div> : 
        <div className={styles.Main}>
        <TopBar/>
        <NavBar/>
        <BodyComp/>
        </div>
        
      }
    </div>
  );
  }
}
const mapStateToProps = state => {
  return state;
}
export default connect(mapStateToProps)(App);
