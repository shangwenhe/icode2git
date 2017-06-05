/**
 * @file: sites.js
 * @author: shangwenhe@itv.baidu.com
 * @date: 2017-06-05
 * @description: this is a <js> file
 */
/* eslint-disable */

import sites from '../../model/sites';

function post(req, res) {
    sites.add(req.body, (err, data) => {
        res.json({
            msg: 'post',
            data: data
        });
    })
}

function get(req, res) {
    sites.list(req.query, (err, data) => {
        res.json({
            msg: 'get',
            data: data
        });
    });
}

function deleteById(req, res) {
    sites.remove(req.params, (err, data) => {
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
