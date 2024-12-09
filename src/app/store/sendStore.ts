import { create } from 'zustand'

export interface sendStore {
  amount: string
  setAmount: (amount: string) => void
}

export const useSendStore = create<sendStore>((set) => ({
  amount: '0',
  setAmount: (amount: string) => set({ amount }),
}))
