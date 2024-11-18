import { LAMPORTS_PER_SOL } from '@solana/web3.js'

export const TOTAL_SUPPLY = 1000000000 // 1 billion
export const TOTAL_SUPPLY_TEXT = '1.00B'
// Lamport is the smallest unit of SOL. 1 SOL = 10^9 lamports
// In Solana network tokens have between 0 and 9 decimal places

export const convertFromLamportToSol = (lamportAmount: string): string => {
  const lamport = parseInt(lamportAmount)
  return (lamport / LAMPORTS_PER_SOL).toFixed(9)
}

export const convertFromSolToLamport = (solAmount: string): string => {
  const sol = parseFloat(solAmount)
  const value = sol * LAMPORTS_PER_SOL
  return value.toString()
}

export const functionalConversionLamportToSol = (lamportAmount: bigint): bigint => {
  return lamportAmount / BigInt(LAMPORTS_PER_SOL)
}

export const functionalConversionSolToLamport = (solAmount: bigint): bigint => {
  return solAmount * BigInt(LAMPORTS_PER_SOL)
}
