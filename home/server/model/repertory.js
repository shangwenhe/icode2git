/**
 * @file: repertory.js
 * @author: shangwenhe@itv.baidu.com
 * @date: 2017-06-02
 * @description: this is a <js> file
 */
/* eslint-disable */


import repertory from './schema/repertory';

class Repertory{

    add(param, callback){
        callback(null ,param);
    }
    remove(param, callback){
        callback(null ,param);
    }
    list(param, callback){
        
        callback(null ,param);
    }
}

export default new Repertory;
/* eslint-enable */
