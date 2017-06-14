/**
 * @file: gitlab.js
 * @author: shangwenhe@itv.baidu.com
 * @date: 2017-06-14
 * @description: this is a <js> file
 */
/* eslint-disable */
import gitlab from '../../service/gitlab';

function get(req, res){
   let { uncouple } = req.params;
   switch(uncouple){
        case 'groups':
            gitlab.groups(function(err, data){
                res.json({
                    msg: 'get groups',
                    data,
                    err
                });
            });
            break;
        case 'users':
            gitlab.users(function(err, data){
                res.json({
                    msg: 'get users',
                    data,
                    err
                });
            });
            break;
        default:
            res.json({
                msg: 'error'
            })
   }
}

function post(req, res){
   let { uncouple } = req.params;
   switch(uncouple){
        case 'group':
            gitlab.addGroup(req.body, function(err, data){
                res.json({
                    msg: 'add group',
                    data,
                    err
                });
            });
            break;
        case 'user':
            gitlab.addUser(req.body, function(err, data){
                res.json({
                    msg: 'add user',
                    data,
                    err
                });
            });
            break;
        case 'project':
            gitlab.addProject(req.body, function(err, data){
                res.json({
                    msg: 'add project',
                    data,
                    err
                });
            });
            break;
        default:
            res.json({
                msg: 'error'
            })
   }

}
export default{
    get,
    post,
}
/* eslint-enable */
