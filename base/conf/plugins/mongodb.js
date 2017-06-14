/**
 * @file mongodb 配置
 * @author lanxyou
 */

var dev_config = {
    master: {
        uri: 'mongodb://10.143.149.41:8034/migrate',
        options: {

        }
    }
}

var product_config = {
    master: {
        uri: 'mongodb://10.143.149.41:8034/migrate',
        options: {

        }
    }
}

module.exports.mongodb = yog.DEBUG ? dev_config : product_config;
