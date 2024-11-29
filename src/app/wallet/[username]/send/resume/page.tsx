import style from './page.module.css'
import TransactionInformation from './components/transactionInformation/TransactionInformation'
import SwipeBar from '@/components/navigation/tapBar/variants/SwipeBar'

function page() {
  return (
    <main className={style.main}>
      <p className={style.text}>Send</p>
      <TransactionInformation />
      <SwipeBar />
    </main>
  )
}

export default page
