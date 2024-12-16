import { create } from 'zustand'

export interface sellStore {
  amount: string
  setAmount: (amount: string) => void
  tokenName: string
  setTokenName: (tokenName: string) => void
  tokenSymbol: string
  setTokenSymbol: (tokenSymbol: string) => void
  tokenAddress: string
  setTokenAddress: (tokenAddress: string) => void
  tokenImg: string
  setTokenImg: (tokenImg: string) => void

}

export const useSellStore = create<sellStore>((set) => ({
  amount: '0',
  setAmount: (amount: string) => set({ amount }),
  tokenName: '',
  setTokenName: (tokenName: string) => set({ tokenName }),
  tokenSymbol: '',
  setTokenSymbol: (tokenSymbol: string) => set({ tokenSymbol }),
  tokenAddress: '',
  setTokenAddress: (tokenAddress: string) => set({ tokenAddress }),
  tokenImg: '',
  setTokenImg: (tokenImg: string) => set({ tokenImg }),
}))
