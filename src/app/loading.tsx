import { TbInfoCircle } from "react-icons/tb";
import Copy from "./components/copy";

const Loading: React.FC = () => {
    return (
        <main className="flex p-48 justify-center">
            <div className=' w-100 flex flex-col justify-center items-start gap-4  mx-auto  '>
                <div className='w-auto gap flex flex-col justify-center gap-4'>

                    <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Want to know your </span> IP address?</h1>
                    <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">An IP address is like a digital street address for devices connected to the internet. It helps data find its way to the right destination, whether it&apos;s a computer, phone, or any other device online.</p>
                </div>
                {['IPv4', 'IPv6'].map((ipVersion, index) => {
                    return (
                        <div className='w-full flex-col gap-3 animate-pulse' key={index}>
                            <div key={index} className=" left-0 top-0 flex justify-between w-full border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit static rounded-xl border lg:bg-gray-200 gap-10 items-center">
                                <div className= 'dark:bg-gray-700 p-4 rounded-l-xl'>{ipVersion}</div>
                                <code className="font-mono font-bold text-left flex-1 ">
                                    <div className='h-4  bg-gray-200 rounded-full dark:bg-gray-700 w-70 '></div> </code>
                                <Copy copyString={""} isloading/>
                            </div>
                            <div className='flex items-center gap-3 mt-2 justify-end'>
                                <TbInfoCircle className='text-gray-700' />
                                <div className='h-2 w-32 bg-gray-200 rounded-full dark:bg-gray-700 '></div>
                            </div>
                        </div>
                    );
                })}
            </div></main>
    );
};

export default Loading;
