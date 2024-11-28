import style from './page.module.css'
import TransactionInformation from './components/transactionInformation/TransactionInformation'

function page() {
  return (
    <main className={style.main}>
      <p className={style.text}>Send</p>
      <TransactionInformation />
    </main>
  )
}

export default page
