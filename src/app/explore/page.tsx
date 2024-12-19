import style from './explore.module.css'
import CardFrame from './components/cardFrame/CardFrame'
import ExploreNewCrypto from './components/exploreNewCrypto/ExploreNewCrypto'
const ExplorePage = async () => {
  return (
    <main className={style.main}>
      <CardFrame />
      <ExploreNewCrypto />
    </main>
  )
}

export default ExplorePage
