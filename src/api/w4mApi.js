import axios from 'axios'

/**
 * Use to communication with background server
 * @type {{}}
 */
const w4mapi = {

  api:function (data,successCallback,errorCallback) {
      axios({
        url:data.url,
        data:data.obj || '',
        mehtod:data.method || 'POST',
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(function (response) {
          if(response.status === 200){
            let result = response.data;
            if(result.status === '000000'){
              successCallback(result);
            }else if(result.status === '000999'){
              window.location = '/';
            }else{
              errorCallback(result);
            }
          }
      }).catch(function (error) {
        console.log(error)
      })
  }
};

export default w4mapi;
