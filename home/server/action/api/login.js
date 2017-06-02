/**
 * @file: login.js
 * @author: shangwenhe@itv.baidu.com
 * @date: 2017-06-01
 * @description: this is a <js> file
 */
/* eslint-disable */


function post(req, res) {
    res.json({
        msg: 'post',
        data: req.body
    });
}

function get(req, res) {
    res.json({
        msg: 'get'
    });
}

export default {
    post,
    get
};
/* eslint-enable */
