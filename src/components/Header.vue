import { createApp } from 'vue';
<template>
  <header :class="'header-whole-container'">
    <div :class="'header-logo'">logo</div>
    <div style="display: flex">
      <select :class="'header-wallet-container'">
        <option value="bitcoin" :class="'header-wallet-option'">
          <span>0.00000000</span>
          <img src="/icons/IconCoin.svg" :class="'header-wallet-bitcoin'" alt="" />
        </option>
        <option value="bitcoin" style="display: flex">
          <span>0.00000000</span>
          <img src="/icons/IconCoin.svg" alt="" />
        </option>
        <option value="bitcoin" style="display: flex">
          <span>0.00000000</span>
          <img src="/icons/IconCoin.svg" alt="" />
        </option>
      </select>
      <button :class="'header-wallet-wallet'">
        <img src="/icons/IconWallet.svg" alt="" />
      </button>
    </div>
    <div :class="'header-user-container'">
      <img src="/icons/IconUser.svg" alt="" />
      <img src="/icons/IconNotifer.svg" alt="" />
    </div>
  </header>
</template>

<style scoped>
.header-whole-container {
  background-color: #1A2C38;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.24);
  height: 60px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  position: absolute;
  flex-shrink: 0;
}

.header-logo {
  color: var(--, #FFF);
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: white;
  padding-left: 3vw;
}

.header-wallet-container {
  background-color: #0F212E;
  border: 0.2vh solid #0F212E;
  color: white;
  width: 100%;
  height: 4.5vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-wallet-container:hover {
  border: 0.2vh solid #557086;
}

.header-wallet-container:focus {
  border: 0.2vh solid #557086;
  outline: none;
}

.header-wallet-wallet {
  /* bg-[#1475E1] text-white hover:bg-[#4d8ed8] px-4 rounded-r-sm */
  background-color: #1475E1;
  color: white;
  /* padding-left: 2vh; */
  width: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-wallet-wallet:hover {
  background-color: #4d8ed8;
}

.header-wallet-option {
  display: flex;
  width: 100%;

  align-items: center;
  position: relative;
  justify-content: space-between;

}

.header-user-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3vh;
}

.header-wallet-bitcoin {}
</style>