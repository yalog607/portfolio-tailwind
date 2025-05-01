import AboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";

function About() {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-36">
            <h2 className="my-20 text-4xl text-center">About 
                <span className="text-neutral-500"> Me</span>
            </h2>
            <div className="flex flex-wrap justify-between">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center items-center">
                        <img className="rounded-2xl" src={AboutImg} alt="about img" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 p-6 max-w-xl">{ABOUT_TEXT}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;