import styles from '../walletPage.module.css'

interface PageProps {
  params: Promise<{ username: string }>
}

export async function generateStaticParams(): Promise<{ username: string }[]> {
  return []
}

const Receive = async ({ params }: PageProps) => {
  const { username } = await params

  return <section className={styles.wallet}>Receive section: {username}</section>
}

export default Receive
