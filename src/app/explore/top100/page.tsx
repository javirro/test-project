import style from './top100.module.css'
import Header from './components/header/Header'
import LeaderBoard from './components/leaderBoard/LeaderBoard'

function page() {
  return (
    <main className={style.main}>
      <Header />
      <LeaderBoard />
    </main>
  )
}

export default page
