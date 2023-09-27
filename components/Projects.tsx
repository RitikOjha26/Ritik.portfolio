import React from 'react'
import HeadingHighlight from './common/HeadingHighlights'
import ProjectCard from './common/ProjectCard'

type Props = {}

const projectInfo = [
    {
        id: 4,
        name: "CodeEspresso: Realtime Editor",
        description: [
           
            'Online IDE with real-time collaboration.',
            'Used sockets to connect all the code editors and stream every code change in real-time.',
            
        ],
        github: "https://github.com/RitikOjha26/Code_espresso",
        url: "https://github.com/RitikOjha26/Code_espresso",
        image: [
            "proj1-a.png",
            "proj1-b.png",
            "proj1-c.png",
        ],
        technologies: ['React.js', 'Socket.io', 'Node.js', 'SCSS']
    }, {
        id: 3,
        name: "Ritik Portfolio",
        description: [
            'The portfolio page was developed with a theme in mind and designed as it progressed.',
            'Please feel free to connect over any suggestion, bug report or any doubt regarding the project'

        ],
        github: "https://ritik-pf.vercel.app/",
        url: "https://github.com/RitikOjha26/Ritik.portfolio",
        image: [
            "proj2-c.png",
            "proj2-b.png",
            "proj2-a.png",
        ],
        technologies: ['Next.js', 'TypeScript', 'SCSS', 'Framer Motion','Tailwind']
    },

    {
        id: 2,
        name: "Facial Recognition using LBPH",
        description: [
            'My team and I developed a robust Facial Recognition system using Python and OpenCV. We integrated the LBPH algorithm to extract discriminative features from facial images.',
            "Collected a diverse dataset consisting of facial images from various sources to ensure model training.",

        ],
        github: "https://github.com/RitikOjha26/FacialRecognition-LBPH",
        url: "https://github.com/RitikOjha26/FacialRecognition-LBPH",
        image: [
            "proj3-c.png",
            "proj3-a.png",
            "proj3-b.png",
        ],
        technologies: ['Python', 'OpenCV']
    },
    {
        id: 1,
        name: "Jamf TeamComputers Landing Page ",
        description: [
            'I assisted my developer friend in creating a landing page for Team Computers website.',
            "The webpage is developed using mobile-first styling to optimise the page render time and smooth flow/animations.",

        ],
        github: "https://www.teamcomputers.com/jamf#",
        url: "https://www.teamcomputers.com/jamf#",
        image: [
            "proj4-c.png",
            "proj4-a.png",
            "proj4-b.png",
        ],
        technologies: ['React', ' JavaScript','SCSS']
    },
]

function Projects({ }: Props) {
    return (
        <div  id='projects' className='projects container'>
            <h1 className='about__heading headline-1'>Fun&nbsp;<HeadingHighlight>Projects</HeadingHighlight></h1>
            <ul className="projects-wrapper bg-dblue ">
                {
                    projectInfo.map((project) => {
                        return <li className='project-card' key={project.id}><ProjectCard project={project} /></li>
                    })
                }
            </ul>
        </div>
    )
}

export default Projects