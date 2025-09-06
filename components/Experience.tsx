import React from 'react'
import { ExpCarousel } from './common/ExpCarousel'
import HeadingHighlight from './common/HeadingHighlights'
import kiaasa from "../public/images/experience/kiaasa.png"
import quaprix from "../public/images/experience/quaprix.png"
import RIS from "../public/images/experience/RIS.png"

const slideData = [
    // {
    //   title: "Tiki Global",
    //   description:[
    //     "Refactored portfolio site using React, Tailwind, SCSS; improved page load time by 35%.",
    //     "Collaborated on UI and SEO revamp, increasing organic traffic by over 20%.",
    //     "Modularized SCSS and JS with mixins; reduced codebase size by 20%, boosting team efficiency.",
    //     "Sept 2022 - Nov 2022"
    //   ],
    //   image: kiaasa,
    // },
    {
      title: "Quaprix",
      description:[
        "Built a CMS-first property platform with Next.js + TypeScript, integrating Prismic CMS for type-safe content and slice-based architecture",
        "Improved performance and SEO with optimized rendering, dynamic imports, and client-side APIs.",
        "Strengthened reliability by adopting TDD with Vitest, Playwright automation, and streamlined CI/CD workflows.",
        "June 2024 - Current"
      ],
      image: quaprix,
    },
    // {
    //   title: "Rugs In Style",
    //   description:[
    //     "Refactored and optimized the portfolio website using React.js, Tailwind, and SCSS for better speed and responsiveness.",
    //     "Enhanced SEO and user engagement by restructuring content and collaborating with design.",
    //     "Simplified the frontend codebase with reusable SCSS mixins and modular JavaScript for easier collaboration.",
    //     "Jan 2024 - Apr 2024"
    //   ],
    //   image:RIS,
      
    // },
  ];

const Experience = () => {
    return (
        <div id='experience' className='experience container' >
            <div className="experience__wrapper ">
                <h1 className="experience__heading headline-1 mb-6">
                    Work&nbsp;<HeadingHighlight>Experience</HeadingHighlight>
                </h1>
            </div>
            <div className='min-w-[80vw] flex justify-center'>
                <ExpCarousel data={slideData} />
            </div>
            
        </div>
    )
}

export default Experience