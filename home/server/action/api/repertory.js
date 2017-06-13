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
            // 更新仓库
            repertory.updateCode({ _id }, req.body, (err, data) =>{
                res.json({
                    msg: 'update',
                    err,
                    data
                });
            });
            break;
        case 'upload':
            // 上传仓库
            repertory.uploadCode({ _id }, req.body, (err, data) =>{
                res.json({
                    msg: 'upload',
                    err,
                    data
                });
            });
            break;
        case 'download':
            // 下载仓库
            repertory.downloadCode({ _id }, req.body, (err, data) =>{
                res.json({
                    msg: 'download',
                    err,
                    data
                });
            })
            break;
        case 'status':

            /**
             * @desc 下载完成后的回调接口 对应更新状态
             */ 
            repertory.update({ _id }, req.query , (err, data) =>{
                res.json({
                    msg: 'status',
                    err,
                    data
                });
            })
            break;
        default:
            res.json({
                msg: 'noaction',
                data: 'error'
            });

    }
}

export default {
    post,
    get,
    delete: deleteById,
    put
};
/* eslint-enable */
