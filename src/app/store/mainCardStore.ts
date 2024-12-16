import { create } from 'zustand'

export interface MainCardStore {
  nextProjectState: boolean
  setNextProjectState: (nextProject: boolean) => void
}

export const useMainCardStore = create<MainCardStore>((set) => ({
  nextProjectState: false,
  setNextProjectState: (nextProjectState: boolean) => set({ nextProjectState }),
}))
