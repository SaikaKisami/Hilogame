<template>
    <div class="stats" :style="{ bottom: `${position.y}px`, right: `${position.x}px` }">
        <div class="stats-header" @mousedown="startDrag">
            <div class="stats-title">
                <img src="/icons/IconStatus.svg" alt="" />
                <span class="title">{{ t("liveStatus.title") }}</span>
            </div>
            <svg width="10" height="10" class="svg-btn" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"
                @click="closeModal">
                <path
                    d="M9.99343 1.5409L8.45934 0.0065918L5.00002 3.4659L1.54093 0.0065918L0.00683594 1.5409L3.46593 5L0.00683594 8.45909L1.54093 9.9934L5.00024 6.53409L8.45934 9.9934L9.99343 8.45909L6.53434 5L9.99343 1.5409Z"
                    fill="currentColor" />
            </svg>
        </div>
        <div class="stats-body">
            <div class="stats-body-header">
                <div class="stats-type label-text custom-shadow" @click="showTypePopup = !showTypePopup">
                    {{ t(`liveStatus.type.${store.liveStatus}`) }}
                    <img src="/icons/IconArrow.svg" alt="" :class="{ 'rotate': showTypePopup }" />
                    <div ref="typePopup" class="popup" v-if="showTypePopup">
                        <div @click="changeLiveStatsType('all')" :class="{ 'selected': store.liveStatus == 'all' }">{{
                            t("liveStatus.type.all") }}</div>
                        <div @click="changeLiveStatsType('bets')" :class="{ 'selected': store.liveStatus == 'bets' }">{{
                            t("liveStatus.type.bets") }}</div>
                        <div @click="changeLiveStatsType('race')" :class="{ 'selected': store.liveStatus == 'race' }">{{
                            t("liveStatus.type.race") }}</div>
                        <div @click="changeLiveStatsType('hide')" :class="{ 'selected': store.liveStatus == 'hide' }">{{
                            t("liveStatus.type.hide") }}</div>
                    </div>
                </div>
                <svg width="16" height="16" class="refresh" viewBox="0 0 16 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M4.985 5.29951C4.51853 5.83185 4.20166 6.47843 4.06675 7.17326H5.33325L2.66675 10.9268L0 7.17326H1.36675C1.50815 5.96265 1.97873 4.81397 2.72731 3.85211C3.4759 2.89024 4.47385 2.152 5.61266 1.71764C6.75148 1.28329 7.98757 1.16944 9.18657 1.38848C10.3856 1.60752 11.5016 2.15106 12.4132 2.96001L10.6667 4.96001C10.2729 4.60612 9.81267 4.33396 9.3128 4.1593C8.81294 3.98464 8.28337 3.91097 7.75481 3.94255C7.22626 3.97413 6.70923 4.11034 6.23372 4.34328C5.75821 4.57621 5.33368 4.90124 4.98475 5.29951H4.985ZM13.3335 5.07326L16 8.82676H14.6667C14.5255 10.0375 14.0549 11.1862 13.3064 12.1482C12.5578 13.1102 11.5598 13.8485 10.4209 14.2829C9.28198 14.7172 8.04579 14.831 6.84674 14.6119C5.64768 14.3928 4.53165 13.8491 3.62 13.04L5.36675 11.04C5.89366 11.5045 6.53359 11.822 7.22217 11.9607C7.91075 12.0993 8.6237 12.0542 9.28931 11.8299C9.95492 11.6055 10.5497 11.2099 11.0139 10.6827C11.4781 10.1555 11.7952 9.51541 11.9335 8.82676H10.6667L13.3335 5.07326Z"
                        fill="currentColor" />
                </svg>
            </div>
            <div class="stats-game label-text custom-shadow"
                v-if="store.liveStatus == 'all' || store.liveStatus == 'bets'" @click="showGamePopup = !showGamePopup">
                {{ selectedStatsGame }}
                <img src="/icons/IconArrow.svg" alt="" :class="{ 'rotate': showGamePopup }" />
                <div class="popup" v-if="showGamePopup">
                    <div @click="changeLiceStatsGame('All')" :class="{ 'selected': selectedStatsGame == 'All' }">{{
                        t("liveStatus.type.all") }}</div>
                    <div @click="changeLiceStatsGame('Dice')" :class="{ 'selected': selectedStatsGame == 'Hilo' }">Dice
                    </div>
                </div>
            </div>
            <div v-if="store.liveStatus == 'all' || store.liveStatus == 'bets'">
                <div class="profit">
                    <p class="label-text">{{ t("liveStatus.profit") }}</p>
                    <div>
                        <p class="input-number" style="color: #17E700;">{{ wallet.profit.toFixed(8) }}</p>
                        <span><img src="/icons/IconCoin.svg"></span>
                    </div>
                    <p class="label-text">{{ t("liveStatus.wagered") }}</p>
                    <div>
                        <p class="input-number" style="color: white;">{{ wallet.wagered.toFixed(8) }}</p>
                        <span><img src="/icons/IconCoin.svg"></span>
                    </div>
                </div>
                <div class="wins">
                    <p class="label-text">{{ t("liveStatus.wins") }}</p>
                    <p class="input-number" style="color: #17E700;">{{ betStore.winTimes }}</p>
                    <p class="label-text">{{ t("liveStatus.losses") }}</p>
                    <p class="input-number" style="color: #ED4163;">{{ betStore.lossTimes }}</p>
                </div>
            </div>
            <div class="graph-wrap" v-if="store.liveStatus == 'all' || store.liveStatus == 'bets'">
                <div class="graph" ref="graph" @mousemove="showInDetail">
                    <div class="graph-profit">
                        <p class="input-number" style="color: #17E700;">{{ wallet.profit.toFixed(8) }}</p>
                        <span><img src="/icons/IconCoin.svg"></span>
                    </div>

                </div>
            </div>
            <div class="card" v-if="store.liveStatus == 'all' || store.liveStatus == 'race'">
                <div style="position: relative;">
                    <div class="label-text race" @click="showRaceTooltip">$100,000 Race - 24Hours
                        <img src="/icons/IconArrow.svg" alt="" :class="{ 'rotate': showRacetooltip }" />
                    </div>
                    <span v-if="showRacetooltip" class="tooltiptext">$100,000 Race - 24Hours</span>
                </div>
                <div class="wager label-text" style="font-weight: 400;">Wager to enter the race!</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n';
