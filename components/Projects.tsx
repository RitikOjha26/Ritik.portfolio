import React from 'react'
import HeadingHighlight from './common/HeadingHighlights'
import ProjectCard from './common/ProjectCard'

type Props = {}

const projectInfo = [
    {
        id: 4,
        name: "CodeEspresso: AI-Driven Collaborative Code Editor:",
        description: [

            'Developed Code Espresso, an online code editor supporting real-time collaboration for 10+ simultaneous users using React.js, Socket.io, and Node.js, enabling seamless shared code editing across sessions.',
            'Integrated Firebase Authentication and Firestore to handle secure user login, session persistence, and personalized user profiles via Firebase Studio.',
            'Embedded Google’s Gemini API for AI-assisted coding support, optimizing prompt engineering to reduce token usage by 30%, enhancing both cost-efficiency and response quality.'
        ],
        github: "https://github.com/RitikOjha26/Code_espresso",
        url: "https://www.linkedin.com/posts/ritik-ojha_reactjs-socketio-googlegemini-activity-7328710190114004992-y-Jb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB72vSYBDyUC-c0Z-t0OpDEHAYTuEj1-zAs",
        image: [
            "proj1-a.png",
            "proj1-b.png",
            "proj1-c.png",
        ],
        technologies: ['React.js', 'Socket.io', 'Node.js', 'FireBase', 'Google Gemini API', 'SCSS']
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
        technologies: ['Next.js', 'TypeScript', 'SCSS', 'Framer Motion', 'Tailwind']
    },

    {
        id: 2,
        name: "Role-Based Access Control (RBAC) System",
        description: [
            'Built an RBAC system using React, Material-UI (MUI), Vite, and React Context API with role-based authentication, protected routes, and centralized state management for managing users and roles.',
            "Created reusable components, an interactive dashboard, and a responsive UI, integrated APIs, and designed a database schema to handle CRUD operations and role-based permissions.",

        ],
        github: "https://github.com/RitikOjha26/RBAC-VRV",
        url: "https://github.com/RitikOjha26/RBAC-VRV",
        image: [
            "proj3-c.png",
            "proj3-a.png",
            "proj3-b.png",
        ],
        technologies: ['React', 'Typescript', 'Material-UI', 'Vite', 'React Context API']
    },
    {
        id: 1,
        name: "Quaprix: Website Revamp & Upgrade ",
        description: [
            'Migrated the online platform from React to TypeScript, reducing bugs by 20% and improving code maintainability.',
            "Optimized content rendering by integrating API’s, reducing page load time from 5.2s to 2.7s.",
            "Contributed to team discussions and participated in implementing SEO improvements, resulting in a 25% increase in organic traffic."
        ],
        github: "https://www.linkedin.com/in/ritik-ojha/",
        url: "https://www.linkedin.com/in/ritik-ojha/",
        image: [
            "proj4-c.png",
            "proj4-a.png",
            "proj4-b.png",
        ],
        technologies: ['React', ' JavaScript', 'SCSS', 'Typescript']
    },
]

function Projects({ }: Props) {
    return (
        <div id='projects' className='projects container'>
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