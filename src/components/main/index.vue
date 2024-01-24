<template>
    <div class="main-container">
        <div class="main-section">
            <ControlSideBar />
            <GameBoard />
        </div>
        <MainFooter />
        <Fairness v-if="store.fairnessVisible" />
    </div>
</template>

<script setup lang="ts">
import ControlSideBar from './ControlSideBar.vue';
import GameBoard from './GameBoard.vue';
import MainFooter from './MainFooter.vue';
import Fairness from '../utils/modals/Fairness.vue';
import { store } from '@/store/store';
import { onMounted } from 'vue';
import { controlWithKey } from '@/services/gameController';

onMounted(() => {
    window.addEventListener('keydown', keyAction);
})

function keyAction(event: KeyboardEvent) {
    if (store.isSetHotkey) {
        controlWithKey(event);
    }
}
</script>

<style scoped>
.main-container {
    border-radius: 8px;
    margin-top: 3vw;
    width: 100%;
    padding: 0 3vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}

.main-section {
    width: 94vw;
    max-width: 400px;
    min-width: 300px;
    display: flex;
    flex-direction: column-reverse;
    border-radius: 8px 8px 0px 0px;
    border-bottom: solid 3px #213743;
}

@media screen and (min-width: 1060px) {
    .main-container {
        margin-top: 40px;
    }
}

@media screen and (min-width: 922px) {
    .main-section {
        width: 100%;
        max-width: 1200px;
        flex-direction: row;
    }
}
</style>