import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Checkbox from 'material-ui/Checkbox'
import SvgIcon from 'material-ui/SvgIcon';

import SocialNetwork from './SocialNetworkLogin.jsx';
import api_VK from '../../api/vk.api.js';


require('./FormLogin.less');

// const textFieldStyle = {
//     width: '',
// }

// const underlineFocusStyle = {
//     borderColor: '#d6b161',
// }

// const underlineStyle = {
//     color: '#777'
// }

// const floatingLabelShrinkStyle = {
//     color: '#d6b161',
//     fontFamily: '"Source Sans Pro", sans-serif',
//     letterSpacing: '0.3px'
// }

// const floatingLabelStyle = {
//     fontFamily: '"Source Sans Pro", sans-serif',
//     letterSpacing: '0.3px',
//     fontWeight: '600'
// }

// const inputStyle = {
//     fontFamily: '"Source Sans Pro", sans-serif',
// }

// const iconStyle = {
//     fill: '#d6b161'
// }

const labelStyle = {
    fontWeight: 'normal',
    fontFamily: '"Source Sans Pro", sans-serif',
    fontSize: '14px',
    color: '#929294'
}

// const checkboxStyle = {
//     fill: '#d6b161'
// }


var FormLogin = React.createClass({

    closeBlock (){
        this.props.close();
    },
    
    render: function(){
        return (
            <div className="popup login-form-wrap">
                <form>
                    <div className="title">Sign In<div className="close-wrap" onClick={this.closeBlock}><img src="assets/imgs/icons/close.png" alt="close" /></div></div>
                    <SocialNetwork />
                    <div className="body">
                        
                        <TextField
                            className="text-field login-email"
                            hintText="Example"
                            floatingLabelText="Email or Phone"
                        />
                        <TextField
                            className="text-field login-password"
                            hintText="Example"
                            floatingLabelText="Password"
                            type="password"
                        />
                        <Checkbox
                            className="login-remember-me"
                            label="Запам'ятати мене"
                            labelStyle={labelStyle}
                            defaultChecked={true}
                        />
                        <div className="forget-password">
                            Забув пароль
                        </div>
                    </div>
                </form>
            </div>
        )
    }
})

module.exports = FormLogin;


// underlineStyle