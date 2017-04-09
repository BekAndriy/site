import React from 'react';

export default React.createClass({

	getInitialState() {
		return {
			images: {}
		}
	},

	componentWillMount() {
		$.ajax({
            url: 'http://my-test.local/test.php',
            type: 'POST',
            data: {action: 'get_photos',
            		id: this.props.albomId ? this.props.albomId : 0
        			},
            success: (data, textStatus, XMLHttpRequest) => {
                let _data = JSON.parse(data);
                console.log(_data)
                this.setState({images: _data})
            },
            error: function(err){
                console.log('Logout failed: ', err);
            }
        })
	},

	componentDidMount() {
			
	},

    render: function(){
        return (
            <div>
                <div>
                	{
                		this.state.images.images ? 
                		this.state.images.images.map((el, ind) => {
                			return (
                					<div key={ind} className="single-image">
                						{
                							<img src={this.state.images.host + el.image.slice(1)} alt="" />
                							
                						}
                					</div>
                				)
                		}) : ''

                	}
                </div>
            </div>
        )
    }
})
