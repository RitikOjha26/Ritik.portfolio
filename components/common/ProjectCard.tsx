import React from 'react'
import Image from 'next/image'
import { IconContext } from "react-icons";
import { BiLinkExternal } from "react-icons/bi";
import { VscGithubAlt, VscGithub } from "react-icons/vsc";

type Props = { project: { id: number; name: string; description: string[]; github: string; url: string; image: string[]; technologies: string[] } }

function ProjectCard({ project }: Props) {
    return (
        <>
            <div className='description'>
                <h2 className='description__heading headline-3'>{project.name}</h2>
                <ul className='points'>
                    {project.description.map((desc, i) => {
                        return <li className='point' key={i}><div className='point__content para'>{desc}</div></li>
                    })}
                    <li className='point'>
                        <div className='technologies'>
                            {
                                project.technologies.map((tech, i) => {
                                    return <div key={i} className='tech'>{tech}</div>;
                                })
                            }
                        </div>
                    </li>
                </ul>
                <div className='links label-2'>
                    <div className="link url" >
                        <  a target="_blank" rel="noopener noreferrer" href={project.url} ><>View Project<BiLinkExternal /></></a>
                    </div>
                    <div className="link">
                        <IconContext.Provider value={{ className: "links__github-icon" }}>
                            <  a target="_blank" rel="noopener noreferrer" href={project.github} ><VscGithubAlt /></a>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
            <div className="composition">
                {project.image.map((imgSrc, i) => (
                    <Image
                        key={i}
                        src={`/images/projects/${imgSrc}`}
                        alt={`Project ${project.name} Image ${i + 1}`}
                        className={`composition__photo composition__photo--p${i + 1}`}
                        width={500}    
                        height={350}   
                        style={{ objectFit: 'cover' }}
                        priority={i === 0} 
                    />
                ))}
            </div>
        </>
    )
}

export default ProjectCard