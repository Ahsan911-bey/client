import React from 'react';
import Image from 'next/image';
import FooterImg2 from './FooterImg2.jpg';
import Logo from './Logo.png';

const Footer = () => {
    return (
        <div className="mt-20 relative">
            <div className="relative">
                <div className='hidden md:block'>
                <Image
                    src={FooterImg2}
                    alt="FooterImg"
                    objectFit="cover"
                    layout="responsive"
                />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 min-h-[15rem] md:min-h-[30rem]">
                    <div className="hidden md:block">
                        <h2 className="text-3xl font-bold">A-Z List</h2>
                        <p className="text-lg mt-2">
                            Searching anime order by alphabet name A to Z.
                        </p>
                        <div className="flex flex-wrap justify-center space-x-2 mt-4 mb-4">
                            {['All', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'].map((letter) => (
                                <button
                                    key={letter}
                                    className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-white m-1"
                                >
                                    {letter}
                                </button>
                            ))}
                        </div>
                    </div>
                    <Image
                        className="rounded-md"
                        src={Logo}
                        alt="Logo"
                        objectFit="contain"
                        layout="fixed"
                        height={50}
                        width={150}
                    />
                    <p className="mt-4">Copyright © 2025 GogoAnime. All Rights Reserved.</p>
                    <p className="text-sm mt-2">
                        This site does not store any files on its server. All contents are provided by non-affiliated third parties.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;