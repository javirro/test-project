import { useState } from "react"
import style from './ForYouWatchListTabs.module.css'

const ForYouWatchListTabs = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const handleButtonClick = (index: number) => setActiveIndex(index)
  return(
    <div className={style.segmentedCustom}>
    <button onClick={() => handleButtonClick(0)} className={`${activeIndex === 0 ? style.buttonActive : style.buttonInactive} ${style.buttonLeft}`}>
      For you
    </button>
    <button onClick={() => handleButtonClick(1)} className={`${activeIndex === 1 ? style.buttonActive : style.buttonInactive} ${style.buttonRight}`}>
      Watchlist
    </button>
  </div>
  )
}

export default ForYouWatchListTabs