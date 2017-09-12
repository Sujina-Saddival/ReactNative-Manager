import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers'
import * as firebase from 'firebase';
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount(){
    const config = {
      apiKey: 'AIzaSyDJ9VRB2aQjpUT_0aqQAhXHmb6s3_g8KLg',
      authDomain: 'managerreact-3bd29.firebaseapp.com',
      databaseURL: 'https://managerreact-3bd29.firebaseio.com',
      projectId: 'managerreact-3bd29',
      storageBucket: "",
      messagingSenderId: "483727739382"
    }
    firebase.initializeApp(config);
  }
  render(){
    return(
      <Provider store={createStore(reducers)}>
      <LoginForm/>
      </Provider>
    );
  }
}

export default App;
