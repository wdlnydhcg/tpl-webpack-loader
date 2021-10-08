/*
 * @Author: MrAlenZhong
 * @Date: 2021-10-04 11:37:26
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-10-08 16:01:34
 * @Description: 
 */
const { tplReplace } = require('../utils')
const {getOptions} = require('loader-utils')    //webpack内置的包，专门为loader获取webpack.config.js中的参数
function tplLoader(source) {
  source = source.replace(/\s+/g, '')   //source是loader匹配的文件
  console.log('source',source);
  const { log } = getOptions(this)    //this是当前loader的执行上下文
  console.log('log',log);
  const _log = log ? `console.log('compiled the file which is from ${ this.resourcePath }')`:'';
  return `
    export default (options) => {
      ${ tplReplace.toString() }
      return tplReplace('${source}',options);
    }
  `
}
module.exports = tplLoader