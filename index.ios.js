import React, { Component } from 'react';
import App from './src/App';
import { AppRegistry } from 'react-native';

export default class manager extends Component {
  render() {
    return (
      <App></App>
    );
  }
}

AppRegistry.registerComponent('manager', () => manager);
