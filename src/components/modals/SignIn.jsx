import React from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import FormLogin from '../forms/FormLogin.jsx';


const loginSt = {
    maxWidth: '',
    width: '',
    fontFamily: '',
    padding: '',
    color: '',
    backgroundColor: '#FFF'
}

const SignIn = React.createClass({

	handleClose (){
		this.props.onClose();
	},

    render: function(){

    	const actions = [
        <FlatButton
            label="Cancel"
            primary={true}
            onTouchTap={this.handleClose}
        />,
        <FlatButton
            label="Submit"
            primary={true}
            onTouchTap={this.handleClose}
        />,
        ];

        return (
	        <MuiThemeProvider className="login-form">
		        <Dialog
		            actions={actions}
		            modal={true}
		            open={this.props.signIn}
		            contentStyle={loginSt}
		            contentClassName='dialog-wrap login-dialog-wrap'
		        >
		            <div>
		                <FormLogin close={this.handleClose.bind(null, this)}/>
		            </div>
		        </Dialog>
		    </MuiThemeProvider>
        )
    }
})

module.exports = SignIn;