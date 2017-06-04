/**
 * @file: migrate.js
 * @author: shangwenhe@itv.baidu.com
 * @date: 2017-06-03
 * @description: this is a <js> file
 */
/* eslint-disable */
import migrate from './schema/migrate';
import async from 'async';

class Migrate {
    /**
     *  @desc 添加迁移地址
     * */
    add(param, callback) {
        async.waterfall([
            function(callback) {
                let Rep = new migrate(Object.assign({
                }, param));
                Rep.save(callback);
            }
        ], callback)
    }

    /**
     * @desc 查询迁移列表
     */
    list(query, callback) {
        migrate.find(query, callback)
    }
    remove(param, callback) {
        migrate.remove(param, callback)
    }
}

export default new Migrate;
/* eslint-enable */
/* eslint-enable */
