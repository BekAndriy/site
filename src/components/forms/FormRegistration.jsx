var React = require('react');
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import SocialNetwork from './SocialNetworkLogin.jsx';
require('./FormRegistration.less');

const textFieldStyle = {
    width: ''
}

var FormRegistration = React.createClass({
    getInitialState: function(){
        return {
            fullForm: false
        }
    },
    handleCheckFullForm:function(e, isInputChecked){
        this.setState({fullForm: !this.state.fullForm})
    },
    render: function(){
        return (
            
                <MuiThemeProvider>
                    <div className="registration-form-wrap">
                        <form>
                            <SocialNetwork />
                            <TextField
                                style={textFieldStyle}
                                className="text-field reg-email"
                                hintText="Example"
                                floatingLabelText="Name"
                            />

                            <TextField
                                style={textFieldStyle}
                                className="text-field reg-email"
                                hintText="Example"
                                floatingLabelText="Email"
                            />

                            <TextField
                                style={textFieldStyle}
                                className="text-field reg-password"
                                hintText="Example"
                                floatingLabelText="Password"
                                type="password"
                            />

                            <Checkbox
                                className="reg-remember-me"
                                onCheck={this.handleCheckFullForm}
                                label="Хочу взяти участь в аукціоні"
                            />

                            {this.state.fullForm ? <div>
                                <TextField
                                    style={textFieldStyle}
                                    className="text-field reg-email"
                                    hintText="Example"
                                    floatingLabelText="Them"
                                />

                                <TextField
                                    style={textFieldStyle}
                                    className="text-field reg-email"
                                    hintText="Example"
                                    floatingLabelText="Description"
                                    multiLine={true}
                                    rows={1}
                                    rowsMax={5}
                                />

                                <TextField
                                    style={textFieldStyle}
                                    className="text-field reg-email"
                                    hintText="Example"
                                    floatingLabelText="Start price"
                                />

                                <TextField
                                    style={textFieldStyle}
                                    className="text-field reg-email"
                                    hintText="Example"
                                    floatingLabelText="Link to facebook or vk"
                                />
                            </div> : '' }

                            <RaisedButton label="Submit" type="submit" />
                        </form>
                    </div>
                </MuiThemeProvider>
            
        )
    }
})

module.exports = FormRegistration;
