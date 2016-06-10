import { UPDATE_LOGIN_STATUS } from '../actions'

export default function authentication(state = 0, action) {
  switch (action.type) {
    case UPDATE_LOGIN_STATUS:
      return state
    default:
      return state
  }
}