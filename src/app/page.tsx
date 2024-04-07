import IpDetails from "./components/ipDetails";

export default function Home() {
  return (
    <main className="flex justify-center p-48">
              <div className='w-auto gap flex flex-col justify-center gap-4'>

            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Want to know your </span> IP address?</h1>
            <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">An IP address is like a digital street address for devices connected to the internet. It helps data find its way to the right destination, whether it's a computer, phone, or any other device online.</p>
      <IpDetails />
      </div>
    </main>
  );
}
