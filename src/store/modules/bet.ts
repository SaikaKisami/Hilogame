import { reactive } from "vue";

export const betStore = reactive({
  betAmout: 0.0,
  multiplier: 1.71,
  totalProfit: 0.0,
  winTimes: 0,
  lossTimes: 0,
});
