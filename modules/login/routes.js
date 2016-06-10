import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import Login from './components/Login'
import ReactMaterialUI from './components/ReactMaterialUI';

module.exports = (
  	<Route path="/" component={App}>
		<IndexRoute component={ReactMaterialUI}/>
		<Route path="/mui" component={ReactMaterialUI}/>
	</Route>
)

