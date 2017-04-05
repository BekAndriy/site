import React from 'react';
import { Link } from 'react-router';
import Gallery from './Gallery.jsx';

export default React.createClass({

    render: function(){
        return (
                <div>
                <div className="gallery-title-filtering">
                    here is filters to Gallery and Alboms
                </ div>
                
                    { this.props.children ? '' : <Gallery /> }
                    { this.props.children }
                </div>
        )
    }
})