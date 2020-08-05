import Vue from 'vue'
// 方法一：手动导入挂载
// import myDialog from '@/components/custom/my-dialog/my-dialog.vue'
// const components=[
//     myDialog
// ]

// components.forEach(component => {
//     Vue.component(component.name,component)
// });

// 方法二：require扫描目录文件挂载
/**
 * 参数true为是否扫描所有子文件夹
 */
const context = require.context('../components/acustom', true, /\.vue$/)
context.keys().forEach(key => {
  const component = context(key).default
  Vue.component(component.name, component)
})
