/**
 * @file: sites.js
 * @author: shangwenhe@itv.baidu.com
 * @date: 2017-06-14
 * @description: this is a <js> file
 */
/* eslint-disable */
let sites = null;
function get(name){
        if(sites){
           return sites[name];
        } 
        sites = {};
        let author = window.localStorage.getItem('author');
        if(!author){
            window.location.hash= '#/login';
        }
        author = JSON.parse(author);
        for( let au  in author){ 
            sites[author[au]['sitename']] = author[au];
        }

        return  sites[name];
  
  }  
export default {
    get
}
/* eslint-enable */
