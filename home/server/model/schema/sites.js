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

/**
 *  @desc 引入配置文件
 */
import conf from '../../conf/schema.js';

let sitesSchema = new Schema({
    name: String,
    alias: String,
    path: String,
    describe: String,

    downloadcmd: String,
    uploadcmd: String,
    updatecmd: String,
    logintype: {
        type: String,
        enum: conf.logintype,
        default: conf.logintype[0]
    },

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
