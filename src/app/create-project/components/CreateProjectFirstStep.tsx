import { useState, useEffect, ChangeEvent } from 'react'
import { useCreateProjectStore } from '@/app/store/createProjectStore'
import style from './CreateProjectFirstStep.module.css'

function CreateProjectFirstStep({
  setToastMessage,
  setToastType,
}: {
  setToastMessage: (message: string) => void
  setToastType: (type: 'error' | 'success') => void
}) {
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
      setToastType('error')
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
    <div style={{ width: '100%' }}>
      <form style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', gap: 16 }} className="animate-in">
        <section style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, padding: '12px' }}>
          <p className={style.text}>Icono del proyecto</p>
          <div style={{ display: 'flex', gap: 16, flexDirection: 'column', alignItems: 'center' }}>
            <div className={style.imageDiv}>{projectImage ? <img src={projectImage} alt="Project Icon" className={style.projectImagePreview} /> : 'TG'}</div>
            <label htmlFor="upload-image" className={style.uploadImageButton}>
              Subir imagen
              <input id="upload-image" type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />
            </label>
          </div>
        </section>

        <section style={{ width: '100%', padding: '0 10px' }}>
          <div style={{ marginBottom: '12px', position: 'relative', width: '100%' }}>
            <label htmlFor="project-name" className={style.text}>
              Project name
            </label>
            <input
              id="project-name"
              type="text"
              placeholder="PEPE"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className={style.customInput}
              style={{ width: '100%', padding: '12px 10px', borderRadius: '8px', border: '1px solid #a2acb0', backgroundColor: '#fff', color: '#000' }}
            />
            {projectName && (
              <button
                type="button"
                onClick={() => setProjectName('')}
                style={{ position: 'absolute', right: '10px', top: '65%', transform: 'translateY(-50%)', background: 'transparent', border: 'none' }}
              >
                ✖️
              </button>
            )}
          </div>

          <div style={{ marginBottom: '12px', position: 'relative', width: '100%' }}>
            <label htmlFor="token-symbol" className={style.text}>
              Token symbol
            </label>
            <input
              id="token-symbol"
              type="text"
              placeholder="DHU"
              value={tokenSymbol}
              onChange={(e) => setTokenSymbol(e.target.value)}
              className={style.customInput}
              style={{ width: '100%', padding: '12px 10px', borderRadius: '8px', border: '1px solid #a2acb0', backgroundColor: '#fff', color: '#000' }}
            />
            {tokenSymbol && (
              <button
                type="button"
                onClick={() => setTokenSymbol('')}
                style={{ position: 'absolute', right: '10px', top: '65%', transform: 'translateY(-50%)', background: 'transparent', border: 'none' }}
              >
                ✖️
              </button>
            )}
          </div>

          <div style={{ marginBottom: '12px', width: '100%' }}>
            <label htmlFor="description" className={style.text}>
              Description
            </label>
            <textarea
              id="description"
              placeholder="Write a cool description here"
              maxLength={500}
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              className={style.customInput}
              style={{
                width: '100%',
                padding: '12px 10px',
                borderRadius: '8px',
                border: '1px solid #a2acb0',
                resize: 'none',
                backgroundColor: '#fff',
                color: '#000',
              }}
              rows={4}
            ></textarea>
            <div className={style.charCounter}>{projectDescription.length}/500 words</div>
          </div>
        </section>
      </form>
    </div>
  )
}

export default CreateProjectFirstStep
