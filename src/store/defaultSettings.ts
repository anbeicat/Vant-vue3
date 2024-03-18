/*
 * @Author: anqiao 1102877041@qq.com
 * @Date: 2023-03-07 09:54:35
 * @LastEditors: anqiao 1102877041@qq.com
 * @LastEditTime: 2023-10-21 22:28:06
 * @description:
 * @FilePath: /Vant-vue3/src/store/defaultSettings.ts
 */
import { defineStore } from 'pinia'
import { useLocalStorage, useSessionStorage } from '@vueuse/core'
export const useDefaultStore = defineStore('main', {
  state: () => ({
    "theme": "light",
    "sideTheme": "white",
    "primaryColor": "#18A058FF",
    "layoutMode": "ltr",
    "deviceType": "pc",
    "slideMenu": false,
    "slideMenuMouseOver": false,
    "sideBarCheckedEffect": "clear",
    "accordionMenu": true,
    "sideWidth": 210,
    "pageAnim": "opacity",
    "isCollapse": false,
    "isShowTabbar": true,
    "isFixedNavBar": true,
    "isOpenWaterMark": false,
    "waterMark": "Admin Work Pro",
    "isGray": false,
    "locale": "zh_CN",
    "footerTip": "Copyright © Admin Work Pro 2023",
    "actionBar": {
      "isShowSearch": true,
      "isShowMessage": true,
      "isShowRefresh": true,
      "isShowFullScreen": true
    }
  }),
  actions: {
  },

})