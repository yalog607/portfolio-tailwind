import { FaNodeJs, FaReact, FaDocker } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs, SiMongodb } from "react-icons/si";

function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-4xl text-center">Technologies</h2>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className="text-7xl text-green-400"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaReact className="text-7xl text-cyan-400"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaDocker className="text-7xl text-blue-600"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiTailwindCssFill className="text-7xl text-cyan-500"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiNextdotjs className="text-7xl"/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className="text-7xl text-green-600"/>
        </div>
      </div>
    </div>
  );
}
export default Technologies;
