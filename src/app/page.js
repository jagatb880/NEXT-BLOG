
import Link from 'next/link'
import Profile from '../../public/vercel.svg'
import Image from 'next/image'
export default function Home() {
  return (
    <main>
      <h1 >Fetch Data with API in Client Component</h1>
      <Link href="/productlist">Go to Product List</Link>
      <br />
      <br />
      <Image src={Profile}></Image>
      <br />
      <br />
      <Image src="https://www.techgeekbuzz.com/media/tutorial_images/HTML-Images.jpg" height={200} width={400}></Image>
    </main>
  )
}
