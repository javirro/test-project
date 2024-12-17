import { useState, useEffect, useRef, ChangeEvent } from 'react'
import { useCreateProjectStore } from '@/app/store/createProjectStore'
import style from './CreateProjectSecondStep.module.css'

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

  const predefinedTags = ['Altcoin', 'Memecoin', 'Blockchain', 'Crypto', 'NFT', 'DeFi']

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

  const handleTagChange = (tag: string) => {
    if (tags.includes(tag)) {
      setTags(tags.filter((t) => t !== tag))
    } else {
      setTags([...tags, tag])
    }
  }

  const handleSectionClick = () => {
    fileInputRef.current?.click()
  }

  if (!isClient) return null

  return (
    <div style={{ width: '100%' }}>
      <form style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', gap: 16 }} className="animate-in">
        <section style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, padding: '12px' }}>
          <p className={style.text}>Upload Video</p>
          <div className={style.uploadSection} onClick={handleSectionClick}>
            <img src="/uploadVideo.svg" alt="Upload Video" style={{ maxWidth: '50px', marginBottom: '8px' }} />
            <p style={{ margin: 0, fontSize: '14px', color: '#777' }}>Max. 30 seconds</p>
          </div>
          <input ref={fileInputRef} id="upload-video" type="file" accept="video/*" onChange={handleVideoUpload} style={{ display: 'none' }} />

          {errorMessage && <p style={{ color: 'red', fontSize: '14px' }}>{errorMessage}</p>}
          {successMessage && <p style={{ color: 'green', fontSize: '14px' }}>{successMessage}</p>}
        </section>

        <section style={{ width: '100%', padding: '0 10px' }}>
          <p className={style.text}>Select Tags</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {predefinedTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => handleTagChange(tag)}
                style={{
                  padding: '8px 12px',
                  borderRadius: '16px',
                  border: `1px solid ${tags.includes(tag) ? '#007bff' : '#a2acb0'}`,
                  backgroundColor: tags.includes(tag) ? '#007bff' : '#f9f9f9',
                  color: tags.includes(tag) ? '#fff' : '#000',
                  cursor: 'pointer',
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </section>

        <section style={{ width: '100%', padding: '0 10px', marginTop: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <p
              style={{
                color: '#a2acb0',
                fontFamily: 'Borna',
                fontSize: '15px',
                fontWeight: 600,
                letterSpacing: '0.15px',
                margin: 0,
              }}
            >
              Allow comments
            </p>

            <label
              style={{
                display: 'inline-block',
                width: '48px',
                height: '24px',
                position: 'relative',
                cursor: 'pointer',
              }}
            >
              <input
                type="checkbox"
                checked={allowComments}
                onChange={() => setAllowComments(!allowComments)}
                style={{
                  display: 'none',
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: allowComments ? '#007bff' : '#ccc',
                  borderRadius: '24px',
                  transition: 'background-color 0.3s ease',
                }}
              ></span>
              <span
                style={{
                  position: 'absolute',
                  top: '2px',
                  left: allowComments ? '26px' : '2px',
                  width: '20px',
                  height: '20px',
                  backgroundColor: '#fff',
                  borderRadius: '50%',
                  transition: 'left 0.3s ease',
                  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
                }}
              ></span>
            </label>
          </div>
        </section>

        <section style={{ width: '100%', padding: '10px', textAlign: 'center' }}>
          <button
            type="button"
            onClick={() => setShowMoreOptions(!showMoreOptions)}
            style={{
              background: 'none',
              border: 'none',
              color: '#007bff',
              fontSize: '16px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 4,
            }}
          >
            {showMoreOptions ? 'Show less options' : 'Show more options'}
          </button>
        </section>

        {showMoreOptions && (
          <section style={{ width: '100%', padding: '10px', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
            {[
              { label: 'Discord', value: discord, setter: setDiscord },
              { label: 'Twitter', value: twitter, setter: setTwitter },
              { label: 'Telegram', value: telegram, setter: setTelegram },
              { label: 'Website', value: website, setter: setWebsite },
            ].map((field) => (
              <div key={field.label} style={{ width: '100%' }}>
                <label className={style.text}>{field.label}</label>
                <input
                  type="text"
                  value={field.value}
                  onChange={(e) => field.setter(e.target.value)}
                  placeholder={`Enter ${field.label}`}
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '8px',
                    border: '1px solid #a2acb0',
                    backgroundColor: '#fff',
                  }}
                />
                {field.value && (
                  <button
                    type="button"
                    onClick={() => field.setter('')}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      right: '10px',
                      transform: 'translateY(-50%)',
                      background: 'transparent',
                      border: 'none',
                      color: '#888',
                      fontSize: '16px',
                      cursor: 'pointer',
                    }}
                  >
                    ✖️
                  </button>
                )}
              </div>
            ))}
          </section>
        )}
      </form>
    </div>
  )
}

export default CreateProjectSecondStep
