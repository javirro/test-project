import style from './explore.module.css'
import CardFrame from './components/cardFrame/CardFrame'
import ExploreNewCrypto from './components/exploreNewCrypto/ExploreNewCrypto'
import { Suspense } from 'react'
import CardFrameSkeleton from './components/cardFrame/CardFrameSkeleton'
const ExplorePage = () => {
  return (
    <main className={style.main}>
      <Suspense fallback={<CardFrameSkeleton />}>
        <CardFrame />
      </Suspense>
      <ExploreNewCrypto />
    </main>
  )
}

export default ExplorePage
