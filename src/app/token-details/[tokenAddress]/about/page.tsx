import TokenDetailsNavBar from '@/components/navigation/tokenDetailsNavBar/TokenDetailsNavBar'
import About from './components/about/About'
import style from './page.module.css'
import CreatedBy from '../../components/createdBy/CreatedBy'

interface PageProps {
  params: Promise<{ tokenAddress: string }>
}

async function page({ params }: PageProps) {
  const resolvedParams = await params
  const tokenAddress = resolvedParams.tokenAddress
  console.log('About page tokenAddress: ', tokenAddress)

  return (
    <section className={style.main}>
      <TokenDetailsNavBar />
      <About />
      <CreatedBy />
    </section>
  )
}

export default page
