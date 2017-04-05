import React from 'react';

var Image = React.createClass({
    render: function(){
         var imagest ='./assets/' + (this.props.imageSrc);
         console.log(imagest)
        return (
            <div className="slide">
                <img src={"./assets/" + (eleme)} />
            </div>
        )
    }
})
module.exports = Image;


