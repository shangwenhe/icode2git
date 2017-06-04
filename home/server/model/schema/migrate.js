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

let migrateSchema = new Schema({
    destination: ObjectId,
    target: ObjectId,
    mark: String,
    username: String,
    create_time: {
        type: Date,
        default: Date.now
    },
    modify_time: {
        type: Date
    }
});

try{
    var migrate = mongoose.model('Migrate', migrateSchema);
}catch(e){
    var migrate = mongoose.model('Migrate');
}

export default migrate;
/* eslint-enable */
