import React from 'react';
import FlatButton from 'material-ui/FlatButton';

class Main extends React.Component {


  render () {
    return (
    	<div>
    		<FlatButton label="Default" />
		    <FlatButton label="Primary" primary={true} />
		    <FlatButton label="Secondary" secondary={true} />
		    <FlatButton label="Disabled" disabled={true} />
    	</div>
    	)
  }
}

export default Main;
