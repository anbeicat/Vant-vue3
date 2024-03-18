<!--
 * @Author: anqiao 1102877041@qq.com
 * @Date: 2023-10-21 22:52:10
 * @LastEditors: anqiao 1102877041@qq.com
 * @LastEditTime: 2023-12-10 23:54:35
 * @description: 
 * @FilePath: /Vant-vue3/src/pages/buttons.vue
-->
<script setup lang="ts">
import { ref, reactive, onBeforeMount, onMounted, h } from 'vue'

</script>

<template>
    <h5>按钮类型</h5>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
</template>

<style lang='less' scoped></style>
