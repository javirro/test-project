import { Asset } from '@/types/assetsList'
import style from '../page.module.css'
import SelectAmount from './selectAmount/SelectAmount'
import AmountInformation from '../../send/amount/amountInformation/AmountInformation'
import NextButton from '../../send/amount/nextButton/NextButton'
import Keyboard from '../../send/amount/keyboard/Keyboard'

const AmountSelection = ({ balanceList }: { balanceList: Asset[] }) => {
  return (
    <main className={style.amountMain}>
      <AmountInformation balanceList={balanceList} />
      <SelectAmount balanceList={balanceList}/>
      <NextButton />
      <Keyboard />
    </main>
  )
}

export default AmountSelection
