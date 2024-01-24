<template>
    <div :class="{ 'gamestatus-whole': (canvasStatus == 'WEB'), 'gamestatus-whole-h5': (canvasStatus == 'H5') }">
        <div v-if="canvasStatus == 'WEB'">
            <div :class="'gamestatus-label'">
                <p id="profithigerdes">Profit Higher (1.50x)</p>
            </div>
            <div :class="'gamestatus-input-container'">
                <img :class="'gamestatus-input-bitcoin'" src="/icons/IconCoin.svg" />
                <input type="number" id="profithigher" disabled :class="'gamestatus-input-input'" v-model="profithigher" />
            </div>
        </div>
        <div v-if="canvasStatus == 'WEB'">
            <div :class="'gamestatus-label'">
                <p id="profitlowerdes">Profit Lower (1.50x)</p>
            </div>
            <div :class="'gamestatus-input-container'">
                <img :class="'gamestatus-input-bitcoin'" src="/icons/IconCoin.svg" />
                <input type="text" :disabled=true id="profitlower" :class="'gamestatus-input-input'"
                    v-model="profitlower" />
            </div>
        </div>
        <div>
            <div :class="'gamestatus-label'">
                <p id="totalprofitdes">Total Profit (1.00x)</p>
            </div>
            <div :class="'gamestatus-input-container'">
                <img :class="{ 'gamestatus-input-bitcoin': (canvasStatus == 'WEB'), 'gamestatus-input-bitcoin-h5': (canvasStatus == 'H5') }"
                    src="/icons/IconCoin.svg" />
                <input type="number" id="totalprofit" disabled
                    :class="{ 'gamestatus-input-input': (canvasStatus == 'WEB'), 'gamestatus-input-input-h5': (canvasStatus == 'H5') }"
                    v-model="totalprofit" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore();

const canvasStatus = computed(() => store.state.canvasStatus);

const profithigher = ref('0.000000');
const profitlower = ref('0.000000');
const totalprofit = ref('0.000000');

</script>

<style scoped>
.gamestatus-whole {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5vw;
    padding-left: 0.5vw;
    padding-right: 0.5vw;
    background-color: #213743;
    width: 41vw;
    border-radius: 0.4vh;
}

.gamestatus-whole-h5 {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 8px;
    background-color: #213743;
    width: 300px;
    height: 9vh;
    border-radius: 0.4vh;
}

.gamestatus-label {
    color: #B1BAD3;
    display: flex;
    justify-content: space-between;
    font-size: 1.7vh;
    font-weight: bold;
}

.gamestatus-input-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: #2F4552;
    position: relative;
    border: 0.1vh solid
}

.gamestatus-input-bitcoin {
    position: absolute;
    top: 50%;
    left: 90%;
    transform: translate(-50%, -50%);
}

.gamestatus-input-bitcoin-h5 {
    position: absolute;
    top: 50%;
    left: 95%;
    transform: translate(-50%, -50%);
}

.gamestatus-input-input {
    width: 13vw;
    height: 4vh;
    padding: 0.2vw;
    border: 0.1vh solid #2F4552;
    font-size: 1.57h;
    background-color: #0F212E;
    color: white;
}

.gamestatus-input-input-h5 {
    width: 280px;
    height: 4vh;
    padding: 0.2vw;
    border: 0.1vh solid #2F4552;
    font-size: 1.57h;
    background-color: #0F212E;
    color: white;
}

.gamestatus-input-input:hover {
    border-color: #557086;
}

.gamestatus-input-input:focus {
    border-color: #557086;
    outline: none;
}
</style>
