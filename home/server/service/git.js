/**
 * @file: git.js
 * @author: shangwenhe@itv.baidu.com
 * @date: 2017-06-07
 * @description: this is a <js> file
 */
/* eslint-disable */

let exec = require('child_process').exec;
const REPPATH = yog.ROOT_PATH + '/tmpl/';

class Git{
    /**
     * @desc clone code
     * @param {object} repertory  仓库的详细信息
     * @param {function} callback 回调函数
     */
    clone(repertory, callback){
        // 判断logintype[登录类型]
        if(repertory.site.logintype == 'username'){
            this.cloneByHttp(repertory, callback);
        }else{
            this.cloneBySsh(repertory, callback);
        }
    }
    /**
     * @desc clone代码通过http
     * @param {object} repertory  仓库的详细信息
     * @param {function} callback 回调函数
     */
    cloneByHttp(repertory, callback){
        let map={ path : repertory.path};
        let cmd = repertory.site.downloadcmd.replace(/\$\{(.*?)\}/ig, function(m,k){ return map[k.replace(' ','')]; });
        
       exec([cmd, REPPATH+repertory.localpath].join(' '), function(err, stdout, stderr){
            console.log(err, stdout) 
            callback(null, repertory);
       })


    }

    /**
     * @desc clone代码通过ssh
     * @param {object} repertory  仓库的详细信息
     * @param {function} callback 回调函数
     */
    cloneBySsh(repertory, callback){
        console.log(repertory.site.downloadcmd);
        let downloadcmd = repertory.downloadcmd;
        // exec();
        callback(null, repertory);
    }

    /**
     * @desc 更新代码
     * @param {object} repertory  仓库的详细信息
     * @param {function} callback 回调函数
     */
    update(repertory, callback){
        console.log(repertory);
        callback(null, url) 
    }
    /**
     * @desc 上传代码
     * @param {object} repertory  仓库的详细信息
     * @param {function} callback 回调函数
     */
    pushOrigin(localpath, callback){
        callback(null, url) 
    }
}
export default new Git;
/* eslint-enable */
