import { connect } from 'react-redux'
import { loginAction , loginAsyncAction} from '../actions'
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
      dispatch(loginAction(as));
    },
    loginAsyncAction : () => {
      dispatch(loginAsyncAction());
    }
  }
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default LoginContainer;
