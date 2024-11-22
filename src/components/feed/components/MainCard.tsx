'use client'

import { Dispatch, SetStateAction, useState } from 'react'
import style from './mainCard.module.css'
import ProjectAvatar from '@/components/avatars/ProjectAvatar'
import PerformancePercentage from '@/components/status/performance/PerformancePercentage'
import CommentsButtonIcon from '@/images/buttons/components/commentsButton'
import HeartButtonIcon from '@/images/buttons/components/heartButton'
import Link from 'next/link'
import { animated, config, useSpring } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import { Stream } from '@cloudflare/stream-react'
import { Project } from '@/types/project'

interface MainCardProps {
  project: Project
  setIndexShowProject: Dispatch<SetStateAction<number>>
  totalProjects: number
}
function MainCard({ project, setIndexShowProject, totalProjects }: MainCardProps) {
  const [likeStatus, setLikeStatus] = useState<'yes' | 'no' | null>(null)
  const [{ x, rotate, scale }, api] = useSpring(() => ({
    x: 0,
    rotate: 0,
    scale: 1,
    config: config.stiff,
  }))

  const bind = useDrag(
    ({ movement: [mx], down, velocity: [vx], direction: [xDir], event }) => {
      if (typeof window === 'undefined') return
      if (typeof window.PointerEvent === 'undefined') return
      const pointerType = (event as PointerEvent).pointerType || ('ontouchstart' in window ? 'touch' : 'mouse')

      if (pointerType === 'mouse' && 'ontouchstart' in window) return
      const trigger = vx > 0.2 || Math.abs(mx) > 100

      setLikeStatus(mx > 0 ? 'yes' : mx < 0 ? 'no' : null)

      if (trigger && mx > 100) {
        setIndexShowProject((prev: number) => {
          return prev + 1 < totalProjects ? prev + 1 : 0
        })
      } else if (trigger && mx < -100) {
        setIndexShowProject((prev: number) => {
          return prev - 1 >= 0 ? prev - 1 : totalProjects - 1
        })
      }

      api.start({
        x: down ? mx : 0,
        rotate: down ? mx / 10 : 0,
        scale: down ? 0.95 : 1,
      })

      if (!down && trigger) {
        api.start({
          x: xDir > 0 ? 500 : -500,
          rotate: xDir > 0 ? 15 : -15,
        })
      } else if (!down && !trigger) {
        api.start({
          x: 0,
          rotate: 0,
          scale: 1,
        })
        setLikeStatus(null)
      }
    },
    {
      threshold: 10,
      pointer: { touch: true },
    }
  )

  return (
    <animated.section className={style.main} {...bind()} style={{ x, scale, rotate }}>
      <Link href={`/token-details/${project.tokenMintAddress}/overview`} className={style.frame}>
        <div className={style.avatarContainer}>
          <ProjectAvatar badget={true} />
          <div>
            <p className={style.mainText}>{project?.tokenName}</p>
            <p className={style.marketCapText}>Market Cap: 23.5k</p>
          </div>
        </div>
        <div className={style.priceContainer}>
          <p className={style.priceText}>$0.07851</p>
          <PerformancePercentage textColor="#fcfcfc" backgroundColor="#31D158" percentage="+ 8,8%" />
        </div>
      </Link>
      <section className={style.likeContainer}>
        <CommentsButtonIcon width="30" height="30" color="#FFFFFF" />
        <HeartButtonIcon width="30" height="30" color="#FFFFFF" />
      </section>
      <div className={style.videoContainer}>
        <Stream src={project.video} autoplay loop muted controls={false} height="100%" width="100%" />
        <div className={style.dragOverlay} {...bind()}></div>
      </div>

      {likeStatus === 'yes' && <img src="/yes.svg" alt="Yes" className={`${style.yes} ${style.visible}`} />}
      {likeStatus === 'no' && <img src="/no.svg" alt="No" className={`${style.no} ${style.visible}`} />}

      <div className={style.shadow}></div>
    </animated.section>
  )
}

export default MainCard
