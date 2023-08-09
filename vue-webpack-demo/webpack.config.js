const path = require('path');
const HtmlWebpackplugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require("vue-loader");
const constant = require('./config');
console.log('constant', constant)

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
            {
              test: /.vue$/,
              use: [
                {
                  loader: 'vue-loader',
                  options: {
                    compilerOptions: {
                      preserveWhitespace: false
                    },
                  }
                }
              ]
            },
            /* 
            css-loader主要是解析 css 文件，style-loader 主要是将 css 解析到html页面的style上，postcss-loader和autoprefixer实现自动添加css3前缀
            */
            {
              test: /.css$/,
              use: [
                  {
                      loader: 'style-loader'
                  },
                  {
                      loader: 'css-loader'
                  },
                  {
                      loader: 'postcss-loader',
                      options: {
                          plugins: [
                              require("autoprefixer") /*自动添加前缀*/
                          ]
                      }
                  }
              ]
          },
          /* 
          file-loader可以用来帮助webpack打包处理一系列的图片文件，而url-loader它除了做file-loader能做的事情，
          还会通过配置规则将一定范围大小的图片打包成base64的字符串，放到dist.js文件里，从而减少https的图片请求数
          */
          // {
          //     test: /.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(?.+)?$/,
          //     use: [{
          //       loader: 'url-loader',
          //       options: {
          //         limit: 10000
          //       }
          //     }]
          // }
        ]
    },
    plugins:[
        new HtmlWebpackplugin({
          filename: 'index.html', // 打包后的文件名，默认index.html
          template: path.resolve(__dirname, 'index.html') // 导入被打包的文件模板
        }),
        new VueLoaderPlugin(),
        /* webpack提供的DefinePlugin插件，可以很方便的定义环境变量 */
        // new webpack.DefinePlugin({
        //   CONSTANT: JSON.stringify(constant)
        // })
    ],
    
    // 需要注意的是，devServer生成的文件是存在我们电脑的内存中的，不在我们的硬盘上。
    devServer: {
      host: 'localhost',
      port: 9527
    },
    
}
  