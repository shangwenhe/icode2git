/**
 * @file FIS 配置
 * @author
 */

fis.config.set('namespace', 'agile');
fis.set('project.fileType.text', 'jes');

// chrome下可以安装插件实现livereload功能
// https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei

// fis.config.set('livereload.port', 35729);

fis.match('server/**.jes', {
    parser: fis.plugin('typescript', {
        module: 1,
        target: 1
    }),
    rExt: 'js'
});
fis.match('server/conf/(**)', {
    optimizer: null,
    useHash: false,
    postprocessor: null,
    release: '${config}/$1'
});
fis.match('server/(plugins/**)', {
    optimizer: null,
    useHash: false,
    postprocessor: null,
    release: '$1'
});

fis.match('*', {
    optimizer: null,
    useHash: false,
    deploy: fis.plugin('http-push', {
        receiver: 'http://180.76.248.110:8077/yog/upload',
        to: '/'
    })
});
