function convertVideoToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result)
      } else {
        reject('Error reading file when converting to base64')
      }
    }
    reader.readAsDataURL(file)
  })
}

const base64Utils = {
  convertVideoToBase64,
}

export default base64Utils
