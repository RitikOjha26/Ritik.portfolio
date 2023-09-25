import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import LeftMenu from '@/components/LeftMenu';
import Footer from '@/components/Footer';

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
      
      <section id='home'>               {/* Home Section */}
                                        
        <Header />                      {/* Top Navbar   */}
        
        <LeftMenu />                    {/* Left Navbar  */}
        
        <SocialIcons />                 {/* BLeft Navbar */}

      </section>

      <section>

        <Hero />                        {/* Hero Section */}

      </section>

      <About />                          {/* About Me */}
      
      <Skills />                        {/* Skills   */}
      
      <Projects />                       {/* Projects */}
      
      <Contact />                        {/* Contact Me */}

      <Footer />
    </div>
  );
}
