import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Navbar() {
    return (
        <nav className="mb-20 py-6 flex items-center justify-between">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-10" src={logo} alt="logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a target="blank" href="https://linkedin.com/">
                    <FaLinkedin className="cursor-pointer"/>
                </a>
                <a target="blank" href="https://github.com/">
                    <FaGithub className="cursor-pointer"/>
                </a>
                <a target="blank" href="https://www.instagram.com/">
                    <FaInstagram className="cursor-pointer"/>
                </a>
                <a target="blank" href="https://x.com/">
                    <FaSquareXTwitter className="cursor-pointer"/>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;