import React from 'react';
require('./About.less');

export default React.createClass({
	
    render: function(){
        return (
            <div className="about-wrapper">
                <h1>About us</h1>
                <img src="assets/imgs/c4c40a2dbbe368adcfd19155c12079a7_no-group-pictures-with-lots-of-group-of-people-wallpaper-clipart_1024-768.jpeg" alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        )
    }
})
