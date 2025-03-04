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

// tab-test.jsx (parent Component)


import Tabs from "./tabs";
import './tabs.css';

function RandomComponent() {
    return <h1>Some random content</h1>;
}

export default function TabTest() {   //✅2
    const tabs = [
        {
            label: "Tab 1",
            content: <div>This is content for Tab 1</div>,
        },
        {
            label: "Tab 2",
            content: <div>This is content for Tab 2</div>,
        },
        {
            label: "Tab 3",
            content: <RandomComponent />,
        },
    ];

    function handleChange(currentTabIndex) { //✅4
        console.log(currentTabIndex);
    }

    return <Tabs tabsContent={tabs} onChange={handleChange} />; //✅3
}

// tabs.jsx   //✅1

import { useState } from "react";

export default function Tabs({ tabsContent, onChange }) {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);  //✅6

    function handleOnClick(getCurrentIndex) {  //✅7
        setCurrentTabIndex(getCurrentIndex);
        onChange(getCurrentIndex);
    }

    return (
        <div className="wrapper">
            <div className="heading">
                {tabsContent.map((tabItem, index) => (
                    <div
                        className={`tab-item ${currentTabIndex === index ? "active" : ""}`}
                        onClick={() => handleOnClick(index)}      //✅5
                        key={tabItem.label}
                    >
                        <span className="label">{tabItem.label}</span>
                    </div>
                ))}
            </div>
            <div className="content" style={{ color: "red" }}>
                {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
            </div>
        </div>
    );
}

// ============================================================================================================
// custom-modal-popup

// modal-test.jsx   //✅1

import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

export default function ModalTest() {
    const [showModalPopup, setShowModalPopup] = useState(false);  //✅3

    function handleToggleModalPopup() {
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

import { useEffect, useState } from "react";
import Suggestions from "./suggesstions";

export default function SearchAutocomplete() {
    const [loading, setLoading] = useState(false);  //✅2
    const [users, setUsers] = useState([]); //✅2
    const [error, setError] = useState(null); //✅3
    const [searchParam, setSearchParam] = useState("");  //✅4
    const [showDropdown, setShowDropdown] = useState(false); //✅4
    const [filteredUsers, setFilteredUsers] = useState([]); //✅6

    function handleChange(event) {  //✅6
        const query = event.target.value.toLowerCase();
        setSearchParam(query);
        if (query.length > 1) {
            const filteredData =
                users && users.length
                    ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
                    : [];
            setFilteredUsers(filteredData);
            setShowDropdown(true);
        } else {
            setShowDropdown(false);
        }
    }

    function handleClick(event) {
        setShowDropdown(false)
        setSearchParam(event.target.innerText)
        setFilteredUsers([])
    }

    async function fetchListOfUsers() {  //✅3
        try {
            setLoading(true);
            const response = await fetch("https://dummyjson.com/users");
            const data = await response.json();

            if (data && data.users && data.users.length) {
                setUsers(data.users.map((userItem) => userItem.firstName));
                setLoading(false);
                setError(null);
            }
        } catch (error) {
            setLoading(false);
            console.log(error);
            setError(error);
        }
    }

    useEffect(() => { //✅3
        fetchListOfUsers();
    }, []);

    console.log(users, filteredUsers);

    return (
        <div className="search-autocomplete-container">
            {loading ? (
                <h1>Loading Data ! Please wait</h1>
            ) : (
                <input                                     //✅1 , 5
                    value={searchParam}
                    name="search-users"
                    placeholder="Search Users here..."
                    onChange={handleChange}
                />
            )}

            {showDropdown && <Suggestions handleClick={handleClick} data={filteredUsers} />} //✅7
        </div>
    );
}


// suggesstions.jsx
export default function Suggestions({ data, handleClick }) {  //✅7
    return (
        <ul>
            {data && data.length
                ? data.map((item, index) => (
                    <li onClick={handleClick} key={index}>
                        {item}
                    </li>
                ))
                : null}
        </ul>
    );
}


// ================================================================================================

// Tiktac game

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

// Feature Flags

// ================================================================================================

// Outside click (Click outside the content to remove the content)

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

//! use-window-resize

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

// Scroll to top and bottom feature

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


//! scroll-to-Selection.jsx

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

// index.jsx

function Pagination({ currentPage, totalPages = 10, onPageChange }) {
    function generateNoOfPages() {   //✅1
        const pages = [];

        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }

        return pages;
    }

    return (
        <div className="pagination">
            <button      //✅14
                onClick={() => onPageChange(currentPage - 1)}
                className="pagination-btn"
                disabled={currentPage === 1}
            >
                Prev
            </button>


            {generateNoOfPages().map((pageNo) => (   //✅2, 4
                <button
                    className={`pagination-btn ${currentPage === pageNo ? 'active' : ''}`}
                    key={pageNo}
                    onClick={() => onPageChange(pageNo)}
                >
                    {pageNo}
                </button>
            ))}


            <button  //✅15
                onClick={() => onPageChange(currentPage + 1)}
                className="pagination-btn"
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
}

export default Pagination;

//   test.jsx

import { useState } from "react";
import Pagination from ".";
import './pagination.css';

function PaginationTest() { //✅3


    const dummyData = Array.from({ length: 100 }, (_, index) => ({   //✅5
        id: index + 1,
        name: `Product ${index + 1}`,
    }));

    const itemsPerPage = 10;//✅6
    const [currentPage, setCurrentPage] = useState(1); //✅7

    function handlePageChange(currentPage) {   //✅13
        setCurrentPage(currentPage)
    }

    const indexOfLastItem = currentPage * itemsPerPage;  //✅8
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;  //✅9
    const currentListOfItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);  //✅10

    console.log(currentListOfItems, indexOfFirstItem, indexOfLastItem);

    return (
        <div>
            <h1>Pagination</h1>
            <ul className="list-items">  //✅11
                {currentListOfItems.map((listItem) => (
                    <li key={listItem.id}>{listItem.name}</li>
                ))}
            </ul>
            <Pagination                      //✅12
                currentPage={currentPage}
                totalPages={Math.ceil(dummyData.length / itemsPerPage)}
                onPageChange={handlePageChange}
            />
        </div>
    );
}

export default PaginationTest;



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

