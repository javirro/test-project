import TokenDetailsNavBar from '@/components/navigation/tokenDetailsNavBar/TokenDetailsNavBar'
import style from './page.module.css'
import CommentsContainer from '../../components/commentsContainer/CommentsContainer'

async function page({ params }: { params: { tokenAddress: string } }) {
  const tokenAddress = await params.tokenAddress
  return (
    <section className={style.main}>
      <TokenDetailsNavBar />
      <CommentsContainer tokenAddress={tokenAddress}/>
    </section>
  )
}

export default page
