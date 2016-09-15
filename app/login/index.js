import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import LoginRoutes from './routes'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';


import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


const preloadedState = window.__PRELOADED_STATE__ ;
const store = configureStore(preloadedState);

//Stor the dispatch method in a variable
let next = store.dispatch
//Override the 
store.dispatch = function dispatchAndLog(action) {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState());
  console.log(result);
  return result
}

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({userAgent: navigator.userAgent}); 
console.log(muiTheme)

render(  
	<MuiThemeProvider muiTheme={muiTheme}>
	  	<Provider store={store}>
	    	<Router routes={LoginRoutes} history={browserHistory}/>
	  	</Provider>
  	</MuiThemeProvider>,
  document.getElementById('app')
)