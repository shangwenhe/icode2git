/**
 * @file: repertory.js
 * @author: shangwenhe@itv.baidu.com
 * @date: 2017-06-02
 * @description: this is a <js> file
 */
/* eslint-disable */

import repertory from '../../model/repertory';

function post(req, res) {
    repertory.add(req.body, (err, data) => {
        res.json({
            msg: 'post',
            data: data
        });
    })
}

function get(req, res) {
    repertory.list(req.query, (err, data) => {
        res.json({
            msg: 'get',
            data: data
        });
    });
}

function deleteById(req, res) {
    
    repertory.remove(req.params, (err, data) => {
        res.json({
            msg: 'delete',
            data: data
        });
    });
}

export default {
    post,
    get,
    delete: deleteById
};
/* eslint-enable */
