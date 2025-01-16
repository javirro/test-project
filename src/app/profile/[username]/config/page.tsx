import ConfigButtons from './components/configButtons/ConfigButtons'

import style from './page.module.css'

interface PageProps {
  params: Promise<{ username: string }>
}

async function page({ params }: PageProps) {
  const { username } = await params

  return (
    <main className={style.main}>
      <ConfigButtons username={username} />
    </main>
  )
}

export default page
