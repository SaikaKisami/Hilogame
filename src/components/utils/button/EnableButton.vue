<template>
    <button>
        {{ t("maxModal.enable") }}
    </button>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped>
button {
    background-color: #17E702;
    padding: 12px 20px;
    border-radius: 4px;
    color: black;
    font-size: 14px;
    font-weight: 600;
    box-shadow: #000000 5px
}
button:hover {
    background-color: #1fff20;
}
</style>