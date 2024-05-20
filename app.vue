<template>
  <NuxtLink to="/">首页</NuxtLink>
  <NuxtLink to="/video/123">视频页</NuxtLink>
  <NuxtPage :keepalive="{max:10}" />
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'osoLife-video', 
  description: 'osoLife的个人视频站', 
  keywords: 'osoLife,视频',
  referrer: 'no-referrer'
})
</script>

<style lang="scss">
:root {
  --van-primary-color: purple!important; 
}
</style>
