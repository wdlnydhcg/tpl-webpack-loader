/*
 * @Author: MrAlenZhong
 * @Date: 2021-10-02 17:20:19
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-10-04 12:40:45
 * @Description: 
 */
/**
 * mode development prodution
 * entry  入口文件
 * output path  filename    打包输出文件
 * devtool    source-map
 * module rules   loader
 * plugins    插件
 * devServer  开发服务器
 */

const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode:'development',
  entry:resolve(__dirname,'src/app.js'),
  module:{
    rules:[
      {
        test: /\.tpl$/,
        use: [
            'babel-loader',//然后将字符串转为js程序
            {
                loader: './loaders/tpl-loader',//目的是写这个tpl-loader 将tpl文件转为字符串
                options: {
                    log: true
                }
            }
        ]
      }
    ],
  },
  plugins:[
      new HtmlWebpackPlugin({
          template: resolve(__dirname, 'index.html')
      })
  ],
  devServer: {
    port: 3333
  }
}