import React from 'react';
var Slider = require('react-slick');

const BuildSliderItem = React.createClass({
    render: function(){
        var settings = {
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            className:"image-slider-wrap",
            swipe: true
        };
        const blockStyle = {
            height: '100%',
            minHeight: '100%'
        }
        return (
            <div>
            {
                this.props.images.length > 1 ?
                <Slider {...settings}>
                    {this.props.images.map(function(eleme,inde){
                        return (
                            <div key={inde} className="slide">
                                {
                                    
                                    inde == 0 ? <img src={"./assets/" + (eleme)} /> : '' }
                            </div>
                        )
                })}
                </Slider>
                : ''
            }
            {
                 this.props.images.length == 1 ? <img src={"./assets/" + (this.props.images[0])} /> : ''
            }
            </div>
        )
    }
})

module.exports = BuildSliderItem;
