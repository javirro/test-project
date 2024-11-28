import AmountInformation from './components/amountInformation/AmountInformation'
import SelectAmount from './components/selectAmount/SelectAmount'
import Keyboard from './components/keyboard/Keyboard'
import style from './page.module.css'

function page() {
  return (
    <main className={style.main}>
      <AmountInformation />
      <SelectAmount />
      <Keyboard />
    </main>
  )
}

export default page
