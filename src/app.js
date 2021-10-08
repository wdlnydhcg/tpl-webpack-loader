/*
 * @Author: MrAlenZhong
 * @Date: 2021-10-04 11:34:10
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-10-04 12:44:11
 * @Description: 
 */
import tpl from './info.tpl';
const oApp = document.querySelector('#app');


oApp.innerHTML = tpl({
  name : '张三',
  age : 14,
  sex : '男'
})