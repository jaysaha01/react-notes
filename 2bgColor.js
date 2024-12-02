
// React Bg Color Changer

/* 📁 App.js
------------------
*/

import { useState } from "react";

function App(){

    const [color, setColor]= useState("Olive");

    return(
        <div className="w-full h-screen" style={{backgroundColor: color}}>
            <div className="fixed flex flex-wrap jusify-center bottom-12">
                <div className="flex flex-wrap justify-center gap-3">
                    <button  style={{backgroundColor: "red"}} onClick={()=>setColor("red")}>Red</button>
                    <button  style={{backgroundColor: "green"}} onClick={()=>setColor("green")}>Green</button>
                    <button  style={{backgroundColor: "yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
                </div>
            </div>
        </div>
    )
}

export default App

