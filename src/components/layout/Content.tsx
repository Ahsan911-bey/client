import { useState } from "react";
import React from "react";

const Content =() =>{
    const [password,setPassword]=useState("");
    const length=8;
    const char="abcdefghijklonopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let newPassword="";
    const getPassword=() =>{
        for(let i=0; i<length; i++) {
            let rawPass= Math.floor(Math.random() *char.length);
            newPassword+=char[rawPass];
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
                    <button onClick={copyToClipboard} className="bg-green-600 h-8 rounded-r-md">Copy</button>
            </div>
        </div>
      </div>  
    );
};
export default Content;