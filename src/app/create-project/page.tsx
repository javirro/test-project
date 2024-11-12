'use client'

import { useState } from 'react'
import CreateProjectFirstStep from './components/CreateProjectFirstStep'
import CreateProjectSecondStep from './components/CreateProjectSecondStep'
import { useCreateProjectStore } from '../store/createProjectStore'
import style from './page.module.css'
import Toast from '@/components/status/Toast'
import { uploadVideoBasicUploadMethod } from '@/dataFetching/cloudfare/uploadVideo'

function Page() {
  const { projectName, tokenSymbol, projectDescription, videoOriginal } = useCreateProjectStore()

  const [step, setStep] = useState(0)
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  const getBackgroundColor = (index: number) => {
    return index <= step ? '#997312' : '#F4F4F7'
  }

  const handleNextClick = () => {
    if (!projectName || !tokenSymbol || !projectDescription) {
      setToastMessage('Por favor, completa todos los campos antes de continuar.')
      return
    }
    setStep(step + 1)
  }
  const handlePublish = async () => {}

  const handleNextPublish = async () => {
    if (step === 0) handleNextClick()
    else if (step === 1) await handlePublish()
  }
  return (
    <section style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
      <div className={style.stepViewer}>
        {[0, 1, 2].map((_, index) => (
          <div key={index} style={{ backgroundColor: getBackgroundColor(index) }}></div>
        ))}
      </div>
      {step === 0 && <CreateProjectFirstStep setToastMessage={setToastMessage} />}
      {step === 1 && <CreateProjectSecondStep />}

      {step === 0 && (
        <div className={style.nextButtonDiv}>
          <button className={style.nextButton} onClick={() => handleNextPublish()}>
            Next
          </button>
        </div>
      )}
      {step === 1 && (
        <form className={style.nextButtonDiv} >
          <button className={style.nextButton} onClick={() => uploadVideoBasicUploadMethod(videoOriginal as File)}>
            Publish now
          </button>
        </form>
      )}
      {toastMessage && <Toast text={toastMessage} />}
    </section>
  )
}

export default Page
