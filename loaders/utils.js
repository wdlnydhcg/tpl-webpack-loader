/*
 * @Author: MrAlenZhong
 * @Date: 2021-10-04 12:18:05
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-10-04 12:19:24
 * @Description: 
 */
function tplReplace(template, replaceObject) {
    return template.replace(/\{\{(.*?)\}\}/g, (node, key) => {//参考replace方法
        return replaceObject[key]
    })
}

module.exports = {
    tplReplace
}