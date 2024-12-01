import Link from 'next/link'

//TODO: Add a 404 page custom style
export default function NotFound() {
  return (
    <div>
      <h2>User Wallet not found</h2>
      <p>Please close the application and turn on again.</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}
