import AssetItemActivity from './AssetItemActivity'
import { TransactionData } from '@/types/transactions'
import style from './asset.module.css'
interface AssetsListActivityProps {
  transactions: TransactionData[]
}
function AssetsListActivity({ transactions }: AssetsListActivityProps) {
  const transactionsFormatted = transactions.map((tx) => {
    return {
      amount: tx.tokenMintAddress === "SOL" ? tx.solanaAmount as number: tx.tokenAmount,
      symbol: tx.tokenSymbol ?? "SOL",
      name: tx.tokenName ?? "Solana",
      type: tx.transactionType,
      address: tx.tokenMintAddress,
      projectImage: tx.image,
    }
  })
  
  return (
    <>
      <p className={style.text}>Today</p>
      {transactionsFormatted.map((asset, index) => (
        <AssetItemActivity key={index} tx={asset} />
      ))}
      <p className={style.text}>Nov 1, 2024</p>
      {transactionsFormatted.map((asset, index) => (
        <AssetItemActivity key={index} tx={asset} />
      ))}
    </>
  )
}

export default AssetsListActivity
