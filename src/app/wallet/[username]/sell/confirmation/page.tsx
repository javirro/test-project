import style from './page.module.css'
import TransactionConfirmation from './components/transactionConfirmation/TransactionConfirmation'
import Link from 'next/link'

function page() {
  const username = 'username'

  return (
    <main className={style.main}>
      <p className={style.text}>Just sold!</p>
      <TransactionConfirmation />
      <div className={style.nextButtonDiv}>
        <Link href={`/wallet/${username}`} className={style.nextButton}>
          Back to wallet
        </Link>
      </div>
    </main>
  )
}

export default page
