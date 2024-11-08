import { create } from 'zustand'

export interface createProject {
  projectName: string
  setProjectName: (projectName: string) => void
  tokenSymbol: string
  setTokenSymbol: (tokenSymbol: string) => void
  projectDescription: string
  setProjectDescription: (projectDescription: string) => void
  projectImage: string
  setProjectImage: (projectImage: string) => void
  projectVideo: string
  setProjectVideo: (projectVideo: string) => void
  totalSupply: number | null
  setTotalSupply: (totalSupply: number | null) => void
  tags: string[]
  setTags: (tags: string[]) => void
  allowComments: boolean
  setAllowComments: (allowComments: boolean) => void
}

export const useCreateProjectStore = create<createProject>((set) => ({
  projectName: '',
  setProjectName: (projectName: string) => set({ projectName }),
  tokenSymbol: '',
  setTokenSymbol: (tokenSymbol: string) => set({ tokenSymbol }),
  projectDescription: '',
  setProjectDescription: (projectDescription: string) => set({ projectDescription }),
  projectImage: '',
  setProjectImage: (projectImage: string) => set({ projectImage }),
  projectVideo: '',
  setProjectVideo: (projectVideo: string) => set({ projectVideo }),
  totalSupply: 0,
  setTotalSupply: (totalSupply: number | null) => set({ totalSupply }),
  tags: [],
  setTags: (tags: string[]) => set({ tags }),
  allowComments: false,
  setAllowComments: (allowComments: boolean) => set({ allowComments }),
}))
