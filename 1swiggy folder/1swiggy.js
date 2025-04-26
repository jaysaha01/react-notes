Relative and absolute path
www.abc.com/tech
 1) Relative Path is binding the value with current path = link1  => www.abc.com/tech/link1
 2) Absolute Path. we pass the complete path = /link1  => www.abc.com/link1

/*

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

*/ 


/*

TODO) How to import files

* Create your css, JSON, or any image file in src folder

import './style.css'       (importing CSS)

----------------------------------------------------------------------------------------

import image from './jsimage.png'    (Image Import)
<img src={image} alt="Descriptin">

----------------------------------------------------------------------------------------

import jsonfile from './tes.json';
<h1>{jsonfile.stringify(jsonfile)}</h1>

*/


/*
TODO) Inline CSS

<p style={{margin: "1.2rem", color: "var(--bg-color)"}}>This is a paragraph </p>

TODO) Conditional Styling

<h3> Ratting: <span className={rating >= 8.5 ? "super-hit" : "average"}> This is Movie Name </span> </h3>
 
*/


/*
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

*/





TODO) How to use React icon
------------------------------
Go to  React icon => go to npm to download reat icon => search icon from react icon website , inport the icon and use it

 




Swiggy 

-Header
  -Logo
  -Nav Item

Body
  -Search
  -Resturent Container
    - Resturent Card
      - Img, Name of resturent, Rating, cuisine, Delery etc
    ResturentMenu
        ResturentCatagory
        ResturentCatagory
        ResturentCatagory
        
Footer


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
import {useState} from 'react';                                     (2)

