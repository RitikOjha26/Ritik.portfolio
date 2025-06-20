import React from 'react'
import logo from '/public/images/logo.png'
import Image from 'next/image'

type Props = {}

const Logo = (props: Props) => {
  return (
    <div className='logo-container  cursor-pointer '>
      <Image src={logo} alt='LOGO' />
    </div>
  )
}

export default Logo
