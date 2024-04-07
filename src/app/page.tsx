import IpDetails from "./components/ipDetails";
import { publicIpv4, publicIpv6 } from 'public-ip';
import { IpDetail } from "./interfaces/ipDetails";
export default async function Home() {
  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
    const fetchData = async (): Promise<IpDetail[]> => {
      try {

        const [ipv4Result, ipv6Result] = await Promise.all([publicIpv4(), publicIpv6()]);
        await sleep(1000);
        return([{ version: 'IPv4', address: ipv4Result }, { version: 'IPv6', address: ipv6Result }]);
      } catch (error) {
        console.error('Error fetching IP addresses:', error);
        return [];
      }
    };

    const ips = await fetchData();

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
