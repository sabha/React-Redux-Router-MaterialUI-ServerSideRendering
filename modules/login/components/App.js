import React from 'react'

class App extends React.Component {
  render(){
    return <div>
    		<h2>Root Login Page consist of the wrapper and it act as the index file for the Login module.</h2> 
    		{this.props.children}
    	</div>
  }
}

export default App;