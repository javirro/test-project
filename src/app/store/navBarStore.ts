import { create } from 'zustand'

export interface navBar {
  actionNavBarMessage: string
  setActionNavBarMessage: (actionNavBarMessage: string) => void
}

export const useNavBarStore = create<navBar>((set) => ({
  actionNavBarMessage: 'Your Solana address',
  setActionNavBarMessage: (actionNavBarMessage: string) => set({ actionNavBarMessage }),
}))
