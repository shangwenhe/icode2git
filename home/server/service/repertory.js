/**
 * @file: repertory.js
 * @author: shangwenhe@itv.baidu.com
 * @date: 2017-06-06
 * @description: this is a <js> file
 */
/* eslint-disable */
import Repertory from '../model/repertory.js';


const exec = require('child_process').exec;

class serviceRepertory extends Repertory {
    constructor() {
        super();
    }
    update(id, body, callback) {
        super.list(id, function(err, result){
            let repertory = result[0];
            console.log(repertory.path);
            let cmd = 'git clone ' + repertory.path;
            console.log(yog.ROOT_PATH);
            // exec('git clone ' + repertory.path )
            
        });
        super.update(id, body, callback);
    }
}
export default new serviceRepertory;
/* eslint-enable */
