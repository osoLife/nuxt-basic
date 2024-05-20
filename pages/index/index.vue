<template>
    <div>
        <AppHeader />
        <van-button type="primary">按钮</van-button>
    </div>
</template>

<script setup>
const { data: channelList} = await useFetch('/api/channel', {method: 'get'})
console.log(channelList)
</script>

<style lang="scss" scoped>

</style>