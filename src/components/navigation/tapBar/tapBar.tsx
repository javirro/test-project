'use client'

import AddButton from './components/AddButton'
import ExploreButtonIcon from '@/images/tapBar/components/exploreButton'
import HomeButtonIcon from '@/images/tapBar/components/homeButton'
import WalletButtonIcon from '@/images/tapBar/components/walletButton'
import styles from './tapBar.module.css'
import { SetStateAction, useState } from 'react'
import TapBarButton from '@/components/buttons/tapBarButton/TapBarButton'
import VolumeButtonIcon from '@/images/tapBar/components/volumeButton'
import StatisticsButtonIcon from '@/images/tapBar/components/statisticsButton'
import PauseButtonIcon from '@/images/tapBar/components/pauseButton'
import LikeButton from '@/components/buttons/likeButton/LikeButton'
import DislikeButton from '@/components/buttons/dislikeButton/DislikeButton'
import { usePathname, useRouter } from 'next/navigation'
import useTelegramUser from '@/hooks/useTelegramUser'

function TapBar() {
  const [activeIndex, setActiveIndex] = useState(0)
  const pathname = usePathname()
  const router = useRouter()
  const user = useTelegramUser()
  console.log('tapbarUser', user)

  const handleButtonClick = (index: SetStateAction<number>) => {
    setActiveIndex(index)
    if (index === 0) {
      router.push('/')
    } else if (index === 1) {
      router.push('/explore')
    } else if (index === 2) {
      router.push(`/wallet/${user?.username}`)
    } else if (index === 3) {
      router.push('/profile')
    }
  }

  const handleOnPressButton = (index: number) => {
    if (index === 0) {
      router.push('/create-project')
    }
  }

  return (
    <>
      {pathname === '/create-project' ? null : (
        <main className={styles.mainSelector}>
          {pathname.startsWith('/wallet') ? null : (
            <div className={styles.tapBarUserControl}>
              <TapBarButton Icon={VolumeButtonIcon} />
              <DislikeButton />
              <TapBarButton Icon={PauseButtonIcon} />
              <LikeButton />
              <TapBarButton Icon={StatisticsButtonIcon} />
            </div>
          )}
          <div className={styles.tapBar}>
            <div className={styles.iconWrapper} onClick={() => handleButtonClick(0)}>
              <HomeButtonIcon color={activeIndex === 0 ? '#DAB223' : '#707579'} />
              <span className={styles.iconLabel}>{activeIndex === 0 ? <div className={styles.buttonSelected}></div> : 'Home'}</span>
            </div>
            <div className={`${styles.iconWrapper} ${activeIndex === 1 ? styles.active : ''}`} onClick={() => handleButtonClick(1)}>
              <ExploreButtonIcon color={activeIndex === 1 ? '#DAB223' : '#707579'} />
              <span className={styles.iconLabel}>{activeIndex === 1 ? <div className={styles.buttonSelected}></div> : 'Explore'}</span>
            </div>
            <div className={styles.addButtonWrapper}>
              <AddButton onPress={() => handleOnPressButton(0)} size={35} />
            </div>
            <div className={styles.iconWrapper} onClick={() => handleButtonClick(2)}>
              <WalletButtonIcon color={activeIndex === 2 ? '#DAB223' : '#707579'} />
              <span className={styles.iconLabel}>{activeIndex === 2 ? <div className={styles.buttonSelected}></div> : 'Wallet'}</span>
            </div>
            <div className={styles.iconWrapper} onClick={() => handleButtonClick(3)}>
              <div className={styles.profile}></div>
              <span className={styles.iconLabel}>{activeIndex === 3 ? <div className={styles.buttonSelected}></div> : 'Profile'}</span>
            </div>
          </div>
        </main>
      )}
    </>
  )
}

export default TapBar
