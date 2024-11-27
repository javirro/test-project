import style from './transactionInformation.module.css'
import { getTokenImg } from '@/images/tokens'

function TransactionInformation() {
  return (
    <section className={style.main}>
      <div>
        <img src="/Avatar.svg" alt="" />
        <div>
          <p> 258,256.21 PEP</p>
          <div>
            <img src={getTokenImg('sol')} alt="" />
            <p>2,456 SOL</p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <p>To:</p>
          <div>
            <p>Address 1</p>
            <p>dfkeb222...id23</p>
          </div>
        </div>
        <div>
          <p>Network:</p>
          <p>Solana</p>
        </div>
        <div>
          <p>Network Fee:</p>
          <div>
            <p>1.55 PEP</p>
            <p>0.03 SOL</p>
          </div>
        </div>
        <hr />
        <div>
          <p>Total:</p>
          <p>$ 457.00</p>
        </div>
      </div>
    </section>
  )
}

export default TransactionInformation
