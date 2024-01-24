<template>
    <button>
        {{ t("infoModal.rules") }}
    </button>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n();
</script>

<style scoped>
button {
    background-color: #223D49;
    border: solid #0A1E29 5px;
    border-radius: 30px;
    color: white;
    font-size: 14px;
    font-weight: 500;
    padding: 12px 20px;
    cursor: pointer;
}
</style>