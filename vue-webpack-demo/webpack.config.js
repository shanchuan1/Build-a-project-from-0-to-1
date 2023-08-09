const path = require('path');
const HtmlWebpackplugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // 打包模式
    entry : './src/index.js', // 入口文件
    output : {
        filename : 'index.js', // 输出文件名
        path :  __dirname+'/dist' // 输出文件的根路径
    },
    module : {
        rules: [
            {
                /*将js文件转码成es5*/
                test: /.js?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env']
                    }
                  }
            },
        ]
    },
    plugins:[
        new HtmlWebpackplugin({
          filename: 'index.html', // 打包后的文件名，默认index.html
          template: path.resolve(__dirname, 'index.html') // 导入被打包的文件模板
        })
      ]
    
  }
  