'use server'

import { ProjectForm } from '@/types/project'
import { projectEndpoints } from '../endpoints'

export const createProject = async (projectData: ProjectForm, token: string): Promise<void> => {
  const url = projectEndpoints.create
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `${token}`,
    },
    body: JSON.stringify(projectData),
  }
  const response = await fetch(url, options)
  if (!response.ok) {
    throw new Error('Error creating project')
  }
}
