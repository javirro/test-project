'use server'

// First request to get the upload URL.
// Second request to upload the video to the URL.

/*
https://developers.cloudflare.com/stream/uploading-videos/direct-creator-uploads/
https://developers.cloudflare.com/api/operations/stream-videos-upload-videos-via-direct-upload-ur-ls
 */
export const uploadVideoToCloudfareDirectUrl = async (video: File): Promise<string> => {
  const accountId = process.env.NEXT_CLOUDFARE_ACCOUNT_ID
  const cloudfareToken = process.env.NEXT_CLOUDFARE_TOKEN
  const urlForGeneratedUploadUrl = `https://api.cloudflare.com/client/v4/accounts/${accountId}/stream/direct_upload`
  const optionsURL = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${cloudfareToken}`,
    },
    body: JSON.stringify({ maxDurationSeconds: 3600, allowedOrigins: ['*'] }),
  }

  const responseURL = await fetch(urlForGeneratedUploadUrl, optionsURL)
  if (!responseURL.ok) {
    console.error('Error getting upload URL', responseURL)
    throw new Error('Error generating upload url')
  }
  const dataURL = await responseURL.json()
  console.log(dataURL)
  const uploadUrl: string = dataURL?.result?.uploadURL

  const form = new FormData()
  form.append('file', video)
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'multipart/form-data',
    },
    body: form,
  }
  const response = await fetch(uploadUrl, options)

  if (!response.ok) {
    console.error({ status: response.status, statusText: response.statusText })
    const wrongRes = await response.text()
    console.error('Error:', wrongRes)
    throw new Error('Error uploading video to Cloudfare.')
  }
  const data = await response.json()
  console.log(data)
  const videoUrl = data?.result?.url
  return videoUrl
}

export const uploadVideoBasicUploadMethod = async (video: File): Promise<string> => {
  const accountId = process.env.NEXT_CLOUDFARE_ACCOUNT_ID
  const cloudfareToken: string = process.env.NEXT_CLOUDFARE_TOKEN as string
  const urlForGeneratedUploadUrl = `https://api.cloudflare.com/client/v4/accounts/${accountId}/stream`

  const form = new FormData()
  form.append('file', video)
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'multipart/form-data',
      'Authorization': `Bearer ${cloudfareToken}`,
      'X-Auth-Email': cloudfareToken,
      'X-Auth-Key': cloudfareToken,

    },
    body: form,
  }
  const response = await fetch(urlForGeneratedUploadUrl, options)
  if (!response.ok) {
    console.error('Error uploading video to Cloudfare', response)
    throw new Error('Error uploading video to Cloudfare')
  }
  const data = await response.json()
  console.log(data)
  const videoUrl = data?.result?.url
  return videoUrl
}
