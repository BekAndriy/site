import React from 'react';
import { connect } from 'react-redux';
require('../../redux/store');

import Item from '../Item.jsx'
import InfiniteScroll from 'react-infinite-scroller';
import participants from '../../json/participents.json';
import imagesLoaded from 'imagesloaded';
require('./Albums.less');
require('jquery');

var countLoad = 1;

var Albums = React.createClass({
    getInitialState: function(){
        return {
            items: participants,
            itemsInPage: []
        }
    },
    componentWillMount: function(){
        this.setState({itemsInPage: this.state.items.slice(0, 10)})
    },
     componentDidMount: function(){

        var grid = document.getElementsByClassName('content-wrap')[0];
        imagesLoaded( document.getElementsByClassName('content-wrap')[0], () => {
            this.msnry = new Masonry( grid, {
                itemSelector: '.alb-product-item',
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
        console.log('tttt')
        let runLoadTimeout;
        let lengthArray = this.state.itemsInPage.length;

        if (!countLoad) {
             
             return '';
         } else {
             countLoad = 0;
             runLoadTimeout = setTimeout( () => { 
                 lengthArray += 10;
                this.setState({itemsInPage: this.state.items.slice(0,lengthArray)});
                countLoad = 1;;
            },1000);
                
         }
    },

    render: function (){
        const styleLoaderItem = {
            width: '100%',
        }
        return (
                <div>
                <InfiniteScroll 
                        style={styleLoaderItem} 
                        hasMore={true}
                        threshold={500}
                        initialLoad={true}
                        loadMore={this.handleLoadMore} 
                        className="content-wrap" 
                        id="itemGrid" 
                        ref='itemGrid' >
                    { this.state.itemsInPage.map((elem, ind)=>{
                        return (
                        <div 
                            key={ind}
                            className={"alb-product-item"}
                            style={{'background': 'url(assets/'+(elem.image[0]) + ') no-repeat',
                                backgroundSize: 'cover'}}
                        >
                            /*this must be hover block*/
                            
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
  }),
  dispatch => ({
  })
)(Albums);


// <div className="animated hover-block ">
//                                 <div className="outer-hover-block-wrap">
//                                     <div className="hover-block-wrap">
//                                         <div className="name">{elem.name}</div>
                                        
//                                         <div className="description">
//                                             <span className="text-wrap">{elem.description}</span>
//                                         </div>

//                                         <div className="age">Age: 23</div>
//                                     </div>
//                                 </div>
//                             </div>