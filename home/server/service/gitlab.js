/**
 * @file: gitlab.js
 * @author: shangwenhe@itv.baidu.com
 * @date: 2017-06-14
 * @description: this is a <js> file
 */
/* eslint-disable */

let exec = require('child_process').exec;
import conf from '../conf/gitlab';

class Gitlab{
    // 取得所有组
    groups(callback){
        let cmd =[
                'curl',
                '--header \"PRIVATE-TOKEN: ' + conf.token + '\"',
                '--header \"SUDO: root\"',
                '\"' + conf.host + conf.api + 'groups'  + '\"' 
            ];
        exec(cmd.join(' '), function(err, data){
            if(err){
                callback(err);
                return;
            }
            callback(err, JSON.parse(data))
        });
    }
    // 添加组
    addGroup(group, callback){
        let { username, name, path, namespace_id, description, visibility_level } = group;
        let cmd =[
                'curl',
                '--header \"PRIVATE-TOKEN: ' + conf.token + '\"',
                '--header \"SUDO: ' + username + '\"',
                '--header \"Content-Type: application/json\"',
                '-d \'' + JSON.stringify({name, path, namespace_id, description, visibility_level, 'public': group.public }) + '\'',
                '\"' + conf.host + conf.api + 'projects'  + '\"' 
            ];
        exec(cmd.join(' '), function(err, data){
            if(err){
                callback(err);
                return;
            }
            callback(err, JSON.parse(data))
        });
    }

    /**
     * @desc 添加仓库
     */
    addProject(project, callback){
        callback(null, project);
    }

    /**
     * @desc 取得指定用户的详细信息
     */
    users(callback){
        let cmd =[
                'curl',
                '--header \"PRIVATE-TOKEN: ' + conf.token + '\"',
                '--header \"SUDO: root\"',
                '\"' + conf.host + conf.api + 'users'  + '\"' 
            ];
        exec(cmd.join(' '), function(err, data){
            if(err){
                callback(err);
                return;
            }
            callback(err, JSON.parse(data))
        });
    
    }

    /**
     * @desc 添加用户
     */
    addUser(username, callback){
        callback(null, username);
    }

};

export default new Gitlab
/* eslint-enable */
