import React from 'react'

class App extends React.Component {
  render(){
    return <div>
    		<h2>This Home page act as ROOT Component.</h2> 
    		{this.props.children}
    	</div>
  }
}

export default App;