import { store } from '@/store/store';
import { wallet } from '@/store/modules/wallet';
import { betStore } from '@/store/modules/bet';

const { t } = useI18n();

const dragging = ref(false);
const position = ref({ x: 20, y: 20 });
const offset = ref({ x: 0, y: 0 });

const showTypePopup = ref<boolean>(false);
const showGamePopup = ref<boolean>(false);
const selectedStatsGame = ref<string>("All");
const showRacetooltip = ref<boolean>(false);

const typePopup = ref<HTMLElement | null>(null);


function changeLiveStatsType(msg: string) {
    if (msg == 'hide') {
        closeModal();
    } else {
        store.changeLiveSatus(msg);
    }
}

function changeLiceStatsGame(msg: string) {
    selectedStatsGame.value = msg;
}

function closeModal() {
    store.changeShowLive(false);
}


function startDrag(event: MouseEvent) {
    dragging.value = true;
    offset.value = {
        x: window.innerWidth - event.clientX - position.value.x,
        y: window.innerHeight - event.clientY - position.value.y,
    };

    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);
};

function drag(event: MouseEvent) {
    if (dragging.value) {
        console.log('the y position:', event.clientY);
        position.value = {
            x: window.innerWidth - event.clientX - offset.value.x,
            y: window.innerHeight - event.clientY - offset.value.y,
        };
    }
};

function stopDrag() {
    dragging.value = false;
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', stopDrag);
};

function showInDetail(event: MouseEvent) {
    const Element = event.target as HTMLElement;
    if (Element) {
        const reltivePos = window.innerWidth - event.clientX - position.value.x - 32;
        console.log('the current pos', window.innerWidth, event.clientX, reltivePos);
        if (reltivePos < 26) {
            Element.style.setProperty('--position', 100 + '%');
        } else if (reltivePos < 78) {
            Element.style.setProperty('--position', 75 + '%');
        } else if (reltivePos < 130) {
            Element.style.setProperty('--position', 50 + '%');
        } else if (reltivePos < 182) {
            Element.style.setProperty('--position', 25 + '%');
        } else {
            Element.style.setProperty('--position', 0 + '%');
        }
    }
}

function showRaceTooltip() {
    showRacetooltip.value = !showRacetooltip.value;
}
</script>

<style scoped>
@import '../../../assets/css/livestatus.css'
</style>