'use client'

import { Dispatch, SetStateAction, useState, useEffect } from 'react'
import style from './mainCard.module.css'
import ProjectAvatar from '@/components/avatars/ProjectAvatar'
import PerformancePercentage from '@/components/status/performance/PerformancePercentage'
import Link from 'next/link'
import { animated, useSpring } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import { Stream } from '@cloudflare/stream-react'
import { Project } from '@/types/project'
import LikeCommentButtons from './LikeCommentButtons/LikeCommentButtons'
import { useTapBarActionsStore } from '@/app/store/tapBarActionsStore'
import { useMainCardStore } from '@/app/store/mainCardStore'

interface MainCardProps {
  project: Project
  setIndexShowProject: Dispatch<SetStateAction<number>>
  totalProjects: number
  deactivated: boolean
}

function MainCard({ project, setIndexShowProject, totalProjects, deactivated }: MainCardProps) {
  const { nextProjectState, setNextProjectState } = useMainCardStore()
  const { isMuted, triggerAction, setTriggerAction } = useTapBarActionsStore()
  const [likeStatus, setLikeStatus] = useState<'yes' | 'no' | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const [{ x, rotate, scale }, api] = useSpring(() => ({
    x: 0,
    rotate: 0,
    scale: 1,
    config: { tension: 200, friction: 20 },
  }))

  const THRESHOLD = 300

  const bind = useDrag(
    ({ movement: [mx], down, velocity: [vx], direction: [xDir] }) => {
      if (isAnimating) return

      const trigger = Math.abs(mx) > THRESHOLD || vx > 0.15
      const isYes = mx > 0

      setLikeStatus(isYes ? 'yes' : mx < 0 ? 'no' : null)

      if (!down) {
        if (trigger) {
          api.start({
            x: xDir > 0 ? 500 : -500,
            rotate: xDir > 0 ? 20 : -20,
            scale: 1,
          })
          setNextProjectState(!nextProjectState)
          setIndexShowProject((prev) => (isYes ? (prev + 1 < totalProjects ? prev + 1 : 0) : prev - 1 >= 0 ? prev - 1 : totalProjects - 1))
        } else {
          api.start({ x: 0, rotate: 0, scale: 1 })
        }
        setLikeStatus(null)
      } else {
        api.start({ x: mx, rotate: mx / 10, scale: 0.95 })
      }
    },
    { threshold: 10, pointer: { touch: true } }
  )

  useEffect(() => {
    if (!triggerAction) return

    const isYes = triggerAction === 'approve'
    setLikeStatus(isYes ? 'yes' : 'no')
    setIsAnimating(true)

    api.start({
      x: isYes ? 500 : -500,
      rotate: isYes ? 20 : -20,
      scale: 1,
    })

    setTimeout(() => {
      setLikeStatus(null)
      setNextProjectState(!nextProjectState)
      setIndexShowProject((prev) => (isYes ? (prev + 1 < totalProjects ? prev + 1 : 0) : prev - 1 >= 0 ? prev - 1 : totalProjects - 1))
      setTriggerAction(null)
      setIsAnimating(false)
    }, 500)
  }, [triggerAction, api, setNextProjectState, setIndexShowProject, totalProjects, setTriggerAction])

  return (
    <>
      {deactivated ? (
        <div className={style.mainSecondProject}>
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
          <LikeCommentButtons tokenMintAddress={project.tokenMintAddress} />
          <div className={style.videoContainer}>
            <Stream src={project.video} autoplay loop muted controls={false} height="80%" width="100%" />
          </div>
          <div className={style.shadow}></div>
        </div>
      ) : (
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
          <LikeCommentButtons tokenMintAddress={project.tokenMintAddress} />
          <div className={style.videoContainer}>
            <Stream src={project.video} autoplay loop muted={isMuted} controls={false} height="80%" width="100%" />
          </div>

          {likeStatus === 'yes' && (
            <animated.img
              src="/yes.svg"
              alt="Yes"
              className={`${style.yes} ${style.visible}`}
              style={{
                opacity: x.to((xVal) => Math.min(Math.abs(xVal) / 100, 1)),
                transform: x.to((xVal) => `translateX(${xVal / 2}px)`),
              }}
            />
          )}
          {likeStatus === 'no' && (
            <animated.img
              src="/no.svg"
              alt="No"
              className={`${style.no} ${style.visible}`}
              style={{
                opacity: x.to((xVal) => Math.min(Math.abs(xVal) / 100, 1)),
                transform: x.to((xVal) => `translateX(${xVal / 2}px)`),
              }}
            />
          )}

          <div className={style.shadow}></div>
        </animated.section>
      )}
    </>
  )
}

export default MainCard
