var ReactDOM = require('react-dom');
var React = require('react');
var imagesLoaded = require('imagesloaded');
require('./components/MainStyle.less');
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
import App from './app.jsx';

var $ = require('jquery');
 
imagesLoaded.makeJQueryPlugin( $ );

ReactDOM.render(
    <App />
    ,
    document.getElementById('mount-point')
);