const Body = () => {

    😎 Local state variable acceable into the component
    -----------------------------------------------------------
    const [listOfResturent, setListOfResturent] = useState(resObj); (3)

    return (
        <div className="body">
            <div className="search"><input type="text" /><button>Search</button></div>
            <button className="filter-btn" onClick={()=> {          (5)

               let filteredList= listOfResturent.filter((res)=> res.data.avgRating > 4);
               setListOfResturent(filteredList)

            }}>Top Rated Resturents </button>                        (1)
            <div className="res-container">
                {listOfResturent.map(resturent => {
                    return <ResturentCard resData={resturent} />     (4)
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
import {useState} from 'react'                                   (1)

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



✅ Search Feature
----------------------

📁Body.js
----------
import ResturentCard from "./ResturentCard"
import {useState, useEffect} from 'react';
import  Shimmer from './Shimmer';


const Body = () => {

    const [listOfRestaurants, setListOfRestraunt] = useState([]); (2)
    const [filteredRestaurant, setFilteredRestaurant] = useState([]); (2)

    const [searchText, setSearchText]=useState(""); (2)


    useEffect(()=>{
     fetchData()
    }[])

    const fetchData= async ()=>{

        let data= await fetch("https://wwww.swigi-api.com/..... ");
        const json= await data.json();
        // Optional Chaining
    setListOfRestraunt(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );    (9)
    }



    return listOfResturent === 0 ? <Shimmer/> : (
        <div className="body">

            <div className="search"><input type="text" value={searchText} onChange={(e)=> { (3)
                setSearchText(e.target.value)
            }}><button onClick={()=>{    (4)

            const filteredResturent= listOfResturent.filter((res)=> res.data.name.toLowerCase().includes(searchText.toLowerCase()))
            setListOfResturent(filteredResturent)   (5) ❌
            setFilterResturent(filteredResturent)   (8)

            }}

            >Search</button></div>   (1)


            <div className="search"><input type="text" /><button>Search</button></div>
            <button className="filter-btn" onClick={()=> {

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);

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
   path:'/resturent/:resId',      (2)
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

 => rcc to crate class base component 
 
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
count2:1
}

}

render(){

coust {name, location}= this.props;  
const {count} = this.state;       
return(
<div className="user-card">
<h2>Name: {name}</h2>   
<h3>Location: {location} </h3>  
<h4>Contacts: {count}</h4> 
<button onClick={()=> {        (1)

* Never update state variable directly
this.setState({
count : this.state.count+1
count2 : this.state.count+1
})
    
}}>          
</div>
)
}
}

export default UserClass;



✅ Life circle of the class based component (How react component is putup/Mounted into the webpage)
------------------------------------------------------------------------------------------------------

when parent componet loaded into the webpage it goes lineby line and when it saw classbase component then starts loading
classbase components now a new instace created in classbased component. when the class is called fist the constructor is called
once the constructor is called then render is called .  


✅ when both parent and child components are classbased components
--------------------------------------------------------------------

class About extents Components {

constructor(props){
super(props);
}

reder(){
return(
<div>
<h1>This is classbase components </h1>
<UserClass/>
</div>
)
}
}

When about componet (Parent component) will call first parents constructor will call then the render of the parents is called
it goes to the children class component .Then it again trigger the life circle . again the constructor of the child is called 
and then the render of the child is called. 


✅ Let's get classy (ComponentDidMount)
------------------------------------------

import React from "react";

class UserClass extents React.Component {

constructor(props){  
super(props);

this.state={  
count:0 
count2:1
}

}

componentDidMount(){              (1)

* when component is loaded first constructor is called , render methord is called and once the classbase component is mounted to the DOM then componetDidMount is called 
* when parent component is called first constructor is called , after render is called when it saw classBase component then go to the class base component . then children classbase component's constructor is called , render is called , componentDidMount is called then Parents's componentDidMount will called
* componentDidMount is use for API call. first we load our component once the componet is loaded with basic details then we make a API call and fill the data so react component loades very first. this is why use use useEffect and similarly componentDidMount

}

render(){

coust {name, location}= this.props;  
const {count} = this.state;       
return(
<div className="user-card">
<h2>Name: {name}</h2>   
<h3>Location: {location} </h3>  
<h4>Contacts: {count}</h4> 
<button onClick={()=> {       

this.setState({
count : this.state.count+1
count2 : this.state.count+1
})
    
}}>          
</div>
)
}
}

export default UserClass;


✅ Let's get classy (if two child classbase components exsists into the class base parent component)
----------------------------------------------------------------------------------------------------------

- Parent Consturtor 

* Render Phase
- Parent Render
  - First Child Constructor 
  - First Child Render

  - Second Child Constructor
  - Second Child Render

* Commit Phase 
  <DOM UPDATED - In a single time or Batch/>

  - First Child Component Did Mount
  - Second Child Component Did Mount

- Parent Component Did Mount


✅ Let's get classy ( Fetch Data in Classbase components)
-------------------------------------------------------------

import React from "react";

class UserClass extents React.Component {

constructor(props){  
super(props);

this.state={                                                       4
userInfo:{
name:"Dummy",
location: "Default",
avtar_url: "https://dummy-photo.com"
}

}

async componentDidMount(){             
const data= await fetch("https://github.com/user/ranajay-saha");    1
const json= await data.json();                                      2
console.log(json)                                                   3

this.setState({                                                     5
userInfo: json,
})
}

componentDidUpdate(){                                                8

}

componentWillUnmount(){                                               9

* It will call when component will disapare from the UI. 

}

render(){

const {name, location, avtar_url}= this.state.useInfo                 6
 
const {count} = this.state;       
return(
<div className="user-card">
<h2>Name: {name}</h2>                                                 7
<h3>Location: {location} </h3>   
<img src={avtar_url}/>

</div>
)
}
}

export default UserClass;


! In Mounting phase Constructor was called , render happened, and react Update the DOM after componentDidMount was called with an API call. When the API call was made it called setState. when the setState is called Then go to Updating cycle bigines. setState update the state variable. when the state variable is updated react triggers the renders once again. and state variable changed with the updated value after update the DOM with new content (img, data). Now call "componentDidUpdate" . How the update Cycle is worked . conponentWillUnmount() will call when component will gone form the page  

----Mounting-----

Constructor (Dummy)
Render (Dummy)
     <HTML Dummy/>
ComponentDidMount
      <API Call>
      <this.setState> => sate variable is updated

-----Update-------

render(API Data)
<Html (new API Data)>
componentDidUpdate




✅ Optimizing Our APP 
-------------------------------------------------------------

✅ Custom Hook
-----------------
* Hook is a utilify function. We take out some responsibility from a component extract it into a hooks so that our hook and component meore moduler and become more readable.  

Create useResturentMenu.js in utils folder

📁 useResturentMenu.js
----------------------------

import {useEffect} from 'react';
import {MENU_API} from '../utils/constants';

const useResturentMenu=(resId)=>{

    cosnt [resInfo, setResInfo]= useState(null);

    useEffect(()=>{
        fetchData(); 
    },[])

    cosnt fetchData = async ()=>{
        const data= await fetch(MENU_API + resId);
        cosnt json = await data.json()
        setResInfo(json.data);
    }

    return resInfo;
}

export default useResturentMenu


📁ResturentMenu.js     
-------------------
  
import {useParams} from 'react-router-dom'   
import useResturentMenu from '../utils/useResturentMenu.js'   1

const ResturentMenu =()=>{

    cosnt {resId}= useParams()    
    const resInfo = useResturentMenu(resId)                    2         

    if(resInfo === null) return <Shimmer/>        

    const {name, cuisines, cloudinaryImageId, costForTwo} =resInfo?.card[0]?.card?.card?.info          
    const {itemCards} =resInfo?.card[0]?.card[2]?.card?.groupCards          

return(
<div className="menu">
<h1>{name}</h1>      
<h2>{cuisines}</h2>
<ul>
{
itemCards.map((item,i)=>{
<li key={i}>{item.cards.info.name}</li>    
})
}
</ul>
)
}



✅ Optimizing Our APP (Create feature user online or offline)
---------------------------------------------------------------

* create Hook of useOnlineStatus. Think what is the input of the hook and what is the output of the hook

* When you create custom hooks then always use "use" it is a good practice but if not then it will not brake

Create useOnlineStatus.js in utils folder

📁 useOnlineStatus.js
-----------------------
import {useEffect, useState} from 'react';

const useOnLineStatus =()=>{

    const [onlineStatus, setOnlineStatus]= useState(true);

    * check if online

    useEffect(()=>{
        window.addEventListener("offline", ()=>{
          setOnlineStatus(false)
        })
        window.addEventListener("online", ()=>{
          setOnlineStatus(true)
        })
    },[])

    return OnlineStatus;
    
}

export default useOnLineStatus

📁Body.js
----------
import ResturentCard from "./ResturentCard"
import {useState, useEffect} from 'react';
import  Shimmer from './Shimmer';
import useOnlineStatus from '../utils/useOnlieStatus'          1 ✅


const Body = () => {

    const [listOfResturent, setListOfResturent] = useState([]);
    const [filterResturent, setFilterResturent]= useState([]); 
    const [searchText, setSearchText]=useState(""); 


    useEffect(()=>{
     fetchData()
    }[])

    const fetchData= async ()=>{

        let data= await fetch("https://wwww.swigi-api.com/.....");
        const json= await data.json();
        setListOfResturent(json?.data?.cards[2]?.data?.data?.cards)
        setFilterResturent(json?.data?.cards[2]?.data?.data?.cards)    
    }


    const onLineStatus = useOnlieStatus()    2 ✅

    if(onLineStatus === false)               3 ✅
    return(
    <h1>Looks like you are offline</h1>
    )
    
    return listOfResturent === 0 ? <Shimmer/> : (
        <div className="body">

            <div className="search"><input type="text" value={searchText} onChange={(e)=> {
                setSearchText(e.target.value)
            }}><button onClick={()=>{    

            const filteredResturent= listOfResturent.filter((res)=> res.data.name.toLowerCase().includes(searchText.toLowerCase()))
            setFilterResturent(filteredResturent)   

            }}

            >Search</button></div>   


            <div className="search"><input type="text" /><button>Search</button></div>
            <button className="filter-btn" onClick={()=> {

               let filteredList= listOfResturent.filter((res)=> res.data.avgRating > 4);
               setListOfResturent(filteredList)

            }}>Top Rated Resturents </button>  (
            <div className="res-container">
                {filteredResturent.map(resturent => {                
                    return <ResturentCard resData={resturent} />
                })}

            </div>
        </div>
    )
}


✅ Optimizing Our APP (Chanking or Dynamic bundeling or lazy loading or ondimand loadng)
-------------------------------------------------------------------------------------------

📁App.js
----------

import React , {lazy, suspense} from "react"                                       1 & 4 ✅
import ReactDOM from 'react-dom/client'
import Header from './components/Header.js or Header'
import Body from './components/Body'
import Error from './components/Error'
                                              
import {createBrowserRouter, RouterProvider, outlet} from 'react-router-dom'

let Gorocery = lazy(()=> import ("./component/Grocey"));                      2 ✅

const AppLayout = () => {
    return <div className="app">
        <Header />
        <outlet/>          
    </div>
}

const appRouter= createBrowserRouter([
{
   path:'/',
   element:<AppLayout/>,

   children:[      
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
   {
   path:'/grocery',
   element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/><Suspense/>              3 ✅
   },

   ]
   errorElement:<Error/>
},

])

const root = RouterDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)


✅ Data is the new Oil (add propmoted label in the resturent card)
-----------------------------------------------------------------------
* Higher order function or component takes a component as a input then it enhances that component and returns it back


📁Body.js
----------
import ResturentCard {withPromotedLabel} from "./ResturentCard"             ✅ 2
         
const Body = () => {

    const [searchText, setSearchText]=useState(""); 

    const ResturentCardPromoted = withPromotedLabel(ResturentCard)           ✅ 3

    return listOfResturent === 0 ? <Shimmer/> : (
        <div className="body">

               {filteredResturent.map((resturent) => (                      
                    <Link key={resturent.data.id} to={"/resturent/" + resturent.data.id}>

                    {                                                                         ✅ 4   
                    
                    resturent.data.promoted ? <ResturentCardPromoted resData={resturent} /> : <ResturentCard resData={resturent} /> 
                    
                    }
                    
                    <Link/>
                })}

            </div>
    )
}


📁 ResturentCard.js
---------------------------

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

export const withPromotedLabel = (ResturentCard)=>{    ✅ 1

    ! withPromotedLabel is a higherorder function / component that taking  resturentCard as input and it returns a new promoted label card component  
    
return (props)=>{
    return(
    <div>
    <label>Promoted</label>
    <ResturentCard {...props}/>
    </div>
    )
   }  
}

export default ResturentCard



✅ Data is the new Oil (Create Accourdian - Lifting the state Up)
------------------------------------------------------------------------


📁ResturentMenu.js     
-------------------
  
import {useParams} from 'react-router-dom'   
import useResturentMenu from '../utils/useResturentMenu.js'  

const ResturentMenu =()=>{

    cosnt {resId}= useParams()    
    const resInfo = useResturentMenu(resId)                           

    if(resInfo === null) return <Shimmer/>        

    const {name, cuisines, cloudinaryImageId, costForTwo} =resInfo?.card[0]?.card?.card?.info          
    const {itemCards} =resInfo?.card[0]?.card[2]?.card?.groupCards   
    
    const catagories= resInfo?.card[0]?.card[2]?.card?.groupCards.filter((c)=>c.card?.card?.["@type"]) === "type.goolel.com/swigey.itemcatoray";


return(

{catagories.map((catagory)=> {
    <ResturentCatagory data={catagories?.card?.card}/>
})}

)
}

📁ResturentCatagory.js     
-----------------------

const ResturentCatagory =({data})=>{               ✅ 1

const [showItems, setShowItems]= useState(false)         ✅ 6

const handleClick =()=>{                               ✅ 5 & 8
    
setShowItems(!showItems)

}
    
return(
* Header
<div onClick={handleClick}> {data.title} ({data.intemCards.length}) </div>            ✅ 4

*Body
{showItems && <ItemList items={data.itemCards} /> }              ✅ 3 & 7

)

}

export default ResturentCatagory 

📁ItemList.js                                     
---------------                               ✅ 2

const ItemList =({items})=>{
    
    return(
    
    <div>
    {items.map((item)=>{
    <div key={item.card.info.id} onClick={handleClick}>      
    <span>{item.card.info.name}</span>
    <span>{item.card.info.price ? item.card.info.price /100 : item.card.info.defaultPrise}</span>
    <button>Add+</button>
    </div>    
    })}
    </div>
    
    ) 
}

export default ItemList


✅ Data is the new Oil (Create Accourdian - open one and close all)
------------------------------------------------------------------------

! Download React DEV TOOL . In react dev tool profiler option to recoard you action and show those actions by bargraph wise. Ranked show which component take how mutch time.  

TODO) Earliter ResturentCatagory are controlling themselfs. Now we lifting ResturentCatagory state to the ResturentMenu. NOw we need to controll ResturentMenu to all the ResturentCatagory. Hare parent component controll to all the child component. 

TODO) Now ResturentCatagory is a controlled component because ResturentMenu cotrolling the ResturentCatagory now. When component has own state that is called uncontrolled component. 


-- ResturentMenu
   ResturentCatagory
      ItemList 
   ResturentCatagory
      ItemList 
   ResturentCatagory
      ItemList 

📁ResturentCatagory.js     
-----------------------
* we takeaway showitem state from hare

const ResturentCatagory =({data, showItems, setShowIndex})=>{    ✅ 1   &   4

const handleClick = () =>{

    setShowIndex()    ✅ 5
}

return(
* Header
<div onClick={handleClick}> {data.title} ({data.intemCards.length}) </div>            
*Body
{showItems && <ItemList items={data.itemCards} /> }              
)
}

export default ResturentCatagory



📁ResturentMenu.js     
-------------------
  
import {useParams} from 'react-router-dom'   
import useResturentMenu from '../utils/useResturentMenu.js'  

const ResturentMenu =()=>{

    cosnt {resId}= useParams()    
    const resInfo = useResturentMenu(resId)    
    
    const [showIndex, setShowIndex]= useState(0);                ✅ 2                

    if(resInfo === null) return <Shimmer/>        

    const {name, cuisines, cloudinaryImageId, costForTwo} =resInfo?.card[0]?.card?.card?.info          
    const {itemCards} =resInfo?.card[0]?.card[2]?.card?.groupCards   
    
    const catagories= resInfo?.card[0]?.card[2]?.card?.groupCards.filter((c)=>c.card?.card?.["@type"]) === "type.goolel.com/swigey.itemcatoray";


return(

{catagories.map((catagory, index)=> {
    <ResturentCatagory data={catagories?.card?.card} showItems={index === showIndex ? true : false } setShowIndex={()=> setShowIndex(index)}/>    ✅ 3
})}

)
}



✅ Data is the new Oil (Props Delling) (Showe default user name into Header)
---------------------------------------------------------------------------------

   
! React is a one way data flow. React data from From parent to children. Ex ResturentMenu => ResturentCatagory => ItemList 

*  Parent to child data flow Example this is Prop Drelling

ResturentMenu
---------------
const ResturentMenu = () =>{
    const dummy = "Dummy Data"
    return(
    <ResturentCatagory dummy={dummy}/>
    )
}
🔽
ResturentCatagory
------------------
const ResturentCatagory = ({dummy}) =>{
    return(
    <ItemList dummy={dummy}/>
    )
}
🔽
ItemList
---------
const ItemList = ({dummy}) =>{
    console.log(dummy)
    return()
}

! to Abvoid prop drelling we use React Context. in context we store data globally and anyone from anywhere can access it. 

* crete UserContext.js in utils folder to crete global object

! In classbase components we have not hooks


📁 UserContext.js    ✅ 1
-----------------
import {createContext} from "react";

const UserContext = createContext({
loggedInUser: "Default User",
})

export default UserContext


📁Header.js
---------------

import {Link} from "react-router-dom" ;

import {useContext} from react;        ✅ 2
import UserContext from '../utils/UserContext';    ✅ 3

const Header = () => {

    *This is a hook to access our userContext
    const {loggedInUser} = useContext(UserContext)               ✅ 4

    return (
        <>
            <div className="header">
                <img className="logo" src=""></img>
            </div>
            <div className="nav-item">
                <ul>
                    <li><Link to="/">Home</Link></li>      
                    <li><Link to="/about">About Us</Link></li>
                     <li><Link to="/about">A</Link></li>
                     <li><Link to="/about">{loggedInUser}</Link></li>          ✅ 5
                </ul>
            </div>
        </>
    )
}


✅ Data is the new Oil (useContext hook use in calssbase Component)
---------------------------------------------------------------------------------

import UserContext from '../utils/UserContext';                         ✅ 1

render(){
return(
<div>
<UserContext.Consumer>                                                    ✅ 2
{({loggedInUser})=> console.log(data)}                                            
</UserContext.Consumer>
</div>
)
}


// ------------------------------------------------------------------------------------------------------

// https://www.codingame.com/
// https://residential.addressadvisors.com/
/*
Problems:
Higher order component
lifting the state up
useContext

*/

/* 
✅ Let's Build our store -(Redux) (Build cart page)
==========================================================
*/

/*
Redux is not maedaroty. 

example of outher than redux= zustand, React-redux is birdge between react and redux, Redux toolkit is latest way to writing redux. 

Redux arcutecture
====================

Redux is like big object and it kept into a global central place.

npm install @reduxjs/toolkit
npm install react-redux

*/

// utils folder=> 📁appStore.js //✅1

import {configureStore} from '@redux/toolkit';
import cartReducer from './cartSlice';  //✅4

const appStore= configureStore({
    reducer:{ //✅4
        cart: cartSlice
    }
})

export default appStore;

// 📁App.js  //✅2

import {Provider, useDispatch, useSelector} from "react-redux";
import  {appStore} from './utils/appStore'

<Provider store={appStore}>
    <div className='app'>
        <header/>
    </div>
</Provider>

// 📁cartSlice.js  //✅3

import {createSlice} from '@redux/toolkit';

const cartSlice= createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state, action)=>{
            //Mutating the state
            state.items.push(action.payload);
        },
        removeItem:(state, action)=>{
            state.items.pop();
        },
        clearCart:(state, action)=>{
            state.items.length=0
        }
    }
})

