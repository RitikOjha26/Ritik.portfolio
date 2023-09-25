import React from 'react';
import Logo from './common/Logo';
import { motion } from 'framer-motion';

type Props = {};

export default function Header({ }: Props) {
  return (
    <header className=' top-navbar flex items-start justify-between mx-auto'>

      <Logo />

      <div className='top-navbar__items'>

        {/* Contact Me Link */}
        
        <a href="#contact">
          <div className='top-navbar__items__item contact_me pt-5 label-1'>
            <div>
              CONTACT ME
            </div>
          </div>
        </a>
      </div>

    </header>
  );
}
