/**
 * @file: sites.js
 * @author: shangwenhe@itv.baidu.com
 * @date: 2017-06-02
 * @description: this is a <js> file
 */
/* eslint-disable */


import sites from './schema/sites';
import async from 'async';

class Sites {
    /**
     *  @desc 添加仓库地址
     * */
    add(param, callback) {
        async.waterfall([
            function(callback) {
                let site = new sites(Object.assign({
                }, param));
                site.save(callback);
            }
        ], callback)
    }

    /**
     * @desc 查询仓库列表
     */
    list(query, callback) {
        sites.find(query, callback)
    }
    remove(param, callback) {
        sites.remove(param, callback)
    }
}

export default new Sites;
/* eslint-enable */
