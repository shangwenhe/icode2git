/**
 * @file: repertory.js
 * @author: shangwenhe@itv.baidu.com
 * @date: 2017-06-02
 * @description: this is a <js> file
 */
/* eslint-disable */


import repertory from './schema/repertory';
import async from 'async';

class Repertory {

    add(param, callback) {
        async.waterfall([
            function(callback) {
                let Rep = new repertory(Object.assign({
                }, param));
                Rep.save(callback);
            }
        ], callback)
    }
    remove(param, callback) {
        repertory.remove(param, callback)
    }
    list(param, callback) {
        repertory.find({}, callback)
    }
}

export
default new Repertory;
/* eslint-enable */
