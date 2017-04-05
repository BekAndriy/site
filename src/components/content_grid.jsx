import React from 'react';
import Item from './Item.jsx';
import { connect } from 'react-redux';
require('../redux/store');

import InfiniteScroll from 'react-infinite-scroller';
import BuildSliderItem from './BuildSliderItem.jsx';
import participants from '../json/participents.json';
import FilteringMainContent from './FilteringMainContent.jsx';
import imagesLoaded from 'imagesloaded';
require('./BuildSliderItem.less');
require('jquery');

var countLoad = 1;

var ContentGrid = React.createClass({

    getInitialState: function(){
        return {
            items: participants,
            itemsInPage: []
        }
    },
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    componentWillMount: function(){
        this.setState({itemsInPage: this.state.items.slice(0, 10)})
    },
     componentDidMount: function(){
        var grid = document.getElementsByClassName('content-wrap')[0];

        imagesLoaded( document.getElementsByClassName('content-wrap')[0], () => {
            this.msnry = new Masonry( grid, {
                itemSelector: '.product-item',
                gutter: 0,
                transitionDuration: '0.5s'
            });
        });
    },

    componentDidUpdate: function(){
        imagesLoaded( document.getElementsByClassName('content-wrap')[0], () => {
            this.msnry.reloadItems();
            this.msnry.layout();
        }); 
    },

    handleLoadMore: function(pageToLoad){
        var runLoadTimeout;
         var lengthArray = this.state.itemsInPage.length;
         if (!countLoad) {
             
             return '';
         } else {
             countLoad = 0;
             runLoadTimeout = setTimeout(()=>{ 
                 lengthArray += 10;
                this.setState({itemsInPage: this.state.items.slice(0,lengthArray)});
                countLoad = 1;;
            },1000);
                
         }
    },

    handlePreviewClick(elem) {
        console.log(elem);
        let { name, id: messageId } = elem;
        this.props.onAddTrack(name);
        this.context.router.push(`/post=${messageId}`);
    },

    render: function (){
        const styleLoaderItem = {
            width: '100%',
        }
        return (
                <div>
                <FilteringMainContent />
                <InfiniteScroll 
                        style={styleLoaderItem}
                        hasMore={true}
                        threshold={500}
                        initialLoad={false}
                        loadMore={this.handleLoadMore} 
                        className="content-wrap" 
                        id="itemGrid" 
                        ref='itemGrid' >
                    { this.state.itemsInPage.map((elem, ind)=>{
                        return (
                        <div 
                            key={ind}
                            className={"product-item"} 
                        >   

                            <img src={"./assets/" + elem.image[0]} alt={elem.name} />

                            <div className="animated hover-block ">
                                <div className="outer-hover-block-wrap">
                                    <div className="hover-block-wrap" 
                                        onClick={this.handlePreviewClick.bind(null,elem)}>
                                        <div className="description">
                                            <span className="text-wrap">{elem.description}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="name">
                                <div className="name-inner-wrap" >
                                    <span onClick={this.handlePreviewClick.bind(null,elem)}>{elem.name}</span>
                                </div>
                                <div className="likes">
                                    <span>12</span> 
                                    <span className="heart">&#9825;</span>
                                </div>
                            </div>

                            
                        </div>
                        )
                        
                    })}
                </ InfiniteScroll>
                </div>
                    
            
        )
    }
})

module.exports = connect(
  state => ({
    playload: state
  }),
  dispatch => ({
    onAddTrack: (trackName) => {
      dispatch({ type: 'ADD_TRACK', playload: trackName })
    }
  })
)(ContentGrid);

/*<div className="age">Age: 23</div>*/