'use client'

import ProjectAvatar from '@/components/avatars/ProjectAvatar'
import PerformancePercentage from '@/components/status/performance/PerformancePercentage'
import style from './tokenDetails.module.css'
import Likes from './Likes'
import { Project } from '@/types/project'
import Favorites from './Favorites'
import { useState, useRef, useEffect } from 'react'
import CollectionsModal from '../collectionsModal/CollectionsModal'

function TokenDetails({ project, position, price }: { project: Project; position: number; price: number }) {
  const [showDropdown, setShowDropdown] = useState<boolean>(false)
  const [isAnimating, setIsAnimating] = useState<'animateIn' | 'animateOut' | ''>('')
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { tokenMintAddress, tokenName } = project

  const toggleDropdown = () => {
    if (!showDropdown) {
      setShowDropdown(true)
      setIsAnimating('animateIn')
    } else {
      setIsAnimating('animateOut')
      setTimeout(() => setShowDropdown(false), 300)
    }
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsAnimating('animateOut')
      setTimeout(() => setShowDropdown(false), 300)
    }
  }

  useEffect(() => {
    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showDropdown])

  return (
    <div style={{ display: 'flex', gap: '8px', justifyContent: 'space-between', alignItems: 'center', width: '100%', paddingTop: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <ProjectAvatar badget={false} />
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <p className={style.nameText}>{tokenName}</p>
            <span className={style.rankPosition}>#{position}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <p className={style.priceText}>${price?.toFixed(6)}</p>
            <PerformancePercentage textColor="#fcfcfc" backgroundColor="#31D158" percentage="+ 8,8%" fontSize="12px" />
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '16px' }}>
        <button onClick={() => toggleDropdown()} style={{ backgroundColor: 'transparent', border: 'none' }}>
          <Favorites tokenAddress={tokenMintAddress} />
        </button>
        <Likes tokenAddress={tokenMintAddress} />
        {/* <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', gap: '4px', justifyContent: 'center' }}>
          <div className={style.actionButtons}>
            <StarButtonIcon width="24" height="25" color="#707579" />
          </div>
          <p className={style.buttonsText}>12.4k </p>
        </div> */}
      </div>
      {showDropdown && (
        <div ref={dropdownRef}>
          <CollectionsModal isAnimating={isAnimating} setIsAnimating={setIsAnimating} setShowDropdown={setShowDropdown} />
        </div>
      )}
    </div>
  )
}

export default TokenDetails
