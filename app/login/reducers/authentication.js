import * as CONST from 'constants';

export default function authentication(state="Admin", action) {
  switch (action.type) {
    case CONST.LOGIN:
      return action.loginAs
    default:
      return state
  }
}