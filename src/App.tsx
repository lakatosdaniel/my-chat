import React, { Component } from 'react';
import { Login } from './Login'
import './App.css';
import { Main } from './Main';
import { proxy } from './Proxy';

export default class App extends Component {
  render() {
    if (proxy.inbox != null) {
      return (<div className="app"><Main /></div>); 
    }
    else {
      return (<div className="app"><Login /></div>); 
    }
  }
  componentDidMount() {
    proxy.addEventListener( "login", () => this.forceUpdate(), this ); 
  }
  componentWillUnmount() {
      proxy.removeAllEventListener( this ); 
  }
}
