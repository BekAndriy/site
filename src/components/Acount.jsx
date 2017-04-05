import React from 'react';
import participents from '../json/participents.json';

export default React.createClass({
    getInitialState: function(){
        const { id }  = this.props.params;
        var a = participents.find(function(elem){return elem.id == parseInt(id)});
        return {
            item: a,
            participents
        }
    },
    render: function(){
        return (
            <div>{this.state.item.name}</div>
        )
    }
})