/**
 * @file FIS 配置
 * @author shangwenhe@itv.baidu.com
 */

fis.config.set('namespace', 'home');

/**
 * client config
 */
// vue组件中的less片段处理
fis.match('client/**.vjs:less', {
    rExt: '.css',
    parser: fis.plugin('less')
});

// vue组件中js片段处理。
fis.match('client/**.vjs:js', {
    parser: fis.plugin('typescript'),
    release: '${static}/$1'
});



fis.match('lib/**.js', {
    isMod: true,
});
fis.match('lib/user/**.js', {
    parser: fis.plugin('typescript')
});
fis.match('client/router.js', {
    parser: fis.plugin('typescript'),
    isMod: true,
});
fis.match('vue.min.js', {
    isMod: true,
    // id: 'vue',
    moduleId:'vue'
});

fis.match('client/**.vjs', {
    isMod: true,
    rExt: '.js',
    useSameNameRequire: true,
    parser: fis.plugin('vue-component', {
        cssScopeFlag: 'mis'
    })
});



/**
 * server config
 */

fis.match('server/**.js', {
    parser: fis.plugin('typescript')
});

fis.match('*', {
    optimizer: null,
    useHash: false,
    deploy: fis.plugin('http-push', {
        receiver: 'http://127.0.0.1:8085/yog/upload',
        to: '/'
    })
});
