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

let repertorySchema = new Schema({
    site: String,
    path: String,
    migrate: {
        type: Boolean,
        default: false
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