export const {addItem, removeItem, clearCart}= cartSlice.actions;

export default cartSlice.reducer;

// 📁Header.js   (show items count from slice to header)

import React from 'react'
import { useSelector } from 'react-redux';  //✅5
const Header = () => {

//Subscribing to the store using selector
const cartItems = useSelector((store)=> store.cart.items) //✅5
  return (
    <div>
      <li>{cartItems.length}</li>//✅5
    </div>
  )
}

export default Header


//📁ItemList.js                                     
                             
import { useDispatch } from 'react-redux';
import {addItem} from "../utils/cartSlice"; //✅8

const ItemList =({items})=>{

    const dispatch= useDispatch(); //✅7

    const handelAddItem =(item)=>{  //✅6
        //Dispatch an action
        dispatch(addItem(item)) //✅8

        /*
        {
        payload:"cart"
        }
        */

    }
    
    return(
    
    <div>
    {items.map((item)=>{
    <div key={item.card.info.id} onClick={handleClick}>      
    <span>{item.card.info.name}</span>
    <span>{item.card.info.price ? item.card.info.price /100 : item.card.info.defaultPrise}</span>
    <button onClick={()=>{
        handelAddItem(item)  //✅6
    }}>Add+</button>
    </div>    
    })}
    </div>
    
    ) 
}

