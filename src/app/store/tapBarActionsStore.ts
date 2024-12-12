import { create } from 'zustand'

export interface tapBarActionsStore {
  isMuted: boolean
  setIsMuted: (isMuted: boolean) => void
}

export const useTapBarActionsStore = create<tapBarActionsStore>((set) => ({
  isMuted: true,
  setIsMuted: (isMuted: boolean) => set({ isMuted }),
}))
