import { EMAIL_CHANGED, EMAIL_PASSWORD } from './types'
import firebase from 'firebase'
export const emailChanged = (email) => {
  return{
    type: EMAIL_CHANGED,
    payload: email
  };
}

export const passwordChange = (password) => {
  return {
    type: EMAIL_PASSWORD,
    payload: password
  }
}

export const loginAction = ({email, password}) => {
  firebase.auth().createUserWithEmailAndPassword( email, password).then(user => console.log(user));
    debugger
};
