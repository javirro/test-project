import TokenDetailsNavBar from '@/components/navigation/tokenDetailsNavBar/TokenDetailsNavBar'
import About from './components/about/About'
import style from './page.module.css'
import CreatedBy from '../../components/createdBy/CreatedBy'
import { getAllProjectAddresses, getProjectByTokenAddress } from '@/dataFetching/projects/getProject'
import { Suspense } from 'react'
import { getUserImage } from '@/dataFetching/users/getUserImage'

interface PageProps {
  params: Promise<{ tokenAddress: string }>
}

export const revalidate = 100 // 100seconds

export const dynamicParams = true

export async function generateStaticParams() {
  const addresses = await getAllProjectAddresses()
  return addresses.map((ad) => ({
    tokenAddress: ad,
  }))
}

async function page({ params }: PageProps) {
  const resolvedParams = await params
  const tokenAddress = resolvedParams.tokenAddress

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AboutPage tokenAddress={tokenAddress} />
    </Suspense>
  )
}

const AboutPage = async ({ tokenAddress }: { tokenAddress: string }) => {
  const projectInfo = await getProjectByTokenAddress(tokenAddress)
  const { description, creationDate, creatorUsername } = projectInfo
    const creatorImage = await getUserImage(creatorUsername)
  return (
    <section className={style.main}>
      <TokenDetailsNavBar />
      <About description={description} />
      <CreatedBy createdOn={creationDate} creatorUsername={creatorUsername} creatorImage={creatorImage}/>
    </section>
  )
}
export default page
