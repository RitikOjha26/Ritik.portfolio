import React from 'react'
import HeadingHighlight from './common/HeadingHighlights'
import TechCard from './common/TechCard'

type Props = {}

const skills: any = [
    {
        name: "Cpp",
        id: 1
    },
    {
        name: "C", id: 2
    },
    {
        name: "Python", id: 3
    },
    {
        name: "JavaScript", id: 4
    },
    {
        name: "Reactjs", id: 5
    },
    {
        name: "NodeJs", id: 6
    },
    {
        name: "NextJs", id: 7
    },
    {
        name: "TypeScript", id: 8
    },
    {
        name: "Playwright", id: 9
    },
    {
        name: "Git", id: 10
    },
    {
        name: "Sass", id: 11
    },
    {
        name: "TailWind", id: 12
    },
    {
        name: "HTML", id: 13
    },
    {
        name: "CSS", id: 14
    },
]

function Skills({ }: Props) {
    return (
        <div id='skills' className='skills container '>
             <h1 className="about__heading headline-1 ">
                My&nbsp;<HeadingHighlight>Skills</HeadingHighlight>
             </h1>
             
            <div className='skills__wrapper '>
                <div className='text-container para para-1 bg-dblue '>
                    <p>
                    I have a variety of skills in my toolbox. 
                    While I enjoy exploring and learning new technologies, 
                    the rapid pace at which new frameworks and technologies are being developed can make it challenging to keep up.
                    Nevertheless, I am proficient in the following technologies,
                     which I have recently worked with:
                    </p>
                </div>
                <div className='skills-container'>{
                    skills.map((skill: { name: String, id: any }) => {

                        return <TechCard key={skill.id} skill={skill} />
                    })}
                </div>
            </div>
            
        </div>
    )
}

export default Skills