import { connect } from 'react-redux'
import { loginAction } from '../actions'
import Login from '../components/Login'


const mapStateToProps = (state) => {
  console.log(state);
  return {
    loggedInUser : state.authentication
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginClick : (as) => {
      dispatch(loginAction(as))
    }
  }
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default LoginContainer;
