

const CLIENT_ID = 'aa3fa36028c1491db3d92c06455cd22c';
const CLIENT_SECRET = 'cca5a4d525c148928b2ffc8e25b79002';

var InstAPI = require('instagram-api');
var instagramAPI = new InstAPI(CLIENT_ID);

export default {
	login: () => {

		console.log();

		// instagramAPI.userSelf().then(function(result) {
		//     console.log(result.data); // user info 
		//     console.log(result.limit); // api limit 
		//     console.log(result.remaining) // api request remaining 
		// }, function(err){
		//     console.log(err); // error info 
		// });
		var redirectUri = 'http://localhost:8090/#/';
    var url = 'https://api.instagram.com/oauth/authorize/?client_id='+CLIENT_ID+'&redirect_uri='+redirectUri+'&response_type=token&scope=likes+comments';
    var newWin = window.open(url, 'vk-login', 'width=665,height=370');

	}

}




