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
  videoOriginal: File | null
  setVideoOriginal: (videoOriginal: File) => void
  projectVideo: string
  setProjectVideo: (projectVideo: string) => void
  tags: string[]
  setTags: (tags: string[]) => void
  allowComments: boolean
  setAllowComments: (allowComments: boolean) => void
  discord: string
  setDiscord: (discord: string) => void
  twitter: string
  setTwitter: (twitter: string) => void
  website: string
  setWebsite: (website: string) => void
  telegram: string
  setTelegram: (telegram: string) => void
  nsfw: boolean
  setNsfw: (nsfw: boolean) => void
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
  videoOriginal: null,
  setVideoOriginal: (videoOriginal: File) => set({ videoOriginal }),
  projectVideo: '',
  setProjectVideo: (projectVideo: string) => set({ projectVideo }),
  tags: [],
  setTags: (tags: string[]) => set({ tags }),
  allowComments: false,
  setAllowComments: (allowComments: boolean) => set({ allowComments }),
  nsfw: false,
  setNsfw: (nsfw: boolean) => set({ nsfw: nsfw }),
  discord: '',
  setDiscord: (discord: string) => set({ discord }),
  twitter: '',
  setTwitter: (twitter: string) => set({ twitter }),
  website: '',
  setWebsite: (website: string) => set({ website }),
  telegram: '',
  setTelegram: (telegram: string) => set({ telegram }),
}))
