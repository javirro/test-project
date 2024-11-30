import style from './page.module.css'
import AssetsList from '../components/Asset/AssetsList'
import { getUsersUsernames } from '@/dataFetching/users/getUsersUsername'
import { assets } from '@/utils/fakeAssetsList'

interface PageProps {
  params: Promise<{ username: string }>
}

export const revalidate = 30 // 100seconds

export const dynamicParams = true

export async function generateStaticParams(): Promise<{ username: string }[]> {
  const usernames = await getUsersUsernames()
  const params = usernames.map((username) => ({ username }))
  return params
}

async function page({ params }: PageProps) {
  const { username } = await params

  return (
    <section className={style.main}>
      <p className={style.text}>Today</p>
      <AssetsList asset={assets} solBalance={"0"} solPrice={250} username={username}/>
      <p className={style.text}>Nov 1, 2024</p>
      <AssetsList asset={assets}  solBalance={"0"} solPrice={250} username={username}/>
      Activity section: {username}
    </section>
  )
}

export default page
