import style from '../page.module.css'
import AmountInformation from './amountInformation/AmountInformation'
import Keyboard from './keyboard/Keyboard'
import SelectAmount from './selectAmount/SelectAmount'

const AmountSelection = () => {
  //TODO: Manage amount input
  return (
    <main className={style.amountMain}>
      <AmountInformation />
      <SelectAmount />
      <Keyboard />
    </main>
  )
}

export default AmountSelection
