import { PublicKey } from '@solana/web3.js'

//* The token accounts are associated with specific tokenMintAddress.
//* These accounts are created by SPL Token program and owned by userWallet and they do not have private key.
//* TOKEN PROGRAM ID AND ASSOCIATED TOKEN PROGRAM ID ALWAYS THE SAME

export const getAssociatedTokenAccountAddress = async (tokenMintAddress: string, ownerUserWalletAddress: string): Promise<string> => {
  const TOKEN_PROGRAM_ID = new PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA')
  const ASSOCIATED_TOKEN_PROGRAM_ID = new PublicKey('ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL')
  const mint = new PublicKey(tokenMintAddress)
  const owner = new PublicKey(ownerUserWalletAddress)
  const associatedTokenAccountAddress = await PublicKey.findProgramAddressSync(
    [owner.toBuffer(), TOKEN_PROGRAM_ID.toBuffer(), mint.toBuffer()],
    ASSOCIATED_TOKEN_PROGRAM_ID
  )
  return associatedTokenAccountAddress[0].toBase58()
}
