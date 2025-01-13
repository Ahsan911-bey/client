import react from 'react';
import Image from 'next/image';
import FooterImg2 from './FooterImg2.jpg'
import Logo from './Logo.png'
const footer =() => {
    return(
    <div className='mt-2 relative'>
        <div className='relative'>
        <Image
        src={FooterImg2}
        alt='FooterImg' 
        objectFit='contain'
        layout='responsive'
         />
         <div className="absolute inset-0 flex flex-col items-start justify-center">
            <h2 className="text-3xl font-bold">A-Z List</h2>
            <p className="text-lg mt-2">Searching anime order by alphabet name A to Z.</p>
            <div className="flex space-x-2 mt-4 mb-4">
                        {['All', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'].map((letter) => (
                            <button
                                key={letter}
                                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white"
                            >
                                {letter}
                            </button>
                        ))}
                    </div>
                    <Image 
                    className='rounded-md'
                    src={Logo}
                    alt='Logo'
                    objectFit='contain'
                    layout='fixed'
                    height={50}
                    />
                    <p>Copyright © 2025 GogoAnime. All Rights Reserved.</p>
                    <p className='text-sm'>This site does not store any files on its server. All contents are provided by non-affiliated third parties.</p>
            </div>
        </div>


    </div>
    )
}
export default footer;