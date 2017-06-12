/**
 * @file: repertory.js
 * @author: shangwenhe@itv.baidu.com
 * @date: 2017-06-02
 * @description: this is a <js> file
 */
/* eslint-disable */

// import * as mongoose from 'mongoose';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId

/**
 *  @desc 引入配置文件
 */
import conf from '../../conf/schema.js';

let repertorySchema = new Schema({
    site: ObjectId,
    path: String,
    localpath: String,
    migrate: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        enum: conf.status,
        default: conf.status[0]
    },
    create_time: {
        type: Date,
        default: Date.now
    },
    mark: String,
    username: String
});

try{
    var repertory = mongoose.model('Repertory', repertorySchema);
}catch(e){
    var repertory = mongoose.model('Repertory');
}

export default repertory;
/* eslint-enable */
