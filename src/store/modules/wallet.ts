import { reactive } from "vue";

export const wallet = reactive({
  wallets: [
    {
      name: "BTC",
      logo: "/wallets/BTC.svg",
      balance: 0.0,
    },
    {
      name: "ETH",
      logo: "/wallets/ETH.svg",
      balance: 2.0,
    },
    {
      name: "TRX",
      logo: "/wallets/TRX.svg",
      balance: 5.0,
    },
  ],
  searchedWallet: [
    {
      name: "BTC",
      logo: "/wallets/BTC.svg",
      balance: 0.0,
    },
    {
      name: "ETH",
      logo: "/wallets/ETH.svg",
      balance: 2.0,
    },
    {
      name: "TRX",
      logo: "/wallets/TRX.svg",
      balance: 5.0,
    },
  ],
  cWallet: 0,
  profit: 0,
  loss: 0,
  wagered: 0,
  getCurrentWallet() {
    return this.wallets[this.cWallet];
  },
  setSearchedWallet(word: string) {
    this.searchedWallet = this.wallets.filter((wallet) =>
      wallet.name.includes(word)
    );
  },
  changeCWallet(index: number) {
    this.cWallet = index;
    console.log("current wallet", this.cWallet);
  },
});
