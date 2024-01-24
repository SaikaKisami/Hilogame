<script setup lang="ts">
import { computed, ref } from 'vue'
import { bet, setType, h5_opacityRedraw } from "@/utils/gameController"
import { useStore } from 'vuex'

const store = useStore();

const activeTab = ref('manual');
const isShowModal = ref(false);
const profit = ref(0.000000000)
const betAmount = ref(0.000000000)

const flag = computed(() => store.state.flag);
const canvasStatus = computed(() => store.state.canvasStatus);

function startBet() {
    store.commit('changeFlag');
    setType("skipOnBetting");
    h5_opacityRedraw(true);
}

function changeBetAmout(msg: string) {
    if (msg == 'double')
        betAmount.value = betAmount.value * 2;
    else betAmount.value = betAmount.value / 2;
}

function higherbet() {
    if (!flag.value) return;
    bet("higher");
}

function lowerbet() {
    if (!flag.value) return;
    bet("lower");
}

function skip() {
    if (flag.value) {
        bet("skipOnBetting");
    } else {
        bet("start");
    }
}

function cashOut() {
    store.commit('changeFlag');
    setType("start");
    h5_opacityRedraw(false);
}

</script>

<template>
    <div :class="{ 'side-main-container': (canvasStatus == 'WEB'), 'side-main-container-h5': (canvasStatus == 'H5') }">
        <div>
            <div :class="'side-space-controller'">
                <div>
                    <div :class="'side-betamount-letter'">
                        <p>Bet Amount</p>
                        <p>US$0.00</p>
                    </div>
                    <div :class="'side-betamount-input-container'">
                        <div :class="'side-betamount-input-area'">
                            <img :class="'bit-coin-svg'" src="/icons/IconCoin.svg" />
                            <input type="number" :class="'side-betamount-input'" v-model="betAmount" />
                        </div>
                        <div :class="'half-and-double-bet'">
                            <div :class="'half-bet'" @click="changeBetAmout('half')">
                                ½
                            </div>
                            <div :class="'double-bet'" @click="changeBetAmout('double')">
                                2x
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div v-if="canvasStatus == 'WEB'">
                        <button :class="{ 'percent-bet-not-allowed': !flag, 'percent-bet-allowed': flag }"
                            @click="flag ? higherbet() : null" id="higherbetdes">
                            Higher or Same 90%
                        </button>
                    </div>
                </div>

                <div v-if="canvasStatus == 'WEB'">
                    <button :class="{ 'percent-bet-not-allowed': !flag, 'percent-bet-allowed': flag }"
                        @click="flag ? lowerbet() : null" id="lowerbetdes">
                        Higher or Same 90%
                    </button>
                </div>
                <div v-if="canvasStatus == 'WEB'">
                    <button :class="'skip-btn'" @click="skip">
                        <div>
                            Skip Card&nbsp;&nbsp;
                        </div>
                        <div>
                            <img src="/icons/skip-icon.svg" />
                        </div>
                    </button>
                </div>
                <div>
                    <button v-if="!flag" :class="'start-bet-btn'" @click="startBet">
                        Bet
                    </button>
                    <button v-else :class="'start-bet-btn'" @click="cashOut">
                        Cash Out
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.side-main-container {
    background-color: #213743;
    border-radius: 1%;
    padding-top: 2vh;
    padding-left: 0.3vw;
    padding-right: 0.3vw;
    height: 70vh;
    width: 250px;
}

.side-main-container-h5 {
    background-color: #213743;
    border-radius: 1%;
    padding-top: 2vh;
    padding-left: 0.3vw;
    padding-right: 0.3vw;
    height: 100%;
    width: 300px;
    padding-bottom: 2vh;
}

.side-space-controller {
    display: flex;
    flex-direction: column;
    gap: 1.5vh;
}

.side-betamount-letter {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #B1BAD3;
    font-size: 1.5vh;
}

.side-betamount-input-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5vh;
    background-color: #2F4552;
}

.side-betamount-input-container .side-betamount-input-area {
    position: relative;
    width: 100%;
}

.bit-coin-svg {
    position: absolute;
    top: 50%;
    left: 93%;
    transform: translate(-50%, -50%);
}

.side-betamount-input-container .side-betamount-input {
    width: 100%;
    height: 4.8vh;
    padding: 0.3vw;
    border-radius: 0.1vh;
    background-color: #0F212E;
    color: white;
    border: 0.1vh solid #2F4552;
}

.side-betamount-input-container .side-betamount-input:hover {
    border-color: #557086;
}

.side-betamount-input-container .side-betamount-input:focus {
    border-color: #557086;
    outline: none;
}

.half-and-double-bet {
    display: flex;
    color: white;
}

.half-and-double-bet:hover {
    cursor: pointer;
}

.half-and-double-bet .double-bet {
    background-color: #2F4552;
    padding-right: 0.7vw;
    padding-left: 0.7vw;
}

.half-and-double-bet .double-bet:hover {
    background-color: #557086;
}

.half-and-double-bet .half-bet {
    background-color: #2F4552;
    padding-right: 0.7vw;
    padding-left: 0.7vw;
    border-right: 0.3vh solid #1A2C37;
}

.skip-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #0F212E;
    width: 100%;
    border-radius: 0.3rem;
    height: 5vh;
    font-size: 1.6vh;
}

.skip-btn:hover {
    background-color: #557086;
}

.half-and-double-bet .half-bet:hover {
    background-color: #557086;
}

.start-bet-btn {
    color: #071824;
    background-color: #00E701;
    width: 100%;
    border-radius: 0.3rem;
    height: 5vh;
    font-weight: bold;
    font-size: 1.6vh;
}

.start-bet-btn:hover {
    background-color: #1fff20;
}

.percent-bet-not-allowed {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    width: 100%;
    height: 5vh;
    background-color: #304554;
    border-radius: 0.3rem;
    font-size: 1.6vh;
}

.percent-bet-not-allowed:hover {
    cursor: not-allowed;
}

.percent-bet-allowed {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    width: 100%;
    height: 5vh;
    background-color: #0F212E;
    border-radius: 0.3rem;
    font-size: 1.6vh;
}


.percent-bet-allowed:hover {
    cursor: not-allowed;
    background-color: #557086;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    margin-right: 23px;
    transition: margin 0.5s ease;
}
</style>

