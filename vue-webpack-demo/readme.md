# 给process进程设置环境变量

script命令
"start": "set NODE_ENV=development && webpack-dev-server",
"build": "set NODE_ENV=production && webpack --config webpack.config.js"


process.env.NODE_ENV可以访问到设置的变量

相关地址：https://juejin.cn/post/7257893268972388413#heading-0