import Contact from '@/components/modules/Contact'
import Introduction from '@/components/modules/Introduction'
import Portofolio from '@/components/modules/Portofolio'
import Footer from '@/components/partials/Footer'
import Header from '@/components/partials/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col mx-auto bg-primary">
      <Header />
      <Introduction />
      <Portofolio />
      <Contact />
      <Footer />
    </main>
  )
}
