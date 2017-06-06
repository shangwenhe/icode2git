/**
 * @file: migrate.js
 * @author: shangwenhe@itv.baidu.com
 * @date: 2017-06-05
 * @description: this is a <js> file
 */
/* eslint-disable */
import migrate from '../../service/migrate';


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

function removeById(req, res){
    migrate.remove(req.param._id, (err, data)=>{
        res.json({
            msg: 'delete',
            data: data
        });
    })
}

export default {
    post,
    get,
    delete: removeById
}
/* eslint-enable */
