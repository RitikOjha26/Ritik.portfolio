import React from 'react'
import { ExpCarousel } from './common/ExpCarousel'
import HeadingHighlight from './common/HeadingHighlights'
import kiaasa from "../public/images/experience/kiaasa.png"
import quaprix from "../public/images/experience/quaprix.png"
import RIS from "../public/images/experience/RIS.png"

const slideData = [
    {
      title: "Tiki Global",
      description:[
        "Enhanced performance with dynamic imports, hooks & Web Workers, boosting table load speed by 40%.",
        "Automated UI/API tests with Playwright, reaching 85% coverage and reducing bugs by 30%.",
        "Collaborated with design team to ship new features and enhance overall UX.",
        "Sept 2022 - Nov 2022"
      ],
      image: kiaasa,
    },
    {
      title: "Quaprix",
      description:[
        "Enhanced performance with dynamic imports, code splitting, hooks, and Web Workers, boosting table load speed by 42%.",
        "Automated UI/API tests with Playwright, reaching 85% coverage and reducing bugs by 30%.",
        "Collaborated with design team to ship new features and enhance overall UX.",
        "June 2024 - Current"
      ],
      image: quaprix,
    },
    {
      title: "Rugs In Style",
      description:[
        "Enhanced performance with dynamic imports, code splitting, hooks, and Web Workers, boosting table load speed by 40%.",
        "Automated UI/API tests with Playwright, reaching 85% coverage and reducing bugs by 30%.",
        "Collaborated with design team to ship new features and enhance overall UX.",
        "Jan 2024 - Apr 2024"
      ],
      image:RIS,
      
    },
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