import React,{useState,useEffect} from "react";

const images =[
    {
        src:'images/HeroTest.jpg',
        alt:'HeroImage1',
    },
    {
        src:'images/HeroTest2.jpg',
        alt:'Heroimage2',
    },
    {
        src:'images/HeroTest3.jpg',
        alt:'HeroImage3',
    },
    {
        src:'images/HeroTest4.png',
        alt:'Heroimage4',
    },
]

const HeroSection=() =>{
    const [currentIndex,SetCurrentIndex] = useState(0);


    useEffect(()=>{
        const interval= setInterval(() => {
            SetCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 5000);
        return() => clearInterval(interval);
    }, []);
    return(
        <div className="relative flex  flex-col min-h-[31rem] bg-[#0e0e0e] md:flex-row ">
            <div className="flex flex-col justify-center items-start p-4 md:w-1/2 md:items-start md:text-left md:p-8">
            <div className="w-full flex flex-col items-center sm:items-start">
                <h1 className="text-3xl mb-2 font-serif md:text-5xl">Welcome to Anime World</h1>
                <p className="text-sm mb-4 md:text-xl">Discover your favorite Anime and start Watching Now</p>
                </div>
                <div className="w-full flex justify-center sm:justify-start">
                <button
               className="bg-purple-800 px-5 py-1 rounded-md text-2xl hover:bg-purple-700 transition md:px-10 md:py-2 md:text-3xl"
               >PLAY NOW
               </button>
               </div>
            </div>
            <div className="relative h-80 md:w-1/2 md:h-auto">
            <div className="absolute inset-0 bg-cover bg-center transition-all duration-1000 rounded-md"
            style={{ backgroundImage: `url(${images[currentIndex].src})`}}
            >
            </div>
            </div>
        </div>
    )
}
export default HeroSection;