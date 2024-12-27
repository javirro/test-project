'use client'

import AssetItemActivity from './AssetItemActivity'
import { TransactionData } from '@/types/transactions'
import style from './asset.module.css'
export interface AssetsListActivityProps {
  transactions: TransactionData[]
}
function AssetsListActivity({ transactions }: AssetsListActivityProps) {
  const newDate = new Date()
  const oneDayAgoTimestamp = Math.floor(newDate.setDate(newDate.getDate() - 1) / 1000)
  const oneWeekAgoTimestamp = Math.floor(newDate.setDate(newDate.getDate() - 7) / 1000)
  const transactionsFormatted = transactions.map((tx) => {
    return {
      amount: tx.tokenMintAddress === 'SOL' ? (tx.solanaAmount as number) : +tx.tokenAmount,
      symbol: tx.tokenSymbol ?? 'SOL',
      name: tx.tokenName ?? 'Solana',
      type: tx.transactionType,
      address: tx.tokenMintAddress,
      projectImage: tx.image,
      timestamp: tx.transactionDate,
    }
  })
  const todayTxs = transactionsFormatted.filter((tx) => tx.timestamp > oneDayAgoTimestamp)
  const lastWeekTxs = transactionsFormatted.filter((tx) => tx.timestamp > oneWeekAgoTimestamp && tx.timestamp < oneDayAgoTimestamp)

  return (
    <>
      {todayTxs?.length > 0 && <p className={style.text}>Last 24 hours</p>}
      {todayTxs.map((asset, index) => (
        <AssetItemActivity key={index} tx={asset} />
      ))}
      {lastWeekTxs.length > 0 && <p className={style.text}>Last week</p>}
      {lastWeekTxs?.map((asset, index) => (
        <AssetItemActivity key={index} tx={asset} />
      ))}
    </>
  )
}

export default AssetsListActivity
