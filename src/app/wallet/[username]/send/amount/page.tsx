import AmountInformation from './components/amountInformation/AmountInformation'
import SelectAmount from './components/selectAmount/SelectAmount'
import Keyboard from './components/keyboard/Keyboard'
import style from './page.module.css'
import NextButton from './components/nextButton/NextButton'

function page() {
  return (
    <main className={style.main}>
      <AmountInformation />
      <SelectAmount />
      <NextButton />
      <Keyboard />
    </main>
  )
}

export default page
