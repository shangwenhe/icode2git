/**
 * @file: curl.js
 * @author: shangwenhe@itv.baidu.com
 * @date: 2017-06-13
 * @description: this is a <js> file
 */
/* eslint-disable */
let exec = require('child_process').exec;
class Curl{

   setStatus(id, status, callback){
        let map={ id, status};
        let cmd = "curl -i -X PUT 'http://127.0.0.1:8085/api/repertory/${id}/status?status=${status}'"
                .replace(/\$\{(.*?)\}/ig, function(m, k) {
                    return map[k.replace(' ', '')];
                });
       exec(cmd, callback);
    
   }
   get (){
   
   }

}
export default new Curl;
/* eslint-enable */
