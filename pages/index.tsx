import Head from 'next/head';
import dynamic from "next/dynamic";

// Critical components (keep these directly imported)
import Header from "@/components/Header";
import LeftMenu from "@/components/LeftMenu";
import SocialIcons from "@/components/socialicons";
import Footer from "@/components/Footer";


const Hero = dynamic(() => import("@/components/Hero"));
const About = dynamic(() => import("@/components/About"));
const Skills = dynamic(() => import("@/components/Skills"));
const Projects = dynamic(() => import("@/components/Projects"));
const Contact = dynamic(() => import("@/components/Contact"));


type Props = {};

export default function Home({ }: Props) {
  return (
    <div className=''>
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

      <Skills />                         {/* Skills   */}

      {/* <Experience />                     Experience   */}

      <Projects />                       {/* Projects */}

      <Contact />                        {/* Contact Me */}

      <Footer />
    </div>
  );
}
