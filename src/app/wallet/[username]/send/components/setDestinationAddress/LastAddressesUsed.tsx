'use client'

import CopyButtonIcon from '@/images/buttons/components/copyButton'
import style from './SetDestinationAddress.module.css'

interface LastAddressesUsedProps {
  setDestination: (value: string) => void
  lastUsedAddresses: string[]
}
const LastAddressesUsed = ({ setDestination, lastUsedAddresses }: LastAddressesUsedProps) => {
  return (
    <div className={style.lastAddressesBox}>
      <h4 className={style.title}>Last used addresses</h4>
      <ul className={style.list}>
        {lastUsedAddresses?.map((address, index) => (
          <li key={index} className={style.listItem} onClick={() => setDestination(address)}>
            <CopyButtonIcon width="28" height="28" color="#707579" />
            <span>{address?.slice(0,10)}...{address?.slice(-10)}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LastAddressesUsed
