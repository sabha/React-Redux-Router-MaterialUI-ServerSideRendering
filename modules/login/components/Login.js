import React from 'react';
import FlatButton from 'material-ui/FlatButton';

class Login extends React.Component {

	constructor(props) {
		super(props);
	}	
	render () {
		return (
			<div>
		    	<h3>Login Component. . . </h3>
		    	<div>
		    		<FlatButton onClick={() => this.props.onLoginClick("Admin")} label="Login As Admin" primary={true}/>
				    <FlatButton onClick={() => this.props.onLoginClick("Parent")} label="Login As Parent" secondary={true} />
				</div>
				<h4>Loggen in As {this.props.loggedInUser}</h4>
			</div>
		)
	}
}

export default Login;
