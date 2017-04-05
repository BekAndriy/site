const VK_ID = 5849900;
// const SECURE_KEY = 'uKvdmiPplKdFMoXGtRsS'
var user_ID;

window.VK.init({
    apiId: VK_ID,
    scope: 'photos'
});

// var my_id = '';

export default {
	login: () => {
		VK.Auth.login((param) => {
	        console.log('logined: ',param)
	     });

		VK.Auth.getLoginStatus((params) => {
	        // console.log('User params: ', params);
	        user_ID = params.session.mid;
	        console.log('User ID: ',user_ID);
	     })
	},

	logout: () => {
		VK.Auth.logout((param) => {
			console.log('logout: ', param);
		})
	}
}



     // var img;
     // setTimeout(() => {
     //    VK.Api.call('photos.getAll', {owner_id: 18261444, extended: 1, count: 200, offset: 20}, function(data) {
     //    console.log('DATA:__',data);
     //    var objData = data.response;
     //    for (let i = 0; i < objData.length; i++){
     //        if (i !== 0){
     //            img = document.createElement('img');
     //            img.setAttribute('src', objData[i].src);
     //            document.querySelector('.title-page').appendChild(img);
     //            img = '';
     //        }
     //    }
        // if (data.error) {
        //   console.log(data.error.error_msg);
        // } else {
        //   if (data.response.length > 0) {
        //     for (i = 0; i < data.response.length; i++) {
        //       console.log(data.response[i]);
        //       document.write("<p>" + data.response[i] + "</p>");
        //     }
        //   }
        // }
      // });}, 2000)
     
     
    //  redirectUri = 'http://localhost:8090/'
    // url = 'https://oauth.vk.com/authorize?client_id=5849900&display=popup&redirect_uri='+redirectUri+'&response_type=token&scope=photos'
    // var newWin = window.open(url, 'vk-login', 'width=665,height=370')

