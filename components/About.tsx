import React from 'react'
import HeadingHighlight from './common/HeadingHighlights'

type Props = {}

export default function About({ }: Props) {
  return (
    <div id='about' className='about container'>
      <div className="about__wrapper">
        <h1 className="about__heading headline-1">
          About&nbsp;<HeadingHighlight>Me</HeadingHighlight>
        </h1>

        <div className="about__content">
          <div>
            <p className="about__content__text para para-1 bg-[#0f0f16]">
              Hi there! 👋 I’m Ritik Ojha, a developer passionate about turning ideas into fast, interactive, and user-friendly web experiences. I love working with modern tools like React.js, Next.js, and TypeScript to build clean, responsive interfaces that not only look good but also perform well.
            </p>

            <p className="about__content__text para para-1 bg-[#0f0f16]">
              For me, great development is about balance writing maintainable code, ensuring performance, and creating smooth user journeys. I enjoy exploring new technologies, solving problems through code, and constantly learning to grow as a developer.
            </p>

            <p className="about__content__text para para-1 bg-[#0f0f16]">
              When I’m not coding, you’ll usually find me tinkering with side projects, diving into new frameworks, or sharpening my skills in problem-solving and algorithms. 🚀👨‍💻
            </p>


          </div>
        </div>
      </div>
    </div>
  )
}
