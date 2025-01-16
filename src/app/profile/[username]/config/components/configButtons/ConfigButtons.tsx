'use client'

import Link from 'next/link'
import ArrowRightButtonIcon from '@/images/buttons/components/arrowRightButton'

import style from './configButtons.module.css'

interface ConfigButtonsProps {
  username: string
}

const configButtons = [
  {
    image: '/shield.svg',
    name: 'Security & privacity',
  },
  {
    image: '/settings.svg',
    name: 'Preferences',
  },
]

function ConfigButtons({ username }: ConfigButtonsProps) {
  return (
    <div className={style.content}>
      {configButtons.map((button) => (
        <Link href={`/profile/${username}/config/security`} key={button.name} className={style.buttonContent}>
          <img className={style.buttonImage} src={button.image} alt={button.name} />
          <p className={style.buttonText}>{button.name}</p>
          <ArrowRightButtonIcon color="#707579" width="16px" height="16px" />
        </Link>
      ))}
    </div>
  )
}

export default ConfigButtons
