<script setup lang="ts">
import Header from '../components/header/Header.vue';
import Main from '../components/main/index.vue'
import LiveStatus from '@/components/utils/modals/LiveStatus.vue';
import { store } from '@/store/store';

</script>

<template>
    <Header></Header>
    <Main></Main>
    <LiveStatus v-if="store.showLiveStatus" />
</template>
