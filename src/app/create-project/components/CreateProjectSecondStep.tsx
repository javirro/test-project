import { useState, useEffect, ChangeEvent, useRef } from 'react'
import { AppRoot, Input, Tappable, Switch } from '@telegram-apps/telegram-ui'
import { useCreateProjectStore } from '@/app/store/createProjectStore'
import CommentsButtonIcon from '@/images/buttons/components/commentsButton'
import { Multiselect } from '@telegram-apps/telegram-ui'
import ArrowDownButtonIcon from '@/images/status/components/arrowDown'
import ArrowUpButtonIcon from '@/images/status/components/arrowUp'
import { MultiselectOption } from '@telegram-apps/telegram-ui/dist/components/Form/Multiselect/types'

import style from './CreateProjectSecondStep.module.css'
import '@telegram-apps/telegram-ui/dist/styles.css'

function CreateProjectSecondStep() {
  const {
    setVideoOriginal,
    setProjectVideo,
    tags,
    setTags,
    allowComments,
    setAllowComments,
    discord,
    setDiscord,
    twitter,
    setTwitter,
    website,
    setWebsite,
    telegram,
    setTelegram,
  } = useCreateProjectStore()
  const [isClient, setIsClient] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [successMessage, setSuccessMessage] = useState<string>('')
  const [showMoreOptions, setShowMoreOptions] = useState<boolean>(false)

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
      setVideoOriginal(file)
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
          <Multiselect options={predefinedTags} value={tags.map((tag) => ({ label: tag, value: tag }))} onChange={handleTagChange} placeholder="Add tags..." />

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '16px', padding: '20px 22px 16px 22px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CommentsButtonIcon width="24" height="24" color="#000" />
              <p>Allow comments</p>
            </div>
            <Switch checked={allowComments} onChange={() => setAllowComments(!allowComments)} />
          </div>
        </section>
        <section style={{ width: '100%', marginLeft: '50px' }}>
          <button className={style.showMoreOptionsButton} type="button" onClick={() => setShowMoreOptions(!showMoreOptions)}>
            {showMoreOptions ? 'Show less options' : 'Show more options'}
            {showMoreOptions ? <ArrowUpButtonIcon width="15" height="15" color="#000" /> : <ArrowDownButtonIcon width="15" height="15" color="#000" />}
          </button>
        </section>
        <section className={`${style.socialMediaSection} ${showMoreOptions ? style.expand : style.collapse}`} style={{ width: '100%', marginBottom: '140px' }}>
          <Input
            className={`${style.inputStyle} ${style.customInputPadding}`}
            header="Discord"
            placeholder="PEPE"
            value={discord}
            onChange={(e) => setDiscord(e.target.value)}
            after={
              <Tappable Component="div" style={{ display: 'flex' }} onClick={() => setDiscord('')}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Tappable>
            }
          />
          <Input
            className={`${style.inputStyle} ${style.customInputPadding}`}
            header="Twitter"
            placeholder="PEPE"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
            after={
              <Tappable Component="div" style={{ display: 'flex' }} onClick={() => setTwitter('')}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Tappable>
            }
          />
          <Input
            className={`${style.inputStyle} ${style.customInputPadding}`}
            header="Telegram"
            placeholder="PEPE"
            value={telegram}
            onChange={(e) => setTelegram(e.target.value)}
            after={
              <Tappable Component="div" style={{ display: 'flex' }} onClick={() => setTelegram('')}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Tappable>
            }
          />
          <Input
            className={`${style.inputStyle} ${style.customInputPadding}`}
            header="Website"
            placeholder="PEPE"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            after={
              <Tappable Component="div" style={{ display: 'flex' }} onClick={() => setWebsite('')}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Tappable>
            }
          />
        </section>
      </form>
    </AppRoot>
  )
}

export default CreateProjectSecondStep
