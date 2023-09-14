import React from 'react'
import HeadingHighlight from './common/HeadingHighlights'
type Props = {}

export default function About({}: Props) {
  return (
    <div className='about'>
      
      <div className='about__wrapper container'>
        <h1 className='about__heading headline-1'>
          About<HeadingHighlight>Me</HeadingHighlight>

        </h1>
        
      </div>
      
      </div>
  )
}
