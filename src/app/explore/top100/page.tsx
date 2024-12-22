import style from './top100.module.css'
import Header from './components/header/Header'
import LeaderBoard from './components/leaderBoard/LeaderBoard'
import { Suspense } from 'react'

function page() {
  return (
    <main className={style.main}>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <LeaderBoard />
      </Suspense>
    </main>
  )
}

export default page
