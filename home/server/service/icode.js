/**
 * @file: icode.js
 * @author: shangwenhe@itv.baidu.com
 * @date: 2017-06-14
 * @description: this is a <js> file
 */
/* eslint-disable */

let exec = require('child_process').exec;
import async from 'async';
class Icode {
    projects(body, callback) {
        let cmd = [
            'curl',
            '-H \"Cookie:' + body.COOKIE + '\"',
            '\"http://icode.baidu.com/rest/git/repo/self/repoInfo?role=all\"'
        ];
        async.waterfall([
            function(callback) {
                exec(cmd.join(' '), callback);
            },
            function(data, result, callback){
                callback(null, JSON.parse(data))
            }
            
        ],callback)
        // callback(null, cmd.join(' '))
    }
}

export
default new Icode
/* eslint-enable */
