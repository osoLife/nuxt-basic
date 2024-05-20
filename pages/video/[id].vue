<template>
    <div>
        视频页 {{ $route.params.id }}
    </div>
</template>

<script setup lang="ts">
import type { IVideoItem } from '@/types/video';

const { params } = useRoute()
console.log(params.id)

let list = ref<IVideoItem[]>([])
</script>

<style lang="scss" scoped>

</style>