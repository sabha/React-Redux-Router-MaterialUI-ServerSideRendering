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


const preloadedState = {auth:578} ;
const store = configureStore(preloadedState);

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


render(  
	<MuiThemeProvider muiTheme={getMuiTheme()}>
	  	<Provider store={store}>
	    	<Router routes={LoginRoutes} history={browserHistory}/>
	  	</Provider>
  	</MuiThemeProvider>,
  document.getElementById('app')
)