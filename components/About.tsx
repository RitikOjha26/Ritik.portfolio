import React from 'react'
import HeadingHighlight from './common/HeadingHighlights'
type Props = {}

export default function About({ }: Props) {
  return (
    <div className='about'>

      <div className="about__wrapper container">
        <h1 className="about__heading headline-1 ">
          About&nbsp;<HeadingHighlight> Me</HeadingHighlight>
        </h1>
        <div className="about__content">
          <div>
            <p className="about__content__text para para-1 bg-[#0f0f16]">
              Hello 👋, My name is <strong>Ritik Ojha</strong> , a recent graduate (B.Tech - 2023). My journey in web development 
              began during my internship at Kiasa, where I delved into the world of web development and programming.
              My goal 🎯 with every project is to provide the best functionality and user experience with a maintainable 
              codebase in the given set of constraints.
              In addition to my love for web development, I have a strong interest in DSA.
                <br />
              I&#39;m now actively seeking opportunities in development and software engineering roles, 
              eager to apply my skills and contribute to creating outstanding digital experiences. 🚀👨‍💻🌟
             
            </p>

          </div>
          
          </div>
        </div>
      </div>

    


  )
}
