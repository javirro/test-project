'use client'

import { Project } from '@/types/project'
import { useEffect, useState } from 'react'
import MainCard from '../MainCard'
import { TanstackQueryProvider } from '@/components/TanstackQueryProvider/TanstackQueryProvider'
import Toast from '@/components/status/Toast'

const ProjectFeedSelector = ({ projects }: { projects: Project[] }) => {
  const [indexShowProject, setIndexShowProject] = useState<number>(0)
  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const [toastType, setToastType] = useState<'error' | 'success'>('success')
  const getNextIndex = (currentIndex: number, total: number) => (currentIndex + 1) % total

  const currentProject = projects[indexShowProject]
  const nextProject = projects[getNextIndex(indexShowProject, projects.length)]

  useEffect(() => {
    if (toastMessage) {
      const timeout = setTimeout(() => {
        setToastMessage(null)
      }, 4000)

      return () => clearInterval(timeout)
    }
  }, [toastMessage])

  return (
    <TanstackQueryProvider>
      <>
        {toastMessage && <Toast text={toastMessage} type={toastType} />}
        <MainCard
          deactivated={false}
          project={currentProject}
          setIndexShowProject={setIndexShowProject}
          totalProjects={projects.length}
          key={currentProject.id}
          setToastMessage={setToastMessage}
          setToastType={setToastType}
        />
        <MainCard
          deactivated={true}
          project={nextProject}
          setIndexShowProject={setIndexShowProject}
          totalProjects={projects.length}
          key={nextProject.id}
          setToastMessage={setToastMessage}
          setToastType={setToastType}
        />
      </>
    </TanstackQueryProvider>
  )
}

export default ProjectFeedSelector
