<template>
    <div class="game-board">
        <div class="larger-canvas-container">
            <div ref="canvasContainer" id="canvas"></div>
        </div>
        <GameStatusBar />
        <div ref="canvasContainerSmall" id="canvasSamll"></div>
        <CashOut v-if="store.cashModalVisible" />
    </div>
</template>

<style scoped>
.game-board {
    flex-grow: 1;
    min-height: 280px;
    background-color: #0F212E;
    border-radius: 8px 8px 0px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 16px;
    position: relative;
}

.larger-canvas-container {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 16px;
}

#canvas {
    width: calc(94vw - 32px);
    min-width: 268px;
    height: 272px;
}

#canvasSamll {
    width: calc(94vw - 32px);
    min-width: 268px;
    height: 102px;
    border-radius: 4px;
    background-color: #0A1923;
}

@media screen and (min-width: 426px) {
    #canvas {
        width: 368px;
    }

    #canvasSamll {
        width: 368px;
    }
}

@media screen and (min-width: 888px) {
    #canvasSamll {
        height: 165px;
    }
}

@media screen and (min-width: 922px) {
    .game-board {
        border-top-left-radius: 0;
    }

    .larger-canvas-container {
        padding: 24px 48px;
    }

    #canvas {
        width: calc(94vw - 396px);
        height: 242px;
        max-width: 804px;
    }

    #canvasSamll {
        width: calc(94vw - 332px);
        max-width: 868px;
    }
}

@media screen and (min-width: 1253px) {
    #canvas {
        height: calc(242px + (100vw - 1252px) * (51 / 94));
    }
}

@media screen and (min-width: 1346px) {
    #canvas {
        height: 303px;
    }
}
</style>

<script setup lang="ts">
import GameStatusBar from './GameStatusBar.vue';
import CashOut from '../utils/modals/CashOut.vue';
import { store } from '@/store/store';
</script>