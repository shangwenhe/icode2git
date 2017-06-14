/**
 * @file: icode.js
 * @author: shangwenhe@itv.baidu.com
 * @date: 2017-06-14
 * @description: this is a <js> file
 */
/* eslint-disable */
import icode from '../../service/icode';

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

function projects(req, res) {
    icode.projects(req.body, function(err, data){
        res.json({
            msg: 'post',
            data,
            err
        });
    })    
}
export default {
    post,
    get,
    projects
};
/* eslint-enable */
