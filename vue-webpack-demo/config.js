// 通过 webpack提供的DefinePlugin插件，可以很方便的定义环境变量

const NODE_ENV = process.env.NODE_ENV; // webpack编译时会获取node环境的配置信息
console.log('NODE_ENV', NODE_ENV)
const config = {
     production: { // 生产环境(线上环境)
        DOMAIN: 'production.com', // 上线域名
     },
     development: { // 开发环境
        DOMAIN: 'development.com', // 测试域名
     }
}
module.exports = config[NODE_ENV];
