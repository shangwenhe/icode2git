/**
 * @file: sites.js
 * @author: shangwenhe@itv.baidu.com
 * @date: 2017-06-02
 * @description: this is a <js> file
 */
/* eslint-disable */

// import * as mongoose from 'mongoose';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId

let sitesSchema = new Schema({
    name: String,
    alias: String,
    path: String,
    describe: String,
    create_time: {
        type: Date,
        default: Date.now
    },
});

try{
    var sites = mongoose.model('Sites', sitesSchema);
}catch(e){
    var sites = mongoose.model('Sites');
}

export default sites;
/* eslint-enable */