export default ItemList

/*
onClick={handleClick(item)}❌This means you already called the function
onClick={handleClick} ✅
onClick={()=>handleClick()}
*/


// 📁Cart.js   //✅9

//Adding to cart page
import React from 'react'
import { useSelector } from 'react-redux';

//Remove items from cart page
import { useDispatch } from 'react-redux';


const cartItem= useSelector((store)=> store.cart.item); // Always do subscribe small and write porsion of the store
/*
(or)
cosnt store= useSelector((store)=> store);
const cartItem= store.cart.items;
console.log(cartItem)
*/

const Cart = () => {

     //Remove items from cart page
    const dispatch= useDispatch();
    const claerCart=()=>{
        dispatch(cartItem())
    }

  return (
    <div>
      //Adding to cart page
      <ItemList items={cartItem}/>


      //Remove items from cart page
      <button onClick={claerCart}>Clear Cart</button>
      {cartItem.length === 0 && <h1>Please Add products to your cart</h1>}
    </div>
  )
}

export default Cart




//🔥 Redux Thunk Middleware (Redux me api calling kase hotahe)

/*
Redux Thunkl is a middleware that allows you to write action creators that return a function instead of an action . This function can perform asynchronous logic (like API request) and dispatch actions after hte operation is coomplite (e.g. fatching task and then dipatching them to the store)

when you retrn a function from an action creator, Redux thunk provides the function as a argument. THis allows you to manully dipatch other actions(e.g. When an API call succeeds or falls)

Redux thunk ek middleware he jis k madat se hum action ko dispath kartahe . ya action hamare liya api call karta he or jo bhai data ata he use hamare satate me set kar detahe . 

jab hume koi delay task parform karna hotahe tab hum thunk use kartehe. 

*/

