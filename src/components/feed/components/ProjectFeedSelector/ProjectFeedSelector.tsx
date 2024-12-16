'use client'

import { Project } from '@/types/project'
import { useState } from 'react'
import MainCard from '../MainCard'
import { TanstackQueryProvider } from '@/components/TanstackQueryProvider/TanstackQueryProvider'

const ProjectFeedSelector = ({ projects }: { projects: Project[] }) => {
  const [indexShowProject, setIndexShowProject] = useState<number>(0)

  const getNextIndex = (currentIndex: number, total: number) => (currentIndex + 1) % total

  const currentProject = projects[indexShowProject]
  const nextProject = projects[getNextIndex(indexShowProject, projects.length)]

  return (
    <TanstackQueryProvider>
      <>
        <MainCard
          deactivated={false}
          project={currentProject}
          setIndexShowProject={setIndexShowProject}
          totalProjects={projects.length}
          key={currentProject.id}
        />
        <MainCard deactivated={true} project={nextProject} setIndexShowProject={setIndexShowProject} totalProjects={projects.length} key={nextProject.id} />
      </>
    </TanstackQueryProvider>
  )
}

export default ProjectFeedSelector
