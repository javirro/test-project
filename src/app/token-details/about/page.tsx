import TokenDetailsNavBar from '@/components/navigation/tokenDetailsNavBar/TokenDetailsNavBar'
import About from './components/about/About'
import CreatedBy from '../overview/components/createdBy/CreatedBy'
import style from './page.module.css'

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
