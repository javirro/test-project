'use client'

import SortBy from './SortBy'
import { useState, useEffect, useRef } from 'react'

import style from './following.module.css'

const mockData = [
  {
    image: '/project_image.png',
    username: '@mercyCh',
    followers: '13',
  },
  {
    image: '/project_image.png',
    username: '@mercyCh',
    followers: '13',
  },
  {
    image: '/project_image.png',
    username: '@mercyCh',
    followers: '13',
  },
  {
    image: '/project_image.png',
    username: '@mercyCh',
    followers: '13',
  },
  {
    image: '/project_image.png',
    username: '@mercyCh',
    followers: '13',
  },
]

function Following() {
  const [showDropdown, setShowDropdown] = useState<boolean>(true)
  const [isAnimating, setIsAnimating] = useState<'animateIn' | 'animateOut' | ''>('')
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [mode, setMode] = useState('')

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
    <>
      <section className={style.main}>
        <div className={style.sortSection}>
          <p className={style.sortText}>Sort by</p>
          <button onClick={() => toggleDropdown()} className={style.buttonSort}>
            <img src="/sortButton.svg" alt="sort-button" />
          </button>
        </div>
        <div className={style.followingSection}>
          {mockData.map((user) => (
            <div className={style.followingUser} key={user.username}>
              <img className={style.followingImage} src={user.image} alt="user-profile img" />
              <div className={style.followingInfo}>
                <p className={style.followingUsername}>{user.username}</p>
                <p className={style.followingAmount}>{user.followers} followers</p>
              </div>
              <button className={style.unfollowButton}>Unfollow</button>
            </div>
          ))}
        </div>
        {showDropdown && (
          <div ref={dropdownRef}>
            <SortBy isAnimating={isAnimating} setIsAnimating={setIsAnimating} setMode={setMode} mode={mode} setShowDropdown={setShowDropdown} />
          </div>
        )}
      </section>
    </>
  )
}

export default Following
