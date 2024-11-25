import { create } from 'zustand'

export interface tapBar {
  walletAddress: string
  setWalletAddress: (walletAddress: string) => void
}

export const useTapBarStore = create<tapBar>((set) => ({
  walletAddress: '2783hhd....3yue22',
  setWalletAddress: (walletAddress: string) => set({ walletAddress }),
}))
