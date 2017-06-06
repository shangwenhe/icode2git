/**
 * @file: migrate.js
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


let migrateSchema = new Schema({
    origin: ObjectId,
    target: ObjectId,
    mark: String,
    username: String,
    status: {
        type: String,
        enum: conf.status,
        default: 'start'
    },
    create_time: {
        type: Date,
        default: Date.now
    },
    modify_time: {
        type: Date,
        default: Date.now
    }
});

try{
    var migrate = mongoose.model('Migrate', migrateSchema);
}catch(e){
    var migrate = mongoose.model('Migrate');
}

export default migrate;
/* eslint-enable */
