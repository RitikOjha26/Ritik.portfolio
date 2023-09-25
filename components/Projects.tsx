import React from 'react'
import HeadingHighlight from './common/HeadingHighlights'
import ProjectCard from './common/ProjectCard'

type Props = {}

const projectInfo = [
    {
        id: 4,
        name: "CodeEspresso: Reatime Editor",
        description: [
           
            'Online IDE with real-time collaboration.',
            'Used sockets to connect all the code editors and stream every code change in real-time.',
            
        ],
        github: "https://github.com/RitikOjha26/Code_espresso",
        url: "https://github.com/RitikOjha26/Code_espresso",
        image: [
            "proj3-a.png",
            "proj3-b.png",
            "proj3-c.png",
        ],
        technologies: ['React.js', 'Socket.io', 'Node.js', 'SCSS']
    }, {
        id: 3,
        name: "Ritik Protfolio",
        description: [
            'The portfolio page you are currently on is developed with a theme in mind but designed on the way as it progressed.',
            'Please feel free to connect over any suggestion, bug report or any doubt regarding the project'

        ],
        github: "https://github.com/RitikOjha26/Ritik.portfolio",
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
            'Developed a robust Facial Recognition system using Python and OpenCV, integrating the LBPH algorithm to extract discriminative feature to facial images.',
            "Collected and curated a diverse dataset consisting of facial images from various sources to ensure comprehensive model training.",

        ],
        github: "https://github.com/PranjayPathak/SUDOKUprj",
        url: "https://sudoku-prj.up.railway.app/",
        image: [
            "proj1-c.png",
            "proj1-a.png",
            "proj1-b.png",
        ],
        technologies: ['Python', 'OpneCV']
    },
    {
        id: 1,
        name: "Jamf TeamComputers Landing Page ",
        description: [
            'Helped my developer friend in building a website for team computers landing page.',
            "The webpage is developed using mobile-first styling to optimise the pagerender time and smooth flow/animations.",

        ],
        
        url: "https://www.teamcomputers.com/jamf#",
        image: [
            "proj1-c.png",
            "proj1-a.png",
            "proj1-b.png",
        ],
        technologies: ['React', ' JavaScript','SCSS']
    },
]

function Projects({ }: Props) {
    return (
        <div className='projects container'>
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