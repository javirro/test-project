import { getProjects } from '@/dataFetching/projects/getProject'
import styles from './page.module.css'
import ProjectFeedSelector from '@/components/feed/components/ProjectFeedSelector/ProjectFeedSelector'

const Home = async () => {
  const projects = await getProjects()
  return (
    <main className={styles.page}>
      <ProjectFeedSelector projects={projects} />
    </main>
  )
}

export default Home
