

'use client'
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

interface IProps {
    copyString: string;
    isloading: boolean;
}

const Copy: React.FC<IProps> = ({ copyString, isloading }) => {

    const [isCopied, setIsCopied] = useState<boolean>(false);
    const onCopy = () => {
        setIsCopied(true)
        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    }
    return (
                <CopyToClipboard text={copyString} onCopy={onCopy}>
        <div className={`text-right p-4 rounded-r-xl ${isloading ? ' dark:bg-gray-700' : 'bg-green-600'}`}>
            <div className="relative">
                <label htmlFor="npm-install-copy-text" className="sr-only">Label</label>
                    <button data-copy-to-clipboard-target="npm-install-copy-text" className="">
                        <span id="default-message" className={`${isCopied ? 'hidden' : ''} inline-flex items-center`}>
                            <svg className="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                            </svg>
                        </span>
                        <span id="success-message" className={`${isCopied ? '' : 'hidden'} inline-flex items-center`}>
                            <svg className="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                            <span className="text-xs font-semibold">Copied</span>
                        </span>
                    </button>
            </div>
        </div>
                </CopyToClipboard >
    )
}
export default Copy