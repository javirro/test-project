import { create } from 'zustand'

export interface toastStore {
  toastMessage: string | null
  setToastMessage: (toast: string | null) => void
  toastType: 'error' | 'success' | 'loading'
  setToastType: (type: 'error' | 'success' | 'loading') => void
}

export const useToastStore = create<toastStore>((set) => ({
  toastMessage: null,
  setToastMessage: (toast: string | null) => set({ toastMessage: toast }),
  toastType: 'success',
  setToastType: (type: 'error' | 'success' | 'loading') => set({ toastType: type }),
}))
