'use client'

import { Project } from '@/types/project'
import { useState } from 'react'
import MainCard from '../MainCard'
import { TanstackQueryProvider } from '@/components/TanstackQueryProvider/TanstackQueryProvider'

const ProjectFeedSelector = ({ projects }: { projects: Project[] }) => {
  const [indexShowProject, setIndexShowProject] = useState<number>(0)
  const ComponentMainCard: JSX.Element[] = projects.map((project) => {
    return <MainCard project={project} setIndexShowProject={setIndexShowProject} totalProjects={projects.length} key={project.id} />
  })
  return <TanstackQueryProvider>{ComponentMainCard[indexShowProject]}</TanstackQueryProvider>
}

export default ProjectFeedSelector
