<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import DropBox from '@/components/utils/dropbox.vue';

const { locale, t } = useI18n();

// const currentWallet = computed(() => store.state.wallet.currentWallet);

// function changeWallet(event: any) {
//   store.commit('wallet/changeWallet', { name: event.target.value });
// }

function changeLang(event: any) {
  locale.value = event.target.value;
}

</script>
<template>
  <header :class="'header-whole-container'">
    <div :class="'header-logo'">logo</div>
    <DropBox />
    <div :class="'header-user-container'">
      <select :class="'language-bar'" :value="locale" @change="changeLang">
        <option value="ch">{{ t("ch") }}</option>
        <option value="en">{{ t("en") }}</option>
      </select>
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
  background-color: #1475E1;
  color: white;
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

.language-bar {
  width: 80px;
  background-color: #0F212E;
  color: white;
  border-radius: 5px;
  border: 0px;
  box-shadow: white 2px;
  font-size: 14px;
}
</style>