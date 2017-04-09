import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import {Tabs, Tab} from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import store  from '../redux/reducer.js';
import FormRegistration from './forms/FormRegistration.jsx';
import TitlePage from './TitlePage.jsx';
import { Link } from 'react-router';
import Footer from './Footer.jsx';
import SignIn from './modals/SignIn.jsx';
import api_VK from '../api/vk.api.js';
import api_INST from '../api/instagram.api.js';

require('./Header.less');

const styleLabelBtn = {
    color: 'rgb(255,255,255)'
}
const stylee = {'padding': '0px'}

const Header = React.createClass({

    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState (){
        return {
            dialog: false,
            openLeftMenuBasket: false,
            openLeftMenuFavorites: false,
            newPostName: '',
            newPostDescription: '',
            u_id: 1
        }
    },

    handleOpenDialod (event){
        this.setState({dialog: true});
    },

    handleClose (){
        this.setState({dialog: false});
    },

    handleOpenLeftMenuBasket (){
        this.setState({openLeftMenuBasket: !this.state.openLeftMenuBasket})
        this.state.openLeftMenuFavorites ? this.setState({openLeftMenuFavorites: false}) : '';
    },

    handleOpenLeftMenuFavorites (){
        this.setState({openLeftMenuFavorites: !this.state.openLeftMenuFavorites})
        this.state.openLeftMenuBasket ? this.setState({openLeftMenuBasket: false}) : '';
    },

    handleCloseFavorites (){
        this.setState({openLeftMenuFavorites: false});
    },

    handleCloseBasket (){
        this.setState({openLeftMenuBasket: false});
    },

    handleOpenRegistration (){
        this.context.router.push(`/registration`);
    },

    handleSignOut (){
        api_VK.logout();
    },

    handleSearchUser (e, obj){
        if (location.hash.length > 2)
            location.hash = '/';
        store.dispatch({ type: 'OPEN_USER_SETTINGS', search: obj });
    },

    handleChangeNamePost(e) {
        this.setState({newPostName: $(e.currentTarget).val()})
    },

    handleChangeDescriptionPost(e) {
        this.setState({newPostDescription: $(e.currentTarget).val()})
    },

    componentDidMount() {
       
    },

    handleSendRequest(e) {
        e.preventDefault();
        // NEW POST
        // let data = {
        //     post_name: this.state.newPostName,
        //     description: this.state.newPostDescription,
        //     autor_id: this.state.u_id,
        //     action: 'new_post'
        // }

        // NEW PHOTOS
        let data = {
            post_name: this.state.newPostName,
            description: this.state.newPostDescription,
            autor_id: this.state.u_id,
            action: 'new_image'
        }

        $.ajax({
            url: 'http://my-test.local/test.php',
            type: 'POST',
            data: data,
            // xhrFields: {
            //     withCredentials: '*'
            // },
            // crossDomain: true,
            success: function(data, textStatus, XMLHttpRequest){

                console.log(data);
            },
            error: function(err){
                console.log('Logout failed: ', err);
            }
        })
    },

    render: function(){
        
        const styleInl = {
            'width': '',
            'height': '',
            'padding': '',
        }
        return (
            <div>
                <form onSubmit={this.handleSendRequest.bind(null, this)}>
                    <input type="text" name="name" placeholder="Post name" onChange={this.handleChangeNamePost} />
                    <input type="text" name="description" placeholder="Description" onChange={this.handleChangeDescriptionPost} />
                    <input type="hidden" name="u_id" value="1" />
                    <input type="submit" onClick={this.handleSendRequest} value="SUBMIT" />
                </form>
                <MuiThemeProvider>
                    <div className="header">

                        <a className="main-logo" href="#"><div style={{"backgroundImage": "url(assets/imgs/logo_main.png)"}}></div></a>

                        <div className={"menu-btns-wrap " + (this.state.openLeftMenuBasket || this.state.openLeftMenuFavorites ? 'menu-shift-left' : '')}>
                            <Link to="/gallery" className="main-menu-btn">
                                Gallery
                            </ Link>

                            <Link to='/about' className="main-menu-btn">
                                About
                            </ Link>
                            
                            <Link to='/events' className="main-menu-btn">
                                Events
                            </ Link>

                            <IconMenu
                                iconButtonElement={
                                    <IconButton style={styleInl} disableTouchRipple={true}>
                                        <img src="assets/imgs/icons/magnifying-glass.png" alt="basket" />
                                    </ IconButton>
                                }
                                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                                targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
                                touchTapCloseDelay={0}
                                style={styleInl}
                                className="top-menu-btn"
                            >
                                <MenuItem value="5">
                                    <TextField
                                      hintText="Hint Text"
                                      onChange={this.handleSearchUser}
                                      textareaStyle={{width: "100%"}}
                                      inputStyle={{width: "100%"}}
                                    />
                                </ MenuItem>
                                
                            </IconMenu>
                            <IconMenu
                                iconButtonElement={
                                    <IconButton style={styleInl} disableTouchRipple={true}>
                                        <img src="assets/imgs/icons/people.png" alt="basket" />
                                    </ IconButton>
                                }
                                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                                targetOrigin={{horizontal: 'right', vertical: 'bottom'}}
                                style={styleInl}
                                className="top-menu-btn"
                            >
                                <MenuItem value="1" primaryText="Refresh" />
                                <MenuItem value="2" primaryText="Send feedback" />
                                <Divider />
                                <MenuItem value="3" primaryText="Registration" onClick={this.handleOpenRegistration} />
                                <MenuItem value="4" primaryText="Sign In" onClick={this.handleOpenDialod} />
                                <MenuItem value="4" primaryText="Settings" />
                                <MenuItem value="5" primaryText="Help" />
                                <MenuItem value="6" primaryText="Sign out" onClick={this.handleSignOut} />
                            </IconMenu>

                            <div className="top-menu-btn" href="#" title="favorites" onClick={this.handleOpenLeftMenuFavorites}>
                                <img src="assets/imgs/icons/heart.png" alt="basket" />
                            </div>

                            <div className="top-menu-btn" href="#" title="basket" onClick={this.handleOpenLeftMenuBasket}>
                                <img src="assets/imgs/icons/shopping-cart-1.png" alt="basket" />
                            </div>
                        </div>
                    </div>
                </ MuiThemeProvider>

                <TitlePage routes={this.props.routes} />
                <SignIn signIn={this.state.dialog} onClose={this.handleClose} />
                
                <MuiThemeProvider>
                    <Drawer 
                            width={200} 
                            openSecondary={true} 
                            open={this.state.openLeftMenuBasket}>
                        <div className="header-left-menu">
                            <div className="title-txt">Last viewed</div>
                            <span className="close-btn" 
                                    onClick={this.handleCloseBasket}>
                                <img src="assets/imgs/icons/close.png" alt="close" />
                            </span>
                        </div>
                    </Drawer>
                </MuiThemeProvider>

                <MuiThemeProvider>
                    <Drawer width={200} openSecondary={true} open={this.state.openLeftMenuFavorites}>
                        <div className="header-left-menu">
                            <div className="title-txt">Favorites</div>
                            <span className="close-btn" 
                                    onClick={this.handleCloseFavorites}>
                                <img src="assets/imgs/icons/close.png" alt="close" />
                            </span>
                        </div>
                    </Drawer>
                </MuiThemeProvider>

                {this.props.children}
                <div>
                    <Footer />
                </div>
            </div>  
        )
    }
})

module.exports = Header;
