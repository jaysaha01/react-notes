


TODO) Setting Up Development Envireonment

Download Node.js, VS Code 

1) Download Node js from crome =>  Download (LTS) virsion of Nodejs => open terminal and write node -v (to check node download or not)

? Go to vite or any Bundelers and follow the steps
--------------------------------------------------------

! Using Bun

install bun
-------------
1) open vs code => ctrl + ` (open terminal) => npm i -g bun 
2) bun -v (to check version )

install vite
--------------
1) bun create vite  => react-thapa => react => javascript => cd react-thapa => npm or bun install => bun run dev 

install react 19
-----------------
bun install react or bun install react@rc
bun install react-dom@rc


! Using NPM

1) npm -v (TO check version of npm )

2) npm create vite@latest react-thapa => react => javascript => cd react-thapa => npm install => npm run dev 






TODO) How to import files

* Create your css, JSON, or any image file in src folder

import './style.css'       (importing CSS)

----------------------------------------------------------------------------------------

import image from './jsimage.png'    (Image Import)
<img src={image} alt="Descriptin">

----------------------------------------------------------------------------------------

import jsonfile from './tes.json';
<h1>{jsonfile.stringify(jsonfile)}</h1>




TODO) Inline CSS

<p style={{margin: "1.2rem", color: "var(--bg-color)"}}>This is a paragraph </p>

TODO) Conditional Styling

<h3> Ratting: <span className={rating >= 8.5 ? "super-hit" : "average"}> This is Movie Name </span> </h3>
 



TODO) Add Bootstrap in React APP

npm i bootstrap

index.js
----------
import 'bootstrap/dist/css/bootstrap.min.css';


! Install React Anchor Link Smooth Scroll.


TODO) Add SCSS in React JS
npm i sass

src=> create App.scss => write css =>

App.js 
-------
import './App.scss'







TODO) How to use React icon
------------------------------
Go to  React icon => go to npm to download reat icon => search icon from react icon website , inport the icon and use it







/*
-Header
  -Logo
  -Nav Item

Body
  -Search
  -Resturent Container
    - Resturent Card
      - Img, Name of resturent, Rating, cuisine, Delery etc

Footer
*/


📁 App.js
-----------

import React from "react"
import ReactDOM from 'react-dom/client'

✅ Components
-------------------

const Header = () => {
    return (
        <>
            <div className="header">
                <img className="logo" src=""></img>
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </>
    )
}

const ResturentCard = (props) => {
    const { resData } = props
    return (
        <div className="res-card" style={styleCard}>
            <img src={"image cdn URL" + resData.data.cloudnaryImgID} />
            <h3>{resData.name}</h3>
            <h4>{resData.cuisines}</h4>
            <h5>{resData.avgRating}</h5>
            <h5>{resData.costForTwo / 100}</h5>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search"><input type="text" /><button>Search</button></div>
            <div className="res-container">
                {resObj.map(resturent => {
                    return <ResturentCard resData={resturent} />
                })}
            </div>
        </div>
    )
}

const AppLayout = () => {
    return <div className="app">
        <Header />
        <Body />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)


✅ Add inline css
-------------------

const styleCard={
    backgroundColor: "gray",
}
<div className="res-card" style={styleCard}> Div element </div>


✅ Props (props are just normal arguments to the functions)
-----------------------------------------------------------------

 <ResturentCard resName="Meghna Foods" cuisine="Burger, Fast Food" />

 const ResturentCard=(props)=>{
    console.log(props)    Props is an object  =>{cuisine="Burger, Fast Food",resName="Meghna Foods"}
    return(
        <div className="res-card" style={styleCard}>
            <img src="image source"/>
           <h3>{props.resName}</h3>
           <h4>{props.cuisine}</h4>
        </div>
    )
}

(or)

 const ResturentCard=(props)=>{
    const {resName, cuisine}= props; //Destructing on the fly
    return(
        <div className="res-card" style={styleCard}>
            <img src="image source"/>
           <h3>{resName}</h3>
           <h4>{cuisine}</h4>
        </div>
    )
}

✅ Show API from website
-------------------------

console => Network => FetchXHR

✅ JSON Viewer to look cool of the JSON

✅ Config drivern UI => Our website is driven by data that is call config drivern UI. When website look differt on the basis of condition. This config comes from backend.

✅ Hosted data into CDN

✅ Generate dynamic card by arrayobj
---------------------------------------

let resObj=[
    {
        resName: "Meghna Foods",
    },
    {
        resName: "KFC",
    },
    {
        resName: "McDonald's",
    },
    {
        resName: "Dominos",
    },
]

{resObj.map(resturent=>{
    return <ResturentCard key={resturent.data.id} resData={resturent}/>
})}

 const ResturentCard=(props)=>{
    const {resData}= props;
    const {cloudnaryImgID, name, cuisines, avgRating, costForTwo}= resData?data;
    return(
        <div className="res-card" style={styleCard}>
           <img src={"image cdn URL" + cloudnaryImgID}/>
           <h3>{name}</h3>
           <h4>{cuisines.join(",")}</h4>
           <h5>{avgRating}</h5>
           <h5>{costForTwo/100}</h5>
        </div>
    )
}


✅ Seperation of consern (seperate files)
------------------------------------------------

📑 Make Src folder and move App.js into src folder.

📑 Create components folder into the src and put components like Header, Footer etc into the folder.
example write Header.js file into the component and put Header componet to that

📁Header.js
---------------
const Header = () => {
    return (
        <>
            <div className="header">
                <img className="logo" src=""></img>
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </>
    )
}
export default Header;

📁App.js
---------------

import React from "react"
import ReactDOM from 'react-dom/client'
import Header from './components/Header.js or Header'

const AppLayout = () => {
    return <div className="app">
        <Header />
        <Body />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)

📑 .js or .jsx write anything no matters

📑 Create a folder "utils" into src (Keep all hard coarded things into the utils like arrayobj, url etc) =>
contants.js  , mockData.js

📁 contants.js
------------------

export const CDN_URL= "url link";   (This is named export)

export const LOGO_URL= "url link";   (This is named export)

📁 mockData.js
------------------
const resObj= [
    {
        resName: "Meghna Foods",
    },
    {
        resName: "KFC",
    },
    {
        resName: "McDonald's",
    },
    {
        resName: "Dominos",
    },
]

export default mockData; (This is default export)


📁Header.js
---------------

import {LOGO_URL} from "../utils/contants"  (This way to import named exporting)

const Header = () => {
    return (
        <>
            <div className="header">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </>
    )
}
export default Header;


✅ Create a button to see top rated resturents
------------------------------------------------

📁Body.js
----------
import ResturentCard from "./ResturentCard"
import resObj from "../utils/mockData"  (This way to import default exporting)
import {useState} from 'react';  (2)

const Body = () => {

    😎 Local state variable acceable into the component
    const [listOfResturent, setListOfResturent] = useState(resObj); (3)

    return (
        <div className="body">
            <div className="search"><input type="text" /><button>Search</button></div>
            <button className="filter-btn" onClick={()=> {

               let filteredList= listOfResturent.filter((res)=> res.data.avgRating > 4);
               setListOfResturent(filteredList)

            }}>Top Rated Resturents </button>  (1)
            <div className="res-container">
                {listOfResturent.map(resturent => {
                    return <ResturentCard resData={resturent} />
                })}
            </div>
        </div>
    )
}

✅ Fetch The Data and show the data
-------------------------------------

📁Body.js
----------
import ResturentCard from "./ResturentCard"
import {useState, useEffect} from 'react';  (1)

const Body = () => {

    😎 Local state variable acceable into the component
    -----------------------------------------------------
    const [listOfResturent, setListOfResturent] = useState([]);

    useEffect(()=>{
     ! When the body loads complity then useEffect call the callback function;
     fetchData()

    }[]) (2)

    const fetchData= async ()=>{         (3)

        let data= await fetch("https://wwww.swigi-api.com/..... ");
        const json= await data.json();
        * Optional Chaining
        setListOfResturent(json?.data?.cards[2]?.data?.data?.cards)             (4)
    }

    return (
        <div className="body">
            <div className="search"><input type="text" /><button>Search</button></div>
            <button className="filter-btn" onClick={()=> {

               let filteredList= listOfResturent.filter((res)=> res.data.avgRating > 4);
               setListOfResturent(filteredList)

            }}>Top Rated Resturents </button>  (
            <div className="res-container">
                {listOfResturents.map(resturent => {
                    return <ResturentCard resData={resturent} />
                })}
            </div>
        </div>
    )
}

TODO { Download (Allow CORS: Access-control-Allow-Origin) plugin from chrome to avoid CROS Error for API }


✅ Loading Screen
------------------

📁Body.js
----------
import ResturentCard from "./ResturentCard"
import {useState, useEffect} from 'react';
import  Shimmer from './Shimmer';   (3)


const Body = () => {

    😎 Local state variable acceable into the component
    const [listOfResturent, setListOfResturent] = useState([]);

    useEffect(()=>{
     fetchData()
    }[])

    const fetchData= async ()=>{

        let data= await fetch("https://wwww.swigi-api.com/..... ");
        const json= await data.json();
        setListOfResturent(json?.data?.cards[2]?.data?.data?.cards)
    }

    ! Conditional Rendering type 1 => Rending basis of condition
    if(listOfResturent == 0){            (1)

    return <Shimmer/> or <h1>Loading....</h1>;

    }

    ! Conditional Rendering type 2 => Rending basis of condition
    return listOfResturent === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="search"><input type="text" /><button>Search</button></div>
            <button className="filter-btn" onClick={()=> {

               let filteredList= listOfResturent.filter((res)=> res.data.avgRating > 4);
               setListOfResturent(filteredList)

            }}>Top Rated Resturents </button>  (
            <div className="res-container">
                {listOfResturents.map(resturent => {
                    return <ResturentCard resData={resturent} />
                })}
            </div>
        </div>
    )
}


📁Shimmer.js    (2)
-------------

const Shimmer=()=>{
    return(
    <div className="shimmer-cards"></di>
    <div className="shimmer-cards"></di>
    <div className="shimmer-cards"></di>
    <div className="shimmer-cards"></di>
    <div className="shimmer-cards"></di>
    )
}

export default Shimmer;




✅ Login and logout button
------------------------------

📁Header.js
---------------

import {LOGO_URL} from "../utils/contants"  (This way to import named exporting)
import {useState} from 'react'  (1)

const Header = () => {

    const [btnNameReact, setBtnNameReact]= useState("Login");    (2)

    return (
        <>
            <div className="header">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <button onClick={()=>{btnNameReact === "Login" ? setBtnNameReact("Logout"): setBtnNameReact("Login")}}> {btnNameReact} </button>  (3)
                </ul>
            </div>
        </>
    )
}
export default Header;



TODO If we use normal variable then variable will change but UI not update. if I want component get updated then we should use local state variable. when local state variable change then react rerender it's component



✅ Search Featecher
----------------------

📁Body.js
----------
import ResturentCard from "./ResturentCard"
import {useState, useEffect} from 'react';
import  Shimmer from './Shimmer';


const Body = () => {

    const [listOfResturent, setListOfResturent] = useState([]);


    const [filterResturent, setFilterResturent]= useState([]); (7)

    const [searchText, setSearchText]=useState(""); (2)


    useEffect(()=>{
     fetchData()
    }[])

    const fetchData= async ()=>{

        let data= await fetch("https://wwww.swigi-api.com/..... ");
        const json= await data.json();
        setListOfResturent(json?.data?.cards[2]?.data?.data?.cards)
        setFilterResturent(json?.data?.cards[2]?.data?.data?.cards)    (9)
    }



    return listOfResturent === 0 ? <Shimmer/> : (
        <div className="body">

            <div className="search"><input type="text" value={searchText} onChange={(e)=> {
                setSearchText(e.target.value)
            }}><button onClick={()=>{    (4)

            const filteredResturent= listOfResturent.filter((res)=> res.data.name.toLowerCase().includes(searchText.toLowerCase()))
            setListOfResturent(filteredResturent)   (5) ❌
            setFilterResturent(filteredResturent)   (8)

            }}

            >Search</button></div>   (1), (3)


            <div className="search"><input type="text" /><button>Search</button></div>
            <button className="filter-btn" onClick={()=> {

               let filteredList= listOfResturent.filter((res)=> res.data.avgRating > 4);
               setListOfResturent(filteredList)

            }}>Top Rated Resturents </button>  (
            <div className="res-container">
                {filteredResturent.map(resturent => {                (6)
                    return <ResturentCard resData={resturent} />
                })}

            </div>
        </div>
    )
}


TODO Code slow. slow coding


✅ How to use API without CROS plugin
-----------------------------------------

go to crosproxy.io => coppy the URL  & paste it befor API like this ex: https:crosproxy.io/https:swiggy-api/asljfl-fsfj


! rafce to create component by with Es6 react  plugin in vs code

✅ Routs and nested routes
---------------------------

npm i react-router-dom           (1)

📁App.js
---------------

import React from "react"
import ReactDOM from 'react-dom/client'
import Header from './components/Header.js or Header'
import Body from './components/Body'
import Error from './components/Error'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'  (2)

const AppLayout = () => {
    return <div className="app">
        <Header />
        <Body />
    </div>
}

const appRouter= createBrowserRouter([    (3)
{
   path:'/',
   element:<AppLayout/>,
   errorElement:<Error/> (5) (if got error then load error component)
},
{
   path:'/about',
   element:<About/>
},
])

const root = RouterDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />) (4)


📁Error.js
---------------

import {useRouteError} from 'react-router-dom  (6) (it give us more info about error)


const Error=()=>{

    const err= useRouteError;   (7)
    console.log(err)

    return(

    <div>
      <h1>Opps!!!</h1>
      <h2>Something Went Wrong</h2>
      <h2>{err.status}: {err.statusText}</h2>     (8)
    </div>

    )
}

export default error



✅ Create Children Routes (Header still fix when we move in different path)
----------------------------------------------------------------------------

📁App.js
---------------

import React from "react"
import ReactDOM from 'react-dom/client'
import Header from './components/Header.js or Header'
import Body from './components/Body'
import Error from './components/Error'
                                              (2)
import {createBrowserRouter, RouterProvider, outlet} from 'react-router-dom'

const AppLayout = () => {
    return <div className="app">
        <Header />
        <outlet/>          (3)
    </div>
}

const appRouter= createBrowserRouter([
{
   path:'/',
   element:<AppLayout/>,

   children:[      (1)
    {
   path:'/',
   element:<Body/>
   },
   {
   path:'/about',
   element:<About/>
   },
   {
   path:'/contact',
   element:<Contact/>
   },

   ]
   errorElement:<Error/>
},

])

const root = RouterDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)



✅ Link with elements
-----------------------

📁Header.js
---------------

import {Link} from "react-router-dom"                  (1)

const Header = () => {
    return (
        <>
            <div className="header">
                <img className="logo" src=""></img>
            </div>
            <div className="nav-item">
                <ul>
                    <li><Link to="/">Home</Link></li>      (2)
                    <li><Link to="/about">About Us</Link></li>
                </ul>
            </div>
        </>
    )
}


✅ Dynamic Routing
--------------------

📁ResturentMenu.js     (1)
-------------------
import {useState,useEffect} from 'react'    (3)
import {useParams} from 'react-router-dom'     (11)

const ResturentMenu =()=>{

    let [resInfo, setResInfo]= useState(null);  (6)

    cosnt {resId}= useParams()         //{resId: 229}            (12)


    useEffect(()=>{                (4)

        fetchMenu();

    },[]);

    const fetchMenu= async()=>{   (5)

        const data = await fetch("https://swigtys/afdsrerelj  + resId"); (13)
        const json= await data.json();
        setResInfo(json.data)         (8)

    };

    if(resInfo === null) return <Shimmer/>        (7)

    const {name, cuisines, cloudinaryImageId, costForTwo} =resInfo?.card[0]?.card?.card?.info          (9)
    const {itemCards} =resInfo?.card[0]?.card[2]?.card?.groupCards          (9)

return(
<div className="menu">
<h1>{name}</h1>      (10)
<h2>{cuisines}</h2>
<ul>
{
itemCards.map((item,i)=>{
<li key={i}>{item.cards.info.name}</li>    (10)
})
}
</ul>
)
}


📁App.js
---------------

const appRouter= createBrowserRouter([
{
   path:'/',
   element:<AppLayout/>,

   children:[
   .
   .
   {
   path:'/resturent/resId',      (2)
   element:<resturentManu/>
   },

   ]
   errorElement:<Error/>
},

])


📁Body.js
----------
import {Link} from "react-router-dom";                   (14)

const Body = () => {

                {filteredResturent.map((resturent) => (               (15)         
                    <Link key={resturent.data.id} to={"/resturent/" + resturent.data.id}>
                    <ResturentCard resData={resturent} /> 
                    <Link/>
                })}

            </div>
        </div>
    )
}




✅ Let's get classy (Create Classbase component)
----------------------------------------------------

📁 UserClass.js
----------------
import React from "react";

class UserClass extents React.Component {

constructor(props){  2
super(props);
console.log(props)  //{Aksay}
}

render(){

const {name, location}= this.props;  3
return(
<div className="user-card">
<h2>Name: {name}</h2>   4
<h3>Location: {location} </h3>  4
<h4>Contacts: @contact </h4>
</div>
)
}
}

export default UserClass;


📁 About.js
----------------
import UserClass from './UserClass';

<UserClass name={"Aksay"} location={"Deradun"}/> 1


✅ Let's get classy (Crete stete in classbase components)
-----------------------------------------------------------

import React from "react";

class UserClass extents React.Component {

constructor(props){  
super(props);

this.state={  (1)
count:0
count: 2    (4)
}

}

render(){

coust {name, location}= this.props;  
const {count, count2} = this.state;       (2 & 5)
return(
<div className="user-card">
<h2>Name: {name}</h2>   
<h3>Location: {location} </h3>  
<h4>Contacts: {count}</h4>        (3)
<h4>Contacts: {count2}</h4>       (6)
</div>
)
}
}

export default UserClass;

✅ Let's get classy (Update the state in classbase components)
--------------------------------------------------------------

import React from "react";

class UserClass extents React.Component {

constructor(props){  
super(props);

this.state={  
count:0
count: 2    
}

}

render(){

coust {name, location}= this.props;  
const {count, count2} = this.state;       
return(
<div className="user-card">
<h2>Name: {name}</h2>   
<h3>Location: {location} </h3>  
<h4>Contacts: {count}</h4>        
<h4>Contacts: {count2}</h4>       
</div>
)
}
}

export default UserClass;
*/

// ------------------------------------------------------------------------------------------------------

// https://www.codingame.com/

