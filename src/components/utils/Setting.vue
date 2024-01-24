<template>
    <div class="first" style="margin-top: 8px;">
        <img src="/icons/IconVolume.svg" :class="{ 'showicon': isEnableVolume, 'hideicon': !isEnableVolume }"
            @click="enableGameVolume('disable')">
        <img src="/icons/IconNoVolume.svg" :class="{ 'showicon': !isEnableVolume, 'hideicon': isEnableVolume }"
            @click="enableGameVolume('enable')">
        <div>
            <input type="range" id="volume" ref="volume" :value="store.gameVolume" @input="changeVolume">
        </div>
    </div>
    <div :class="{ 'notset': !isSetInstantBet, 'set': isSetInstantBet }" @click="isSetInstantBet = !isSetInstantBet">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.99682 0V5.0925H11.4011L6.99682 14V8.27181H2.59863L6.99682 0Z" fill="currentColor" />
        </svg>
        <span>{{ t("setting.instantBet") }}</span>
    </div>
    <div :class="{ 'notset': !isSetAnimations, 'set': isSetAnimations }" @click="isSetAnimations = !isSetAnimations">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_49_603)">
                <path
                    d="M6.38225 4.57887C5.99331 5.2688 5.7645 6.09305 5.7645 6.97112C5.7645 7.84918 5.99375 8.67387 6.39494 9.3883L6.38225 9.36337C6.19763 9.41368 5.985 9.44343 5.76581 9.44562H5.7645C4.39994 9.44562 3.29394 8.33962 3.29394 6.97505C3.29394 5.61049 4.39994 4.50449 5.7645 4.50449H5.77325C5.98938 4.50449 6.19938 4.53162 6.39975 4.58237L6.38225 4.57843V4.57887ZM1.97663 5.3528C1.76706 5.83012 1.64544 6.38618 1.64544 6.97112C1.64544 7.55605 1.7675 8.11212 1.98712 8.61568L1.97663 8.58899C1.86448 8.59726 1.75187 8.59711 1.63975 8.58855L1.64719 8.58899C1.21033 8.58899 0.791358 8.41545 0.48245 8.10654C0.173542 7.79763 0 7.37867 0 6.9418C0 6.50494 0.173542 6.08598 0.48245 5.77707C0.791358 5.46816 1.21033 5.29462 1.64719 5.29462C1.771 5.30687 1.883 5.32743 1.99194 5.35587L1.97663 5.35237V5.3528ZM10.7061 10.2939C8.88694 10.2939 7.41212 8.81912 7.41212 6.99999C7.41212 5.18087 8.88694 3.70605 10.7061 3.70605C12.5252 3.70605 14 5.18087 14 6.99999C13.986 8.79724 12.5352 10.2511 10.7406 10.2694H10.7389L10.7061 10.2939Z"
                    fill="currentColor" />
            </g>
            <defs>
                <clipPath id="clip0_49_603">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
        <span>{{ t("setting.animations") }}</span>
    </div>
    <div :class="{ 'notset': !store.isMaxBet, 'set': store.isMaxBet }" @click="changeMaxBetSetting">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_49_607)">
                <path
                    d="M1.60988 9.27289C1.82863 6.47727 4.83185 3.74071 5.5312 2.71564C6.13888 1.79558 5.90745 0.702488 5.71276 0.221894C5.70387 0.193688 5.70247 0.163656 5.70869 0.134744C5.71491 0.105833 5.72854 0.0790339 5.74823 0.056976C5.76793 0.034918 5.79302 0.0183584 5.82105 0.00892114C5.84908 -0.000516096 5.87908 -0.0025069 5.9081 0.00314397H5.90723C8.94567 0.641456 9.09835 2.95189 9.0067 3.98571C8.91482 5.01952 9.09857 5.71668 9.76729 5.56596C10.4364 5.41502 10.2111 3.71883 10.2111 3.71883C10.2111 3.71883 13.2824 7.36671 12.1565 10.9536C11.5906 12.8291 10.1807 13.6201 8.99598 13.992C8.93473 14.0226 8.87348 13.9614 8.87348 13.8717C9.0266 13.2946 9.4221 12.8379 9.54242 12.1996C9.78742 11.1504 8.81463 10.1842 8.0932 9.63799C7.64213 9.30155 7.35273 8.76955 7.35273 8.16974C7.35273 8.14196 7.35317 8.11396 7.35448 8.08639V8.09033C7.35448 8.02908 7.2626 7.99846 7.23417 8.02908C6.77807 8.58025 6.29231 9.10617 5.77904 9.60452L5.77401 9.60933C4.65073 10.8553 4.07148 12.254 5.07467 13.8039C5.10529 13.8651 5.04404 13.9548 4.98498 13.9264C2.49123 13.2552 1.45938 11.369 1.61032 9.27289H1.60988Z"
                    fill="currentColor" />
            </g>
            <defs>
                <clipPath id="clip0_49_607">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
        <span>{{ t("setting.maxBet") }}</span>
    </div>
    <div class="notset" @click="showGameInfo">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M4.9875 1.86963H13.0318C13.0318 1.87575 13.0375 1.88144 13.0375 1.88144H13.034C12.6626 1.90151 12.3124 2.06105 12.0535 2.32815C11.7945 2.59525 11.646 2.95024 11.6375 3.32213V10.5496L11.6371 10.5453C11.6504 10.7484 11.6219 10.9521 11.5534 11.1438C11.4848 11.3355 11.3776 11.511 11.2385 11.6596C11.0993 11.8082 10.9312 11.9266 10.7444 12.0076C10.5576 12.0886 10.3562 12.1303 10.1526 12.1303C9.94945 12.1303 9.74843 12.0887 9.56196 12.008C9.37549 11.9273 9.20754 11.8092 9.06845 11.6611C8.92936 11.513 8.82209 11.338 8.75325 11.1468C8.68441 10.9556 8.65546 10.7524 8.66819 10.5496V9.87282H3.5V3.35713C3.5 2.96262 3.65672 2.58427 3.93568 2.30531C4.21464 2.02635 4.59299 1.86963 4.9875 1.86963ZM4.80638 7.97144H8.19569V6.95644H4.80638V7.97144ZM4.80681 5.25894H10.2318V4.24394H4.80681V5.25894ZM13.1307 2.28963H13.1193C12.8888 2.28963 12.6676 2.38122 12.5046 2.54424C12.3416 2.70727 12.25 2.92839 12.25 3.15894V4.56463H14V3.15894C14 3.04478 13.9775 2.93174 13.9338 2.82627C13.8901 2.7208 13.8261 2.62497 13.7454 2.54424C13.6647 2.46352 13.5688 2.39949 13.4634 2.3558C13.3579 2.31211 13.2448 2.28963 13.1307 2.28963ZM8.05 10.5562H0C0 10.9507 0.156718 11.3291 0.435679 11.608C0.714639 11.887 1.09299 12.0437 1.4875 12.0437H8.93069C8.34138 12.0437 8.05 11.3787 8.05 10.5562Z"
                fill="currentColor" />
        </svg>
        <span>{{ t("setting.gameInfo") }}</span>
    </div>
    <div style="margin-bottom: 8px;" :class="{ 'notset': !store.isSetHotkey, 'set': store.isSetHotkey }"
        @click="showHotkey">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_49_615)">
                <path
                    d="M13.3744 2.33374H0.623875C0.541967 2.33368 0.460851 2.34977 0.385161 2.38107C0.309472 2.41238 0.240693 2.45829 0.182755 2.51619C0.124817 2.57408 0.0788562 2.64283 0.0474982 2.7185C0.0161402 2.79417 2.08615e-08 2.87527 4.10297e-08 2.95718V11.0829C-2.87048e-05 11.1595 0.0150476 11.2354 0.0443673 11.3062C0.073687 11.3771 0.116675 11.4414 0.170876 11.4956C0.225076 11.5498 0.289426 11.5928 0.360247 11.6221C0.431069 11.6514 0.506974 11.6665 0.583625 11.6665H13.4164C13.493 11.6665 13.5689 11.6515 13.6397 11.6221C13.7105 11.5928 13.7748 11.5499 13.829 11.4957C13.8832 11.4415 13.9262 11.3772 13.9556 11.3064C13.9849 11.2356 14 11.1597 14 11.0831V2.9574C14 2.87547 13.9839 2.79434 13.9526 2.71865C13.9212 2.64296 13.8753 2.57418 13.8173 2.51626C13.7594 2.45834 13.6906 2.41241 13.6149 2.38109C13.5392 2.34977 13.4581 2.33368 13.3761 2.33374H13.3744ZM7.67506 3.89605H9.02847V5.06243H7.67506V3.89605ZM7.67506 6.41058H9.02847V7.57696H7.67506V6.41058ZM4.96891 3.89627H6.32231V5.06265H4.96891V3.89605V3.89627ZM4.96891 6.4108H6.32231V7.57718H4.96891V6.4108ZM2.26778 3.89627H3.62141V5.06265H2.26778V3.89605V3.89627ZM2.26778 6.4108H3.62141V7.57718H2.26778V6.4108ZM11.7296 10.1033H2.26844V8.93693H11.7294V10.1031L11.7296 10.1033ZM11.7296 7.58855H10.376V6.41605H11.7296V7.58855ZM11.7296 5.08102H10.376V3.91465H11.7296V5.08102Z"
                    fill="currentColor" />
            </g>
            <defs>
                <clipPath id="clip0_49_615">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
        <span>{{ t("setting.hotKeys") }}</span>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from "vue-i18n";
