import AboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from 'motion/react'

function About() {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-36">
            <h2 className="my-20 text-4xl text-center">About 
                <span className="text-neutral-500"> Me</span>
            </h2>
            <div className="flex flex-wrap justify-between">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center items-center">
                        <motion.img
                        initial={{x: -100, opacity: 0}}
                        whileInView={{x: 0, opacity: 1}}
                        transition={{duration: 0.5, delay: 0.2}}                        
                        className="rounded-2xl" src={AboutImg} alt="about img" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <motion.p
                        initial={{x: 100, opacity: 0}}
                        whileInView={{x: 0, opacity: 1}}
                        transition={{duration: 0.5, delay: 0.2}}
                        className="my-2 p-6 max-w-xl">{ABOUT_TEXT}</motion.p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;