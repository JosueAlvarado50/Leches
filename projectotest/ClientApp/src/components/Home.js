import React, { Component } from 'react';
import classes from '../components/Home.module.css'

export class Home extends Component {
  static displayName = Home.name;

  render() {
      return (
          <div className={classes.home}>
        <h1>Hello, world!</h1>
       
      </div>
    );
  }
}
