
import Link from 'next/link'
import Profile from '../../public/vercel.svg'
import Image from 'next/image'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '100',
  subsets: ['latin'],
  display: 'swap'
})
export default function Home() {
  return (
    <main>
      <h1 >Fetch Data with API in Client Component</h1>
      <Link href="/productlist">Go to Product List</Link>
      <br />
      <br />
      <h1 style={{ fontFamily: 'Roboto', fontWeight: 100 }}>Font with link tag</h1>
      <Image src={Profile}></Image>
      <h1 className={roboto.className}>Font with Next Js Font Feature</h1>
      <br />
      <br />
      <Image src="https://www.techgeekbuzz.com/media/tutorial_images/HTML-Images.jpg" height={200} width={400}></Image>
    </main>
  )
}
