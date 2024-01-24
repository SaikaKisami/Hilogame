<template>
    <div class="drop-down">
        <div class="btn">
            <div class="drp-btn" @click="openDropBox">
                <span class="c-balance">{{ currentWallet.balance.toFixed(8) }}</span>
                <img class="c-logo" :src="currentWallet.logo" alt="">
                <img src="/icons/IconArrow.svg" alt="" class="arrow" :class="{ 'rotate': showDropBox }">
            </div>
            <button class="wallet-btn">
                <img src="/icons/IconWallet.svg" alt="" />
            </button>
        </div>
        <div v-if="showDropBox" class="select-box">
            <div class="drp-box">
                <div class="search-input">
                    <div class="input-img">
                        <svg fill="currentColor" width="16" height="16" viewBox="0 0 64 64" class="svg-icon" style="">
                            <title></title>
                            <path fill-rule="evenodd" fill="currentcolor" clip-rule="evenodd"
                                d="M10.266 3.893a23.1 23.1 0 1 1 25.668 38.414A23.1 23.1 0 0 1 10.266 3.893Zm5.112 30.764a13.9 13.9 0 1 0 15.444-23.114 13.9 13.9 0 0 0-15.444 23.114ZM38.55 46.33a28.002 28.002 0 0 0 7.78-7.78L64 56.22 56.22 64 38.55 46.33Z">
                            </path>
                        </svg>
                    </div>
                    <input class="search" placeholder="Search Currencies" @input="searchWallet" />
                </div>
                <button v-for="(swallet, index) in wallet.searchedWallet" class="select-wallet-btn" @click="selectWallet(index)">
                    <div class="select-wallet">
                        <span class="balance">{{ swallet.balance.toFixed(8) }}</span>
                        <div class="name-icon">
                            <span class="logo"><img :src="swallet.logo" alt="" /></span>
                            <span class="name">{{ swallet.name }}</span>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { wallet } from '@/store/modules/wallet';

const currentWallet = computed(() => wallet.getCurrentWallet());

const showDropBox = ref<boolean>(false);

function openDropBox() {
    showDropBox.value = !showDropBox.value;
}

function closeDropBox() {
    showDropBox.value = false
}

function selectWallet(index: number) {
    wallet.changeCWallet(index);
    closeDropBox();
}

function searchWallet(event: any) {
    console.log('the searching value:', event.target.value);
    wallet.setSearchedWallet(event.target.value);
}
</script>

<style scoped>
.drop-down {
    display: none;
    position: relative;
}

.btn {
    display: flex;
    align-items: center;
}

.drp-btn {
    padding: 13px 13px 13px 16px;
    background-color: #0F212E;
    border-radius: 2px 0 0 2px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 4px;
}

.drp-btn:hover {
    background-color: #0b1822;
}

.drp-btn:active>* {
    scale: 0.95;
}

.c-balance {
    font-family: 'Proxima Nova';
    font-size: 14px;
    font-weight: 600;
    color: white;
}

.arrow {
    margin-left: 8px;
    transform: rotate(180deg);
}

.rotate {
    transform: rotate(0deg);
}

.wallet-btn {
  background-color: #1475E1;
  color: white;
  padding: 14px;
  border-radius: 0 4px 4px 0;
  align-items: center;
  height: 100%;
}

.wallet-btn:hover {
    background-color: #0e519c;
}

.select-box {
    position: absolute;
    top: 100%;
    right: 50%;
    transform: translateX(50%);
    padding-top: 12px;
}

.drp-box {
    position: relative;
    background-color: white;
    border-radius: 4px;
    padding: 4px 0;
    display: flex;
    flex-direction: column;
}

.drp-box::before {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    border: solid 5px;
    border-color: transparent transparent white transparent;
}

.search-input {
    padding: 0 12px 12px;
}

.input-img {
    position: absolute;
    top: 14px;
    left: 24px;
    color: #B1BAD3;
}

input.search {
    appearance: none;
    background-color: white;
    border: solid 2px #D5DCEB;
    padding: 7px 7px 7px 35px;
    color: #2f4553;
    font-size: 14px;
    font-weight: 600;
    height: 40px;
    width: 200px;
}

.select-wallet-btn {
    width: 100%;
    padding: 6px 12px;
    background-color: white;
}

.select-wallet-btn:hover {
    background-color: #B1BAD3;
}

.select-wallet {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

}

.balance {
    font-family: 'Proxima Nova';
    font-size: 14px;
    font-weight: 600;
}

.name-icon {
    display: flex;
    align-items: center;
}

.name {
    margin-left: 5px;
    margin-right: 15px;
}

@media screen and (min-width: 480px) {
    .drop-down {
        display: block;
    }
}
</style>