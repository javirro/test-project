import TokenDetailsNavBar from '@/components/navigation/tokenDetailsNavBar/TokenDetailsNavBar'
import style from './page.module.css'
import CommentsContainer from '../../components/commentsContainer/CommentsContainer'

interface PageProps {
  params: Promise<{ tokenAddress: string }>
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
