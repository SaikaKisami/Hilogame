<template>
    <div ref="modal" class="modal-back" v-if="store.showHotkeyModal" @click="clickOutSide">
        <div class="modal">
            <div class="modal-header">
                <div class="modal-title">
                    <img src="/icons/IconHotkey.svg" alt="" class="modal-logo" />
                    <span class="title label-text">{{ t("hotkey.title") }}</span>
                </div>
                <svg width="10" height="10" viewBox="0 0 10 10" class="svg-btn" fill="none"
                    xmlns="http://www.w3.org/2000/svg" @click="closeModal">
                    <path
                        d="M9.99343 1.5409L8.45934 0.0065918L5.00002 3.4659L1.54093 0.0065918L0.00683594 1.5409L3.46593 5L0.00683594 8.45909L1.54093 9.9934L5.00024 6.53409L8.45934 9.9934L9.99343 8.45909L6.53434 5L9.99343 1.5409Z"
                        fill="currentColor" />
                </svg>
            </div>
            <div class="modal-body">
                <div>
                    <p>{{ t("hotkey.makeBet") }}</p>
                    <span>space</span>
                </div>
                <div>
                    <p>{{ t("hotkey.doubleBetAmt") }}</p>
                    <span>s</span>
                </div>
                <div>
                    <p>{{ t("hotkey.halveBetAmt") }}</p>
                    <span>a</span>
                </div>
                <div>
                    <p>{{ t("hotkey.zeroBetAmt") }}</p>
                    <span>d</span>
                </div>
                <div>
                    <p>{{ t("hotkey.higherorsame") }}</p>
                    <span>q</span>
                </div>
                <div>
                    <p>{{ t("hotkey.lowerorsame") }}</p>
                    <span>w</span>
                </div>
                <div>
                    <p>{{ t("hotkey.skipcard") }}</p>
                    <span>e</span>
                </div>
                <div>
                    <p>{{ t("hotkey.cashout") }}</p>
                    <span>r</span>
                </div>
                <div>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8 0C3.5815 0 0 3.5815 0 8C0 12.4185 3.5815 16 8 16C12.4185 16 16 12.4185 16 8C16 3.5815 12.4185 0 8 0ZM9.31 12.92H6.69V7.67H9.31V12.92ZM8 6.14C7.69739 6.14 7.40159 6.05027 7.14998 5.88215C6.89837 5.71403 6.70227 5.47508 6.58646 5.19551C6.47066 4.91593 6.44036 4.6083 6.4994 4.31151C6.55843 4.01472 6.70415 3.7421 6.91813 3.52813C7.1321 3.31415 7.40472 3.16843 7.70151 3.1094C7.9983 3.05036 8.30593 3.08066 8.58551 3.19646C8.86508 3.31227 9.10403 3.50837 9.27215 3.75998C9.44027 4.01158 9.53 4.30739 9.53 4.61V4.62C9.53 5.02313 9.36986 5.40975 9.0848 5.6948C8.79975 5.97986 8.41313 6.14 8.01 6.14H7.9995H8Z"
                            fill="#B1BAD3" />
                    </svg>
                    <div>
                        {{ t("hotkey.description") }}
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <input type="checkbox" id="enablehotkey" :checked="store.isSetHotkey" @change="changeEnableHotkey" />
                <label for="enablehotkey">{{ t("hotkey.enable") }}</label>
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

function changeEnableHotkey(event: any) {
    console.log(event.target.value);
    store.changeIsSetHotkey();
}

function clickOutSide(event: any) {
    if (event.target == modal.value) {
        closeModal();
    }
}

function closeModal() {
    store.changeShowHotkeyModal(false);
}
</script>

<style scoped>
.modal {
    top: 12px;
    left: 12px;
    width: calc(94vw - 24px);
}

@media screen and (min-width: 566px) {
    .modal {
        top: 50%;
        left: calc(47vw - 250px);
        transform: translateY(-50%);
        width: 500px;
        max-height: 600px;
        overflow-y: auto;
    }
}

@media screen and (min-width: 1346px) {
    .modal {
        left: calc(600px - 250px);
    }
}

.modal-body>div:not(:last-child) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: fit-content;
}

.modal-body>div:last-child {
    width: 100%;
    display: flex;
    margin-top: 16px;
    padding: 16px;
    background-color: #0F212E;
    border: dashed 2px #B1BAD3;
    border-radius: 8px;
    color: #B1BAD3;
}

.modal-body>div:last-child>svg {
    margin-top: 3px;
}

.modal-body>div:last-child>div {
    display: flex;
    text-wrap: wrap;
    margin-left: 10px;
    width: 93%;
}

.modal-body>div>p {
    color: #B1BAD3;
    font-size: 16px;
    font-weight: 500;
}

.modal-body>div>span {
    background-color: #2F4552;
    box-shadow: 0 1px 2px #00000036;
    padding: 5px 15px;
    border-radius: 4px;
    color: #D5DCEB;
    font-size: 16px;
    font-weight: 500;
}

.modal-footer {
    background-color: #0F212E;
    padding: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

.modal-footer input {
    appearance: none;
    background-color: #0F212E;
    border: solid 2px #2F4552;
    border-radius: 3px;
    width: 24px;
    height: 24px;
}

.modal-footer input:checked {
    background-image: url('/icons/IconCheck.svg');
    background-repeat: no-repeat;
    background-position: center;
    outline: 0;
    background-color: #2F4552;
}

.modal-footer input:checked:hover {
    border-color: #2F4552;
}

.modal-footer input:hover {
    border-color: #3a5463;
    cursor: pointer;
}

.modal-footer input:checked {
    background-size: 14px;
}

.modal-footer label {
    margin-left: 10px;
    color: #B1BAD3;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
}
</style>