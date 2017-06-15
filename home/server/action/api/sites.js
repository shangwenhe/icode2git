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
        const fs = require('fs');
        fs.readFile('/Users/shangwenhe/.ssh/id_rsa.pub',function(err, sshkey){
            let SSHKEY = sshkey.toString()
            res.json({
                msg: 'get',
                data: data.map((item) => {
                    return Object.assign({}, item._doc, {
                        password: SSHKEY 
                    });
                })
            });
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
function put(req, res){
    let {_id} = req.params;
    sites.update({ _id }, req.body, (err, data) =>{
        res.json({
            msg: 'update',
            data: data
        });
    });
}

export default {
    post,
    get,
    put,
    delete: deleteById
};
/* eslint-enable */
