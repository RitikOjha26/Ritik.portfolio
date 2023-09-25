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
        name: "Git", id: 9
    },
    {
        name: "Sass", id: 10
    },
    {
        name: "TailWind", id: 11
    },
    {
        name: "HTML", id: 12
    },
    {
        name: "CSS", id: 13
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
                    The following skills are part of my toolbox. 
                    One of the things I like is to explore and learn new technologies, 
                    but given the pace at which we are getting new technologies and frameworks, 
                    these are some of them that I have mastered and worked with recently.
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