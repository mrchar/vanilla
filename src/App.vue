<template>
  <el-menu
    :default-active="activeIndex"
    router
    mode="horizontal"
    :ellipsis="false"
  >
    <el-menu-item index="">LOGO</el-menu-item>
    <div class="flex-1"></div>
    <el-menu-item index="/">Home</el-menu-item>
    <el-menu-item index="/about">About</el-menu-item>
  </el-menu>
  <router-view />
</template>

<script setup lang="ts">
import { ref } from "vue"

const activeIndex = ref("/")
</script>
