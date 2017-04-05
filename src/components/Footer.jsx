import React from 'react';
require('./Footer.less');

var date = new Date;
const CURRENT_YEAR = date.getFullYear();
const MAIN_PAGE_LINK = location.origin;
const VK_GROUP = 'http://localhost:8090/#/post=6';
// ... 


export default React.createClass({
    render: function(){
    	

        return (
            <div className="footer-wrap">
            	<div className="body-wrap">
            		<div className="logo-wrap">
            			<a href={MAIN_PAGE_LINK}>MUST BE LOGO</a>
        			</div>
            		<div className="social-network">
            			<span className="title">we in</span>
            			<div className="sn-btn-wrap">
            				<div><a href={VK_GROUP}></a></div>
            				<div><a href={VK_GROUP}></a></div>
            				<div><a href={VK_GROUP}></a></div>
            				<div><a href={VK_GROUP}></a></div>
            			</div>
            		</div>
            	</div>

            	<div className="copyright">
            		<span>© {CURRENT_YEAR} Auction. All Rights Reserved </span>
            	</div>
            </div>
        )
    }
})