import style from './receive.module.css'

interface PageProps {
  params: Promise<{ username: string }>
}

export async function generateStaticParams(): Promise<{ username: string }[]> {
  return []
}

const Receive = async ({ params }: PageProps) => {
  const { username } = await params

  return (
    <section className={style.main}>
      <img style={{width: "20vh"}} src="/solanaQr.png" alt="" />
      <p className={style.mainText}>Your Solana Address</p>
      <p className={style.secondaryText}>Use this address to receive tokens and collectibles on Solana</p>
      Receive section: {username}
    </section>
  )
}

export default Receive
