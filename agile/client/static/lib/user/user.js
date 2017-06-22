/**
 * @file: use.js
 * @author: shangwenhe@itv.baidu.com
 * @date: 2017-06-09
 * @description: this is a <js> file
 */
/* eslint-disable */
export default {
   name(){
        let author = window.localStorage.getItem('author');
        let username = 'unknown';
        if(!author){
            window.location.hash= '#/login';
        }
        author = JSON.parse(author);
        for( let au  in author){ 
            if(author[au]['sitename'] == 'xiaodu'){
                username = author[au]['username'];
                break; 
            }
        }
        return username;
   
   }

};
/* eslint-enable */
