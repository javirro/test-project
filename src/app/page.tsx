import { getProjects } from '@/dataFetching/projects/getProject'
import styles from './page.module.css'
import ProjectFeedSelector from '@/components/feed/components/ProjectFeedSelector/ProjectFeedSelector'
import { Project } from '@/types/project'

export const revalidate = 100 // 100seconds

interface PageProps {
  params: Promise<{ projects: Project[] }>
}

export async function generateStaticParams() {
  const projects = await getProjects()
  return {
    projects,
  }
}

const Home = async ({ params }: PageProps) => {
  const { projects } = await params
  return (
    <main className={styles.page}>
      <ProjectFeedSelector projects={projects} />
    </main>
  )
}

export default Home
