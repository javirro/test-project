import { clusterApiUrl, Connection, PublicKey } from '@solana/web3.js'
import { Account, getAccount, getAssociatedTokenAddress } from '@solana/spl-token'
import { convertFromLamportToSol } from './lamportSolConverter'

export const SOLANA_RPC_URL = process.env.NEXT_PUBLIC_QUICKNODE_RPC as string
export interface SolanaBalance {
  lamportSolBalance: string
  solBalance: string
}

export interface TokenBalance {
  lamportTokenBalance: bigint
  tokenBalance: string
}

export const getSolanaBalance = async (userWalletAddress: string): Promise<{ lamportSolBalance: string; solBalance: string }> => {
  const connection = new Connection(SOLANA_RPC_URL)
  const publicKey = new PublicKey(userWalletAddress)
  const lamportSolBalance = await connection.getBalance(publicKey)
  const solBalance = convertFromLamportToSol(lamportSolBalance.toString())
  return { solBalance, lamportSolBalance: lamportSolBalance.toString() }
}


//* The token accounts are associated with specific tokenMintAddress. These accounts are created and owned by the SPL Token program.
//* Token accounts are controlled by the user wallet addresses. For that reason, is possible to have several token accounts associated with a single wallet address. 
export const getTokenBalance = async (userWalletAddress: string, tokenMintAddress: string): Promise<TokenBalance> => {
  const connection = new Connection(clusterApiUrl('mainnet-beta'), 'confirmed')
  const walletPublicKey = new PublicKey(userWalletAddress)
  const tokenMintPublicKey = new PublicKey(tokenMintAddress)

  // Get the associated token account address for the wallet and token
  const allowOwnerOffCurve = true
  const tokenAccountAddress = await getAssociatedTokenAddress(tokenMintPublicKey, walletPublicKey, allowOwnerOffCurve)
  try {
    const tokenAccountInfo: Account = await getAccount(connection, tokenAccountAddress)

    // Balance is in the smallest unit. In this case all tokens have 9 decimal places.
    const lamportTokenBalance: bigint = tokenAccountInfo.amount
    const tokenBalance: string = convertFromLamportToSol(lamportTokenBalance.toString())
    return { lamportTokenBalance, tokenBalance }
  } catch (error) {
    console.error(`Error fetching balance for token ${tokenMintAddress}`, error)
    return { lamportTokenBalance: BigInt(0), tokenBalance: "0" }
  }
}