redux / store.js

import {configureStore} from "@redux/toolkit"
import todoReducer  from './slice/todo'

export const store = configureStore({
    reducer:{
        todo:todoReducer
    }
})


redux / todo.js

import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

export const fetchTodos= createAsyncThunk('fetchTodos',async ()=>{

    //jab fetchTodos actions dispatch hoga ya particular function run hone wala he

    const response= await fetch('https://api.com/weather')
    retrn response.json();
})

const todoSlice= createSlice({

    name:"todo",
    initialState:{
        isLoading:false,
        data:null,
        isError:false
    },
    extraReducers:(builder)=>{
        //to put on state we use extraReducers

        builder.pending(fetchTodos.pending,{state, action}=>{
            state.isLoading=true
        });

        builder.addCase(fetchTodos.fullfilled,{state, action}=>{
            state.isLoading=false;
            state.data= action.payload;
        });

        builder.addCase(fetchTodos.rejected,{state, action}=>{
            console.log("Error", action.payload);
            state.isError=true
        });
    }

})

export default todoSlice.reducer;


App.js 
-------

import {useDispatch, useSelector} from "react-redux";
import {fetchTodos} from './redux/slice/todo';

function App(){
    const dispatch= useDispatch();
    const state= useSelector((state)=> state);

    if(state.todo.isLoading){
        return <h1>Loading....</h1>
    }

    return(
        <>
        <button onClick={(e)=> dispatch(fetchTodos())}>Fetchin Tdods..</button>
        {
            state.todo.data && state.todo.data.map((e)=> <li>{e.title}</li>)
        }
        </>
    )
}


     (or)


      
