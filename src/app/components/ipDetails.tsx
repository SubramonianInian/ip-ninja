
import { TbInfoCircle } from "react-icons/tb";
import Copy from './copy';
import { IpDetail } from "../interfaces/ipDetails";

interface IProps{
  ipDetails: IpDetail[]
}

async function IpDetails ({ipDetails}: IProps) {


      if (ipDetails?.length == 0) {
    return <p className='mt-10 text-center'>Sorry, unable to fetch your IP address.</p>;
  }

    return( 
    <div className='w-auto gap flex flex-col justify-center gap-4 w-100'>
        {ipDetails.map((ip, index) => (
          <div className='w-full flex-col gap-3' key={index}>
            <div key={index} className=" left-0 top-0 flex justify-between w-auto border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit static rounded-xl border lg:bg-gray-200 gap-10 items-center">
              <div className='bg-green-600 p-4 rounded-l-xl'>{ip.version}</div>
              <code className="font-mono font-bold text-left flex-1 w-96">{ip.address} </code>
              <Copy copyString={ip.address} isloading={false}/>
            </div>
            <div className='flex items-center gap-3 mt-2 justify-end'>
              <TbInfoCircle className='text-green-600'/>
              <code className="font-mono font-extralight text-xs cursor-pointer">{`What's ${ip.version}?`}</code>
            </div>
          </div>
        ))}
      </div>
      )
}

export default IpDetails;