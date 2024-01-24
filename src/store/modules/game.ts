import { reactive } from "vue";

export const gameStore = reactive({
  isOnBet: false,
  isOnDealing: false,
  canCashOut: true,
  isFavour: false,
  changeIsOnBet(value: boolean) {
    this.isOnBet = value;
  },
  changeIsOnDealing(value: boolean) {
    this.isOnDealing = value;
  },
  changeCanCashOut(value: boolean) {
    this.canCashOut = value;
  },
  changeIsFavour(value: boolean) {
    this.isFavour = value;
  }
});