//Async task on reducer (fetching the product details by redux thunk)


// Create productSlice.js  into Redux(store) folder 

// productSlice.js

const { createSlice, createAsyncThunk } from '@redux/redux';


const productSlice = cartSlice({
    name: "product",
    initialState: {
        data: [],
        status: "idle",

    },
    extraReducers: (builder) => {
        builder

            .addCase(fetchProducts.pending, (state, action) => {
                state.state = "loading"
            })

            .addCase(fetchProducts.fullfilled, (state, action) => {
                state.data = action.payload;
                state.staus = "Idle"
            })

            .addCase(fetchProducts.rejected, (state, action) => {
                state.staus = "Error"
            })

    }


})


export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;

//thunk ek function he

export const fetchProducts = createAsyncThunk("anyname", async () => {
    const res = await fetch("https://fecthstore.com/products");
    const data = await res.json()
    return data
})



//Product.jsx 

import React from 'react'
import { useSelector } from "react-redux";

const Product = () => {

    const {data: products,status}=useSelector((state)=>state.product);

    if(status==="loading"){
        return <h2>Loading...</h2>
    }

    if(status==="error"){
        return <h2>Error</h2>
    }

  return (
    <div>
        {
             products.map((products)=>{
                <>
                <img src={products.src}/>
                <button>Add to cart</button>
                </>
            })
        }

    </div>
  )
}

export default Product


// ==========================================================================================================================================


✅ Protected Route
 -------------------

IsAuth.js
--------------
src > Roouting > IsAuth.js > ProtectedRoutes

import Route from 'ract'
import {Navigate, Outlet} from 'ract-router-dom'

const ProtectedRoutes=()=>{
 const isAuthToken = window.sessionStorage.getItem('tokenValue');
 return isAuthToken ? <Outlet/> : <Navigate to="/error"/>
}

 export default ProtectedRoutes


  Routing.js
  ------------
   import ProtectedRoutes from './IsAuth.js'
   
   <Route element={<ProtectedRoutes/>}>
   <Route path ="products" element={<ViewProduct/>}/>
   </Route>

// ================================================================================================================

// Conditional Rendering

<span className={rating >= 8.5 ? "super_hit" : "average"}>Rating</span>

<span className={`rating ${rating >= 8.5 ? "super_hit" : "average"}`}>Rating</span>

    
