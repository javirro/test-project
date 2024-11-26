
import { User } from '@/types/user'
import { create } from 'zustand'

export interface userStore {
  user: User | null
  setUser: (user: User) => void
  token: string
  setToken: (token: string) => void
}

export const useUserStore = create<userStore>((set) => ({
  user: null,
  setUser: (user: User) => set({ user }),
  token: '',
  setToken: (token: string) => set({ token }),
}))
