/**
 * @file: migrate.js
 * @author: shangwenhe@itv.baidu.com
 * @date: 2017-06-06
 * @description: this is a <js> file
 */
/* eslint-disable */
import Migrate from '../model/migrate.js';
import sites from '../model/sites';
// let sites = new Sites;
import Repertory from '../model/repertory';
let repertory = new Repertory;
import async from 'async';


class serviceMigrate  extends Migrate {
    constructor() {
        super();
    }
    list(query, callback){
        async.waterfall([
            (callback)=> {
               super.list(query, callback);
            },
            function(list, callback) {
                let eachList = [];

                async.map(list, function(item, callback){
                    async.waterfall([function(callback){
                        // 取得仓库地址
                        async.map([item.origin, item.target], function(_id, callback){
                            repertory.list({_id}, function(err, item){
                                callback(err, item[0]) 
                            })
                        }, callback);
                    }, function(result, callback){
                        // 取得仓库地址
                        async.map(result, function(info, callback){
                            let { site } = info;
                            sites.list({_id: site}, function(err, item){
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

}
export default new serviceMigrate;
/* eslint-enable */
