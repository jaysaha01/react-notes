// Password Generator


import { useState, useCallback, useEffect , useRef} from "react";

function App() {

    const [length, setLength] = useState(8); (1)
    const [numAllowed, setNumAllowed] = useState(false); (1)
    const [charAllowed, setCharAllowed] = useState(false); (1)
    const [password, Setpassword] = useState(""); (1)

    /*
    * useCallback function ko store karta he memory me full ya adha
    * kisi v chis k referance lana k liya useRef hook ka use he
    */

    const passwordRef= useRef(null);    //coppy feature - ✅ 1

    const passwordGenerator = useCallback(() => {
        (2)

        let pass = '';
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefhgijklmnopqrstuvwxyz';
        if (numAllowed) str += "0123456789"
        if (charAllowed) str += "!@#$%~^&-_+[]{}";

        for (let i = 1; i <= length; i++) {

            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char)
        }
        Setpassword(pass)
    }, [length, numAllowed, charAllowed]) //This array is for optimization


    const coppyPasswordToClipboard= useCallback(()=>{   //coppy feature - ✅ 4
        passwordRef.current?.select();//coppy feature - ✅ 5  (when select the coppy button to give coppy effect to  the input txt)
        passwordRef.current?.setSelectionRange(0,3);//coppy feature - ✅ 6  (when we select the coppy button the select only 0 to 3 charector of the input value)
        window.navigator.clipboard.writeText(password)
    },[password])
    


    useEffect(() => {
        (3)
        passwordGenerator()
    }, [length, numAllowed, charAllowed, passwordGenerator])



    return (
        <div className="w-full h-screen">

            <input type="text" value={password} placeholder={password} readOnly ref={passwordRef}/>   //coppy feature - ✅ 2
            <button onClick={coppyPasswordToClipboard}>Coppy</button>  //coppy feature - ✅ 3

            <input type="range" min={6} max={100} value={length} onChange={(e) => { setLength(e.target.value) }} />
            <label>length: {length}</label>

            <input type="checkbox" defaultChecked={numAllowed} onChange={() => setNumAllowed((prev) => !prev)} /> //Toggle feature
            <label>Number</label>

            <input type="checkbox" defaultChecked={charAllowed} onChange={() => setCharAllowed((prev) => !prev)} /> //Toggle feature
            <label>Charecter</label>

        </div>
    )
}


export default App
