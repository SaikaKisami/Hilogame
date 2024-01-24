<template>
    <div class="modal">
        <span class="multiplier input-number">{{ betStore.multiplier }}x</span>
        <div class="divider"></div>
        <div class="profit">
            <span class="input-number">{{ betStore.totalProfit.toFixed(8) }}</span>
            <img src="/icons/IconCoin.svg" alt="" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { betStore } from '@/store/modules/bet';
</script>

<style scoped>
.modal {
    top: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10.5px 14px;
    border-radius: 8px;
    border: solid 3px #00E700;
    background-color: #1A2C38;
}

.multiplier {
    color: #00E700;
    font-size: 28px;
    font-weight: 800;
    line-height: 22px;
    padding: 10px 0;
}

.divider {
    width: 35px;
    height: 3px;
    background-color: #304554;
    margin: 4px 0px 8px;
}

.profit {
    display: flex;
    align-items: center;
}

.input-number {
    color: #00E700;
    margin-right: 4px;
}
</style>