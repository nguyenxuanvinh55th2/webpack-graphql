import React, { Component,PropTypes } from 'react';
import styles from './app.css';
import ReactDOM from 'react-dom'

export default class App extends Component {
  constructor(props){
    super(props);
      this.state=({vinh:"tam"})
  }
  renderData(){
    console.log("data",this.props.data.tam);
    // console.log("sate",this.state.vinh);

  }
  render() {

    return (
      <div>
      {
        this.renderData()
      }
        <p  className={styles.vinh} style={{color:'red'}} >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    )
  }
}
App.PropTypes = {
  data:PropTypes.string.isRequired
}
