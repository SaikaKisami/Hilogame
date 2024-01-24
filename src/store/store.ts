import { reactive } from "vue";

export const store = reactive({
  cashModalVisible: false,
  fairnessVisible: false,
  showSetting: false,
  showMaxModal: false,
  isMaxBet: false,
  gameVolume: 50,
  showHotkeyModal: false,
  isSetHotkey: false,
  showInfoModal: false,
  showLiveStatus: false,
  liveStatus: "all",
  changeCashModal(visible: boolean) {
    this.cashModalVisible = visible;
  },
  changeFairnessVisible(visible: boolean) {
    this.fairnessVisible = visible;
  },
  changeShowSetting(value: boolean) {
    this.showSetting = value;
  },
  changeShowMaxModal(value: boolean) {
    this.showMaxModal = value;
  },
  changeIsMaxBet(value: boolean) {
    this.isMaxBet = value;
  },
  changeGameVolume(value: number) {
    this.gameVolume = value;
  },
  changeShowHotkeyModal(value: boolean) {
    this.showHotkeyModal = value;
  },
  changeIsSetHotkey() {
    this.isSetHotkey = !this.isSetHotkey;
  },
  changeShowInfoModal(value: boolean) {
    this.showInfoModal = value;
  },
  changeShowLive(value: boolean) {
    this.showLiveStatus = value;
  },
  changeLiveSatus(value: string) {
    this.liveStatus = value;
  },
});
