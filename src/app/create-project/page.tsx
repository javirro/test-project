'use client'

import { useState } from 'react'
import CreateProjectFirstStep from './components/CreateProjectFirstStep'
import CreateProjectSecondStep from './components/CreateProjectSecondStep'
import { useCreateProjectStore } from '../store/createProjectStore'
import style from './page.module.css'
import Toast from '@/components/status/Toast'

function Page() {
  const { projectName, tokenSymbol, projectDescription, projectImage } = useCreateProjectStore()

  const [step, setStep] = useState(0)
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  const getBackgroundColor = (index: number) => {
    return index <= step ? '#997312' : '#F4F4F7)'
  }

  const handleNextClick = () => {
    if (!projectName || !tokenSymbol || !projectDescription) {
      setToastMessage('Por favor, completa todos los campos antes de continuar.')
      return
    }
    setStep(step + 1)
  }

  return (
    <section style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
      <div className={style.stepViewer}>
        {[0, 1, 2].map((_, index) => (
          <div key={index} style={{ backgroundColor: getBackgroundColor(index) }}></div>
        ))}
      </div>
      {step === 0 && <CreateProjectFirstStep />}
      {step === 1 && <CreateProjectSecondStep />}
      <div className={style.nextButtonDiv}>
        <button className={style.nextButton} onClick={() => handleNextClick()}>
          {step === 0 ? 'Next' : 'Publish now'}
        </button>
      </div>
      {toastMessage && <Toast text={toastMessage} />}
    </section>
  )
}

export default Page
