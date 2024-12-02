import { create } from 'zustand'
import { Project } from '@/types/project'

export interface projectStore {
  project: Project | null
  setProject: (project: Project) => void
}

export const useProjectStore = create<projectStore>((set) => ({
  project: null,
  setProject: (project: Project) => set({ project }),
}))
