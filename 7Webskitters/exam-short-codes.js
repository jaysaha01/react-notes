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

//Start Ratting Component

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

//Nested treeview navigation (Resursive menu)

// data.js  //✅1

export const menus = [
    {
        label: "Home",
        to: "/",
    },
    {
        label: "Profile",
        to: "/profile",
        children: [
            {
                label: "Details",
                to: "details",
                children: [
                    {
                        label: "Location",
                        to: "location",
                        children: [
                            {
                                label: "City",
                                to: "city",
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        label: "Settings",
        to: "/settings",
        children: [
            {
                label: "Account",
                to: "account",
            },
            {
                label: "Security",
                to: "security",
                children: [
                    {
                        label: "Login",
                        to: "login",
                    },
                    {
                        label: "Register",
                        to: "register",
                        children: [
                            {
                                label: 'Random data',
                                to: ''
                            }
                        ]
                    },
                ],
            },
        ],
    },
];

export default menus;

//   index.jsx   //✅2

import MenuList from "./menu-list";
import './styles.css'

export default function TreeView({ menus = [] }) {
    return (
        <div className="tree-view-container">
            <MenuList list={menus} />
        </div>
    );
}

// menu-list.jsx    //✅3

import MenuItem from "./menu-item";

export default function MenuList({ list = [] }) {
    return (
        <ul className="menu-list-container">
            {list && list.length
                ? list.map((listItem) => <MenuItem item={listItem} />)
                : null}
        </ul>
    );
}


//App,js
<TreeView menus={menus} />


// menu-item.jsx

import { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from 'react-icons/fa'

export default function MenuItem({ item }) {
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({}); //✅5

    function handleToggleChildren(getCurrentlabel) {  //✅7
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel],
        });
    }

    console.log(displayCurrentChildren);

    return (
        <li>
            <div className="menu-item">
                <p>{item.label}</p>
                {item && item.children && item.children.length ? (  //✅6
                    <span onClick={() => handleToggleChildren(item.label)}>
                        {
                            displayCurrentChildren[item.label] ? <FaMinus color="#fff" size={25} /> : <FaPlus color="#fff" size={25} />
                        }
                    </span>
                ) : null}
            </div>



      //✅4 , 8
            {item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? (
                <MenuList list={item.children} />
            ) : null}
        </li>
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

//! use-window-resize  ❌

//index.js

import { useLayoutEffect } from "react";
import { useState } from "react";

export default function useWindowResize() {
    const [windowSize, setWindowSize] = useState({    //✅1
        width: 0,
        height: 0,
    });

    function handleResize() {  //✅3
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }

    useLayoutEffect(() => { //✅2
        handleResize();

        window.addEventListener("resize", handleResize);

        //! it call when we go to another component in useEffect
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return windowSize;
}

// test.jsx

import useWindowResize from ".";

export default function UseWindowResizeTest() {
    const windowSize = useWindowResize();
    const { width, height } = windowSize;  //✅4

    return (
        <div>  //✅5
            <h1>Use Window resize Hook</h1>
            <p>Width is {width}</p>
            <p>Height is {height}</p>
        </div>
    );
}

// ================================================================================================

// Scroll to top and bottom feature ❌

// scroll-to-section.jsx

import { useRef } from "react";
import useFetch from "../use-fetch";

export default function ScrollToTopAndBottom() {
    const { data, error, pending } = useFetch(
        "https://dummyjson.com/products?limit=100",
        {}
    );

    const bottomRef = useRef(null); //✅4

    function handleScrollToTop() {  //✅2
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }

    function handleScrollToBottom() {   //✅6
        bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }

    /*
    const goToTop = document.getElementById("go-to-top");
    const goToBottom = document.getElementById("go-to-bottom");
    goToBottom.addEventListener("click", () => {
        goToTop.scrollIntoView({ behavior: "instant", block: "end" });
    });
    goToTop.addEventListener("click", () => {
        goToBottom.scrollIntoView({ behavior: "instant", block: "start" });
    });
    */

    if (error) {
        return <h1>Error occured ! Please try again.</h1>;
    }

    if (pending) {
        return <h1>Loading ! Please wait</h1>;
    }

    return (
        <div>  //✅1
            <h1>Scroll To Top And Bottom Feature</h1>
            <h3>This is the top section</h3>
            <button onClick={handleScrollToBottom}>Scroll To Bottom</button>  //✅5
            <ul style={{ listStyle: "none" }}>
                {data && data.products && data.products.length
                    ? data.products.map((item) => <li>{item.title}</li>)
                    : null}
            </ul>
            <button onClick={handleScrollToTop}>Scroll To Top</button>//✅2
            <div ref={bottomRef}></div> //✅3
            <h3>This is the bottom of the page</h3>
        </div>
    );
}

// ================================================================================================


//! scroll-to-Selection.jsx ❌

import { useRef } from "react"; //✅4

export default function ScrollToSection() {
    const ref = useRef();   //✅4

    const data = [  //✅2
        {
            label: "First Card",
            style: {
                width: "100%",
                height: "600px",
                background: "red",
            },
        },
        {
            label: "Second Card",
            style: {
                width: "100%",
                height: "600px",
                background: "grey",
            },
        },
        {
            label: "Third Card",
            style: {
                width: "100%",
                height: "600px",
                background: "blue",
            },
        },
        {
            label: "Fourth Card",
            style: {
                width: "100%",
                height: "600px",
                background: "green",
            },
        },
        {
            label: "Fifth Card",
            style: {
                width: "100%",
                height: "600px",
                background: "orange",
            },
        },
    ];

    function handleScrollToSection() { //✅3
        let pos = ref.current.getBoundingClientRect().top;

        window.scrollTo({
            top: pos,
            behavior: "smooth",
        });
    }

    return (
        <div>   //✅1
            <h1>Scroll to a particular section</h1>
            <button onClick={handleScrollToSection}>Click To Scroll</button> //✅3
            {data.map((dataItem, index) => (
                <div ref={index === 2 ? ref : null} style={dataItem.style}> //✅4
                    <h3>{dataItem.label}</h3>
                </div>
            ))}
        </div>
    );
}

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




# Multi select search

## reactjs-interview-questions/multi-select-input/src/components/pill.jsx

/_ eslint-disable react/prop-types _/
const Pill = ({image, text, onClick}) => {
return (
<span className="user-pill" onClick={onClick}>
<img src={image} alt={text} />
<span>{text} &times;</span>
</span>
);
};

export default Pill;

## reactjs-interview-questions/multi-select-input/src/App.jsx

import {useEffect, useRef, useState} from "react";
import "./App.css";

import Pill from "./components/pill";

function App() {
const [searchTerm, setSearchTerm] = useState("");
const [suggestions, setSuggestions] = useState([]);
const [selectedUsers, setSelectedUsers] = useState([]);
const [selectedUserSet, setSelectedUserSet] = useState(new Set());
const [activeSuggestion, setActiveSuggestion] = useState(0);

const inputRef = useRef(null);

// https://dummyjson.com/users/search?q=Jo

useEffect(() => {
const fetchUsers = () => {
setActiveSuggestion(0);
if (searchTerm.trim() === "") {
setSuggestions([]);
return;
}

      fetch(`https://dummyjson.com/users/search?q=${searchTerm}`)
        .then((res) => res.json())
        .then((data) => setSuggestions(data))
        .catch((err) => {
          console.error(err);
        });
    };

    fetchUsers();

}, [searchTerm]);

const handleSelectUser = (user) => {
setSelectedUsers([...selectedUsers, user]);
setSelectedUserSet(new Set([...selectedUserSet, user.email]));
setSearchTerm("");
setSuggestions([]);
inputRef.current.focus();
};

const handleRemoveUser = (user) => {
const updatedUsers = selectedUsers.filter(
(selectedUser) => selectedUser.id !== user.id
);
setSelectedUsers(updatedUsers);

    const updatedEmails = new Set(selectedUserSet);
    updatedEmails.delete(user.email);
    setSelectedUserSet(updatedEmails);

};

const handleKeyDown = (e) => {
if (
e.key === "Backspace" &&
e.target.value === "" &&
selectedUsers.length > 0
) {
const lastUser = selectedUsers[selectedUsers.length - 1];
handleRemoveUser(lastUser);
setSuggestions([]);
} else if (e.key === "ArrowDown" && suggestions?.users?.length > 0) {
e.preventDefault();
setActiveSuggestion((prevIndex) =>
prevIndex < suggestions.users.length - 1 ? prevIndex + 1 : prevIndex
);
} else if (e.key === "ArrowUp" && suggestions?.users?.length > 0) {
e.preventDefault();
setActiveSuggestion((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
} else if (
e.key === "Enter" &&
activeSuggestion >= 0 &&
activeSuggestion < suggestions.users.length
) {
handleSelectUser(suggestions.users[activeSuggestion]);
}
};

return (

<div className="user-search-container">
<div className="user-search-input">
{/_ Pills _/}
{selectedUsers.map((user) => {
return (
<Pill
key={user.email}
image={user.image}
text={`${user.firstName} ${user.lastName}`}
onClick={() => handleRemoveUser(user)}
/>
);
})}
{/_ input feild with search suggestions _/}
<div>
<input
ref={inputRef}
type="text"
value={searchTerm}
onChange={(e) => setSearchTerm(e.target.value)}
placeholder="Search For a User..."
onKeyDown={handleKeyDown}
/>
{/_ Search Suggestions _/}
<ul className="suggestions-list">
{suggestions?.users?.map((user, index) => {
return !selectedUserSet.has(user.email) ? (
<li
className={index === activeSuggestion ? "active" : ""}
key={user.email}
onClick={() => handleSelectUser(user)} >
<img
src={user.image}
alt={`${user.firstName} ${user.lastName}`}
/>
<span>
{user.firstName} {user.lastName}
</span>
</li>
) : (
<></>
);
})}
</ul>
</div>
</div>
</div>
);
}

export default App;

<!-- ================================================================================================================================= -->

<!-- Music Player  -->

import { useEffect, useRef, useState } from "react";
import './music.css'

function MusicPlayer() {


const audioRef = useRef(null);  //✅1
const [isPlaying, setIsPlaying] = useState(false); //✅1
const [currentMusicTrack, SetCurrentMusicTrack] = useState(0); //✅1
const [trackProgress, setTrackProgress] = useState(0); //✅1



const tracks = [
{
title: "Track 1",
source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
image: "https://via.placeholder.com/150",
},
{
title: "Track 2",
source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
image: "https://via.placeholder.com/150",
},
// Add more tracks as needed
];



useEffect(() => { //✅5
if (isPlaying) {
const interval = setInterval(() => {
setTrackProgress(
(audioRef.current.currentTime / audioRef.current.duration) * 100
);
}, 1000);

      return () => clearInterval(interval);
}

}, [isPlaying]);




function handlePauseAndPlay() {
if (isPlaying) {
audioRef.current.pause();
} else {
audioRef.current.play();
}
setIsPlaying(!isPlaying);
}



function handleSkipTrack(getDirection) {
if (getDirection === "forward") {
SetCurrentMusicTrack((prevTrack) => (prevTrack + 1) % tracks.length);
} else if (getDirection === "backward") {
SetCurrentMusicTrack(
(prevTrack) => (prevTrack - 1 + tracks.length) % tracks.length
);
}

    setTrackProgress(0);

}

return (

<div className="music-player">
<h1>Music Player</h1>
<h2>{tracks[currentMusicTrack].title}</h2> //✅2

<img                                          
        src={tracks[currentMusicTrack].image}
        alt={tracks[currentMusicTrack].title}
      />  //✅2


<audio ref={audioRef} src={tracks[currentMusicTrack].source} /> //✅2



<div className="progress-bar"> //✅3
<div
className="progress"
style={{
            width: `${trackProgress}%`,
            background: isPlaying ? "#3498db" : "#a43636",
            height: '15px'
          }} ></div>
</div>



<div className="track-controls">
<button onClick={() => handleSkipTrack("backward")}>Backward</button>

<button onClick={handlePauseAndPlay}> //✅4
{isPlaying ? "Pause" : "Play"}
</button>

<button onClick={() => handleSkipTrack("forward")}>Forward</button>
</div>
</div>
);
}

export default MusicPlayer;


currentTime = This gives you the number of seconds that have already played from the audio.
duration = This gives you the total length of the audio in seconds.

<!-- ======================================================================================================= -->


BMI Calculator

import { useState } from "react";
import './bmi.css'

function BMICalculator() {
const [weight, setWeight] = useState(null);
const [height, setHeight] = useState(null);
const [bmi, setBMI] = useState(null);
const [errorMsg, setErrorMsg] = useState("");

function calculateBmi() {
if (!height || !weight) {
setErrorMsg("Please enter both height and weight");
return;
}

    const numericHeight = parseFloat(height);
    const numericWeight = parseFloat(weight);

    if (
      isNaN(numericHeight) ||
      isNaN(numericWeight) ||
      numericHeight <= 0 ||
      numericWeight <= 0
    ) {
      setErrorMsg(
        "Please enter valid numeric values for both height and weight"
      );
      return;
    }

    const calculateHeightInMeters = numericHeight / 100;
    const calculateBmiValue = (
      numericWeight /
      (calculateHeightInMeters * calculateHeightInMeters)
    ).toFixed(2);

    setBMI(calculateBmiValue);
    setErrorMsg("");

}

console.log(bmi);

return (

<div className="bmi-calculator-container">
<h1>BMI Calculator</h1>
<div className="input-container">
<label>Height (cm):</label>
<input
onChange={(event) => setHeight(event.target.value)}
type="number"
value={height}
/>
</div>
<div className="input-container">
<label>Weight (kg):</label>
<input
onChange={(event) => setWeight(event.target.value)}
type="number"
value={weight}
/>
</div>
<button onClick={calculateBmi}>Calculate BMI</button>
{errorMsg ? <p className="error-msg-text">{errorMsg}</p> : null}
{errorMsg !== "" ? null : (
<p className="bmi-result-text">
{bmi < 18.5
? "Underweight"
: bmi >= 18.5 && bmi < 24.9
? "Normal Weight"
: bmi >= 25 && bmi < 29.9
? "Overweight"
: "Obese"}
</p>
)}
</div>
);
}

export default BMICalculator;

<!-- ============================================================================================================================= -->

Drag and drop

import { useEffect, useState } from "react";
import './draganddrop.css'

function DragAndDropFeature() {
const [loading, setLoading] = useState(false);
const [todos, setTodos] = useState([]);

async function fetchListOfTodos() {
try {
setLoading(true);
const apiResponse = await fetch(
"https://dummyjson.com/todos?limit=5&skip=0"
);
const result = await apiResponse.json();

      if (result && result.todos && result.todos.length > 0) {
        setLoading(false);
        const updatedTodos = result.todos.map((todoItem) => ({
          ...todoItem,
          status: "wip",
        }));
        setTodos(updatedTodos);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }

}

useEffect(() => {
fetchListOfTodos();
}, []);

console.log(todos);

function onDragStart(event, id){
event.dataTransfer.setData('id',id)
}

function onDrop(event,status){
const id = event.dataTransfer.getData('id');
console.log(event.dataTransfer.getData('id'));
let updateTodos = todos.filter(todoItem=> {

        if(todoItem.id.toString() === id){
            todoItem.status = status
        }
        return todoItem
    })

    setTodos(updateTodos)

}

function renderTodos() {
const todoListToRender = {
wip: [],
completed: [],
};

    todos.forEach((todoItem) => {
      todoListToRender[todoItem.status].push(
        <div
          onDragStart={(event) => onDragStart(event, todoItem.id)}
          draggable
          key={todoItem.id}
          className="todo-card"
        >
          {todoItem.todo}
        </div>
      );
    });

    return todoListToRender

}

if(loading) return <h1>Loading data! Please wait</h1>

return (

<div className="drag-and-drop-container">
<h1>Drag and Drop</h1>
<div className="drag-and-drop-board">
<div
onDrop={(event) => onDrop(event, "wip")}
onDragOver={(event) => event.preventDefault()}
className="work-in-progress" >
<h3>In Progress</h3>
<div className="todo-list-wrapper">
{renderTodos().wip}
</div>
</div>
<div
onDrop={(event) => onDrop(event, "completed")}
onDragOver={(event) => event.preventDefault()}
className="completed" >
<h3>Completed</h3>
<div className="todo-list-wrapper">
{renderTodos().completed}
</div>
</div>
</div>
</div>
);
}

export default DragAndDropFeature;

<!-- ========================================================================================================================= -->

<!-- Form Validation  -->

import { useState } from "react";
import './form.css'

function FormValidation() {
const [formData, setFormData] = useState({
username: "",
email: "",
password: "",
});
const [errors, setErrors] = useState({
username: "",
password: "",
email: "",
});

function handleFormChange(event) {
const { name, value } = event.target;
setFormData({
...formData,
[name]: value,
});
validateInput(name, value);
}

function validateInput(getName, getValue) {
switch (getName) {
case "username":
setErrors((prevErrors) => ({
...prevErrors,
username:
getValue.length < 3 ? "Username must be at least 3 characters" : "",
}));

        break;
      case "email":
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(getValue)
            ? ""
            : "Invalid email address",
        }));

        break;
      case "password":
        setErrors((prevErrors) => ({
          ...prevErrors,
          password:
            getValue.length < 5 ? "Password must be at least 5 characters" : "",
        }));

        break;

      default:
        break;
    }

}

function handleFormSubmit(event) {
event.preventDefault();

    // const validateErrors = {};

    // Object.keys(formData).forEach((dataItem) => {
    //   validateInput(dataItem, formData[dataItem]);
    //   if (errors[dataItem]) {
    //     validateErrors[dataItem] = errors[dataItem];
    //   }
    // });

    // setErrors((prevErrors) => ({
    //   ...prevErrors,
    //   ...validateErrors,
    // }));

    // if (Object.values(validateErrors).every((error) => error === "")) {
    //   //perform your form submission logic
    // } else {
    //   console.log("error is present. Please fix");
    // }

}

console.log(errors);

return (

<div className="form-validation-container">
<h1>Simple Form Validation</h1>
<form onSubmit={handleFormSubmit}>
<div className="input-wrapper">
<label htmlFor="username">User Name</label>
<input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleFormChange}
          />
<span>{errors?.username}</span>
</div>
<div className="input-wrapper">
<label htmlFor="email">Email</label>
<input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter your email"
            onChange={handleFormChange}
          />
<span>{errors?.email}</span>
</div>
<div className="input-wrapper">
<label htmlFor="password">Password</label>
<input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleFormChange}
          />
<span>{errors?.password}</span>
</div>
<button type="submit">Submit</button>
</form>
</div>
);
}

export default FormValidation;

<!-- =================================================================================================================== -->

<!-- Quiz App -->

import { useState } from "react";
import './quiz.css'

const questions = [
{
question: "What is the capital of France?",
options: ["Paris", "Berlin", "Madrid", "Rome"],
correctAnswer: "Paris",
},
{
question: "Which planet is known as the Red Planet?",
options: ["Mars", "Venus", "Jupiter", "Saturn"],
correctAnswer: "Mars",
},
{
question: 'Who wrote "Romeo and Juliet"?',
options: [
"Charles Dickens",
"Jane Austen",
"William Shakespeare",
"Mark Twain",
],
correctAnswer: "William Shakespeare",
},
{
question: "What is the largest mammal?",
options: ["Elephant", "Whale Shark", "Blue Whale", "Giraffe"],
correctAnswer: "Blue Whale",
},
{
question: "In which year did the Titanic sink?",
options: ["1905", "1912", "1920", "1931"],
correctAnswer: "1912",
},
{
question: "What is the currency of Japan?",
options: ["Yen", "Won", "Ringgit", "Baht"],
correctAnswer: "Yen",
},
{
question: "Which programming language is also a gem?",
options: ["Ruby", "Python", "Java", "C++"],
correctAnswer: "Ruby",
},
{
question: "What is the largest ocean on Earth?",
options: [
"Atlantic Ocean",
"Indian Ocean",
"Southern Ocean",
"Pacific Ocean",
],
correctAnswer: "Pacific Ocean",
},
{
question: "Who painted the Mona Lisa?",
options: [
"Pablo Picasso",
"Vincent van Gogh",
"Leonardo da Vinci",
"Claude Monet",
],
correctAnswer: "Leonardo da Vinci",
},
{
question: "What is the capital of Australia?",
options: ["Sydney", "Melbourne", "Canberra", "Perth"],
correctAnswer: "Canberra",
},
];

//currentquestion
//score
//selectedOptions
//showresult

function Quiz() {
const [currentQuestion, setCurrentQuestion] = useState(0);
const [score, setScore] = useState(0);
const [selectedOptions, setSelectedOptions] = useState(
new Array(questions.length).fill(null)
);
const [showResult, setShowResult] = useState(false);

function handleSelectedOption(getOptionItem){
const updatedSelectedOptions = [...selectedOptions];
updatedSelectedOptions[currentQuestion] = getOptionItem;
setSelectedOptions(updatedSelectedOptions)
}

function handlePreviousQuestion() {
if (currentQuestion > 0) {
setCurrentQuestion(currentQuestion - 1);
}
}

console.log(selectedOptions, score);

function handleNextQuestion() {
if (
selectedOptions[currentQuestion] ===
questions[currentQuestion].correctAnswer
) {
setScore(score + 1);
}

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }

}

function handleRestartQuiz(){
setCurrentQuestion(0);
setScore(0);
setSelectedOptions(new Array(questions.length).fill(null));
setShowResult(false)
}

return (

<div className="quiz">
<h1>Quiz App</h1>
{!showResult ? (
<div className="options-wrapper">
<h2>Question {currentQuestion + 1}</h2>
<p>{questions[currentQuestion].question}</p>
<div className="options">
{questions[currentQuestion].options.map((optionItem) => (
<button
key={optionItem}
className={`option ${
                  selectedOptions[currentQuestion] === optionItem
                    ? "selected"
                    : ""
                }`}
onClick={()=> handleSelectedOption(optionItem)} >
{optionItem}
</button>
))}
</div>
<div className="button-container">
<button
onClick={handlePreviousQuestion}
disabled={currentQuestion === 0}
className="prev-btn" >
Previous
</button>
<button onClick={handleNextQuestion} className="next-btn">
{currentQuestion < questions.length - 1 ? "Next" : "Finish"}
</button>
</div>
</div>
) : (
<div className="show-result-wrapper">
<h3>Quiz Completed</h3>
<p>Your Score: {score}</p>
<button onClick={handleRestartQuiz} className="restart-button">Restart Quiz</button>
</div>
)}
</div>
);
}

export default Quiz;

<!-- ======================================================================================================================= -->

File uploeded with preview

import { useRef, useState } from "react";
import './file-upload.css'

function FileUpload() {
const [file, setFile] = useState();
const uploadReference = useRef();
const progressReference = useRef();
const statusReference = useRef();
const loadReference = useRef();

function handleUploadFile() {
const file = uploadReference.current.files[0];
setFile(URL.createObjectURL(file));
let formData = new FormData();
formData.append("image", file);
let xhr = new XMLHttpRequest();
xhr.upload.addEventListener("progress", handleProgress, false);
xhr.addEventListener("load", handleSuccess, false);
xhr.addEventListener("error", handleError, false);
xhr.addEventListener("abort", handleAbort, false);

    xhr.open("POST", "https://v2.convertapi.com/upload");
    xhr.send(formData);

}

function handleProgress(event) {
loadReference.current.innerHTML = `Uploaded ${event.loaded} bytes of ${event.total}`;
const percentage = (event.loaded / event.total) \* 100;
progressReference.current.value = Math.round(percentage);
statusReference.current.innerHTML = `${Math.round(
      percentage
    )} % uploaded...`;
}

function handleSuccess(event) {
statusReference.current.innerHTML = event.target.responseText;
progressReference.current.value = 0;
}

function handleError() {
statusReference.current.innerHTML = "Upload failed! Please try again";
}

function handleAbort() {
statusReference.current.innerHTML = "Upload aborted! Please try again";
}

return (

<div className="file-upload-container">
<h1>File Upload with Progress Bar</h1>
<input
        onChange={handleUploadFile}
        type="file"
        name="file"
        ref={uploadReference}
      />
<label>
File Progress:{" "}
<progress ref={progressReference} value={"0"} max={"100"} />
</label>
<p className="status" ref={statusReference}></p>
<p className="load" ref={loadReference}></p>
<img
src={file}
alt="File-upload"
style={{ width: "300px", height: "300px" }}
/>
</div>
);
}

export default FileUpload;

<!-- ====================================================================================================================== -->

PDF Viewer

import {
Document,
PDFDownloadLink,
PDFViewer,
Page,
Text,
View,
} from "@react-pdf/renderer";
import { useEffect, useState } from "react";
import './pdf.css'

function PdfViewComponent({ productDetails }) {
return (
<Document>
<Page>
<View>
<Text>{productDetails?.title}</Text>
<Text>{productDetails?.description}</Text>
<Text>{productDetails?.category}</Text>
</View>
</Page>
</Document>
);
}

function PdfViewer() {
const [products, setProducts] = useState([]);
const [productDetails, setProductDetails] = useState(null);

async function fetchListOfProducts() {
const apiResponse = await fetch(
"https://dummyjson.com/products?limit=10&skip=0"
);
const result = await apiResponse.json();

    if (result && result.products && result.products.length) {
      setProducts(result.products);
    }

}

useEffect(() => {
fetchListOfProducts();
}, []);

async function handleFetchProductDetails(getId) {
const apiResponse = await fetch(`https://dummyjson.com/products/${getId}`);
const result = await apiResponse.json();

    if (result) setProductDetails(result);

}

console.log(productDetails);
return (

<div className="pdf-viewer-container">
<h1>PDF Viewer</h1>
<ul>
{products && products.length > 0
? products.map((productItem) => (
<li
onClick={() => handleFetchProductDetails(productItem.id)}
key={productItem.id} >
{productItem.title}
</li>
))
: null}
</ul>
<div className="pdf-viewer-page">
<PDFViewer style={{ width: "100%", height: "800px" }}>
<PdfViewComponent productDetails={productDetails} />
</PDFViewer>
</div>
<PDFDownloadLink
fileName="Product-Details.pdf"
document={<PdfViewComponent productDetails={productDetails} />} >
<button>Download PDF</button>
</PDFDownloadLink>
</div>
);
}

export default PdfViewer;

<!-- ============================================================================================================================= -->

Debounce API Call

<!-- src/components/22. debounce-api-call/index.jsx -->

import { useEffect, useState } from "react";
import useDebounce from "./use-debounce";
import './debounce.css'

function DebounceApiCall() {
const [searchParam, setSearchParam] = useState("");
const [recipes, setRecipes] = useState([]);
const [pending, setPending] = useState(false);

const debounceParamValue = useDebounce(searchParam, 1000);

async function fetchListOfRecipes() {
try {
setPending(true);
const apiResponse = await fetch(
`https://dummyjson.com/recipes/search?q=${debounceParamValue}`
);
const result = await apiResponse.json();

      if (result && result.recipes && result.recipes.length > 0) {
        setPending(false);
        setRecipes(result.recipes);
      } else {
        setPending(false)
        setRecipes([])
      }
    } catch (error) {
      console.log(error);
      setPending(false);
    }

}

useEffect(() => {
fetchListOfRecipes();
}, [debounceParamValue]);

return (

<div className="debounce-container">
<h1>Debouce API Call</h1>
<div className="search-wrapper">
<input
type="text"
value={searchParam}
onChange={(event) => setSearchParam(event.target.value)}
placeholder="Enter Recipe Name"
/>
</div>
{pending ? <h3>Pending ! Please wait</h3> : null}
<ul>
{recipes && recipes.length > 0
? recipes.map((recipeItem) => <li>{recipeItem.name}</li>)
: <h3>No Recipes found ! Please try with different search</h3>}
</ul>
</div>
);
}

export default DebounceApiCall;

<!-- src/components/22. debounce-api-call/use-debounce.jsx -->

import { useEffect, useState } from "react";

function useDebounce(paramValue, delay = 1000) {
const [debounceValue, setDebounceValue] = useState(paramValue);

useEffect(() => {
const timeoutId = setTimeout(() => {
setDebounceValue(paramValue);
}, delay);

    return () => clearTimeout(timeoutId);

}, [paramValue, delay]);

return debounceValue;
}

export default useDebounce;

<!-- =================================================================================================================== -->

