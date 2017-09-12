import React, { Component } from 'react';
import {Card, CardSection, Input, Button} from './common';
import { connect } from 'react-redux';
import { emailChanged , passwordChange, loginAction} from '../actions';

class LoginForm extends Component {
  onEmailChange(email){
    this.props.emailChanged(email)
  }

  onPasswordChange(password){
    this.props.passwordChange(password)
  }

  login(){
    loginAction(this.props.email, this.props.password)
  }

  render(){
    return(
      <Card>
        <CardSection>
          <Input label="Email" placeholder="example@domain.com" value={this.props.email} onChangeText={this.onEmailChange.bind(this)} />
        </CardSection>
        <CardSection>
          <Input secureTextEntry label="Password" placeholder="password@1" value={this.props.password} onChangeText={this.onPasswordChange.bind(this)}/>
        </CardSection>
        <CardSection>
          <Button onPress={this.login()}>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return { email: state.auth.email, password: state.auth.password };
}

export default connect( mapStateToProps,{ emailChanged, passwordChange, loginAction } )(LoginForm);
