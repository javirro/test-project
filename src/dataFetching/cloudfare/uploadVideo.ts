'use server'

// First request to get the upload URL.
// Second request to upload the video to the URL.

/*
https://developers.cloudflare.com/stream/uploading-videos/direct-creator-uploads/
https://developers.cloudflare.com/api/operations/stream-videos-upload-videos-via-direct-upload-ur-ls
 */
export const uploadVideoToCloudfare = async (video: File): Promise<string> => {
  const accountId = process.env.NEXT_CLOUDFARE_ACCOUNT_ID
  const cloudfareToken = process.env.NEXT_CLOUDFARE_TOKEN
  const urlForGeneratedUploadUrl = `https://api.cloudflare.com/client/v4/accounts/${accountId}/stream/direct_upload`
  const optionsURL = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${cloudfareToken}`,
    },
    body: JSON.stringify({ maxDurationSeconds: 3600, allowedOrigins: ['*'], meta: { filename: video.name } }),
  }

  const responseURL = await fetch(urlForGeneratedUploadUrl, optionsURL)
  if (!responseURL.ok) {
    console.error("Error getting upload URL", responseURL)
    throw new Error('Error generating upload url')
  }
  const dataURL = await responseURL.json()
  console.log(dataURL)
  const uploadUrl: string = dataURL?.result?.uploadURL

  const form = new FormData()
  form.append('file', video,  video.name)
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'multipart/form-data',
      authorization: `Bearer ${cloudfareToken}`,
    },
    body: form,
  }
  const response = await fetch(uploadUrl, options)

  if (!response.ok) {
    console.log(response)
    const wrongRes = await response.text()
    console.log(wrongRes)
    throw new Error('Error uploading video')
  }
  const data = await response.json()
  console.log(data)
  const videoUrl = data?.result?.url
  return videoUrl
}
