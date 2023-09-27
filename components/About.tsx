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
              Hi there! 👋 I&#39;m Ritik Ojha, a recent graduate with a B.Tech degree in 2023. My journey in web development began during my internship at Kiasa, where I explored the world of web development and programming. 
              My primary goal 🎯 with every project is to deliver the best functionality and user experience while maintaining a clean and concise codebase within the given set of constraints. 
              Apart from my passion for web development, I also have a strong interest in DSA. 
              <br />
              Currently, I&#39;m actively looking for opportunities in development and software engineering roles to apply my skills and contribute to creating exceptional digital experiences.  🚀👨‍💻🌟

            </p>

          </div>

        </div>
      </div>
    </div>




  )
}
