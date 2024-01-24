<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from "vue-i18n"
import { store } from '@/store/store';
import { gameStore } from '@/store/modules/game';

const { locale, t } = useI18n();
console.log('current language', locale.value);

const betAmount = ref(0.000000000)
const showHover = ref<boolean>(false);

function startBet() {
    store.changeCashModal(false);
    gameStore.changeIsOnBet(true);
}

function changeBetAmout(msg: string) {
    if (msg == 'double')
        betAmount.value = betAmount.value * 2;
    else betAmount.value = betAmount.value / 2;
}

function higherbet() {
    if (!gameStore.isOnDealing) {
        gameStore.changeIsOnDealing(true);
        setTimeout(() => gameStore.changeIsOnDealing(false), 800);
    }
}

function lowerbet() {
    if (!gameStore.isOnDealing) {
        gameStore.changeIsOnDealing(true);
        setTimeout(() => gameStore.changeIsOnDealing(false), 800);
    }
}

function skip() {
    store.changeCashModal(false);
    if (!gameStore.isOnDealing) {
        gameStore.changeIsOnDealing(true);
        setTimeout(() => gameStore.changeIsOnDealing(false), 800);
        if (gameStore.isOnBet) {
        } else {
        }
    }
}

function cashOut() {
    store.changeCashModal(true);
    gameStore.changeIsOnBet(false);
}

function selectAll(event: any) {
    event.target.select();
}

function getBetAmount(event: any) {
    console.log('the bet amount is ', event.target.value);
}
</script>

<template>
    <div class="sidebar">
        <div class="bet-amount">
            <div class="label-div">
                <p class="label-text">{{ t("betAmount") }}</p>
                <p class="label-text currency">US$0.00</p>
            </div>
            <div class="amount-input custom-shadow">
                <div class="input-field">
                    <img src="/icons/IconCoin.svg" />
                    <input type="number" :disabled="gameStore.isOnBet" min=0 step=0.00000001 :value="betAmount"
                        :class="{ 'disabled': gameStore.isOnBet, 'hover-input': showHover }" class="input-number"
                        @input="getBetAmount" @focus="selectAll" />
                </div>
                <div class="button-field">
                    <button :disabled="gameStore.isOnBet" :class="{ 'disabled': gameStore.isOnBet }" @mouseenter="showHover = true"
                        @mouseleave="showHover = false" @click="changeBetAmout('half')">
                        ½
                    </button>
                    <button :disabled="gameStore.isOnBet" :class="{ 'disabled': gameStore.isOnBet }" @mouseenter="showHover = true"
                        @mouseleave="showHover = false" @click="changeBetAmout('double')">
                        2x
                    </button>
                    <button v-if="store.isMaxBet" :disabled="gameStore.isOnBet" :class="{ 'disabled': gameStore.isOnBet }"
                        @click="changeBetAmout('max')">
                        {{ t("max") }}
                    </button>
                </div>
            </div>
        </div>
        <button class="btn-gray web-element" :class="{ 'disabled': gameStore.isOnDealing || !gameStore.isOnBet }"
            :disabled="!gameStore.isOnBet" @click="higherbet()" id="higherbetdes">
            {{ t("higherorsame") }} %
        </button>
        <button class="btn-gray web-element" :class="{ 'disabled': gameStore.isOnDealing || !gameStore.isOnBet }"
            :disabled="!gameStore.isOnBet" @click="lowerbet()" id="lowerbetdes">
            {{ t("lowerorsame") }} %
        </button>
        <button class="btn-gray web-element" :class="{ 'disabled': gameStore.isOnDealing }" @click="skip">
            <div>
                {{ t("skipcard") }}&nbsp;&nbsp;
            </div>
            <div>
                <img src="/icons/skip-icon.svg" />
            </div>
        </button>
        <button v-if="!gameStore.isOnBet" class='btn-green' :class="{ 'disabled': gameStore.isOnDealing }" @click="startBet">
            {{ t("betbtn") }}
        </button>
        <button v-else class='btn-green' :disabled="!gameStore.canCashOut" :class="{ 'disabled': !gameStore.canCashOut }" @click="cashOut">
            {{ t("cashout") }}
        </button>
    </div>
</template>

<style scoped>
@import '@/assets/css/sidebar.css';
</style>

