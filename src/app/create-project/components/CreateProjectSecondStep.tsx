import { useState, useEffect, ChangeEvent, useRef } from 'react'
import { AppRoot, Input, Tappable, Switch } from '@telegram-apps/telegram-ui'
import style from './CreateProjectSecondStep.module.css'
import '@telegram-apps/telegram-ui/dist/styles.css'
import { useCreateProjectStore } from '@/app/store/createProjectStore'
import CommentsButtonIcon from '@/images/buttons/components/commentsButton'
import { Multiselect } from '@telegram-apps/telegram-ui'
import { MultiselectOption } from '@telegram-apps/telegram-ui/dist/components/Form/Multiselect/types'

function CreateProjectSecondStep() {
  const { setProjectVideo, totalSupply, setTotalSupply, tags, setTags, allowComments, setAllowComments } = useCreateProjectStore()
  const [isClient, setIsClient] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [successMessage, setSuccessMessage] = useState<string>('')

  const fileInputRef = useRef<HTMLInputElement>(null)

  const predefinedTags: MultiselectOption[] = [
    { label: 'Altcoin', value: 'altcoin' },
    { label: 'Memecoin', value: 'memecoin' },
    { label: 'Blockchain', value: 'blockchain' },
    { label: 'Crypto', value: 'crypto' },
    { label: 'NFT', value: 'nft' },
    { label: 'DeFi', value: 'defi' },
  ]

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleVideoUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const videoElement = document.createElement('video')
      videoElement.preload = 'metadata'

      videoElement.onloadedmetadata = () => {
        window.URL.revokeObjectURL(videoElement.src)
        if (videoElement.duration > 30) {
          setErrorMessage('El video no debe exceder los 30 segundos.')
          setSuccessMessage('')
        } else {
          setErrorMessage('')
          setSuccessMessage('Video uploaded successfully!')
          const reader = new FileReader()
          reader.onload = () => {
            if (typeof reader.result === 'string') {
              setProjectVideo(reader.result)
            }
          }
          reader.readAsDataURL(file)
          setTimeout(() => setSuccessMessage(''), 3000)
        }
      }
      videoElement.src = URL.createObjectURL(file)
    }
  }

  const handleTagChange = (selectedOptions: MultiselectOption[]) => {
    const newTags = selectedOptions.map((option) => option.value.toString())
    setTags(newTags)
  }

  const handleSectionClick = () => {
    fileInputRef.current?.click()
  }

  const handleTotalSupplyChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (value === '') {
      setTotalSupply(null)
    } else {
      const numberValue = Number(value)
      if (!isNaN(numberValue)) {
        setTotalSupply(numberValue)
      }
    }
  }

  if (!isClient) return null

  return (
    <AppRoot style={{ width: '100%' }} appearance="light">
      <form style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', gap: 16 }}>
        <section className={style.uploadSection} onClick={handleSectionClick} style={{ cursor: 'pointer' }}>
          <img src="/uploadVideo.svg" alt="Upload Video" />
          <p>Upload your video</p>
          <p>Max. 30 seconds</p>
          <input ref={fileInputRef} id="upload-video" type="file" accept="video/*" onChange={handleVideoUpload} style={{ display: 'none' }} />
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          {successMessage && <p style={{ color: 'green', textAlign: 'center' }}>{successMessage}</p>}
        </section>

        <section style={{ width: '100%' }}>
          <Input
            className={`${style.inputStyle} ${style.customInputPadding}`}
            status="focused"
            type="number"
            header="Price & token"
            placeholder="PEPE"
            value={totalSupply !== null ? totalSupply : ''}
            onChange={handleTotalSupplyChange}
            after={
              <Tappable Component="div" style={{ display: 'flex' }} onClick={() => setTotalSupply(null)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </Tappable>
            }
          />

          <Multiselect options={predefinedTags} value={tags.map((tag) => ({ label: tag, value: tag }))} onChange={handleTagChange} placeholder="Add tags..." />

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '16px', padding: '20px 22px 16px 22px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CommentsButtonIcon width="24" height="24" color="#000" />
              <p>Allow comments</p>
            </div>
            <Switch checked={allowComments} onChange={() => setAllowComments(!allowComments)} />
          </div>
        </section>
      </form>
    </AppRoot>
  )
}

export default CreateProjectSecondStep
