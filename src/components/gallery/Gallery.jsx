import React from 'react';

export default React.createClass({
    render: function(){
        return (
            <div>
                <div>Gallery</div>
				{this.props.children}
            </div>
        )
    }
})
