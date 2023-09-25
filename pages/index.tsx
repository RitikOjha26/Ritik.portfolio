import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import LeftMenu from '@/components/LeftMenu';

import SocialIcons from '@/components/socialicons';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

// Define the font subset (Latin characters) for Inter
const inter = Inter({ subsets: ['latin'] });

type Props = {};

export default function Home({}: Props) {
  return (
    <div>
      <Head>
        <title>Ritik Portfolio</title>
      </Head>
      
      {/* Home Section */}
      <section id='home'>
        {/* Top Navbar */}
        
        <Header />
        <LeftMenu />
        
        {/* Left Navbar */}
        <SocialIcons />
      </section>

      {/* Hero */}
      <section>
        <Hero />
      </section>

      {/* About Me */}
      <About/>
      
      {/* Skills */}
      <Skills />
      {/* Projects */}
      <Projects/>
      {/* Contact Me */}
    </div>
  );
}
