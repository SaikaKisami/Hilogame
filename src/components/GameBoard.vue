<template>
    <div
        :class="{ 'board-custom-container': (canvasStatus == 'WEB'), 'board-custom-container-h5': (canvasStatus == 'H5') }">
        <div ref="canvasContainer" id="canvas">
        </div>
        <GameStatusBar />
        <div ref="canvasContainerSmall" id="canvasSamll">
        </div>
    </div>
</template>

<style scoped>
.board-custom-container {
    display: grid;
    height: 70vh;
    width: calc(42vw - 0.4vw);
    padding-left: 0.2vw;
    padding-right: 0.2vw;
    grid-template-rows: 60% 15% 25%;
}

#canvas {
    width: 300px;
    height: 30vh;
}

#canvasSamll {
    width: 300px;
    height: 15.5vh;
    background-color: #0A1923;
}

@media screen and (min-width: 922px) {
    #canvas {
        width: 41.6vw;
        height: 42vh;
    }

    #canvasSamll {
        width: 41vw;
        height: 15.5vh;
        margin-top: 0.5vh;
        background-color: #0A1923;
    }
}
</style>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch, type Ref, computed } from 'vue';
import GameStatusBar from './GameStatusBar.vue';
import { setElements, resizeCanvas } from '../utils/gameController.ts';
import { useStore } from 'vuex'
import { startCanvas } from '../utils/gameController';
const store = useStore();

const canvasStatus = computed(() => store.state.canvasStatus);

let isFirstRender: Boolean = true;

const screenWidth: Ref<number> = ref(window.innerWidth);
const screenHeight: Ref<number> = ref(window.innerHeight);

const canvasContainer: Ref<HTMLElement | null> = ref<HTMLElement | null>(null);
const canvasContainerSmall: Ref<HTMLElement | null> = ref<HTMLElement | null>(null);

const updateScreenSize = () => {
    screenWidth.value = window.innerWidth;
    screenHeight.value = window.innerHeight;
};

onMounted(() => {
    window.addEventListener('resize', updateScreenSize);
    if (canvasContainer.value) {
        if (screenWidth.value < 922) {
            store.commit('changeCanvasStatus', { value: "H5" });
            setElements(canvasContainer.value, canvasContainerSmall.value);
            resizeCanvas("H5");

        } else {
            store.commit('changeCanvasStatus', { value: "WEB" });
            setElements(canvasContainer.value, canvasContainerSmall.value);
            resizeCanvas("WEB");
        }
    }
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', updateScreenSize);
});

watch([screenWidth, screenHeight], () => {
    if (canvasContainer.value) {
        if (screenWidth.value < 922) {
            store.commit('changeCanvasStatus', { value: "H5" });
            setElements(canvasContainer.value, canvasContainerSmall.value);
            resizeCanvas("H5");
        } else {
            store.commit('changeCanvasStatus', { value: "WEB" });
            setElements(canvasContainer.value, canvasContainerSmall.value);
            resizeCanvas("WEB");
        }
    }
}, { immediate: true });

onMounted(() => {

    if (screenWidth.value < 922) {
        store.commit('changeCanvasStatus', { value: "H5" });
        setCanvasElement();
        resizeCanvas("H5");

    } else {
        store.commit('changeCanvasStatus', { value: "WEB" });
        setCanvasElement();
        resizeCanvas("WEB");
    }


    if (isFirstRender) {
        isFirstRender = false;
    }

})

function setCanvasElement() {
    if (canvasContainer.value) {
        const canvasElement = canvasContainer.value;
        const canvasElementSmall = canvasContainerSmall.value;


        if (canvasElement) {
            setElements(canvasElement, canvasElementSmall);
            startCanvas();
        }
    }
}
</script>