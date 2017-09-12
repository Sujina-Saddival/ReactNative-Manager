import { EMAIL_CHANGED, EMAIL_PASSWORD } from '../actions/types'

const INITIAL_STATE = {email: '', password: ''};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
    // Which return both state and action
      return { ...state, email: action.payload }
    case EMAIL_PASSWORD:
      return { ...state, password: action.payload }
    default:
      return state;
  }
}
