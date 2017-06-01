/**
 * @file plugin mongodb
 * @author shangwenhe 
 */

var mongoose = require('mongoose');
var Promise = require('bluebird');
Promise.promisifyAll(mongoose);
var db = {};
var _ = require('lodash');

/**
 * 配置数据库，初始化
 * @param  {[type]} config [description]
 * @return {[type]}        [description]
 */
db.config = function (config, db) {
    var dbconfig = config[db || 'master'];
    var uri = dbconfig.uri;
    var options = dbconfig.options || {};

    mongoose.connect(uri, options);
    var conn = mongoose.connection;

    conn.on('error', function (err) {
        yog.log.fatal({
            stack: err,
            errno: 601,
            msg: 'connect mongo database error'
        });
    });
    conn.once('open', function () {
        console.log('database `%s` connection open', config.master.uri);
    });
};

/**
 * 自增id
 */
var modelId = mongoose.model('ID', {_id: String, len : Number});
db.increaseId = function (collection, callback) {
    return modelId.findByIdAndUpdateAsync(
        collection,
        {$inc: {len: 1}},
        {new: true, upsert: true}
    ).error(function (err) {
        if (err) {
            yog.log.fatal('fetch `%s` id error', collection);
        }
    }).then(function (docs) {
        return docs.len;
    });
}

module.exports.mongodb = function(app, confs){
    if (!_.isArray(confs)){
        confs = [confs];
    }

    confs.forEach(function (conf) {
        for (var dbType in conf) {
            db.config(conf, dbType);
        }
    });

    yog.mongodb = db;
};
