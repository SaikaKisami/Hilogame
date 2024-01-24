<template>
    <div ref="modal" class="modal-back" v-if="store.showInfoModal" @click="clickOutSide">
        <div class="modal">
            <div class="modal-header">
                <div class="modal-title">
                    <img src="/icons/IconGameInfo.svg" alt="" class="modal-logo" />
                    <span class="title label-text">{{ t("infoModal.title") }}</span>
                </div>
                <svg width="10" height="10" viewBox="0 0 10 10" class="svg-btn" fill="none"
                    xmlns="http://www.w3.org/2000/svg" @click="closeModal">
                    <path
                        d="M9.99343 1.5409L8.45934 0.0065918L5.00002 3.4659L1.54093 0.0065918L0.00683594 1.5409L3.46593 5L0.00683594 8.45909L1.54093 9.9934L5.00024 6.53409L8.45934 9.9934L9.99343 8.45909L6.53434 5L9.99343 1.5409Z"
                        fill="currentColor" />
                </svg>
            </div>
            <div class="modal-body">
                <RulesButton></RulesButton>
                <div class="rules">
                    <p class="label-text">{{ t("infoModal.rule1") }}</p>
                    <p class="label-text">{{ t("infoModal.rule2") }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import RulesButton from '../button/RulesButton.vue';
import { store } from '@/store/store';

const { t } = useI18n();

const modal = ref<HTMLElement | null>(null);

function clickOutSide(event: any) {
    if (event.target == modal.value) {
        closeModal();
    }
}

function closeModal() {
    store.changeShowInfoModal(false);
}
</script>

<style scoped>
.modal {
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
    width: calc(94vw - 24px);
}

.rules {
    width: 100%;
    display: flex;
    flex-direction:  column;
    align-items: start;
}

@media screen and (min-width: 566px) {
    .modal {
        top: 30%;
        width: 500px;
    }
}
</style>