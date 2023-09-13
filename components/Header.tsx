import React from 'react'

import Logo from './common/Logo';
import {motion} from 'framer-motion';
type Props = {}

export default function Header({}: Props) {
  return <header className='sticky flex top-0 items-start justify-between pr-10 mx-auto'>
    
    <motion.div /* {animation slide in} */
    initial={{
      x:-500,
      opacity:0.5,
      scale:0.5,
     }}
     animate={{
      x:0,
      opacity:1,
      scale:1,
     }}
     transition={{
      duration:1,
     }}
    className='flex flex-row items-center'>
        
        {/* Logo */}
        <Logo />

    </motion.div>
    
    
    <motion.div /* {animation slide in} */
     initial={{
      x:500,
      opacity:0.5,
      scale:0.5,
     }}
     animate={{
      x:0,
      opacity:1,
      scale:1,
     }}
     transition={{
      duration:1,
     }}

    className=' contact-link flex flex-row items-centre cursor-pointer pl-10 '>
        CONTACT ME
    </motion.div>
      

   
  </header>;
  
}