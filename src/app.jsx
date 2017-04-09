var React = require('react');
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import store from './redux/reducer.js'

import ContentGrid from './components/content_grid.jsx';
import Header from './components/Header.jsx';
import Gallery from './components/gallery/Gallery.jsx';
import About from './components/about/About.jsx';
import Acount from './components/Acount.jsx';
import Albums from './components/gallery/Albums.jsx';
import Albom from './components/gallery/Albom.jsx';
import Gmap from './components/location/Gmap.jsx';
import FormRegistration from './components/forms/FormRegistration.jsx'
import FilteringGallery from './components/gallery/FilteringGallery.jsx';
import Events from './components/events/Events.jsx';
import vkApi from './api/vk.api.js'
function select(state) {
  return state.payload
}

let currentValue, aa;
function handleChange() {
  // let previousValue = currentValue
  currentValue = store.getState();
  aa = currentValue ? currentValue[currentValue.length-1] : '';
}

function getName(state){
    if(state.length > 0){
        return state[state.length - 1];
    } else {
        console.log(state);
    }
}

// window.apiInit = () => {
//     vkApi.appInit();
//     console.log('vkApi init');
// }
// apiInit();

store.subscribe(handleChange);

export default React.createClass({
    render(){
        console.log(store.getState());
        return (
            <Provider store={store}>
            <Router history={hashHistory}>
                <Route name='Main page' path='/' component={Header}>
                    <IndexRoute component={ContentGrid} />
                    <Route name='Map' path='map' component={Gmap} />
                    <Route name='Gallery' path='gallery' component={FilteringGallery}>
                    </ Route>
                    <Route name='Albums' path='albums' component={Albums}>
                        <Route name='Albom' path='id:id' component={Gallery}>
                        </ Route>
                    </ Route>
                    <Route name='About' path='about' component={About} />
                    <Route name='Registration' path='registration' component={FormRegistration} />
                    <Route name='Events' path='events' component={Events} />
                    <Route path='post=:id' component={Acount} />
                </ Route>
            </ Router>
            </ Provider>
        ) 
    }
})