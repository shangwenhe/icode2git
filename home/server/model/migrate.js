/**
 * @file: migrate.js
 * @author: shangwenhe@itv.baidu.com
 * @date: 2017-06-03
 * @description: this is a <js> file
 */
/* eslint-disable */
import migrate from './schema/migrate';
import repertory from './schema/repertory';
import sites from './schema/sites';

import async from 'async';

class Migrate {
    /**
     *  @desc 添加迁移地址
     * */
    add(param, callback) {
        async.waterfall([
            function(callback) {
                async.map([param.origin,param.target],function(_id, callback){
                    repertory.update({ _id }, { $set: { migrate: true }}, callback)
                },function(err, result){
                    let Rep = new migrate(Object.assign({
                    }, param));
                    Rep.save(callback);
                })
            }
        ], callback)
    }

    /**
     * @desc 查询迁移列表
     */
    list(query, callback) {
        async.waterfall([
            function(callback) {
                migrate.find(query, callback)
            },
            function(list, callback) {
                let eachList = [];

                async.map(list, function(item, callback){
                    async.waterfall([function(callback){
                        // 取得仓库地址
                        async.map([item.origin, item.target], function(_id, callback){
                            repertory.find({_id}, function(err, item){
                                callback(err, item[0]) 
                            })
                        }, callback);
                    }, function(result, callback){
                        // 取得仓库地址
                        async.map(result, function(info, callback){
                            let { site } = info;
                            sites.find({_id: site}, function(err, item){
                                let {_id, site, path, username, localpath, __v, create_time, status, migrate} = info;
                                callback(err, Object.assign({
                                    _id, path, username, localpath, __v, create_time, status, migrate
                                },{site: item[0]})) 
                            })
                        }, callback);
                    },function(result, callback){
                        let {_id, origin, target, mark, username, __v, modify_time, create_time} = item;
                        callback(null, Object.assign({_id, origin, target, mark, username, __v, modify_time, create_time},{
                            origin: result[0],
                            target: result[1],
                        }));
                    
                    }],callback);

                },callback)
            }

        ], callback)
    }
    remove(param, callback) {
        migrate.remove(param, callback)
    }
}

export default Migrate;
/* eslint-enable */
