'use client'

import style from './sekeletonLoaderWallet.module.css'

function SekeletonLoaderWallet() {
  return (
    <div className={style.skeletonContainer}>
      <div className={style.walletInfoSkeleton}>
        <div className={style.balanceSkeleton}></div>
        <div className={style.gainsSkeleton}></div>
      </div>

      <div className={style.assetsSectionSkeleton}>
        <div className={style.assetsHeaderSkeleton}></div>
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <div key={index} className={style.assetItemSkeleton}>
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

export default SekeletonLoaderWallet
