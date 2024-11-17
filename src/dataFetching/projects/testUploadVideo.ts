"use server"
import { BASE_URL } from "../endpoints"

export const testUploadVideo =  async (video: File) => {

  const url = BASE_URL + '/test-video'
  const form = new FormData()
  form.append('file', video)
  const options = {
    method: 'POST',
    body: form,
  }
  const response = await fetch(url, options)
  if (!response.ok) {
    console.error('Error uploading video', response)
    throw new Error('Error uploading video')
  }

}