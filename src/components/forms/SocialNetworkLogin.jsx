import React from 'react';
import api_VK from '../../api/vk.api.js';
import api_INST from '../../api/instagram.api.js';

export default React.createClass({
	handleLoginVk (){
        api_VK.login();
    },

    handleLoginInstagram (){
    	api_INST.login();
    },

	render (){
		return (
			<div className="social-network">
                <div className="facebook" style={{backgroundImage: 'url(assets/imgs/icons/facebook.png)'}}></div>
                <div className="instagram" style={{backgroundImage: 'url(assets/imgs/icons/instagram.png)'}} onClick={this.handleLoginInstagram}></div>
                <div className="vkontakte" style={{backgroundImage: 'url(assets/imgs/icons/vk.png)'}} onClick={this.handleLoginVk}></div>
            </div>
			)
	}
})