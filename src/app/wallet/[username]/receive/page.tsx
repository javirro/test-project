import { getUsersUsernames } from '@/dataFetching/users/getUsersUsername'
import style from './receive.module.css'
import { cookies } from 'next/headers'
import { notFound } from 'next/navigation'
import { User } from '@/types/user'
import { getUserWalletQr } from '@/dataFetching/users/getUserWalletQr'
interface PageProps {
  params: Promise<{ username: string }>
}

export async function generateStaticParams() {
  const usernames = await getUsersUsernames()
  return usernames.map((u) => ({
    username: u,
  }))
}

const Receive = async ({ params }: PageProps) => {
  const { username } = await params
  const cookiesStore = await cookies()
  const user: User | null = JSON.parse(cookiesStore.get('user')?.value as string) ?? null
  const token = cookiesStore.get('token')?.value
  if (!user || !token) notFound()
  const qr = await getUserWalletQr(user.username, token, user.telegramId)
  const defaultQr = '/solanaQr.png'
  const qrWithBase64 = qr ? `data:image/png;base64,${qr}` : defaultQr

  console.log(username)

  return (
    <section className={style.main}>
      <img style={{ width: '20vh' }} src={qrWithBase64} alt="qr code for solana wallet" />
      <p className={style.mainText}>Your Solana Address</p>
      <p className={style.secondaryText}>Use this address to receive tokens and collectibles on Solana</p>
      {/* Receive section: {username} */}
    </section>
  )
}

export default Receive
