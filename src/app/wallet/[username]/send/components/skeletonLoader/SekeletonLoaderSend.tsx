'use client'

import style from './sekeletonLoaderSend.module.css'

function SekeletonLoaderSend() {
  return (
    <div className={style.skeletonContainer}>
      <div className={style.searchBarSkeleton}></div>
      <div className={style.assetsSkeleton}>
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <div key={index} className={style.assetSkeleton}>
              <div className={style.assetImageSkeleton}></div>
              <div className={style.assetInfoSkeleton}>
                <div className={style.assetNameSkeleton}></div>
                <div className={style.assetAmountSkeleton}></div>
              </div>
              <div className={style.assetUsdSkeleton}></div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default SekeletonLoaderSend
