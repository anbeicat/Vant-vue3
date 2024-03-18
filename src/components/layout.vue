<!--
 * @Author: anqiao 1102877041@qq.com
 * @Date: 2023-10-15 03:44:09
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-03-18 18:43:59
 * @description: 
 * @FilePath: /Vant-vue3/src/components/layout.vue
-->
<script setup lang="ts">
import { ref, reactive, onBeforeMount, onMounted, h } from 'vue'
// data
const active = ref(0)

// methods
const onTabClick = () => [

]

// 搜索按钮
const searchClick = () => {

}

// 日历按钮
const calendarClick = () => {

}
// 导航栏左侧按钮
const leftClick = () => {

}

</script>

<template>
  <div>
    <!-- head -->
    <div class="head">
      <van-nav-bar title="鲨鱼记账" safe-area-inset-top placeholder :clickable="false" @click-left="leftClick">
        <template #left>
          <van-icon class="iconfont icon-gerenzhongxin-zhihui" name="icon-gerenzhongxin-zhihui" size="18" />
        </template>
        <template #right>
          <van-icon name="search" size="18" @click="searchClick" />
          <van-icon class="iconfont icon-calendar" name="icon-calendar" size="18" @click="calendarClick" />
        </template>
      </van-nav-bar>
      <div class="headInformation">
        <!-- 日期 -->
        <div>
          <span>2024年</span>
          <div>
            <span>03</span>
            <span class="monthText">月</span>
          </div>
        </div>
        <!-- 收入 -->
        <div>
          <span>收入</span>
          <div>653000.00</div>
        </div>
        <!-- 支出 -->
        <div>
          <span>支出</span>
          <div>1142538.00</div>
        </div>
      </div>
    </div>

    <div class="sidebar">
      <div>
        <router-view></router-view>
      </div>
    </div>

    <!-- footer -->
    <van-tabbar route safe-area-inset-bottom>
      <van-tabbar-item replace to="/home" icon="orders-o">明细</van-tabbar-item>
      <van-tabbar-item replace to="/search">
        <span>图表</span>
        <template #icon>
          <van-icon class="iconfont icon-shuju" name="icon-shuju" />
        </template>
      </van-tabbar-item>

      <van-tabbar-item replace icon="friends-o">
        <span>记账</span>
        <template #icon>
          <van-icon class="iconfont icon-add" name="icon-add" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace icon="friends-o">
        <span>发现</span>
        <template #icon>
          <van-icon class="iconfont icon-discover" name="icon-discover" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace icon="friends-o">
        <span>我的</span>
        <template #icon>
          <van-icon class="iconfont icon-customer-center" name="icon-customer-center" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang='less' scoped>
.sidebar {
  display: flex;
}

.icon-calendar {
  padding-left: 10px;
}


.head {
  --van-nav-bar-background: #f4b941;
  background-color: #f4b941;
  .van-hairline--bottom::after {
    border: 0px;
  }
}



.headInformation {
  margin: 0 16px;
  display: flex;
  justify-content: space-between;
}

.headInformation>div>span,
.monthText {
  font-size: 12px;
  color: #878585;
}
</style>
