/**
 * @file: schema.js
 * @author: shangwenhe@itv.baidu.com
 * @date: 2017-06-06
 * @description: this is a <js> file
 */
/* eslint-disable */

export default  {
    status :[
        'start',

        'downloadbefore', // 未下载
        'downloading',    // 下载中
        'downloadafter',  // 下载完成

        'uploadbefore',   // 未上传
        'uploading',      // 上传中
        'uploadafter',    // 上传完成

        'updatebefore',   // 未更新
        'updateing',      // 更新中
        'updateafter',    // 更新完成

        'end'
    ],
    logintype:[
        'username',
        'ssh'
    ]
};
/* eslint-enable */
