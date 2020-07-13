
import ReactDOM from 'react-dom';
import Appl from './everything'
import React from 'react';
import ReactDOMServer from 'react-dom/server';
// CommonJS
import * as serviceWorker from './serviceWorker';
import AdSense from 'react-adsense';

//import ReactGA from 'react-ga';
//import cursor from "./images/cursor.png"
//var ReactDOMServer = require('react-dom/server');
/*import Live from './components/live'
import { Chords, ChordPage } from './components/chords'
import { Lyrics, LyricPage } from './components/lyrics'
import Contact from "./components/contact.js"
import Bible from './components/bible'
import QNav from './components/qnav'
import Scroll from './components/scroll.js'
import { Sugar } from 'react-preloaders';
import { Helmet } from 'react-helmet'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App, Home, Navbar, BlogPage } from './App';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import $ from 'jquery'
import * as serviceWorker from './serviceWorker';
import AdSense from 'react-adsense';
*/
//import ReactGA from 'react-ga';
//import cursor from "./images/cursor.png"



ReactDOM.hydrate(
  <React.StrictMode>
    <Appl />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
