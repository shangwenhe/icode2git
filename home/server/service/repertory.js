/**
 * @file: repertory.js
 * @author: shangwenhe@itv.baidu.com
 * @date: 2017-06-06
 * @description: this is a <js> file
 */
/* eslint-disable */
import Repertory from '../model/repertory.js';
import Sites from '../model/sites.js';
import async from 'async';
import Git from './git';


class serviceRepertory extends Repertory {
    constructor() {
        super();
    }

    list(query, callback) {
            super.list(query, function(err, result) {
                async.map(result, function(item, callback) {
                    Sites.list({
                        _id: item.site
                    }, function(err, result) {
                        callback(err, Object.assign({}, item._doc, {
                            site: result[0],
                            site_name: result[0]['name']
                        }));
                    })
                }, callback)
            });
        }
        /**
         * @desc 更新本地仓库
         */
    update(id, body, callback) {
            async.waterfall([
                /**
                 * @desc 通过ID取得仓库的详细信息
                 */
                (callback) => {
                    super.list(id, function(err, repertory) {
                        callback(err, repertory[0])
                    })
                },

                /**
                 * @desc 通过仓库的详细信息 更新本地仓库
                 */
                (repertory, callback) => {
                    Sites.list({
                        _id: repertory.site
                    }, function(err, result) {
                        callback(err, Object.assign({}, repertory._doc, {
                            site: result[0],
                            site_name: result[0]['name']
                        }))
                    })
                },
                /**
                 * @desc 通过仓库的详细信息 更新本地仓库
                 */
                (repertory, callback) => {
                    Git.update(repertory, callback);
                },
                /**
                 * @desc 通过仓库的详细信息 更新仓库信息
                 */
                (repertory, callback) => {
                    super.update(id, body, callback);
                }
            ], callback)
        }
        /**
         * @desc 下载本地仓库
         */
    download(id, body, callback) {
        async.waterfall([
            /**
             * @desc 通过ID取得仓库的详细信息
             */
            (callback) => {
                super.list(id, function(err, repertory) {
                    callback(err, repertory[0])
                })
            },
            /**
             * @desc 通过仓库的详细信息 更新本地仓库
             */
            (repertory, callback) => {
                Sites.list({
                    _id: repertory.site
                }, function(err, result) {
                    callback(err, Object.assign({}, repertory._doc, {
                        site: result[0],
                        site_name: result[0]['name']
                    }))
                })
            },
            /**
             * @desc 通过仓库的详细信息 下载本地仓库
             */
            (repertory, callback) => {
                Git.clone(repertory, callback);
            },
            /**
             * @desc 通过仓库的详细信息 下载仓库信息
             */
            (repertory, callback) => {
                super.update(id, body, callback);
            }
        ], callback)
    }
}
export
default new serviceRepertory;
/* eslint-enable */
