import React from 'react'
import logo from '../../public/images/logo.png'
import Image from 'next/image'

type Props = {}

const Logo = (props: Props) => {
  return (
    <div className='logo-container  cursor-pointer '>
      <Image
        src={logo}
        alt="LOGO"
        priority
        fill
        sizes="(max-width: 768px) 15rem, 25rem"
        style={{ objectFit: "contain" }}
      />
    </div>
  )
}

export default Logo
