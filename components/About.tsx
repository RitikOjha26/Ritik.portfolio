import React from 'react'
import HeadingHighlight from './common/HeadingHighlights'
type Props = {}

export default function About({ }: Props) {
  return (
    <div id='about' className='about'>

      <div className="about__wrapper container">
        <h1 className="about__heading headline-1 ">
          About&nbsp;<HeadingHighlight> Me</HeadingHighlight>
        </h1>
        <div className="about__content">
          <div>
            <p className="about__content__text para para-1 bg-[#0f0f16]">
              Hi there! 👋 I’m Ritik Ojha, a Software Engineer passionate about building clean, responsive, and high-performance web apps. At Quaprix, I’m working on revamping the company site using React.js + TypeScript, with a strong focus on SEO, accessibility, and UI consistency. 🚀
              I also collaborate with a global finance client, using Playwright to drive end-to-end testing across UI and APIs—helping ship updates with confidence. 🧪💻
              My toolkit includes React, TypeScript, Redux, Next.js, Socket.io, and Playwright. I love solving real-world problems and have built projects like Code Espresso, a real-time collaborative IDE, and an RBAC system.
              <br />
              Let&#39;s connect or geek out over cool tech stuff! 🌐👨‍💻
            </p>

          </div>

        </div>
      </div>
    </div>




  )
}
