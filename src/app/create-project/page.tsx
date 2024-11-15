'use client'

import { useState, useTransition } from 'react'
import CreateProjectFirstStep from './components/CreateProjectFirstStep'
import CreateProjectSecondStep from './components/CreateProjectSecondStep'
import { useCreateProjectStore } from '../store/createProjectStore'
import style from './page.module.css'
import Toast from '@/components/status/Toast'
import { uploadVideoBasicUploadMethod } from '@/dataFetching/cloudfare/uploadVideo'
import { ProjectForm } from '@/types/project'
import { createProject } from '@/dataFetching/projects/createProject'

function Page() {
  const creatorAddress = '0x1234567890123456789012345678901234567890'
  const { projectName, tokenSymbol, projectDescription, videoOriginal, tags, allowComments, projectImage, discord, telegram, twitter, website, nsfw } =
    useCreateProjectStore()

  const [step, setStep] = useState(1)
  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  const getBackgroundColor = (index: number) => {
    return index <= step ? '#997312' : '#F4F4F7'
  }

  const handleNextClick = () => {
    if (!projectName || !tokenSymbol || !projectDescription || !projectImage) {
      setToastMessage('Por favor, completa todos los campos antes de continuar.')
      return
    }
    setStep(step + 1)
  }
  const handlePublish = async () => {
    startTransition(async () => {
      await uploadVideoBasicUploadMethod(videoOriginal as File)

      try {
        const data: ProjectForm = {
          description: projectDescription,
          tokenName: projectName,
          tokenSymbol: tokenSymbol,
          video: 'https://cloudflare.com',
          tags,
          allowComments,
          creatorAddress,
          image: projectImage,
          nsfw,
          discord,
          twitter,
          website,
          telegram,
        }
        await createProject(data)
      } catch (error) {
        console.error('Error creating project', error)
        setToastMessage('Error al publicar el proyecto')
      }
    })
  }

  const handleNextPublish = async () => {
    if (step === 0) handleNextClick()
    else if (step === 1) await handlePublish()
  }
  return (
    <section style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', marginTop: '80px' }}>
      <div className={style.stepViewer}>
        {[0, 1, 2].map((_, index) => (
          <div key={index} style={{ backgroundColor: getBackgroundColor(index) }}></div>
        ))}
      </div>
      {step === 0 && <CreateProjectFirstStep setToastMessage={setToastMessage} />}
      {step === 1 && <CreateProjectSecondStep />}

      <div className={style.nextButtonDiv}>
        <button className={style.nextButton} onClick={() => handleNextPublish()} disabled={isPending}>
          {step === 0 ? 'Next' : 'Publish now'}
        </button>
      </div>
      {toastMessage && <Toast text={toastMessage} />}
    </section>
  )
}

export default Page
