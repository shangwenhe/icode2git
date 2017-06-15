/**
 * @file: git.js
 * @author: shangwenhe@itv.baidu.com
 * @date: 2017-06-07
 * @description: this is a <js> file
 */
/* eslint-disable */

let exec = require('child_process').exec;
import async from 'async';
import curl from './curl';
const REPPATH = yog.ROOT_PATH + '/tmpl/';

class Git {
    replace(map, regexStr) {
        return regexStr.replace(/\$\{(.*?)\}/ig, function(m, k) {
            return map[k.replace(' ', '')];
        });
    }

    /**
     * @desc clone code
     * @param {object} repertory  仓库的详细信息
     * @param {function} callback 回调函数
     */
    clone(repertory, callback) {
        // 判断logintype[登录类型]
        if (repertory.site.logintype == 'username') {
            this.cloneByHttp(repertory, callback);
        } else {
            this.cloneBySsh(repertory, callback);
        }
    }

    /**
     * @desc clone代码通过http
     * @param {object} repertory  仓库的详细信息
     * @param {function} callback 回调函数
     */
    cloneByHttp(repertory, callback) {
        let cmd = this.replace({
            path: repertory.path
        }, repertory.site.downloadcmd);

        exec([cmd, REPPATH + repertory.localpath].join(' '), function(err, stdout, stderr) {
            callback(null, repertory);
        })


    }

    /**
     * @desc clone代码通过ssh
     * @param {object} repertory  仓库的详细信息
     * @param {function} callback 回调函数
     */
    cloneBySsh(repertory, callback) {

        let cmd = this.replace({
            path: this.replace({
                username: repertory.local[repertory.site_name].username
            }, repertory.path)
        }, repertory.site.downloadcmd);

        exec([cmd, REPPATH + repertory.localpath].join(' '), function(err, stdout, stderr) {
            curl.setStatus(repertory._id, 'downloadafter', function(err) {
                callback(err, {
                    cmd,
                    path: repertory.localpath
                })
            });
        })
    }

    /**
     * @desc 更新代码
     * @param {object} repertory  仓库的详细信息
     * @param {function} callback 回调函数
     */
    update(repertory, callback) {
        callback(null, url)
    }

    /**
     * @desc 上传代码
     * @param {object} repertory  仓库的详细信息
     * @param {function} callback 回调函数
     */
    pushOrigin(repertory, callback) {

        // 切换目录
        let workDir = ['cd', REPPATH + repertory.originPath, ';'].join(' ')
        async.waterfall([

            // 下载所有分支
            (callback) => {
                let cmd = [
                    'git branch -ra',
                    'grep \'^\\s*remotes\\\/origin\'',
                    'egrep --invert-match \'\(\:\?HEAD\)\''
                ];
                exec(workDir + cmd.join(' | '), (err, result, mk) => {
                    async.map(result.split(/\n/).filter(item => item), (item, callback) => {
                        let path = item.replace(/\s/g, '').split('/');
                        let cmd = [
                            'git',
                            'branch',
                            this.replace({
                                branch: path[2],
                                remoteBranch: path.join('/')
                            }, '--track ${branch}  ${remoteBranch}')
                        ];
                        exec(workDir + cmd.join(' '), function(err, output, stdout) {
                            if (err && err.code == 128) {
                                callback(null, {
                                    msg: 'ok',
                                    branch: path[2], 
                                    data: {
                                        cmd: err.cmd,
                                        info: stdout
                                    }
                                })
                                return;
                            }
                            callback(err, {
                                    msg: 'ok',
                                    branch: path[2], 
                                    data: {
                                        cmd: err && err.cmd || cmd.join(' '),
                                        info: stdout
                                    }
                                });
                        })
                    }, callback);
                })

            },

            // git remote add xiaodtv http://git.xiaodutv.com/migrate/node-proxy.git 
            (result, callback) => {

                let remote = this.replace({
                    origin: repertory.site.name,
                    path: repertory.path + ( /\.git$/.test(repertory.path)? '': '.git')
                }, "git remote add ${origin} ${path}");
                exec(workDir + remote, function(err, stout) {
                    if (err && err.code == 128) {
                        callback(null, result);
                        return;
                    }
                    callback(err, result)
                });
            },

            // git push xiaodtuv master 
            (result, callback) => {
                async.map(result, (item, callback ) => {
                
                    let push = this.replace({
                        origin: repertory.site.name,
                        branch: item.branch
                    }, "git push ${origin} ${branch}");

                    console.log(push);
                    // 下载所有分支
                    exec(workDir + push, callback);
                
                }, callback)
            }

        ], callback)
    }
}
// curl -i -X PUT  127.0.0.1:8085/api/repertory/:id/:status
export
default new Git;
/* eslint-enable */
