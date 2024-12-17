import style from './page.module.css'
import { cookies } from 'next/headers'
import { notFound } from 'next/navigation'
import { User } from '@/types/user'
import { Suspense } from 'react'
import SekeletonLoaderSend from '../send/components/skeletonLoader/SekeletonLoaderSend'
import { getUsersUsernames } from '@/dataFetching/users/getUsersUsername'
import { getTransactionsList } from '@/dataFetching/transactions/getTransactionsList'
import DynamicNoSSRAssetListActivity from './components/DynamicNoSSRAssetListActivity'

interface PageProps {
  params: Promise<{ username: string }>
}

export async function generateStaticParams() {
  const usernames = await getUsersUsernames()
  return usernames.map((u) => ({
    username: u,
  }))
}

export const revalidate = 3600 //revalidate each hour

async function page({ params }: PageProps) {
  const { username } = await params
  const cookiesStore = await cookies()
  const user: User | null = JSON.parse(cookiesStore.get('user')?.value as string) ?? null
  const token = cookiesStore.get('token')?.value

  if (!user || !token) notFound()
  return (
    <Suspense fallback={<SekeletonLoaderSend />}>
      <ActivityBody user={user} username={username} token={token} />
    </Suspense>
  )
}

export default page

const ActivityBody = async ({ user, token }: { user: User; username: string; token: string }) => {
  const transactions = await getTransactionsList(user, token)

  return (
    <section className={style.main}>
      <DynamicNoSSRAssetListActivity transactions={transactions} />
    </section>
  )
}
