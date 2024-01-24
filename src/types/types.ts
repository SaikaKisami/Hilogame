export interface State {
  flag: boolean;
  canvasStatus: string;
  cashModalVisible: boolean;
  // cashType: string; //"bit", "eth"
  // betAmount: number;
  // walletAmount: number;
  // profitHigher: number;
  // profitLower: number;
  // profitTotal: number;
}

export interface Wallet {
  name: string;
  logo: string;
  balance: number;
}

export interface walletState {
  wallets: Wallet[];
  cWallet: number;
}
