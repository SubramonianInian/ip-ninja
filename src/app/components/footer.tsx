import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

const Footer = () => {
    return (


        <footer className="bottom-0 px-48">
            <div className="flex justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400 text-left">© 2024 Subramonian Inian
                </span>
                <span className="flex gap-5">
                    <a href="https://github.com/SubramonianInian" target="_blank">

                        <FiGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/subramonian-inian/" target="_blank">

                        <FiLinkedin />
                    </a>
                    <a href="mailto:risubramonian@gmail.com"><FiMail/></a>
                </span>
            </div>
        </footer>

    )
}

export default Footer
