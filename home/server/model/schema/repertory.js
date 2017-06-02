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
    author_id: String
});

let repertory = mongoose.model('Repertory', repertorySchema);
export default { repertory };
/* eslint-enable */
