import TokenDetailsNavBar from '@/components/navigation/tokenDetailsNavBar/TokenDetailsNavBar'
import About from './components/about/About'

import style from './page.module.css'
import CreatedBy from '../components/createdBy/CreatedBy'

function page() {
  return (
    <section className={style.main}>
      <TokenDetailsNavBar />
      <About />
      <CreatedBy />
    </section>
  )
}

export default page
