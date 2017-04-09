import React from 'react';
import participents from '../json/participents.json';
import { connect } from 'react-redux';
import store  from '../redux/reducer.js';
import Slider from 'react-slick';
require('./Acount.less')

const Acount = React.createClass({

    getInitialState() {
        const { id }  = this.props.params;
        var user = participents.find(function(elem){return elem.id == parseInt(id)});

        return {
            u: user,
            participents
        }
    },

    componentWillMount() {
        if(this.props.playlist.length < 1) {
            const { id }  = this.props.params;

            let curUser = participents.filter((el) => {
                return el.id == id;
            })

            this.props.onAddTrack(curUser[0].name, curUser[0]);
        }
    },

    componentDidMount() {
        
    },

    
    render: function(){
        var settings = {
          dots: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          swipe: true,
          draggable: false,
          centerMode: true,
          infinite: false,
          variableWidth: true
        };
        let {name, price, image, description} = this.state.u
        return (
            <div className="user-acount">
                {name}
               
                <Slider {...settings}>
                     {
                        image.map((el, ind) => {
                            return (<span className="slide" key={ind}>
                                    <img src={'assets/' + el} alt="" />
                                </span>)
                        })
                    }
                </Slider>
            </div>
        )
    }
})

module.exports = connect(
  state => ({
    userPage: state.userPage,
    playlist: state.playlist
  }),
  dispatch => ({
    onAddTrack: (trackName, user) => {
        dispatch({ type: 'ADD_TRACK', playload: trackName });
        dispatch({ type: 'USER_PAGE', user });
    }
  })
)(Acount);