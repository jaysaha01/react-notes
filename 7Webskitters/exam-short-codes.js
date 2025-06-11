/* Accordian = single Silection*/

import { useEffect, useState } from "react";

// 📁indexed.js

export default function Accordian() {

    const [selected, setSelected] = useState(null);

    function handleSingleSelection(getCurrentId) {
        // setSelected(getCurrentId)
        setSelected(getCurrentId === selected ? null : getCurrentId) //double click on accourdian to close the answer
    }

    return (
        <div className="rapper">

            {
                data && data.length > 0 ?
                    <div>
                    data.map((dataItem)=>(
                        <div className="item">
                            <div onClick={() => handleSingleSelection(dataItem.id)} className="title">{dataItem.question}</div>
                            {
                                selected === dataItem.id ?
                                    <div className="answer">
                                        {dataItem.answers}
                                    </div> : null
                            }
                        </div>
                        ))
                    </div> : <div>No Data Found</div>
            }

        </div>
    )

}

// ✅ Enable Multiselection with seletion button

// 📁indexed.js

export default function Accordian() {

    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false); //✅2
    const [multiple, setMultiple] = useState([]); //✅2

    function handleSingleSelection(getCurrentId) {  //✅4
        // setSelected(getCurrentId)
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }

    function handleMultiSelection(getCurrentId) {    //✅4
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

        if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
        else cpyMultiple.splice(findIndexOfCurrentId, 1)
        setMultiple(cpyMultiple)

    }


    return (
        <div className="rapper">
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi selection</button> //✅1, 3

            {
                data && data.length > 0 ?
                    <div>
                    data.map((dataItem)=>(
                        <div className="item">
                            <div onClick={() => enableMultiSelection ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)} className="title">{dataItem.question}</div> //✅4

                            {

                                //✅5
                                enableMultiSelection ? multiple.indexOf(dataItem.id) !== -1 && <div className="answer">{dataItem.answers}</div> : selected === dataItem.id && <div className="answer">{dataItem.answers}</div>
                            }

                        </div>
                        ))
                    </div> : <div>No Data Found</div>
            }

        </div>
    )

}





// ============================================================================================================

//Random Color Generator

export default function RandomColor() {

    /*
    #345673 => 6 digit
    rgb(25,45, 67) => random color
    */

    const [typeOfColor, setTypeOfColor] = useState("hex") //✅2
    const [color, setColor] = useState("#0000") //✅2

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length)
    }

    function handleCreateRandomHexColor() {   //✅5
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)]
        }
        setColor(hexColor)
    }

    function handleCreateRandomRgbColor() {     //✅5
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const f = randomColorUtility(256);
        setColor(`rgb(${r},${g},${f})`);
    }

    useEffect(() => {    //✅7
        if (typeOfColor === "rgb") handleCreateRandomRgbColor()
        else handleCreateRandomHexColor()
    }, [typeOfColor])

    return (
        <div className="container" style={{ backgroundColor: color }}>   //✅3, 6
            <button onClick={() => setTypeOfColor("hex")}>HEX Color</button> //✅1, 4
            <button onClick={() => setTypeOfColor('rgb')}> Create RGB</button> //✅1, 4
            <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Random Color</button> //✅1, 5
            <h3>{typeOfColor === "rgb" ? "RGB" : "HEX Color"}</h3>
            <h1>{color}</h1>
        </div>
    )
}

// ============================================================================================================

//Start Rating Component

export default function StartRating({ noOfStar = 5 }) {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex) { //✅2
        setRating(getCurrentIndex)
    }

    function handleMouseEnter(getCurrentIndex) { //✅2
        setHover(getCurrentIndex)
    }

    function handleMouseLeave() {  //✅2
        setHover(rating)

    }

    return <div className={index <= (hover || rating) ? 'active' : "inactive"}> //✅3🔥
        {
            [...Array(noOfStar)].map((_, index) => {
                index += 1 //✅1
                return <FaStar key={index} onClick={() => handleClick(index)} onMouseMove={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave()} size={40} />
            })
        }

    </div>
}

<StartRating noOfStar={10} />
// ============================================================================================================

//Slider image

export default function ImageSlider({ url, limit }) {

    const [images, setImages] = useState([]);
    const [currentSlides, setCurrentSlides] = useState(0); //✅4
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImages(getUrl) { //✅1

        try {
            setLoading(true)
            const response = await fetch(`${getUrl}?page=1&limit=${limit}`);
            const data = await response.json();

            if (data) {
                setImages(data)
                setLoading(false)
            }
        } catch (e) {
            setErrorMsg(e.message);
            setLoading(false)
        }
    }

    function handlePrevious() { //✅4
        setCurrentSlides(currentSlides === 0 ? images.length - 1 : currentSlides - 1)
    }

    function handleNext() {   //✅4
        setCurrentSlides(currentSlides === images.length - 1 ? 0 : currentSlides + 1)
    }


    useEffect(() => {  //✅1
        if (url !== '') fetchImages(url)
    }, [url])


    if (loading) { //✅2
        return <div>Loading...</div>
    }


    if (errorMsg !== null) {  //✅2
        return <div>Error Occurerd! {errorMsg}</div>
    }


    return <div className="container">
        <BsArrowLeftCircleFill className="arrow arrow-left" onClick={handlePrevious} />  //✅4
        { //✅3
            images && images.length ? images.map((imageItem, index) => (       //✅4
                <img key={imageItem.id} src={imageItem.download_url} className={currentSlides === index ? "current-image" : "hide-current-image"} />
            )) : null
        }
        <BsArrowRightCircleFill className="arrow arrow-right" onClick={handleNext} />  //✅4
        <span className="circle-indicater">
            {
                images && images.length
                    ? images.map((_, index) => (<button key={index} className={currentSlides === index ? "current-indicator" : "hide-current-indicator"} onClick={() => setCurrentSlides(index)}></button>
                    )) : null
            }
        </span>
    </div>
}


<fetchImages url={"https;//www.imageslide-url-api/v2"} limit={"10"} />


// ============================================================================================================

// Load More Products

import { useEffect, useState } from "react";
import "./styles.css";

export default function LoadMoreData() {
    const [loading, setLoading] = useState(false); //✅2
    const [products, setProducts] = useState([]);  //✅3
    const [count, setCount] = useState(0);  //✅4
    const [disableButton, setDisableButton] = useState(false); //✅10

    async function fetchProducts() {  //✅5
        try {
            setLoading(true);
            const response = await fetch(
                `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20
                }`
            );

            const result = await response.json();

            if (result && result.products && result.products.length) {
                setProducts((prevData) => [...prevData, ...result.products]); //✅9
                setLoading(false);
            }

            console.log(result);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [count]);

    useEffect(() => {
        if (products && products.length === 100) setDisableButton(true); //✅11
    }, [products]);

    if (loading) {  //✅6
        return <div>Loading data ! Please wait.</div>;
    }

    return (
        <div className="load-more-container">
            <div className="product-container">
                {products && products.length    //✅7

                    ? products.map((item) => (
                        <div className="product" key={item.id}>
                            <img src={item.thumbnail} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                    ))
                    : null}
            </div>
            <div className="button-container">
                <button disabled={disableButton} onClick={() => setCount(count + 1)}>  //✅1, 8
                    Load More Products
                </button>
                {disableButton ? <p>You have reached to 100 products</p> : null} //✅12
            </div>
        </div>
    );
}


// ============================================================================================================

//QR Code Generator

import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
    const [qrCode, setQrCode] = useState("");
    const [input, setInput] = useState("");

    function handleGenerateQrCode() {
        setQrCode(input);
        setInput('')
    }

    return (
        <div>
            <h1>QR Code Generator</h1>
            <div>
                <input
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    name="qr-code"
                    value={input}
                    placeholder="Enter your value here"
                />
                <button
                    disabled={input && input.trim() !== "" ? false : true}
                    onClick={handleGenerateQrCode}
                >
                    Generate
                </button>
            </div>
            <div>
                <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
            </div>
        </div>
    );
}

// ============================================================================================================

//Light and dark theme with local storage;

//lightDarkMode.jsx

import useLocalStroage from "./useLocalStroage";
import './theme.css'

// index.js

export default function LightDarkMode() {
    const [theme, setTheme] = useLocalStroage("theme", "dark");

    function handleToggleTheme() {
        setTheme(theme === "light" ? "dark" : "light");
    }

    console.log(theme);

    return (
        <div className="light-dark-mode" data-theme={theme}>
            <div className="container">
                <p>Hello World !</p>
                <button onClick={handleToggleTheme}>Change Theme</button>
            </div>
        </div>
    );
}


// useLocalStroage.jsx //✅1

import { useEffect } from "react";
import { useState } from "react";

