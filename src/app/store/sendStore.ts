import { create } from 'zustand'

export interface sendStore {
  amount: string
  setAmount: (amount: string) => void
  tokenName: string
  setTokenName: (tokenName: string) => void
  tokenSymbol: string
  setTokenSymbol: (tokenSymbol: string) => void
  tokenAddress: string
  setTokenAddress: (tokenAddress: string) => void
  destination: string
  setDestination: (destination: string) => void
}

export const useSendStore = create<sendStore>((set) => ({
  amount: '0',
  setAmount: (amount: string) => set({ amount }),
  tokenName: '',
  setTokenName: (tokenName: string) => set({ tokenName }),
  tokenSymbol: '',
  setTokenSymbol: (tokenSymbol: string) => set({ tokenSymbol }),
  tokenAddress: '',
  setTokenAddress: (tokenAddress: string) => set({ tokenAddress }),
  destination: '',
  setDestination: (destination: string) => set({ destination }),
}))
