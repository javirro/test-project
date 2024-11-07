import { useState, SetStateAction } from 'react'
import style from './segmentedCustom.module.css'

function SegmentedCustom() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleButtonClick = (index: SetStateAction<number>) => {
    setActiveIndex(index)
  }

  return (
    <section className={style.segmentedCustom}>
      <button
        onClick={() => handleButtonClick(0)}
        className={`${activeIndex === 0 ? style.buttonActive : style.buttonInactive} ${style.buttonLeft}`}
      >
        For you
      </button>
      <button
        onClick={() => handleButtonClick(1)}
        className={`${activeIndex === 1 ? style.buttonActive : style.buttonInactive} ${style.buttonRight}`}
      >
        Watchlist
      </button>
    </section>
  )
}

export default SegmentedCustom
