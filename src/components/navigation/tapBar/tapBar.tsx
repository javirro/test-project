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
import Link from 'next/link'
import { setCookie } from 'cookies-next/client'
import { useTapBarActionsStore } from '@/app/store/tapBarActionsStore'
import MuteButtonIcon from '@/images/buttons/components/muteButton'

function TapBar() {
  const { isMuted, setTriggerAction } = useTapBarActionsStore()
  const [activeIndex, setActiveIndex] = useState(0)
  const pathname = usePathname()
  const router = useRouter()
  const user = useTelegramUser()

  const handleButtonClick = (index: SetStateAction<number>) => {
    setActiveIndex(index)
    if (index === 0) {
    } else if (index === 1) {
    } else if (index === 2) {
      setCookie('sellStep', '1')
      setCookie('sendStep', '1')
      router.refresh()
    } else if (index === 3) {
    }
  }

  const isHome = pathname === '/'
  const isExplore = pathname === '/explore'
  const isWallet = pathname.startsWith('/wallet')

  return (
    <>
      {pathname === '/create-project' ? null : (
        <main className={styles.mainSelector}>
          {pathname.startsWith('/wallet') ? null : (
            <div className={`${styles.tapBarUserControl} animate-in`}>
              <TapBarButton Icon={isMuted ? MuteButtonIcon : VolumeButtonIcon} buttonType="sound" />
              <DislikeButton onPress={() => setTriggerAction('deny')} />
              <TapBarButton Icon={PauseButtonIcon} />
              <LikeButton onPress={() => setTriggerAction('approve')} />
              <TapBarButton Icon={StatisticsButtonIcon} />
            </div>
          )}
          <div className={styles.tapBar}>
            <Link href={'/'} className={styles.iconWrapper} onClick={() => handleButtonClick(0)}>
              <HomeButtonIcon color={isHome ? '#DAB223' : '#707579'} />
            </Link>
            <Link href={'/explore'} className={`${styles.iconWrapper} ${activeIndex === 1 ? styles.active : ''}`} onClick={() => handleButtonClick(1)}>
              <ExploreButtonIcon color={isExplore ? '#DAB223' : '#707579'} />
            </Link>
            <Link href="/create-project" prefetch={false} className={styles.addButtonWrapper}>
              <AddButton size={35} />
            </Link>
            <Link href={`/wallet/${user?.username}`} prefetch={false} className={styles.iconWrapper} onClick={() => handleButtonClick(2)}>
              <WalletButtonIcon width="35px" color={isWallet ? '#DAB223' : '#707579'} />
            </Link>
            <Link href="/profile" className={styles.iconWrapper} onClick={() => handleButtonClick(3)}>
              <div className={styles.profile}></div>
            </Link>
          </div>
        </main>
      )}
    </>
  )
}

export default TapBar
