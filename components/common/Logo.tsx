import React from 'react'
import logo from '/public/images/logo.png'
import Image from 'next/image'

type Props = {}

const Logo = (props: Props) => {
  return (
    <div className='logo-container pl-10 cursor-pointer '>
      
          
            <Image src={logo} alt='LOGO' />
        
    </div>
  )
}

export default Logo
