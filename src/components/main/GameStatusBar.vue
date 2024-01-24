<template>
    <div class="status-bar">
        <div class="status web-element">
            <div :class="'gamestatus-label'">
                <p class="label-text">{{ t("profithigher") }}&nbsp;(<span id="profithigerdes">1.00</span>x)</p>
            </div>
            <div class="input-field">
                <svg class="pre-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_14_4857)">
                        <path d="M16 8.20001L8 0.200012L0 8.20001H4.0585V15.8H11.945V8.20001H16Z" fill="#B1BAD3" />
                    </g>
                    <defs>
                        <clipPath id="clip0_14_4857">
                            <rect width="16" height="16" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <img src="/icons/IconCoin.svg" />
                <input type="number" min=0 step=0.00000001 readonly="true" :value="profithigher" class="input-number"
                    @focus="selectAll" />
            </div>
        </div>
        <div class="status web-element">
            <div :class="'gamestatus-label'">
                <p class="label-text">{{ t("profitlower") }}&nbsp;(<span id="profitlowerdes">1.00</span>x)</p>
            </div>
            <div class="input-field">
                <svg class="pre-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_14_4857)">
                        <path d="M16 8.20001L8 0.200012L0 8.20001H4.0585V15.8H11.945V8.20001H16Z" fill="#B1BAD3" />
                    </g>
                    <defs>
                        <clipPath id="clip0_14_4857">
                            <rect width="16" height="16" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <img src="/icons/IconCoin.svg" />
                <input type="number" min=0 step=0.00000001 readonly="true" :value="profitlower" class="input-number"
                    @focus="selectAll" />
            </div>
        </div>
        <div class="status">
            <div :class="'gamestatus-label'">
                <p class="label-text">{{ t("totalprofit") }}&nbsp;(<span id="totalprofitdes">1.00</span>x)</p>
            </div>
            <div class="input-field">
                <img src="/icons/IconCoin.svg" />
                <input type="number" min=0 step=0.00000001 readonly="true" :value="totalprofit" class="input-number"
                    @focus="selectAll" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from "vue-i18n";
import { store } from '@/store/store';

const { t } = useI18n();

const profithigher = ref('0.000000');
const profitlower = ref('0.000000');
const totalprofit = ref('0.000000');

function selectAll(event: any) {
    event.target.select();
}

</script>

<style scoped>
.status-bar {
    display: flex;
    align-items: center;
    background-color: #213743;
    width: calc(100% - 2em);
    height: 90px;
    border-radius: 4px;
    padding: 16px;
    margin-bottom: 8px;
    gap: 16px;
}

.status:not(:last-child) {
    display: none;
}

.status:not(:last-child) input {
    padding-left: 35px;
}

.status {
    flex: 1 1 0%;
}

.gamestatus-label {
    display: flex;
    align-items: center;
}

.input-field>input {
    border-radius: 4px;
    background-color: #304554;
}

.input-field>.pre-icon {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
}

@media screen and (min-width: 922px) {
    .status:not(:last-child) {
        display: block;
    }
}
</style>
