import { GiNinjaHead } from 'react-icons/gi'

const NavBar = () => {
    return (
        <nav className=" bg-gray-900 bg-opacity-20">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4">
                <a
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <GiNinjaHead className="text-4xl text-white font-mono" />
                    <span className="self-center text-2xl font-extralight whitespace-nowrap text-white text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                        IP Ninja
                    </span>
                </a>
            </div>
        </nav>
    )
}

export default NavBar
