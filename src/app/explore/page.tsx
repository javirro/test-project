import { cookies } from 'next/headers'
import { Suspense } from 'react'

const ExplorePage = async () => {
  const cookiesStore = await cookies()
  console.log('Cookies: ', cookiesStore)
  return (
    <div>
      <h1>Explore</h1>
    </div>
  )
}

const ExplorePageWrapper = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ExplorePage />
    </Suspense>
  )
}

export default ExplorePageWrapper
