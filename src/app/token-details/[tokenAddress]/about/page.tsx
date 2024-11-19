import TokenDetailsNavBar from '@/components/navigation/tokenDetailsNavBar/TokenDetailsNavBar'
import About from './components/about/About'
import style from './page.module.css'
import CreatedBy from '../../components/createdBy/CreatedBy'
import { getProjectByTokenAddress } from '@/dataFetching/projects/getProject'
import { Suspense } from 'react'

interface PageProps {
  params: Promise<{ tokenAddress: string }>
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
