<template>
    <div ref="modal" class="modal-back" @click="clickOutSide">
        <div class="modal">
            <div class="modal-header">
                <div class="modal-title">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="modal-logo"
                        xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1325_2036)">
                            <path
                                d="M13.6818 3.7515H14.4618V2.0925H8.6635V0.652496H6.9975V2.092H1.1865V3.75125H2.31275L0 9.363C0 11.1222 1.426 12.5482 3.18525 12.5482C4.94475 12.5482 6.3705 11.1222 6.3705 9.363L4.058 3.7515H6.9905V13.6877H4.66475V15.3472H10.956V13.6875H8.66325V3.7515H11.942L9.6295 9.363C9.6295 11.1222 11.0553 12.5482 12.8145 12.5482C14.5743 12.5482 16 11.1222 16 9.363L13.6818 3.7515ZM1.3335 9.363L3.18625 4.89125L5.0255 9.363H1.3335ZM10.9565 9.363L12.7957 4.89125L14.6615 9.363H10.9565Z"
                                fill="#B1BAD3" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1325_2036">
                                <rect width="16" height="16" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <span class="label-text title">{{ t("fairness.title") }}</span>
                </div>
                <svg width="14" height="14" class="svg-btn" viewBox="0 0 14 14" fill="none"
                    xmlns="http://www.w3.org/2000/svg" @click="closeModal">
                    <path
                        d="M9.99343 1.5409L8.45934 0.0065918L5.00002 3.4659L1.54093 0.0065918L0.00683594 1.5409L3.46593 5L0.00683594 8.45909L1.54093 9.9934L5.00024 6.53409L8.45934 9.9934L9.99343 8.45909L6.53434 5L9.99343 1.5409Z"
                        fill="currentColor" />
                </svg>
            </div>
            <div class="toggle">
                <div class="toggle-btn">
                    <button :class="{ 'active': currentTab == 'seeds' }" @click="currentTab = 'seeds'">
                        <span class="label-text">{{ t("fairness.seed.title") }}</span>
                    </button>
                    <button :class="{ 'active': currentTab == 'verify' }" @click="currentTab = 'verify'">
                        <span class="label-text">{{ t("fairness.verify.title") }}</span>
                    </button>
                </div>
            </div>

            <div class="modal-body">
                <div v-if="currentTab == 'seeds'" class="seeds-body">
                    <div class="seeds-box">
                        <label class="label-text">{{ t("fairness.seed.client") }}</label>
                        <div class="copy-box">
                            <button @click="copyContent('actCli')">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1311_1568)">
                                        <path
                                            d="M13.4166 14H3.49982V2.84069H13.4166V14ZM0.583008 0V9.94569H2.02982V1.42319H10.5523V0H0.583008Z"
                                            fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1311_1568">
                                            <rect width="14" height="14" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span :class="{'show-tooltip': showCltTooltip}" class="tooltiptext">{{ t("fairness.copied") }}</span>
                            </button>
                            <input ref="actCltSeed" readonly="true" class="input-number" v-model="actCltSeedValue"
                                @focus="selectAll" />
                        </div>
                    </div>
                    <div class="seeds-box">
                        <label class="label-text">{{ t("fairness.seed.server") }}</label>
                        <div class="copy-box">
                            <button @click="copyContent('actSer')">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1311_1568)">
                                        <path
                                            d="M13.4166 14H3.49982V2.84069H13.4166V14ZM0.583008 0V9.94569H2.02982V1.42319H10.5523V0H0.583008Z"
                                            fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1311_1568">
                                            <rect width="14" height="14" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span :class="{'show-tooltip': showSerTooltip}" class="tooltiptext">{{ t("fairness.copied") }}</span>
                            </button>
                            <input ref="actSerSeed" readonly="true" class="input-number" v-model="actSerSeedValue"
                                @focus="selectAll" />
                        </div>
                    </div>
                    <div class="seeds-box">
                        <label class="label-text">{{ t("fairness.seed.pair") }}</label>
                        <input ref="betsPair" readonly="true" class="input-number" v-model="betsPairValue"
                            @focus="selectAll" />
                    </div>
                </div>
                <div v-else class="verify-body">
                    <div>
                        <p class="label-text">{{ t("fairness.verify.loading") }}</p>
                        <div class="dice">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1331_2460)">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M8 1.54C11.568 1.54 14.46 4.432 14.46 8C14.46 11.568 11.568 14.46 8 14.46C4.432 14.46 1.54 11.568 1.54 8C1.544 4.434 4.434 1.544 7.9995 1.54H8ZM8 0C3.5815 0 0 3.5815 0 8C0 12.4185 3.5815 16 8 16C12.4185 16 16 12.4185 16 8C16 3.5815 12.4185 0 8 0ZM8.00033 4.72C9.81183 4.72 11.2803 6.18833 11.2803 8C11.2803 9.8115 9.81183 11.28 8.00033 11.28C6.18883 11.28 4.72033 9.8115 4.72033 8C4.72433 6.19 6.19033 4.724 7.99983 4.72H8.00033ZM8.00033 3.18C5.33833 3.18 3.18033 5.338 3.18033 8C3.18033 10.662 5.33833 12.82 8.00033 12.82C10.6623 12.82 12.8203 10.662 12.8203 8C12.8203 5.338 10.6623 3.18 8.00033 3.18ZM8 9.64C8.906 9.64 9.64 8.9055 9.64 8C9.64 7.0945 8.9055 6.36 8 6.36C7.0945 6.36 6.36 7.094 6.36 8C6.35996 8.21538 6.40235 8.42866 6.48475 8.62765C6.56715 8.82665 6.68795 9.00746 6.84025 9.15975C6.99254 9.31205 7.17335 9.43285 7.37235 9.51525C7.57134 9.59765 7.78462 9.64004 8 9.64Z"
                                        fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1331_2460">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <div v-if="currentTab == 'seeds'" class="seeds-footer">
                    <div class="footer-header label-text">{{ t("fairness.seed.rotate") }}</div>
                    <div class="seeds-box">
                        <label class="label-text">{{ t("fairness.seed.new") }} <span class="required">*</span></label>
                        <div class="charge-box">
                            <button class="charge disabled label-text">
                                {{ t("fairness.seed.change") }}
                            </button>
                            <input readonly="true" class="input-number disabled" value="adT2z3laCC" />
                        </div>
                    </div>
                    <div class="seeds-box">
                        <label class="label-text">{{ t("fairness.seed.next") }}</label>
                        <div class="copy-box">
                            <button @click="copyContent('nxtSer')">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1311_1568)">
                                        <path
                                            d="M13.4166 14H3.49982V2.84069H13.4166V14ZM0.583008 0V9.94569H2.02982V1.42319H10.5523V0H0.583008Z"
                                            fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1311_1568">
                                            <rect width="14" height="14" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span :class="{'show-tooltip': showNxtTooltip}" class="tooltiptext">{{ t("fairness.copied") }}</span>
                            </button>
                            <input ref="nxtSerSeed" readonly="true" class="input-number" v-model="nxtSerSeedValue"
                                @focus="selectAll" />
                        </div>
                    </div>
                    <div class="footer-note">
                        <p class="label-text">{{ t("fairness.seed.footer") }} <span>Hilo</span>, <span>Mines</span>
                        </p>
                    </div>
                </div>
                <div v-else class="verify-footer">
                    <div>
                        <label class="label-text">{{ t("fairness.verify.game") }}</label>
                        <select class="input-number" style="margin-left: 3px;">
                            <option>Dice</option>
                            <option>Hilo</option>
                            <option>Limbo</option>
                        </select>
                    </div>
                    <div>
                        <label class="label-text">{{ t("fairness.verify.client") }}</label>
                        <input class="seeds-input input-number" />
                    </div>
                    <div>
                        <label class="label-text">{{ t("fairness.verify.server") }}</label>
                        <input class="seeds-input input-number" />
                    </div>
                    <div>
                        <label class="label-text">{{ t("fairness.verify.nonce") }}</label>
                        <div class="nonce">
                            <button class="up" @click="changeNonce('up')" @mouseenter="isHoverBtn = true"
                                @mouseleave="isHoverBtn = false">
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.9994 7.7153L0.285004 2.00091L2.0012 0.284706L6 4.28351L9.9988 0.284706L11.715 2.00091L6.00061 7.7153H5.9994Z"
                                        fill="#B1BAD3" />
                                </svg>
                            </button>
                            <button class="down" @click="changeNonce('down')">
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.9994 7.7153L0.285004 2.00091L2.0012 0.284706L6 4.28351L9.9988 0.284706L11.715 2.00091L6.00061 7.7153H5.9994Z"
                                        fill="#B1BAD3" />
                                </svg>
                            </button>
                            <input type="number" min=0 class="input-number nonce-input" :class="{ 'hover-input': isHoverBtn }"
                                v-model="nonceValue" />
                        </div>
                    </div>
                    <div class="label-text verify-foot">{{ t("fairness.verify.footer") }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { store } from '@/store/store';

const { t } = useI18n();

const modal = ref<HTMLElement | null>(null);
const currentTab = ref<string>('seeds')

const actCltSeedValue = ref('edr74dsfsg3df5644');
const actSerSeedValue = ref('edr74dsfsg3df5644gguyg34534536uigiugigig346346346uig346');
const betsPairValue = ref('9,340');
const nxtSerSeedValue = ref('sgfsg345345h34jh634534jh534j5h3j45h3j45jh345j345hjj35');
const nonceValue = ref(0);

const actCltSeed = ref<any>(null);
const actSerSeed = ref<any>(null);
const betsPair = ref<any>(null);
const nxtSerSeed = ref<any>(null);

const showCltTooltip = ref(false);
const showSerTooltip = ref(false);
const showNxtTooltip = ref(false);
const isHoverBtn = ref(false);

function selectAll(event: any) {
    event.target.select();
}

function copyContent(msg: string) {
    var copyText: any;
    if (msg == 'actCli') {
        copyText = actCltSeed.value;
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        showCltTooltip.value = true;
        setTimeout(() => showCltTooltip.value = false, 2000);
    } else if (msg == 'actSer') {
        copyText = actSerSeed.value;
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        showSerTooltip.value = true;
        setTimeout(() => showSerTooltip.value = false, 2000);
    } else if (msg == 'nxtSer') {
        copyText = nxtSerSeed.value;
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        showNxtTooltip.value = true;
        setTimeout(() => showNxtTooltip.value = false, 2000);
    }

}

function changeNonce(msg: string) {
    if (msg == 'down') {
        if (nonceValue.value > 0)
            nonceValue.value--;
    } else
        nonceValue.value++;
}

function clickOutSide(event: any) {
    if (event.target == modal.value) {
        closeModal();
    }
}

function closeModal() {
    store.changeFairnessVisible(false);
}
</script>

<style scoped>
@import '../../../assets/css/fairness.css';

.show-tooltip {
    display: block;
}

.tooltiptext {
    bottom: 120%;
    left: 50%;
    transform: translateX(-50%);
    margin-left: -5px;
}

.tooltiptext::after {
    left: 50%;
}
</style>