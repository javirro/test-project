import { useState } from 'react'
import { useSpring, animated, config } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import style from './mainCard.module.css'
import ProjectAvatar from '@/components/avatars/ProjectAvatar'
import PerformancePercentage from '@/components/status/performance/PerformancePercentage'
import CommentsButtonIcon from '@/images/buttons/components/commentsButton'
import HeartButtonIcon from '@/images/buttons/components/heartButton'

function MainCard() {
  const [likeStatus, setLikeStatus] = useState<string | null>(null)

  const [{ x, rotate, scale }, api] = useSpring(() => ({
    x: 0,
    rotate: 0,
    scale: 1,
    config: config.stiff,
  }))

  const bind = useDrag(
    ({ movement: [mx], down, velocity: [vx], direction: [xDir], event }) => {
      const pointerType = (event as PointerEvent).pointerType || ('ontouchstart' in window ? 'touch' : 'mouse')

      if (pointerType === 'mouse' && 'ontouchstart' in window) return

      const trigger = vx > 0.2 || Math.abs(mx) > 100

      setLikeStatus(mx > 0 ? 'yes' : mx < 0 ? 'no' : null)

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
      <section className={style.frame}>
        <div className={style.avatarContainer}>
          <ProjectAvatar badget={true} />
          <div>
            <p className={style.mainText}>Pepe</p>
            <p className={style.marketCapText}>Market Cap: 23.5k</p>
          </div>
        </div>
        <div className={style.priceContainer}>
          <p className={style.priceText}>$0.07851</p>
          <PerformancePercentage textColor="#fcfcfc" backgroundColor="#31D158" percentage="+ 8,8%" />
        </div>
      </section>
      <section className={style.likeContainer}>
        <CommentsButtonIcon width="30" height="30" color="#FFFFFF" />
        <HeartButtonIcon width="30" height="30" color="#FFFFFF" />
      </section>
      <img src="/project.png" alt="Main Card" className={style.img} />

      {likeStatus === 'yes' && <img src="/yes.svg" alt="Yes" className={`${style.yes} ${style.visible}`} />}
      {likeStatus === 'no' && <img src="/no.svg" alt="No" className={`${style.no} ${style.visible}`} />}

      <div className={style.shadow}></div>
    </animated.section>
  )
}

export default MainCard
