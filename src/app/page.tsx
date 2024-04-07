'use client'
import IpDetails from "./components/ipDetails";
import { publicIpv4, publicIpv6 } from 'public-ip';
import Loading from "./loading";
import { useEffect, useState } from "react";
import { IpDetail } from "./interfaces/ipDetails";
const Home = () => {
  const [ips, setIps] = useState<IpDetail[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [ipv4Result, ipv6Result] = await Promise.all([publicIpv4(), publicIpv6()]);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
        setIps([{ version: 'IPv4', address: ipv4Result }, { version: 'IPv6', address: ipv6Result }]);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching IP addresses:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means it will only run once on mount

  if (isLoading) {
    return <Loading/>;
  }

  return (
    <main className="flex justify-center p-48">
              <div className='w-auto gap flex flex-col justify-center gap-4'>

            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Want to know your </span> IP address?</h1>
            <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">An IP address is like a digital street address for devices connected to the internet. It helps data find its way to the right destination, whether it&apos;s a computer, phone, or any other device online.</p>
      <IpDetails ipDetails={ips}/>
      </div>
    </main>
  );
}

export default Home;
