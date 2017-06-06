/**
 * @file: repertory.js
 * @author: shangwenhe@itv.baidu.com
 * @date: 2017-06-02
 * @description: this is a <js> file
 */
/* eslint-disable */

import repertory from '../../service/repertory';

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
function put(req, res){
    let {action, _id} = req.params;
    switch(action){
        case 'update':
            repertory.update({ _id }, req.body, (err, data) =>{
                res.json({
                    msg: 'update',
                    data: data
                });
            });
            break;
        case 'download':
        default:
        repertory.update({ _id }, req.body, (err, data) =>{
            res.json({
                msg: 'download',
                data: data
            });
        })

    }
}

export default {
    post,
    get,
    delete: deleteById,
    put
};
/* eslint-enable */
