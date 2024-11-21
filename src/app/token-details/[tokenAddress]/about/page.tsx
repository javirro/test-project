import TokenDetailsNavBar from '@/components/navigation/tokenDetailsNavBar/TokenDetailsNavBar'
import About from './components/about/About'
import style from './page.module.css'
import CreatedBy from '../../components/createdBy/CreatedBy'
import { getAllProjectAddresses, getProjectByTokenAddress } from '@/dataFetching/projects/getProject'
import { Suspense } from 'react'

interface PageProps {
  params: Promise<{ tokenAddress: string }>
}

export const revalidate = 100 // 100seconds

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
  const { description, creationDate, creatorAddress } = projectInfo
  return (
    <section className={style.main}>
      <TokenDetailsNavBar />
      <About description={description} />
      <CreatedBy createdOn={creationDate} creatorAddress={creatorAddress} />
    </section>
  )
}
export default page
