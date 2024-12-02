import { useState, useEffect, ChangeEvent } from 'react'
import '@telegram-apps/telegram-ui/dist/styles.css'
import { AppRoot, Input, Tappable, Textarea } from '@telegram-apps/telegram-ui'
import { useCreateProjectStore } from '@/app/store/createProjectStore'
import style from './CreateProjectFirstStep.module.css'

function CreateProjectFirstStep({ setToastMessage }: { setToastMessage: (message: string) => void }) {
  const { projectName, setProjectName, tokenSymbol, setTokenSymbol, projectDescription, setProjectDescription, projectImage, setProjectImage } =
    useCreateProjectStore()

  const [isClient, setIsClient] = useState<boolean>(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const MAX_FILE_SIZE = 1 * 512 * 1024 // 512 KB
    const file = event.target.files?.[0]
    if (file && file.size > MAX_FILE_SIZE) {
      setToastMessage('Image Size must be lower than 500 KB.')
      return
    }
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setProjectImage(reader.result)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  if (!isClient) return null

  return (
    <AppRoot style={{ width: '100%' }} appearance="light">
      <form style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', gap: 16 }}>
        <section
          style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', gap: 16, padding: '12px 12px 12px 12px' }}
        >
          <p className={style.text}>Icono del proyecto</p>
          <div style={{ display: 'flex', gap: 16, flexDirection: 'column', alignItems: 'center' }}>
            <div className={style.imageDiv}>{projectImage ? <img src={projectImage} alt="Project Icon" className={style.projectImagePreview} /> : 'TG'}</div>
            <label htmlFor="upload-image" className={style.uploadImageButton}>
              Subir imagen
              <input id="upload-image" type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />
            </label>
          </div>
        </section>
        <section style={{ width: '100%' }}>
          <Input
            className={`${style.inputStyle} ${style.customInputPadding}`}
            header="Project name"
            placeholder="PEPE"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            after={
              <Tappable Component="div" style={{ display: 'flex' }} onClick={() => setProjectName('')}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Tappable>
            }
          />
          <Input
            header="Token symbol"
            placeholder="DHU"
            value={tokenSymbol}
            onChange={(e) => setTokenSymbol(e.target.value)}
            after={
              <Tappable Component="div" style={{ display: 'flex' }} onClick={() => setTokenSymbol('')}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Tappable>
            }
          />
          <Textarea
            header="Description"
            placeholder="Write a cool description here"
            maxLength={500}
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
          />
          <div className={style.charCounter}>{projectDescription.length}/500 words</div>
        </section>
      </form>
    </AppRoot>
  )
}

export default CreateProjectFirstStep
