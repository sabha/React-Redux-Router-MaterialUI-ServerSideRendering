import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import Login from './containers/LoginContainer'
import Dashboard from './components/Dashboard';

module.exports = (
  	<Route path="/" component={App}>
		<IndexRoute component={Login}/>
		<Route path="/app" component={Dashboard}/>
	</Route>
)

