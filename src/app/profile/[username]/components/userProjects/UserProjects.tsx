import { getProjectsCreatedByUser } from '@/dataFetching/users/getProjectsCreatedByUser'
import ProjectsListProfile from './ProjectsListProfile'
import { getProjectsinWatchlist } from '@/dataFetching/projects/getLikeAndCommentsAmount'

async function UserProjects({ username }: { username: string }) {
  const projects = await getProjectsCreatedByUser(username)
  const favoriteProjects = await getProjectsinWatchlist(username)
  return <ProjectsListProfile userProjects={projects} favoriteProjects={favoriteProjects} />
}

export default UserProjects