export default function useLocalStroage(key, defaultValue) {  //✅2
    const [value, setValue] = useState(() => {
        // This is lazy initializer function of usestate
        let currentValue;

        try {
            currentValue = JSON.parse(
                localStorage.getItem(key) || String(defaultValue)
            );
        } catch (error) {
            console.log(error);
            currentValue = defaultValue;
        }

        return currentValue;
    });

    useEffect(() => {  //✅3
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}

// theme.css
/*

  [data-theme="dark"] {
    --background: #000000;
    --text-primary: #fff;
    --button-bg: #fff;
    --button-text: #000;
  }
  .light-dark-mode {
    background-color: var(--background);
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 20px;
    transition: all 0.5s;
  }

  .light-dark-mode .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
  }

  .light-dark-mode .container p {
    color: var(--text-primary);
    font-size: 40px;
    margin: 0px;
  }

  .light-dark-mode .container button {
    background-color: var(--button-bg);
    border: 1px solid var(--button-bg);
    color: var(--button-text);
    padding: 12px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
  }
    */

// ============================================================================================================

// scroll-indicator

// index.js

import { useEffect, useState } from "react";
import "./scroll.css";

export default function ScrollIndicator({ url }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [scrollPercentage, setScrollPercentage] = useState(0); //✅2

    async function fetchData(getUrl) {
        try {
            setLoading(true);
            const response = await fetch(getUrl);
            const data = await response.json();
            if (data && data.products && data.products.length > 0) {
                setData(data.products);
                setLoading(false);
            }
        } catch (e) {
            console.log(e);
            setErrorMessage(e.message);
        }
    }

    useEffect(() => {
        fetchData(url);
    }, [url]);

    function handleScrollPercentage() {  //✅4
        console.log(
            document.body.scrollTop,
            document.documentElement.scrollTop,
            document.documentElement.scrollHeight,
            document.documentElement.clientHeight
        );

        const howMuchScrolled =
            document.body.scrollTop || document.documentElement.scrollTop;

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        setScrollPercentage((howMuchScrolled / height) * 100);
    }

    useEffect(() => { //✅3
        window.addEventListener("scroll", handleScrollPercentage);

        //!=========================************==========================
        return () => {
            window.removeEventListener("scroll", () => { });
        };
        //!=========================************==========================
    }, []);


    console.log(data, scrollPercentage);

    if (errorMessage) {
        return <div>Error ! {errorMessage}</div>;
    }

    if (loading) {
        return <div>Loading data ! Pleaae wait</div>;
    }

    return (
        <div>
            <div className="top-container">
                <h1>Custom Scroll Indicator</h1>
                <div className="scroll-progress-tracking-container">   //✅5
                    <div
                        className="current-progress-bar"
                        style={{ width: `${scrollPercentage}%` }}
                    ></div>
                </div>
            </div>
            <div className="data-container">  ✅1
                {data && data.length > 0
                    ? data.map((dataItem) => <p>{dataItem.title}</p>)
                    : null}
            </div>
        </div>
    );
}

// ============================================================================================================

// Custom Tabs

import React from "react";
import { useState } from "react";

const Tab = () => {
  const tabs = ["Tab1", "Tab2", "Tab2"]; //✅1

  const content = [
    "content 1",
    "content 2",
    "content 3", //✅5
  ];

  const [activeTab, setActiveTab] = useState(0); //✅3

  return (
    <>
      <div className="header">
        {tabs.map((elm, index) => {
          <button
          onClick={()=> setActiveTab(index)}

            className={`px-4 border hover:bg-blue ${
              activeTab === index ? "bg blue" : ""
            }`}
            
          >
            {elm}
          </button>; //✅2, 4,7
        })}
      </div>
      <div className="content">
        
        //✅6
        {content &
          content.map((content, index) => {
            if (activeTab === index) {
              return <div key={`content_${index}`}>{content}</div>;
            }else{
                return null
            }
          })}
      </div>
    </>
  );
};

export default Tab;

// ============================================================================================================
// custom-modal-popup

// modal-test.jsx   //✅1

import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

export default function ModalTest() {
    const [showModalPopup, setShowModalPopup] = useState(false);  //✅3

    function handleToggleModalPopup() {//✅4
        setShowModalPopup(!showModalPopup);
    }

    function onClose() {   //✅5
        setShowModalPopup(false);
    }

    return (
        <div>
            <button onClick={handleToggleModalPopup}>Open Modal Popup</button>  //✅4
            {showModalPopup && (
                <Modal                       //✅6
                    id={"custom-id"}
                    header={<h1>Customized Header</h1>}
                    footer={<h1>Customized Footer</h1>}
                    onClose={onClose}
                    body={<div>Customized body</div>}
                />
            )}
        </div>
    );
}


// modal.jsx   //✅7

export default function Modal({ id, header, body, footer, onClose }) {
    return (
        <div id={id || "Modal"} className="modal">
            <div className="modal-content">
                <div className="header">
                    <span onClick={onClose} className="close-modal-icon">&times;</span>
                    <h2>{header ? header : "Header"}</h2>
                </div>
                <div className="body">
                    {body ? (
                        body
                    ) : (
                        <div>
                            <p>This is our Modal Body</p>
                        </div>
                    )}
                </div>
                <div className="footer">{footer ? footer : <h2>Footer</h2>}</div>
            </div>
        </div>
    );
}


// ============================================================================================================

//   search-autocomplete-with-api

import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Tab = () => {

    let [results, setResults] = useState([])//✅3
    let [input, setInput] = useState("")//✅3



    const fetchData = async () => { //✅2
        const data = await fetch("api of the data"+ input);
        const json = await data.json()
        setResults(json?.recepes)//✅5
    }


    useEffect(() => { //✅6
        fetchData()
    }, [input])


    return (

        <>
        <div>
            <h1>Searh AutoComplete Search Bar</h1>
            <input type="text" onChange={(e) => setInput(e.target.value)} />//✅1, 4
        </div>
        <div>
            { //✅7
                results?.map((r)=>{
                    <span key={r.id}>{r.name}</span>
                })
            }
        </div>
        </>
        
    );
};

export default Tab;

//inout inside show the results and click outside of the input hide the results

import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Tab = () => {

    let [results, setResults] = useState([])
    let [input, setInput] = useState("")

    const [showResults, setShowResults] = useState(false)//✅1


    const fetchData = async () => {
        const data = await fetch("api of the data" + input);
        const json = await data.json()
        setResults(json?.recepes)
    }

    useEffect(() => {
        fetchData()
    }, [input])


    return (
        <>
            <div>
                <h1>Searh AutoComplete Search Bar</h1>
                <input type="text" onChange={(e) => setInput(e.target.value)} onFocus={()=> setShowResults(true)}  onBlur={()=>setShowResults(false)}/> //✅3
            </div>

            {showResults && (  //✅2
                <div className="resultcontainer">
                    {
                        results?.map((r) => {
                            <span key={r.id}>{r.name}</span>
                        })
                    }
                </div>
            )

            }

        </>

    );
};

export default Tab;


//impliment deboncing 
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Tab = () => {

    let [results, setResults] = useState([])
    let [input, setInput] = useState("")

    const [showResults, setShowResults] = useState(false)


    const fetchData = async () => {
        const data = await fetch("api of the data" + input);
        const json = await data.json()
        setResults(json?.recepes)
    }

    useEffect(() => {

        const timer= setTimeout(fetchData, 3000);//✅1
     
        return()=>{
            //when componet unmounts then this return will called //✅2
            clearTimeout(timer)
        }
    }, [input])


    return (
        <>
            <div>
                <h1>Searh AutoComplete Search Bar</h1>
                <input type="text" onChange={(e) => setInput(e.target.value)} onFocus={()=> setShowResults(true)}  onBlur={()=>setShowResults(false)}/> 
            </div>

            {showResults && (  
                <div className="resultcontainer">
                    {
                        results?.map((r) => {
                            <span key={r.id}>{r.name}</span>
                        })
                    }
                </div>
            )

            }

        </>

    );
};

export default Tab;





// ================================================================================================

// Tiktac game❌

// 0 1 2
// 3 4 5
// 6 7 8

import { useEffect, useState } from "react";
import "./styles.css";

function Square({ value, onClick }) {  //✅1
    return (
        <button onClick={onClick} className="square">
            {value}
        </button>
    );
}

export default function TicTacToe() {
    const [squares, setSquares] = useState(Array(9).fill("")); //["", "", "", "", "", "", "", "", ""]  //✅3
    const [isXTurn, setIsXTurn] = useState(true); //✅3
    const [status, setStatus] = useState("");

    function getWinner(squares) {   //✅6
        const winningPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 4, 8],
            [2, 5, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
        ];

        for (let i = 0; i < winningPatterns.length; i++) {
            const [x, y, z] = winningPatterns[i];

            if (
                squares[x] &&
                squares[x] === squares[y] &&
                squares[x] === squares[z]
            ) {
                return squares[x];
            }
        }

        return null;
    }

    function handleClick(getCurrentSquare) {  //✅5
        let cpySquares = [...squares];
        if (getWinner(cpySquares) || cpySquares[getCurrentSquare]) return;
        cpySquares[getCurrentSquare] = isXTurn ? "X" : "O";
        setIsXTurn(!isXTurn);
        setSquares(cpySquares);
    }

    function handleRestart() { //✅9
        setIsXTurn(true);
        setSquares(Array(9).fill(""));
    }

    useEffect(() => {   //✅7
        if (!getWinner(squares) && squares.every((item) => item !== "")) {
            setStatus(`This is a draw ! Please restart the game`);
        } else if (getWinner(squares)) {
            setStatus(`Winner is ${getWinner(squares)}. Please restart the game`);
        } else {
            setStatus(`Next player is ${isXTurn ? "X" : "O"}`);
        }
    }, [squares, isXTurn]);

    console.log(squares);

    return (
        <div className="tic-tac-toe-container">   //✅2, 4
            <div className="row">
                <Square value={squares[0]} onClick={() => handleClick(0)} />
                <Square value={squares[1]} onClick={() => handleClick(1)} />
                <Square value={squares[2]} onClick={() => handleClick(2)} />
            </div>
            <div className="row">
                <Square value={squares[3]} onClick={() => handleClick(3)} />
                <Square value={squares[4]} onClick={() => handleClick(4)} />
                <Square value={squares[5]} onClick={() => handleClick(5)} />
            </div>
            <div className="row">
                <Square value={squares[6]} onClick={() => handleClick(6)} />
                <Square value={squares[7]} onClick={() => handleClick(7)} />
                <Square value={squares[8]} onClick={() => handleClick(8)} />
            </div>
            <h1>{status}</h1>//✅8
            <button onClick={handleRestart}>Restart</button> //✅10
        </div>
    );
}



// ================================================================================================

// Outside click (Click outside the content to remove the content) ❌

//Index.jsx //✅1


import { useEffect } from "react";

export default function useOutsideClick(ref, handler) {
    useEffect(() => {

        function listener(event) {
            // If ref is not set or click is inside the referenced element, do nothing
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            // If the click is outside the referenced element, call the handler
            handler(event);
        }

        // Attach the event listener for 'mousedown' and 'touchstart'
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        /! Cleanup function: Remove the event listeners when the component unmounts. Removes the event listeners when the component unmounts or dependencies change to avoid memory leaks.*/
        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [handler, ref]); // Dependencies: Re-run if 'handler' or 'ref' changes
}

//test.jsx

import { useRef, useState } from "react";
import useOutsideClick from ".";

export default function UseOnclickOutsideTest() {
    const [showContent, setShowContent] = useState(false); //✅2

    const ref = useRef(); // Ref for the content element //✅4

    useOutsideClick(ref, () => setShowContent(false)); //✅6

    return (
        <div>
            {showContent ? (  //✅3  // If showContent is true, display the content
                <div ref={ref}>  // Ref for the content element //✅5
                    <h1>This is a random content</h1>
                    <p>
                        Please click outside of this to close this. It won't close if you
                        click inside of this content
                    </p>
                </div>
            ) : (
                <button onClick={() => setShowContent(true)}>Show Content</button>
            )}
        </div>
    );
}

// A useRef is created to track the DOM element (the content div).

<UseOnclickOutsideTest />


// ================================================================================================

// Pagination 

//Render The data

// index.jsx

import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const ProductCard=({image, product})=>{ //✅4
    return<div className='product-card'>
        <img src={image} alt={product}/>
        <span>{title}</span>
    </div>
}




const Tab = () => {

    const [products, setProducts]=useState([])//✅2

    const fetchData= async ()=>{ //✅1
        const data= await fetch("api of products?limit=500");
        const json= await data.json();
        setProducts(json.products);
    }

    useEffect(()=>{//✅3
        fetchData()
    }, [])

  return !products.length ? <h1>NO PRoducts Found</h1> :(
    <div>

        {
            products.map((p, i)=>{
                <ProductCard key={i} image={p.title} title={p.title}/> //✅4

            })
        }
      
    </div>
  )
}

export default Tab



//implimentting the paginatuon

import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const ProductCard=({image, product})=>{ 
    return<div className='product-card'>
        <img src={image} alt={product}/>
        <span>{title}</span>
    </div>
}



const PAGE_SIZE=10; //✅1

const Tab = () => {

    const [products, setProducts]=useState([])

    const [currentPage, setCurrentPage]=useState(0) //✅5

    const fetchData= async ()=>{ 

        const data= await fetch("api of products?limit=500");
        const json= await data.json();
        setProducts(json.products);
    }

    useEffect(()=>{
        fetchData()
    }, [])

    const totalProducts= products.length; //✅2
    const noOfPages= totalProducts/PAGE_SIZE; //✅3
    const start= currentPage * PAGE_SIZE; //✅5
    const end= start + PAGE_SIZE; //✅6

    const handlePageChange=(n)=>{//✅8
        setCurrentPage(n)

    }


  return !products.length ? <h1>NO PRoducts Found</h1> :(
    <div>
    
        <div>{[...Array(noOfPages)].map((n)=> <span onClick={()=>handlePageChange(n)}>{n}</span>)}</div> //✅4,8

        {
            products.slice(start, end).map((p, i)=>{ //✅7
                <ProductCard key={i} image={p.title} title={p.title}/> 

            })
        }
      
    </div>
  )
}

export default Tab


//left and right arrow

import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const ProductCard = ({ image, product }) => {
    return <div className='product-card'>
        <img src={image} alt={product} />
        <span>{title}</span>
    </div>
}



const PAGE_SIZE = 10;

const Tab = () => {

    const [products, setProducts] = useState([])

    const [currentPage, setCurrentPage] = useState(0)

    const fetchData = async () => {

        const data = await fetch("api of products?limit=500");
        const json = await data.json();
        setProducts(json.products);
    }

    useEffect(() => {
        fetchData()
    }, [])

    const totalProducts = products.length;
    const noOfPages = totalProducts / PAGE_SIZE;
    const start = currentPage * PAGE_SIZE;
    const end = start + PAGE_SIZE;

    const goToNextPage = () => { //✅2
        setCurrentPage((prev) => prev + 1)
    }

    const goToPrevPage = () => { //✅2
        setCurrentPage((prev) => prev - 1)
    }


    return !products.length ? <h1>NO PRoducts Found</h1> : (
        <div>

            <div>
                <button  disabled={currentPage === 0} onClick={() => goToPrevPage()}>👈</button> //✅1
                {[...Array(noOfPages)].map((n) => <span    className={"page-number" + (n === currentPage  ? "active" : "" )}   onClick={() => handlePageChange(n)}>{n}</span>)} //✅3
                <span disabled={currentPage === noOfPages-1} onClick={() => goToNextPage()}>👉</span> //✅1
            </div>

            {
                products.slice(start, end).map((p, i) => {
                    <ProductCard key={i} image={p.title} title={p.title} />
                })
            }

        </div>
    )
}

export default Tab





// ====================================================================================================


// Digital Clock

import { useEffect, useState } from "react";
import './clock.css'

function DigitalClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return (
        <div className="digital-clock">
            <h1>Digital Clock</h1>
            <div className="clock">
                <div className="time">
                    <span>{time.getHours().toString().padStart(2, "0")}</span>:
                    <span>{time.getMinutes().toString().padStart(2, "0")}</span>:
                    <span>{time.getSeconds().toString().padStart(2, "0")}</span>
                </div>
                <div className="date">
                    {time.toLocaleDateString(undefined, {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </div>
            </div>
        </div>
    );
}

export default DigitalClock;


// ====================================================================================================

// Stop Watch (Coundown timer)

// index.js

import { useEffect, useRef, useState } from "react";

function CountdownTimer({ initialTime, onTimeFinish }) {
    const [time, setTime] = useState(initialTime); //✅3
    const [isRunning, setIsRunning] = useState(true); //✅3
    const intervalReference = useRef();  //✅3



    useEffect(() => { //✅4
        if (isRunning) {
            //internal
            intervalReference.current = setInterval(() => {
                setTime((prevTime) => {
                    if (prevTime === 0) {
                        clearInterval(intervalReference.current);
                        setIsRunning(false);

                        if (onTimeFinish) {
                            onTimeFinish();
                        }

                        return 0;
                    }

                    return prevTime - 1;
                });
            }, 1000);
        } else {
            clearInterval(intervalReference.current);
        }

        return () => {
            clearInterval(intervalReference.current);
        };
    }, [isRunning, onTimeFinish]);



    function handlePauseAndResume() {  //✅9
        setIsRunning((prevIsRunning) => !prevIsRunning); //toggling
    }

    function handleReset() { //✅9
        clearInterval(intervalReference.current);
        setTime(initialTime);
        setIsRunning(false)
    }

    function handleStart() {  //✅9
        setIsRunning(true);
    }

    const minutes = Math.floor(time / 60); //✅5
    const seconds = time % 60; //✅6

    return (
        <div className="timer">
            <p>
                {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")} //✅7
            </p>
            <div className="timer-buttons">  //✅8
                <button onClick={handlePauseAndResume}>
                    {isRunning ? "Pause" : "Resume"}
                </button>
                <button onClick={handleReset}>Reset</button> //✅8
                <button onClick={handleStart}>Start</button>//✅8
            </div>
        </div>
    );
}

export default CountdownTimer;


// test.jsx  //✅1  

import CountdownTimer from ".";
import './timer.css'

function CountdownTimerTest() {


    function handleTimeFinish() {
        console.log(
            "Once the timer is finished I want to make an api call and save some data to database"
        );
    }

    return (
        <div className="countdown-timer-container">
            <h1>CountDown Timer</h1>
            <CountdownTimer initialTime={120} onTimeFinish={handleTimeFinish} /> //✅2
        </div>
    );
}

export default CountdownTimerTest;


// ====================================================================================================

// Step progress bar

// index.jsx

import { useState } from "react";
const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];
export default function App() {
    return (
        <div>
            <Steps />
            <StepMessage step={1}>
                <p>Pass in content</p>
                <p>✌️</p>
            </StepMessage>
            <StepMessage step={2}>
                <p>Read children prop</p>
                <p>😎</p>
            </StepMessage>
            {/* <Steps /> */}
        </div>
    );
}
function Steps() {
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);
    // const [test, setTest] = useState({ name: "Jonas" });
    function handlePrevious() {

        if (step > 1) setStep((s) => s - 1); // Update the state based on current
        state
    }
    function handleNext() {
        if (step < 3) {
            setStep((s) => s + 1);
            // setStep((s) => s + 1);
        }
        // BAD PRACTICE
        // test.name = "Fred";
        // setTest({ name: "Fred" });
    }
    return (
        <div>
            <button className="close" onClick={() => setIsOpen((is) => !is)}>
                &times;
            </button>
            {isOpen && (
                <div className="steps">
                    <div className="numbers">
                        <div className={step >= 1 ? "active" : ""}>1</div>
                        <div className={step >= 2 ? "active" : ""}>2</div>
                        <div className={step >= 3 ? "active" : ""}>3</div>
                    </div>
                    <StepMessage step={step}>
                        {messages[step - 1]}
                        <div className="buttons">
                            <Button
                                bgColor="#e7e7e7"
                                textColor="#333"
                                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
                            >
                                Learn how
                            </Button>
                        </div>
                    </StepMessage>
                    <div className="buttons">
                        <Button bgColor="#7950f2" textColor="#fff"

                            onClick={handlePrevious}> {/* This is event handeler in react */}

                            <span>👈</span> Previous

                        </Button>
                        <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
                            Next <span>👉</span>
                            <span>🤓</span>
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}
function StepMessage({ step, children }) {
    return (
        <div className="message">
            <h3>Step {step}</h3>
            {children}
        </div>
    );
}
function Button({ textColor, bgColor, onClick, children }) {
    return (
        <button
            style={{ backgroundColor: bgColor, color: textColor }}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
/*
Notes
==================================
*) Events:-
<button onMouseEnter={alert("Test")}>Next</button> =>When page relod then it
will work ;
<button onMouseEnter={()=>alert("Test")}>Next</button> =>When mouse enter to
the button thenn it will work;
*) Download :- react dev tools

*) you can make componante isolate but those componante is different with
eatch outher.

*/

/*
 Steps: -
 ========
const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

export default function App() {
    const [step, setStep] = useState(1);
    cosnt[isOpen, setIsOpen] = useState(true);
    function handlePrevious() {
        if (step > 1) setStep(step - 1)
    }
    function handleNext() {
        if (step < 3) setStep(step + 1)
    }
    return (
        <div>
            <div>
                <div calssName="steps">
                    <div className={` ${step >= 1 ? "active" : " " `}> 1 </div>
<div className={` ${step >= 2 ? "active" : " " `}> 2 </div>
<div className={` ${step >= 3 ? "active" : " " `}> 3 </div>
</div>
<p className="message">
step {step} : {messages[step-1]}
</p>

<div className="button">
<button style={{backgroundColor:"#788393",color:"3fff"}}
onClick={handlePrevious}>Previous</button>

<button style={{backgroundColor:"#788393",color:"3fff"}}
onClick={handleNext}>Next</button>
</div>
}
</div>
);
}

*/

// ====================================================================================================


//Animated Slider (1)

// App.js 

import Carousal from './carousal';

function App() {
    return (
        <Carousal>//✅1
            <img src={One} />
            <img src={Two} />
            <img src={Three} />
            <img src={Four} />
            <img src={Five} />
        </Carousal>
    )
}


// carousal.jsx  //✅2

import React from 'react'

const carousal = ({ children }) => { //✅3

    //when we pass chldren like this then we get it into children. children is a array like structure. 

    const [currentIndex, setCurrentIndex] = useState(0); //✅4
    const carousalBoxRef = useRef(); //✅6


    useEffect(() => { //✅5

        //get the images and show the first image
        const carousalBox = carousalBoxRef.current;
        const slides = carousalBox.children;
        slides[0].setAttribute("data-active", true)



        setInterval(() => {

            setCurrentIndex((prev) => {
                const carousalBox = carousalBoxRef.current;  //✅8
                const slides = carousalBox.children; //✅8
                console.log(slides) //✅8=> we found hare html collection
                const count = slides.length;  //✅8
                const newIndex = prev === count - 1 ? 0 : prev + 1;  //✅8


                [...slides].forEach((slide, index) => { //✅9
                    slide.setAttribute("data-active", index === newIndex) //✅9
                })


            })

        }, 3000)
    }, [])


    function handlePrevious() { //✅10

        const carousalBox = carousalBoxRef.current;
        const slides = carousalBox.children;
        console.log(slides)
        const count = slides.length;
        const newIndex = currentIndex === count - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)

        [...slides].forEach((slide, index) => {
            slide.setAttribute("data-active", index === newIndex)
        })

    }

    function handleNext() { //✅10


    }

    return (
        <div>
            <div className="box" ref={carousalBoxRef}> //✅7
                {children} //✅4
            </div>
            <div className="buttons">
                <button onClick={handlePrevious}>Prev</button> //✅10
                <button onClick={handleNext}>Next</button> //✅10
            </div>
        </div>
    )
}

export default carousal


//Animated Slider (2) ---- after click sometime it will run also atomatically


// carousal.jsx  

import React from 'react'

const carousal = ({ children }) => { 

    //when we pass chldren like this then we get it into children. children is a array like structure. 

    const [currentIndex, setCurrentIndex] = useState(0); 
    const carousalBoxRef = useRef();

    const intervalRef= useRef(0);//✅1


    useEffect(() => { 

        //get the images and show the first image
        const carousalBox = carousalBoxRef.current;
        const slides = carousalBox.children;
        slides[0].setAttribute("data-active", true)


         //✅2
         startSlider()
        
    }, [])


    function startSlider(){
        //✅1
        intervalRef.current= setInterval(() => {

            setCurrentIndex((prev) => {
                const carousalBox = carousalBoxRef.current;  
                const slides = carousalBox.children; 
                console.log(slides) 
                const count = slides.length;  
                const newIndex = prev === count - 1 ? 0 : prev + 1; 


                [...slides].forEach((slide, index) => { 
                    slide.setAttribute("data-active", index === newIndex) 
                })
            })
        }, 3000)
    }


    function handleNext () { 

        //stop interval 
        clearInterval(intervalRef.current) //✅3

        const carousalBox = carousalBoxRef.current;
        const slides = carousalBox.children;
        console.log(slides)
        const count = slides.length;
        const newIndex = currentIndex === count - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)

        [...slides].forEach((slide, index) => {
            slide.setAttribute("data-active", index === newIndex)
        })

        //✅4
        startSlider()


    }

    function handlePrevious() { 


    }

    return (
        <div>
            <div className="box" ref={carousalBoxRef}> 
                {children} 
            </div>
            <div className="buttons">
                <button onClick={handlePrevious}>Prev</button> 
                <button onClick={handleNext}>Next</button> 
            </div>
        </div>
    )
}

export default carousal



//Animated Slider (3) ---- Stepper 

// carousal.jsx  

import React from 'react'

const carousal = ({ children }) => { 

    //when we pass chldren like this then we get it into children. children is a array like structure. 

    const [currentIndex, setCurrentIndex] = useState(0); 
    const carousalBoxRef = useRef();

    const intervalRef= useRef(0);


    useEffect(() => { 

        //get the images and show the first image
        const carousalBox = carousalBoxRef.current;
        const slides = carousalBox.children;
        slides[0].setAttribute("data-active", true)

         startSlider()
        
    }, [])


    function startSlider(){
        intervalRef.current= setInterval(() => {

            setCurrentIndex((prev) => {
                const carousalBox = carousalBoxRef.current;  
                const slides = carousalBox.children; 
                console.log(slides) 
                const count = slides.length;  
                const newIndex = prev === count - 1 ? 0 : prev + 1; 


                [...slides].forEach((slide, index) => { 
                    slide.setAttribute("data-active", index === newIndex) 
                })
            })
        }, 3000)
    }


    function handleNext () { 

        //stop interval 
        clearInterval(intervalRef.current) 

        const carousalBox = carousalBoxRef.current;
        const slides = carousalBox.children;
        console.log(slides)
        const count = slides.length;
        const newIndex = currentIndex === count - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)

        [...slides].forEach((slide, index) => {
            slide.setAttribute("data-active", index === newIndex)
        })

        startSlider()
    }

    function handlePrevious() { 
    }


    function handleStepperClick(newIndex){ //✅2
        return()=>{
            clearInterval(intervalRef.current);

            const {slides}= getSlidesInfo();

            [...slides].forEach((slide, index) => {
                slide.setAttribute("data-active", index === newIndex)
            })

            startSlider()

            setCurrentIndex(newIndex);
        }        
    }


    return (
        <div>
            <div className="box" ref={carousalBoxRef}> 
                {children} 
            </div>
            <div className="buttons">
                <button onClick={handlePrevious}>Prev</button> 
                <button onClick={handleNext}>Next</button> 
            </div>
            <div className="stapper">//✅1
                {
                    Array.from(children).map((_,i)=>{
                        return <button onClick={()=>handleStepperClick(index)}>{i}</button>
                    })
                }
            </div>
        </div>
    )
}

export default carousal


//Animated Slider (3) ---- Sliding Animation

// style.css  ✅1

/*

.show{
animation: showAnimation 1s ease-in-out forwords;
z-index:3;
opacity:1
}

.hide{
animation: hideAnmation 1s ease-in-out forwords;
z-index:2;
opacity:0
}

@keyframes showAnmation {

from{
transform: translateX(100%)
}

to{
transform: translateX(0)
}

}



@keyframes hideAnmation {

from{
transform: translateX(0)
}

to{
transform: translateX(-100)
}

}

*/


import React from 'react'

const carousal = ({ children }) => { 

    //when we pass chldren like this then we get it into children. children is a array like structure. 

    const [currentIndex, setCurrentIndex] = useState(0); 
    const carousalBoxRef = useRef();

    const intervalRef= useRef(0);


    useEffect(() => { 

        //get the images and show the first image
        const carousalBox = carousalBoxRef.current;
        const slides = carousalBox.children;
        slides[0].setAttribute("data-active", true)

         startSlider()
        
    }, [])


    function startSlider(){   //✅2
        intervalRef.current= setInterval(() => {

            setCurrentIndex((prev) => {
                
                const {slides, count}= getSlidesInfo();

                const newIndex= prev === count -1 ? 0 : prev + 1;

                slides[prev].className.remove("show");
                slides[prev].className.add('hide');

                slides[newIndex].className.remove("hide");
                slides[newIndex].className.add('show');
            })
        }, 3000)
    }


    function handleNext () { 

        //stop interval 
        clearInterval(intervalRef.current) 

        const carousalBox = carousalBoxRef.current;
        const slides = carousalBox.children;
        console.log(slides)
        const count = slides.length;
        const newIndex = currentIndex === count - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)

        [...slides].forEach((slide, index) => {
            slide.setAttribute("data-active", index === newIndex)
        })

        startSlider()
    }

    function handlePrevious() { 
    }


    function handleStepperClick(newIndex){ 
        return()=>{
            clearInterval(intervalRef.current);

            const {slides}= getSlidesInfo();

            [...slides].forEach((slide, index) => {
                slide.setAttribute("data-active", index === newIndex)
            })
            startSlider()
            setCurrentIndex(newIndex);
        }        
    }


    return (
        <div>
            <div className="box" ref={carousalBoxRef}> 
                {children} 
            </div>
            <div className="buttons">
                <button onClick={handlePrevious}>Prev</button> 
                <button onClick={handleNext}>Next</button> 
            </div>
            <div className="stapper">
                {
                    Array.from(children).map((_,i)=>{
                        return <button onClick={()=>handleStepperClick(index)}>{i}</button>
                    })
                }
            </div>
        </div>
    )
}

export default carousal


// ===========================================================================================

// switch 

// index.js 

import React from 'react'

const index = () => {

const [isOn, setIndex]=useState(false);

function handleToggle(){
    setIsON(!isOn);
}
  return (
    <div>
        <Switch isOn={isOn} onToggle={handleToggle} label="Learning React"/>
    </div>
  )
}

export default index

// switch.jsx 

import React from 'react'

const Switch = ({isOn,onToggle=()=> {}, label=""}) => {
  return (
    <div>
        <lable>
            <input type="checkbox" checked={isOn} onChange={onToggle}/>
            <span className="slider"></span>
            <span className="switch-label">{label}</span>
        </lable> //click label to on the switch 
    </div>
  )
}

export default Switch

// ======================================================================================================================


Tab From ============================


Profile.js
-----------
export default Profile=({data, setData, errors})=>{ ✅9 , ✅13

    const {name,email, age}=data; ✅9

    const handleDataChange=(e, item)=>{   ✅9

    setData(prevState=> {
        ...prevState,
        [item]:e.target.value
    })
    }

    return(
        <div>
        <input type='text' value={name}   id="name"  onChange={(e)=> handleDataChange(e, "name")}>  ✅10
        {errors.name && <span>{errors.name}</span>}✅13


        <input type='text' value={email}  id="email" onChange={(e)=> handleDataChange(e, "age")}> ✅10
        {errors.age && <span>{errors.age}</span>}✅13



        <input type='text' value={age}    id="age"   onChange={(e)=> handleDataChange(e, "email")}>   ✅10
        {errors.email && <span>{errors.email}</span>}✅13
        
        </div>
    )
}


Interests.js
-----------
export default Interests=({data, setData, errors})=>{ ✅9, ✅13


    const {interest}=data; ✅9

    const handleDataChange=(e, name)=>{   ✅9

    setData(prevState=> {
        ...prevState,
        interests:e.target.checked 
        ? [...prevState.interests, e.target.name] 
        : prev.interests.filter((i)=> i!== e.target.name),

    }));
    };


  or 
  // This function handles when a checkbox is clicked
    const handleDataChange = (e) => {
        // Get the name of the interest from the checkbox
        const interestName = e.target.name;

        // Check if the checkbox is checked or unchecked
        if (e.target.checked) {
            // If checked, add this interest to the list
            setData({
                ...data,
                interests: [...data.interests, interestName],
            });
        } else {
            // If unchecked, remove the interest from the list
            setData({
                ...data,
                interests: data.interests.filter((interest) => interest !== interestName),
            });
        }
    };

    
    return(
        <div>
           <input type='checkbox' name="coding" checked={interest.includes("coding")} 
           onChange={handleDataChange}>  ✅10

           <input type='checkbox' name="music" checked={interest.includes("music")} 
           onChange={handleDataChange}>    ✅10

           <input type='checkbox' name="javascript" checked={interest.includes("javascript")}
           onChange={handleDataChange}
           >   ✅10

           {errors.interests && <span>{errors.interests}</span>} ✅13
           
        </div>
    )
}



Settings.js
-----------
export default Settings=({data, setData})=>{✅9

    const {theme}=data; ✅9

    const handleDataChange=(e)=>{   ✅9

    setData(prevState=> {
        ...prevState,
        theme:e.target.name
    })
    }

    return(
        <div>
        <input type='radio' name="dark" checked={theme === "dark"}   onChange={handleDataChange}>  ✅10
        <input type='radio' name="light" checked={theme === "light"} onChange={handleDataChange}>  ✅10
        </div>
    )
}


Tab From
----------
export default TableForm=()=>{

    const [data, setData]= useState({  ✅7
        name:"Aksay",
        age:"29",
        interests:["coding", "music"],
        theme:"dark"
    }); 

    const [erros, setErrors]=useState({ }) ✅13

    const [activeTab, setActiveTab]= useState(0)  ✅3

    const handleNextClick=()=>{ ✅12

    if(tabs[ActiveTab].validate())
    activeTab((prev)=> prev + 1);
    }

    const handlePrevClick=()=>{  ✅12
    if(tabs[ActiveTab].validate())
    activeTab((prev)=> prev - 1);
    }

    const handleSubmitClick=()=>{  ✅12
    // Make API Call
    
    console.log("API Call")
    }


    const tabs=[   ✅1
        {
            name:"Profile",
            component:Profile,

            validate:()=>{  ✅14
                const err={};
                if(!data.name || data.name.length < 2>){
                    err.name="Name is not Valid"
                }

                if(!data.age || data.age < 18>){
                    err.name="Age Must be Gereterthen 18"
                }

                if(!data.email || data.email.length < 2){
                    err.name="Email is not valid"
                }

                setError(err)
                return err.name || err.age || err.email ? false : true
            }
        },
        {
            name:"Interests",
            component:Interests,

            validate:()=>{  ✅14
                const err={};
                if(!data.interests.length < 1>){
                    err.interests="Select allest one interst"

                setError(err)
                return err.interests false : true
            }
        },
        {
            name:"Setting",
            component:Setting,
        },
    ]
    return(
        <div class="wrapper">

        { ✅2
          tabs.map((t,i)=>{
            <div class="heading" onClick={()=>setAciveTab(i)}>  ✅6
            <div>{t.name}</div>
            </div>
          })  
        }

        const ActiveComponent= tabs[activeTab].component ✅4

        <div class="">
        </div>
        {
            <ActiveComponent  data={data}  setData={setData} errors={erros}/> ✅5,  ✅8, ✅13
        }
        </div>

        <div className="button">
       
        {activeTab < tabs.length -1 && <button onClick={handleNextClick}>Next</button>} ✅11
         {activeTab > 0 && <button onClick={handlePrevClick}>Prev</button>} ✅11
        {activeTab === tabs.length -1 && <button onClick={handleSubmitClick}>Submit</button>} ✅11
        </div>
    )
}



<!-- =================================================================================================================== -->

    // ======================================================================================================================

// OTP 

import React from 'react'
//✅0
const OTP = ({ otpLength = 6 }) => {

    const [otpFields, setOtpFields] = useState(new Array(otpLength).fill(""))//✅1

    const ref = useRef([]); //✅4

    const handleKeyDown = (e, index) => {  //✅3
        const key = e.key;

        if (key === "ArrowLeft") { //✅6
            if (index > 0) {
                ref.current[index - 1].focus()
            }
            return;
        }

        if (key === "ArrowRight") { //✅6
            ref.current[index + 1].focus()
            return;
        }

        const coppyOtpFields = [...otpFields];
        if (key === "Backspace") {
            coppyOtpFields[index] = "";
            setOtpFields(coppyOtpFields)
            if (index > 0) {
                ref.current[index - 1].focus()
            }
            return
        }
        if (!isNaN(key)) {
            return
        }
        coppyOtpFields[index] = key

        if (index + 1 < otpFields.length) {
            ref.current[index + 1].focus() //✅4  
        }
        setOtpFields(coppyOtpFields)
    }


    useEffect(() => { //✅5
        ref.current["0"].focus()
    })

    return (
        <div>
            {
                otpFields.map((elm, index) => { //✅2                          //✅4                                             //✅3
                    return <input type="text" key={index} ref={(currentInput) => (ref.current[index] = currentInput)} value={value} onKeyDown={(e) => handleKeyDown(e, index)} />
                })
            }
        </div>
    )
}

export default OTP


// ======================================================================================================================

// infanite scross 

import React from 'react'

const InfiniteScroll = () => {

    const [data, setData] = useState([]); //✅2
    const [pageNo, setpageNo] = useState(1); //✅3

    useEffect(() => { //✅1
        fetch(`https://api data url/${pageNo}`).then((res) => {
            return res.json()
        }).then((arr) => {
            setData((oldData) => [...oldData, ...arr])
        })
    })

    return (
        <div>
            <Post data={data} setPageNo={setpageNo} />  //✅2
        </div>
    )
}

export default InfiniteScroll



// Post.jsx 

export default function Post({ data, setPageNo }) {

    useEffect(() => { //✅4
        const observer = new IntersectionObserver((param) => {
            if (param[0].isIntersecting) {
                observer.unobserve(lastImage);
                setPageNo((pageNo) => pageNo + 1)
            }
        })

        const lastImage = document.querySelector(".image-post:last-child")

        if (!lastImage) {
            return
        }
        observer.observe(lastImage)
    }, [data])


    return (
        <div>

            { //✅3
                data.map((item, index) => {
                    return (
                        <img src={item.url} />
                    )
                })
            }
        </div>

    )
}

// ======================================================================================================================


// Trafic light 

import React, { useEffect, useState } from "react";

const Mylights = () => {
  let [active, setActive] = useState(0);

  let myData = [
    {
      id: 0,
      color: "red",
    },
    {
      id: 1,
      color: "yellow",
    },
    {
      id: 2,
      color: "green",
    },
  ];

   useEffect(() => {
    const time = setInterval(() => {
      setActive((prev) => (prev === 2 ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(time); // Clear interval on component unmount
  }, []); // Run only once on mount

  return (
    <div className="box">
      {myData.map((ligt, i) => {
        return (
          <div
            className="lightsbx"
            style={active === i ? {backgroundColor:ligt.color} : {background:"gray"}}
          ></div>
        );
      })}
    </div>
  );
};

export default Mylights;


// ============================================================================================================================

// Drag and Drop 

// App.jsx

const initiaData = {
    Todo: [
        "Deisgn UI mockups",
        "Set up projects repository",
        "write unite test",
        "intigrating payment getway"
    ],
    Inprogress: ["Develop the altentticaton flow", "Implementing App"],
    Complited: [
        "Set up CI/CD",
        "Conduct code reviews",
        "Deploy inital versions to staging"
    ]
};


export default function App() {
    return <DragAndDrop initialSate={initiaData} /> //✅1
}


// DragAndDrop.jsx  //✅2
import React from 'react'

const DragAndDrop = ({ initialSate }) => {

    const [data, setData] = useState(initiaData);
    const dragItem = useRef(); //✅4
    const dragContainer = useRef(); //✅4

    const handleDragStart = (e, item, container) => { //✅3 
        dragItem.current = item //✅4
        dragContainer.current = container //✅4
        e.target.style.opacity = "0.5"
    }

    const handleDragEnd = (e) => { //✅3 
        e.target.style.opacity = "1"
    }

    const handleDrop = (e, targetContainer) => { //✅5 

        const item = dragItem.current;

        const sourceContainer = dragContainer.current;

        setData((prev) => {
            const newData = { ...prev };
            newData[sourceContainer] = newData[sourceContainer].filter((i) => i !== item)
            newData[targetContainer] = [...newData[targetContainer], item]
            return newData
        })
    }

    const handleDrapOver = (e) => { //✅5 
        e.preventDefault()
    }

    return (
        <div>
            {
                Object.keys(data).map((container, index) => {
                    return (
                        <div key={index} onDrop={(e) => handleDrop(e, container)} onDragOver={handleDrapOver}>  //✅5
                            {container}
                            {
                                data[container].map((item, idx) => {
                                    return <div key={idx} onDragStart={(e) => handleDragStart(e, item, container)} onDragEnd={handleDragEnd} draggable>{item}</div>  //✅3
                                })
                            }
                        </div>
                    )
                })
            }

        </div>
    )
}

export default DragAndDrop


// ============================================================================================================================

// File Uploader 

import React from 'react'

const FileUploader = () => {

    let [files, setFiles]= useState([])

    let [isDragging, setDragging]= useState(false); //✅7

    const handleChege = (e) => {
         //✅2
         const selectTedFiles = e.target.files;
         setFiles([...files, ...selectTedFiles])
    }

    const removeFile=(fileName)=>{ //✅4
        const filteredFiles = files.filter((file)=> file.name !== fileName) 
        setFiles(filteredFiles)
    }

    const handleDragEnter=(e)=>{ //✅7 
        e.preventDefault()
        setDragging(true)
    }

    const handleDragLeave=(e)=>{ //✅7 
        e.preventDefault()
         setDragging(false)
    }

    const handleDrop=(e)=>{ //✅7 
        e.preventDefault()
        const droppedFile = e.dataTransfer.files//Drag guya file yaha add hota he
        setFiles([...files, ...droppedFile])
    }


    return (
        <div>
            <div className="file-uploader">
                {/* Drap and Drop Zone */}
                                    //✅7                     //✅7                        //✅7                           //✅7                   //✅7
                <div  onDragEnter={handleDragEnter} onDragOver={handleDragEnter}   onDragLeave={handleDragLeave}    onDrop={handleDrop}   className={`dragzone ${isDragging ? "drapzone" : ""}`}>
                    <p>Drap and Drap Hare</p>
 
                                        //✅1
                    <input onChange={handleChege} type="file" multiple id="data-input" className="hidden" />
                    <label htmlFor="data-input">Browse Files</label>
                </div>

                {/* Preview Zone  */}

                <div className="preview-zone">
                    {
                        files.map((file, i)=>{
                            return <PreviewZone key={file.name} fileDetail={file} onRemove={removeFile}/> //✅3, 5
                        })
                    }

                </div>

            
            </div>

        </div>
    )
}

export default FileUploader



// PreviewZone.jsx  //✅3

import React from 'react'

const PreviewZone = ({fileDetail, onRemove}) => {
  return (
    <div>
        <img src={URL.createObjectURL(fileDetail)} alt={fileDetail.name}/>
        <span>{fileDetail.name}</span>
        <span>{(fileDetail.size/1024).toFixed(2)}KB</span>

                          //✅6
        <button onClick={()=> onRemove(fileDetail.name)}>Remove</button>
      
    </div>
  )
}

export default PreviewZone

// ============================================================================================================




----------------------------------------------------------------------------------------------------------------

Notes app



{/* ✅ Desighn the UI and create show and hide icon */}


//Use lordicon for animated icons

import React from 'react'
import {useRef} from 'react' //✅2

const Manager = () => {
  const ref = useRef() //✅3

  const showPassword=()=>{

    if(ref.current.src.includes("icon/eyeclose.png")){ //✅4
      ref.current.src ="icon/eye.png"
    }else{
      ref.current.src ="icon/eyeclose.png"
    }
  }

  return (
    <div>
      <input placeholder="Enter Website URL"/>

      <input placeholder="Enter User name"/>

      <input placeholder="Enter Password"/>
      <img src="/icons/eye.png" onclick={showPassword} ref={ref}>Show</img> //✅1


    </div>
  )
}

export default Manager



{/* ✅ collect data from input filds and show into console */}

import React from 'react'
import {useRef} from 'react'

const Manager = () => {
  const ref = useRef()

  const [form, setForm]= useState({site:"", username:"", password:""})  //✅2

  const showPassword=()=>{

    if(ref.current.src.includes("icon/eyeclose.png")){
      ref.current.src ="icon/eye.png"
    }else{
      ref.current.src ="icon/eyeclose.png"
    }
  }

  const savePassword=()=>{   //✅5

    console.log(form)

  }

  const handleChange=(event)=>{  //✅4
    setForm(...form,[else.target.name]:else.target.value)
  }

  return (
    <div>

      <input value={form.username} name="username" placeholder="Enter User name" onChange={handleChange}/>  //✅3

      <input value={form.site} name="site" placeholder="Enter Website URL" onChange={handleChange}/>    //✅3

      <input value={form.password} name="password" placeholder="Enter Password" onChange={handleChange}/>   //✅3
      <img src="/icons/eye.png" onclick={showPassword} ref={ref}>Show</img>

      <button onClick={savePassword}>Save Password</button> //✅1


    </div>
  )
}

export default Manager



{/* ✅  save the data to localstorage */}


import React from 'react'
import {useRef} from 'react'

const Manager = () => {
  const ref = useRef()

  const [form, setForm]= useState({site:"", username:"", password:""})
  const [passwordArray, setPasswordArray]= useState([]);   //✅1

  useEffect(() => {   //✅2

    let password=localStorage.getItem("passwords")
    let passwordArray;

    if(passwords){
      setPasswordArray(json.parse(passwords))
    }
  }, [])

  const showPassword=()=>{

    if(ref.current.src.includes("icon/eyeclose.png")){
      ref.current.src ="icon/eye.png"
    }else{
      ref.current.src ="icon/eyeclose.png"
    }
  }

  const savePassword=()=>{

    console.log(form)
    setPasswordArray({...passwordArray,form})       //✅3
    localStorage.setItem("passwords" , JSON.stingify([...passwordArray, form]))  //✅4
  }

  const handleChange=(event)=>{
    setForm(...form,[else.target.name]:else.target.value)
  }

  return (
    <div>

      <input value={form.username} name="username" placeholder="Enter User name" onChange={handleChange}/>

      <input value={form.site} name="site" placeholder="Enter Website URL" onChange={handleChange}/>

      <input value={form.password} name="password" placeholder="Enter Password" onChange={handleChange}/>
      <img src="/icons/eye.png" onclick={showPassword} ref={ref}>Show</img>

      <button onClick={savePassword}>Save Password</button>

    </div>
  )
}

export default Manager


{/* ✅  Display the passwords into the box */}


import React from 'react'
import {useRef} from 'react'

const Manager = () => {
  const ref = useRef()

  const [form, setForm]= useState({site:"", username:"", password:""})
  const [passwordArray, setPasswordArray]= useState([]);

  useEffect(() => {

    let password=localStorage.getItem("passwords")
    let passwordArray;

    if(passwords){
      setPasswordArray(json.parse(passwords))
    }
  }, [])

  const showPassword=()=>{

    if(ref.current.src.includes("icon/eyeclose.png")){
      ref.current.src ="icon/eye.png"
    }else{
      ref.current.src ="icon/eyeclose.png"
    }
  }

  const savePassword=()=>{

    console.log(form)
    setPasswordArray({...passwordArray,form})
    localStorage.setItem("passwords" , JSON.stingify([...passwordArray, form]))
  }

  const handleChange=(event)=>{
    setForm(...form,[else.target.name]:else.target.value)
  }

  return (
    <div>

      <input value={form.username} name="username" placeholder="Enter User name" onChange={handleChange}/>

      <input value={form.site} name="site" placeholder="Enter Website URL" onChange={handleChange}/>

      <input value={form.password} name="password" placeholder="Enter Password" onChange={handleChange}/>
      <img src="/icons/eye.png" onclick={showPassword} ref={ref}>Show</img>

      <button onClick={savePassword}>Save Password</button>


      <div className="displayitem


      ">  //✅1
        <h2>your passwords</h2>

        { passwordArray.length === 0 && <div>No Passwords to show</div> }
        { passwordArray.length != 0 &&
        <div>
          {
            passwordArray.map((item)=>{
              return (
                <td>{item.site}</td>
                <td>{item.username}</td>
                <td>{item.password}</td>
              )
            })
          }
        </div>
        }
      </div>

    </div>
  )
}

export default Manager


{/* ✅  show and hide password */}


import React from 'react'
import {useRef} from 'react'

const Manager = () => {
  const ref = useRef()
  const passwordRef = useRef()  //✅2

  const [form, setForm]= useState({site:"", username:"", password:""})
  const [passwordArray, setPasswordArray]= useState([]);

  useEffect(() => {

    let password=localStorage.getItem("passwords")
    let passwordArray;

    if(passwords){
      setPasswordArray(json.parse(passwords))
    }
  }, [])

  const showPassword=()=>{

    passwordRef.current.type= "text"; //✅3

    if(ref.current.src.includes("icon/eyeclose.png")){
      ref.current.src ="icon/eye.png"
      passwordRef.current.type= "password";  //✅3

    }else{
      ref.current.src ="icon/eyeclose.png"
      passwordRef.current.type= "text";  //✅3
    }
  }

  const savePassword=()=>{

    console.log(form)
    setPasswordArray({...passwordArray,form})
    localStorage.setItem("passwords" , JSON.stingify([...passwordArray, form]))
  }

  const handleChange=(event)=>{
    setForm(...form,[else.target.name]:else.target.value)
  }

  return (
    <div>

      <input value={form.username} name="username" placeholder="Enter User name" onChange={handleChange}/>

      <input value={form.site} name="site" placeholder="Enter Website URL" onChange={handleChange}/>

      <input ref={passwordRef} type="password" value={form.password} name="password" placeholder="Enter Password" onChange={handleChange}/> //✅1
      <img src="/icons/eye.png" onclick={showPassword} ref={ref}>Show</img>

      <button onClick={savePassword}>Save Password</button>


      <div className="displayitem


      ">
        <h2>your passwords</h2>

        { passwordArray.length === 0 && <div>No Passwords to show</div> }
        { passwordArray.length != 0 &&
        <div>
          {
            passwordArray.map((item)=>{
              return (
                <td>{item.site}</td>
                <td>{item.username}</td>
                <td>{item.password}</td>
              )
            })
          }
        </div>
        }
      </div>

    </div>
  )
}

export default Manager


{/* ✅ Coppy and paste feature of the passwords & and show tost message*/}

https://fkhadra.github.io/react-toastify/introduction/


> npm install --save react-tostify


import React from 'react'
import {useRef} from 'react'
import { ToastContainer, toast } from 'react-toastify';  //✅3


const Manager = () => {
  const ref = useRef()
  const passwordRef = useRef()

  const [form, setForm]= useState({site:"", username:"", password:""})
  const [passwordArray, setPasswordArray]= useState([]);

  useEffect(() => {

    let password=localStorage.getItem("passwords")
    let passwordArray;

    if(passwords){
      setPasswordArray(json.parse(passwords))
    }
  }, [])

  const showPassword=()=>{

    passwordRef.current.type= "text";

    if(ref.current.src.includes("icon/eyeclose.png")){
      ref.current.src ="icon/eye.png"
      passwordRef.current.type= "password";

    }else{
      ref.current.src ="icon/eyeclose.png"
      passwordRef.current.type= "text";
    }
  }

  const coppyText(text){  //✅2
    toast('🦄 Wow so easy!', {     //✅5
      position: "Coppy to clipboard",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });

    navigator.Clipboard.writeText(text)
  }

  const savePassword=()=>{

    console.log(form)
    setPasswordArray([...passwordArray,form])
    localStorage.setItem("passwords" , JSON.stingify([...passwordArray, form]))
  }

  const handleChange=(event)=>{
    setForm(...form,[else.target.name]:else.target.value)
  }

  return (

    <ToastContainer           //✅4
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
/>

    <div>

      <input value={form.username} name="username" placeholder="Enter User name" onChange={handleChange}/>

      <input value={form.site} name="site" placeholder="Enter Website URL" onChange={handleChange}/>

      <input ref={passwordRef} type="password" value={form.password} name="password" placeholder="Enter Password" onChange={handleChange}/>
      <img src="/icons/eye.png" onclick={showPassword} ref={ref}>Show</img>

      <button onClick={savePassword}>Save Password</button>


      <div className="displayitem


      ">
        <h2>your passwords</h2>

        { passwordArray.length === 0 && <div>No Passwords to show</div> }
        { passwordArray.length != 0 &&
        <div>
          {
            passwordArray.map((item)=>{
              return (
                <td>{item.site} <span>coppy site name</span onclick={()=>coppyText(item.site)}></td> //✅1
                <td>{item.username} <span>coppy Username</span onclick={()=>coppyText(item.username)}></td> //✅1
                <td>{item.password}<span>coppy Password</span onclick={()=>coppyText(item.password)}></td> //✅1
              )
            })
          }
        </div>
        }
      </div>

    </div>
  )
}

export default Manager



{/* ✅ Delete and edit Passwords */}


import React from 'react'
import {useRef} from 'react'
import { ToastContainer, toast } from 'react-toastify';


const Manager = () => {
  const ref = useRef()
  const passwordRef = useRef()

  const [form, setForm]= useState({site:"", username:"", password:""})
  const [passwordArray, setPasswordArray]= useState([]);

  useEffect(() => {

    let password=localStorage.getItem("passwords")
    let passwordArray;

    if(passwords){
      setPasswordArray(json.parse(passwords))
    }
  }, [])

  const showPassword=()=>{

    passwordRef.current.type= "text";

    if(ref.current.src.includes("icon/eyeclose.png")){
      ref.current.src ="icon/eye.png"
      passwordRef.current.type= "password";

    }else{
      ref.current.src ="icon/eyeclose.png"
      passwordRef.current.type= "text";
    }
  }

  const coppyText(text){

    navigator.Clipboard.writeText(text)
  }

  const savePassword=()=>{
    console.log(form)
    setPasswordArray([...passwordArray, {...form, uidv4()}]) //✅1
    localStorage.setItem("passwords" , JSON.stingify([...passwordArray, {...form, uidv4()}])) //✅1
    setForm({site:"", username:"", password:""})
  }

  const deletePassword=(id)=>{ //✅2
    console.log(id);
    setPasswordArray(passwordArray.filter(item=>item.id !== id));
    localStorage.setItem("passwords",JSON.stringfy(passwordArray.filter(item=>item.id !== id)));
  }

  const editPassword=(id)=>{ //✅3

    setForm(passwordArray.filter(i => i.id === id)[0]) //set the data into the form
    setPasswordArray(passwordArray.filter(item=>item.id !== id)) //password array se delete kar do vo data

  }

  const handleChange=(event)=>{
    setForm(...form,[else.target.name]:else.target.value)
  }


  return (

    <div>

      <input value={form.username} name="username" placeholder="Enter User name" onChange={handleChange}/>

      <input value={form.site} name="site" placeholder="Enter Website URL" onChange={handleChange}/>

      <input ref={passwordRef} type="password" value={form.password} name="password" placeholder="Enter Password" onChange={handleChange}/>
      <img src="/icons/eye.png" onclick={showPassword} ref={ref}>Show</img>

      <button onClick={savePassword}>Save Password</button>

      <div className="displayitem

      ">
        <h2>your passwords</h2>

        { passwordArray.length === 0 && <div>No Passwords to show</div> }
        { passwordArray.length != 0 &&
        <div>
          {
            passwordArray.map((item)=>{
              return (
                <td>{item.site} <span>coppy site name</span onclick={()=>coppyText(item.site)}></td>
                <td>{item.username} <span>coppy Username</span onclick={()=>coppyText(item.username)}></td>
                <td>{item.password}<span>coppy Password</span onclick={()=>coppyText(item.password)}></td>
                <td onclick={()=>{editPassword(item.id)}}>Edit</td>  //✅4
                <td onclick={()=>{deletePassword(item.id)}}>Delete</td> //✅4
              )
            })
          }
        </div>
        }
      </div>

    </div>
  )
}

export default Manager

// =====================================================================================================================================

// File Explorer 


// data.json ✅1

let explorer = [
    {
        "name":"public",
        "isFolder": true ,
        "children":[
            {
            "name":"index.html",
            "isFolder": false ,
            }
        ]

    },
    {
        "name":"src",
        "isFolder": true ,
        "children":[
            {
            "name":"component",
            "isFolder": true ,
            'children':[
                {
               "name":"test",
               "isFolder": true,
               "children":[
                 {
                 "name":"file.js",
                 "isFolder": false
                 }
                ]
                }
            ]
            },
            {
            "name":"app.js",
            "isFolder": false
            },
            {
            "name":"data.json",
            "isFolder": false
            },
            {
            "name":"index.js",
            "isFolder": false
            }
        ]
    },
    {
        "name":"package.json",
        "isFolder": false
    }
]

// App.js 

import React from 'react'
import json from './data.json';

//Render list of objects ✅2
const List = ((list, addNodeToList, deleteNodeFromList)=>{

    const [isExpanded, setIsExpanded] = useState({public: true})

    return(
        <div className="container">
            {
                list.map((node)=>{
                    {node.isFolder && 
                    <span 
                    onClick={()=> 
                        setIsExpanded((prev) => ({...prev, [node?.name]: !prev[node.name]
                        }))}>{isExpanded?.[node.name] ? "-" : "+"}</span>}
                    <div key={node.id}>{node?.name}</div>

                    {node?.isFolder && (<img src={"./folder.jpg"} className="icon" onClick={()=> addNodeToList(node.id)}/>)}  //✅4

                    <span onClick={()=>deleteNodeFromList(node.id)}><img src="/deleteicons"/></span> //✅6
                    
                    {isExpanded?.[node.name] && node?.children && <List list={node.children} addNodeToList={addNodeToList} deleteNodeFromList={deleteNodeFromList}/>}
                })
            }
        </div>
    )
})


const App = () => {
  const [data, setData]= useState(json);

  //✅5
  const addNodeToList =(parentId)=>{

    const name = prompt("Enter Name");

    const updateTree =(list)=>{

        return list.map((node)=>{

            if(node.id === parentId){
                return {
                    ...node,
                    children:[
                        ...node.children,
                        {id:"123", name:name, isFolder:true, children:[]},
                    ]
                };
            };

            if(node.children){
                return {...node, children:updateTree(node.children)}
            }
            return node
        })
    }
    setData((prev)=> updateTree(prev))
  }

  //✅7
  const deleteNodeFromList =(itemId)=>{

    const updateTree = (list)=>{
        return list.filter(node => node.id !== itemId).map((node)=> {
            if(node.children){
                return {...node, children: updateTree(node.children)}
            }
            return node
        })
    }
    setData(prev => updateTree(prev))
  }

  return (
    <div>                                   //✅5
      <List list={data} addNodeToList={addNodeToList} deleteNodeFromList={deleteNodeFromList}/>  //✅3
    </div>
  )
}

export default App


