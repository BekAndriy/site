import React from 'react';
import Breadcrumbs from 'react-breadcrumbs';
import { connect } from 'react-redux';

require('../redux/store');
require('./TitlePage.less');


const TitlePage =  React.createClass({
    render: function(){
        let { playload } = this.props;
        let currentName = playload[playload.length - 1];
        return (
            <div className="title-page">
                <div className="title-content-wrap">
                    <h2>Title page</h2>
                    <div className="description">This text is description page</div>
                    <Breadcrumbs
                        displayMissingText={currentName}
                        routes={this.props.routes}
                        separator="&#160;&#160; / &#160;&#160;" // with spacing
                        params={this.props.params}
                    />
                </div>
            </div>
        )
    }
})

export default connect(
  state => ({
    playload: state
  }),
  dispatch => ({
    onAddTrack: (trackName) => {
      dispatch({ type: 'ADD_TRACK', playload: trackName })
    }
  })
)(TitlePage);