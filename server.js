import express from 'express'
import path from 'path'
import compression from 'compression'
import morgan from "morgan";
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import loginRoutes from './modules/login/routes'
import configureStore from './modules/login/store/configureStore'
import { Provider } from 'react-redux'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


process.env.NODE_ENV = 'production';

var app = express();

app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');
// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public')))


//This tells express to log via morgan and morgan to log in the "combined" pre-defined format
app.use(morgan('combined'));

app.use(compression());

// send all requests to index.html so browserHistory works
let routes = loginRoutes;
app.get('*', (req, res) => {
  
  match({ routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      const auth = 578; 
      // Compile an initial state
      const preloadedState = { auth }
      // Create a new Redux store instance
      const store = configureStore(preloadedState) ;

        global.navigator = {
          userAgent: req.headers['user-agent']
        };
      const muiTheme = getMuiTheme({userAgent: req.headers['user-agent']});  
      // hey we made it!
      const appHtml = renderToString(
        <MuiThemeProvider muiTheme={muiTheme}>
          <Provider store={store}>
              <RouterContext {...props}/>
          </Provider>
        </MuiThemeProvider>
          )
      var fs = require('fs');
      fs.writeFile("RenderedReact.txt",appHtml , function(err) {
      if(err) {
        return console.log(err);
      }

    console.log("The file was saved!");
}); 
      res.send(renderFullPage(appHtml,store.getState()));

    } else {
      res.status(404).send('Not Found')
    }
  })
})

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Child Care Online Services</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script src="login.js"></script>
      </body>
    </html>
    `
}

var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})