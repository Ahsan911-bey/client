import React,{useState,useEffect} from "react";

const images =[
    {
        src:'images/Heroimage1.jpg',
        alt:'HeroImage1',
    },
    {
        src:'images/Heroimage2.jpg',
        alt:'Heroimage2',
    },
    {
        src:'images/Heroimage3.jpg',
        alt:'HeroImage3',
    },
    {
        src:'images/Heroimage4.jpg',
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
        <div className="relative min-h-[31rem] bg-[#0e0e0e]">
            <div className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
            style={{ backgroundImage: `url(${images[currentIndex].src})`}}
            >
               <button
               className="bg-purple-800 mt-80 ml-3 px-10 py-2 rounded-md text-3xl hover:bg-purple-700 transition"
               >PLAY NOW
               </button>
            </div>

        </div>
    )
}
export default HeroSection;