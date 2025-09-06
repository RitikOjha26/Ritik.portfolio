import dynamic from 'next/dynamic';
import React, { useRef, useEffect } from 'react';
import CornerButton from "./common/CornerButton";
import Particle from '@/components/common/Particle';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import HeadingHighlight from './common/HeadingHighlights';
import constants from '@/constants';

type Props = {};

export default function Hero({ }: Props) {
  const selectText = useRef<HTMLInputElement | null>(null);

  // Set up typewriter effect
  const [text, count] = useTypewriter({
    words: [
      "<AwebDeveloper/>",
      "Who-loves-coffee.js",
      "<And-Loves-To-Code-More/>",
      
      
    ],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 70,
    deleteSpeed: 70,
  });

  // Automatically select text on load
  useEffect(() => {
    if (selectText.current) {
      selectText.current.select();
    }
  }, []);

  return (
    <div className="hero-section ">
      <Particle />
      <div className="hero-section__text-wrapper ">
        {/* <label className='sr-only'>Intro Text</label> */}
        <input
          readOnly
          ref={selectText}
          type="text"
          id="selected"
          className="selected-text label-1 "
          value={'Hello, my name is'}
        />
        <h1 className="headline-1 ">
          <HeadingHighlight> RITIK OJHA </HeadingHighlight>
        </h1>
        <h3 className="typewriter label-1">
          {text}
        </h3>
        <div >
          <a target="_blank" rel="noopener noreferrer" href={constants.RESUME_LINK}>
            <CornerButton>Get My Resume</CornerButton>
          </a>
        </div>



      </div>


    </div>



  );
}
