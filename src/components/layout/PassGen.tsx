import { useState } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faCopy } from "@fortawesome/free-regular-svg-icons";


const PassGen =() =>{
    const [password,setPassword]=useState("");
    const [numbersAllowed,setnumbersAllowed]=useState(false);
    const length=8;
    const alphabets="abcdefghijklonopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers="1234567890";
    const characters = numbersAllowed ? alphabets + numbers : alphabets;
    let newPassword="";
    const getPassword=() =>{
        for(let i=0; i<length; i++) {
            let rawPass= Math.floor(Math.random() *characters.length);
            newPassword+=characters[rawPass];
        }
        setPassword(newPassword);
    };
    const copyToClipboard=() =>{
        if(password){
            navigator.clipboard.writeText(password);
        };
    }
    return(
      <div className="h-80 flex justify-center items-end ">  
        <div className="flex flex-col items-center gap-4 justify-center">
            <h1 className=" text-blue-500 text-4xl">Passoword Generator</h1>
            <button onClick={getPassword} className="transition ease-in-out bg-green-600 hover:-translate-y-2 delay-100 hover:bg-green-500 duration-500 rounded-md py-2 px-9 mt-4">Generate</button>
            <div>   
                    <input placeholder="  password" value={password} className="text-black rounded-l-md mt-3 w-72 h-8"></input>
                    <button onClick={copyToClipboard} className="rounded-r-md transition ease-in-out bg-green-600 h-8 w-8 hover:scale-125 delay-150  ">
                    <FontAwesomeIcon icon={faCopy} /></button>
            </div>
            <label className="flex items-center gap-2">
                <input type="checkbox"
            checked={numbersAllowed}
            onChange={(e)=> setnumbersAllowed(e.target.checked)}
            />
                <span>Inlcude Numbers</span>
            </label>
        </div>
      </div>  
    );
};
export default PassGen;