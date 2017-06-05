/**
 * @file: migrate.js
 * @author: shangwenhe@itv.baidu.com
 * @date: 2017-06-05
 * @description: this is a <js> file
 */
/* eslint-disable */
import migrate from '../../model/migrate';


function post(req, res) {
    migrate.add(req.body, (err, data) => {
        res.json({
            msg: 'post',
            data: data
        });
    })
}

function get(req, res) {
    migrate.list(req.query, (err, data) => {
        res.json({
            msg: 'get',
            data: data
        });
    });
}
export default {
    post,
    get,
}
/* eslint-enable */
