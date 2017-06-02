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
            data: req.body
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

export default {
    post,
    get
};
/* eslint-enable */
