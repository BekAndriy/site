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

            images: []
        }
    },

    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    componentWillMount: function(){
        $.ajax({
            url: 'http://my-test.local/test.php',
            type: 'POST',
            data: {action: 'get_alboms'},
            success: (data, textStatus, XMLHttpRequest) => {
                let _data = JSON.parse(data);
                this.setState({images: _data})
            },
            error: function(err){
                console.log('Logout failed: ', err);
            }
        })
    },

     componentDidMount: function(){

        var grid = document.getElementsByClassName('content-wrap')[0];
        if ($('.content-wrap').length) {
            imagesLoaded( document.getElementsByClassName('content-wrap')[0], () => {
                this.msnry = new Masonry( grid, {
                    itemSelector: '.alb-product-item',
                    gutter: 0,
                    transitionDuration: '0.5s'
                });
            });
        }  
    },

    componentDidUpdate: function(){
        if ($('.content-wrap').length && $('.alb-product-item').length) {
            imagesLoaded( document.getElementsByClassName('content-wrap')[0], () => {
                this.msnry.reloadItems();
                this.msnry.layout();
            });
        }
    },

    handleLoadMore: function(pageToLoad){

    },

    handleOpenAlboms(el) {
        this.context.router.push(`/albums/id=${el.id}`);
    },
    
    render: function (){
        const styleLoaderItem = {
            width: '100%',
        }
        return ( 
                <div>
                {this.props.children ? this.props.children : (
                    <InfiniteScroll 
                        style={styleLoaderItem} 
                        hasMore={true}
                        threshold={500}
                        initialLoad={true}
                        loadMore={this.handleLoadMore} 
                        className="content-wrap" 
                        id="itemGrid" 
                        ref='itemGrid' >
                    {
                        this.state.images.map((el, ind) => {
                            return (
                                    <div key={ind} className="single-albom" onClick={this.handleOpenAlboms.bind(null, el)}>
                                        <div className="post-name">{el.post_name}</div>
                                        <div className="created">{el.created}</div>
                                        <div className="description">{el.description}</div>
                                        <div className="create_user">{el.FirstName + " | " + el.LastName}</div>
                                    </div>
                                )
                            })
                        }
                </ InfiniteScroll>


                    )}
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