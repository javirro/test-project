import { create } from 'zustand'

export interface tapBarActionsStore {
  isMuted: boolean
  setIsMuted: (isMuted: boolean) => void
  approveProject: boolean
  setApproveProject: (approveProject: boolean) => void
  deniedProject: boolean
  setDeniedProject: (deniedProject: boolean) => void
  triggerAction: 'approve' | 'deny' | null
  setTriggerAction: (action: 'approve' | 'deny' | null) => void
}

export const useTapBarActionsStore = create<tapBarActionsStore>((set) => ({
  isMuted: true,
  setIsMuted: (isMuted: boolean) => set({ isMuted }),
  approveProject: false,
  setApproveProject: (approveProject: boolean) => set({ approveProject }),
  deniedProject: false,
  setDeniedProject: (deniedProject: boolean) => set({ deniedProject }),
  triggerAction: null,
  setTriggerAction: (action) => set({ triggerAction: action }),
}))
