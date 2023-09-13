import Head from 'next/head'
import Header from '@/components/Header'
import SocialIcons from '@/components/socialicons'
//import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
type Props = {}
const inter = Inter({ subsets: ['latin'] })

export default function Home({}: Props) {
  return (
    <div>
      <Head>
        <title>Ritik Portfolio</title>
      </Head>
      
      {/* Home Section */}
      <section id='home'>
        {/* Top Navbar */}
        <Header/>
    
        {/* Left Navbar */}
        <SocialIcons/>
      </section>
      
      {/* Hero */}

      {/* About Me */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  )
}

