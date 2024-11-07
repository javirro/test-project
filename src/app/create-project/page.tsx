'use client'

import { useState } from 'react'
import CreateProjectFirstStep from './components/CreateProjectFirstStep'
import CreateProjectSecondStep from './components/CreateProjectSecondStep'
import style from './page.module.css'

function Page() {
  const [step, setStep] = useState(0)

  const getBackgroundColor = (index: number) => {
    return index <= step ? '#997312' : '#F4F4F7)'
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
        <button className={style.nextButton} onClick={() => setStep(step + 1)}>
          Next
        </button>
      </div>
    </section>
  )
}

export default Page
