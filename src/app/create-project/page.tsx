'use client'

import { useState, useTransition } from 'react'
import CreateProjectFirstStep from './components/CreateProjectFirstStep'
import CreateProjectSecondStep from './components/CreateProjectSecondStep'
import { useCreateProjectStore } from '../store/createProjectStore'
import style from './page.module.css'
import Toast from '@/components/status/Toast'
import { ProjectForm } from '@/types/project'
import { createProject } from '@/dataFetching/projects/createProject'
import base64Utils from '@/utils/base64Utils'
import useUser from '@/hooks/useUser'
import { revalidateHome, revalidateProjectDetails } from '@/dataFetching/revalidatePath/revaliteCreateUser'
import { useToastStore } from '../store/toastStore'

function Page() {
  const { user, token } = useUser()
  const { projectName, tokenSymbol, projectDescription, videoOriginal, tags, allowComments, projectImage, discord, telegram, twitter, website, nsfw } =
    useCreateProjectStore()
  const { setToastType, setToastMessage } = useToastStore()
  const [step, setStep] = useState(0)

  const [isPending, startTransition] = useTransition()

  const getBackgroundColor = (index: number) => {
    return index <= step ? '#997312' : '#F4F4F7'
  }

  const handleNextClick = () => {
    if (!projectName || !tokenSymbol || !projectDescription || !projectImage) {
      setToastMessage('Por favor, completa todos los campos antes de continuar.')
      setToastType('error')
      return
    }
    setStep(step + 1)
  }

  const handlePublish = async () => {
    startTransition(async () => {
      try {
        const base64video = await base64Utils.convertVideoToBase64(videoOriginal as File)
        const data: ProjectForm = {
          description: projectDescription,
          tokenName: projectName,
          tokenSymbol: tokenSymbol,
          video: base64video,
          tags,
          allowComments,
          creatorUsername: user?.username as string,
          image: projectImage,
          nsfw,
          discord,
          twitter,
          website,
          telegram,
        }
        setToastMessage(`Creating ${projectName}...`)
        setToastType('loading')
        await createProject(data, token as string)
        revalidateProjectDetails()
        revalidateHome()
        setToastMessage(`${projectName} created successfully!`)
        setToastType('success')
      } catch (error) {
        console.error('Error creating project', error)
        setToastMessage('Error al publicar el proyecto')
        setToastType('error')
      }
    })
  }

  const handleNextPublish = async () => {
    if (step === 0) handleNextClick()
    else if (step === 1) await handlePublish()
  }

  const disableCondition: boolean = step === 0 ? !projectName || !tokenSymbol || !projectDescription || !projectImage : !videoOriginal || isPending
  let btnText = 'Next'
  if (step === 1 && !isPending) {
    btnText = 'Publish now'
  } else if (step === 1 && isPending) {
    btnText = 'Publishing...'
  }

  return (
    <section
      style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', marginTop: '80px', position: 'relative' }}
      className="animate-in"
    >
      <div className={style.stepViewer}>
        {[0, 1, 2].map((_, index) => (
          <div key={index} style={{ backgroundColor: getBackgroundColor(index) }}></div>
        ))}
      </div>
      {step === 0 && <CreateProjectFirstStep setToastMessage={setToastMessage} setToastType={setToastType} />}
      {step === 1 && <CreateProjectSecondStep />}

      <div className={style.nextButtonDiv}>
        <button className={style.nextButton} onClick={() => handleNextPublish()} disabled={disableCondition}>
          {btnText}
        </button>
      </div>
      <Toast />
    </section>
  )
}

export default Page
