import { PROJECTS } from '../constants';
import { motion } from 'motion/react'

function Project() {
    return (
        <div className='border-b border-neutral-800 p-4'>
            <h2 className='text-4xl text-center my-20'>Project</h2>
            {PROJECTS.map((project, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div 
                    initial={{x: -100, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{duration: 0.5, delay: 0.2}}
                    className="w-full lg:w-1/4">
                        <img className='mb-6 rounded' width={150} height={150} src={project.image} alt={project.title} />
                    </motion.div>
                    <motion.div
                    initial={{x: 100, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{duration: 0.5, delay: 0.2}}
                    className="w-full lg:w-3/4">
                        <h6 className='mb-2 font-semibold'>{project.title}</h6>
                        <p className='mb-4 text-neutral-400'>{project.description}</p>
                        {project.technologies.map((tech, i) => (
                            <span key={i} className='mr-2 rounded bg-neutral-900 text-purple-800 text-sm font-medium px-2 py-1'>{tech}</span>
                        ))}
                    </motion.div>
                </div>
            ))}
        </div>
    )
}

export default Project;