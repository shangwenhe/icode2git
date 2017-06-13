/**
 * @file: repertory.js
 * @author: shangwenhe@itv.baidu.com
 * @date: 2017-06-02
 * @description: this is a <js> file
 */
/* eslint-disable */


import repertory from './schema/repertory';
import async from 'async';

class Repertory {
    
    /**
     *  @desc 添加仓库地址
     * */
    add(param, callback) {
        async.waterfall([
            function(callback) {
                let Rep = new repertory(Object.assign({
                }, param));
                Rep.save(callback);
            }
        ], callback)
    }

    /**
     * @desc 查询仓库列表
     */
    list(query, callback) {
        repertory.find(query, callback)
    }

    /**
     * @desc 删除仓库
     */
    remove(param, callback) {
        repertory.remove(param, callback)
    }

    /**
     * @desc 修改仓库状态
     */
    update(id, param, callback){
        repertory.update(id, {$set: param}, callback);
    }
}

export default Repertory;
/* eslint-enable */