import { store } from '@/store/store';

const { t } = useI18n();

const volume = ref<HTMLElement | null>(null);
const isEnableVolume = ref<boolean>(true);
const isSetInstantBet = ref<boolean>(false);
const isSetAnimations = ref<boolean>(false);

function changeMaxBetSetting() {
    if (store.isMaxBet) {
        store.changeIsMaxBet(false);
    } else {
        store.changeShowMaxModal(true);
        closeShowSetting();
    }
}

function showGameInfo() {
    store.changeShowInfoModal(true);
    closeShowSetting();
}

function showHotkey() {
    store.changeShowHotkeyModal(true);
    closeShowSetting();
}

function closeShowSetting() {
    store.changeShowSetting(false);
}

function enableGameVolume(msg: string) {
    if (msg == 'disable') {
        isEnableVolume.value = false;
        store.changeGameVolume(0);
    } else {
        isEnableVolume.value = true;
        store.changeGameVolume(50);
    }
    if (volume.value)
        volume.value.style.setProperty('--width', store.gameVolume + '%');
}

function changeVolume(event: any) {
    store.changeGameVolume(event.target.value);
    if (volume.value)
        volume.value.style.setProperty('--width', event.target.value + '%');
}

</script>

<style scoped>
div {
    display: flex;
    align-items: center;
    padding: 7px 12px;
}

div:not(.first) {
    cursor: pointer;
}

div:not(.first).notset:hover {
    background-color: #b1bad3;
}

div:not(.first).set {
    color: #1475E1;
}

div>img,
svg {
    margin-right: 10px;
    cursor: pointer;
}

div>span {
    font-size: 14px;
    font-weight: 600;
}

img.showicon {
    display: block;
}

img.hideicon {
    display: none;
}

.first div {
    position: relative;
    width: 100%;
    padding: 0px;
}

input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    z-index: 0;
    width: 100%;
    height: 6px;
    background: #D5DCEB;
    padding: 0;
    border: 0;
    border-radius: 10px;
}

input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 14px;
    height: 14px;
    border-radius: 7px;
    background: #2F4553;
    cursor: pointer;
}

input[type="range"]::after {
    z-index: -1;
    content: "";
    position: absolute;
    left: 0;
    width: var(--width, 50%);
    max-width: 100%;
    top: 50%;
    height: 6px;
    border-radius: 2.5px;
    background: #1475E1;
    pointer-events: none;
    transform: translateY(-50%);
}
</style>