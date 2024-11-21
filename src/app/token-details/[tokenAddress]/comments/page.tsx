import TokenDetailsNavBar from '@/components/navigation/tokenDetailsNavBar/TokenDetailsNavBar'
import style from './page.module.css'
import CommentsContainer from '../../components/commentsContainer/CommentsContainer'
import { getAllProjectAddresses } from '@/dataFetching/projects/getProject'

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
    <section className={style.main}>
      <TokenDetailsNavBar />
      <CommentsContainer tokenAddress={tokenAddress} />
    </section>
  )
}

export default page
