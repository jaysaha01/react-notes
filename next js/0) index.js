/*

Next js developed by varcel

https://www.geeksforgeeks.org/next-js-interview-questions-answers/

Next js is Freamwork of React js. Next work for both frontend and backend. Next js server side rendering karwata he matlam next ka code server pe render hota ha . 
server side pe rendering hone k waje se SEO k liya a66a hota he qki app ka website ache tarhase crawl ho payega and a66a se DB+API se connection ho payega  also make Backend, you can Navigate easily, and you can write optimized code. 

We upload build js file to to server. jab user open karega unki react website to tab js file will load (This bundle is too heavy) uska ek waiting time hoga. uskabad baad lad hoga that website.  filr useEffect hook run hoga file api se data feth hoga jab data wapas a jaiga then component will rerender with the data uska baad he user can see the website. This process is timetaken. React render in client side so it is not posible to recrease the load time. React js internally webpack use kartahe we know webpack takes time to bundle of the code. 
but in case of next js when we build the nextjs file tab next pahelasahi baad me render honewala data get karke html and css file bana datahe he. jab wo build up upload kartaho sever pe tab user ko html and css file render huya milta he jo ki bohot fast he and data prefetched miltahe . SEO ke hisab se Next js bohot he a66a he. Next js use Rust internally for bundelling which to bundle things fast batter then webpack. Next js make my versal.com which companey is hosting provide side


✅ full stack React Js Framework, created by team at Vercel in 2016 more features then React JS

Additinal Features of Next JS 😍
-------------------------------------
Server side Rendering(SSR) => App jo bahi code liktaho vo server par render hota he. React js me app jo bhai code liketathe vo palale browser me jak download hotatha then usk baad execute hatatha
SSR helps is SEO => 
Routing, CSS Support, Middleware etc
Database intergration 
Built-in Optimization features etc...


================================================================================================================================================================================================================================================================


Package.json => Application k pura information package.json me milaga. konsa script hum use karenga, depndensic (koi bai package use karoga to useka version mil jaiga), ka information hota he. 

package-lock.json => jo bahi package app ki application me use ho raha the useka bhai sub dependensis ka information yaha rahetahe. 

.eslintrc.json => to set rules for coding


===================================================================================================================================================================================

🔥 NEXT JS VS REACT JS

CSR VS SSR VS RSC (React Server Component)

>> Next js is server side rendered app. yaha client side server sie dono chize he. but react only render in client side

>> React me content js k help se show hotahe, server sa data ata nahi he issliya inspect karn k baad hame sirf html ka scliten dikhi detahe . par next js me sab server side se ata he issliya inspect karne k baad hame webpage k pura content dikhai deta he.  

>> CSR(Client Side Rendering) => user r dara server a request jai tarpor server acta response dai sekahne html,css and js thake. client side rendering a html, css mile acta blank div ready kore js download ho66a. js download howar por amara colorfull webpage ta dakte pari. 

>> SSR (Server Slide Rendering) => server html css js send kore user ka tarpor oi html and css dara coponet show hobe but js load howar por site interactive hobe. Server side rendering browser k simulate kore macine chaiya requested page html k render kore generated html send kore di66a. 

>> React server coponent React baniyache. In RSC amara each and every component ka client side and server site componet a chinhito kortapari. client side componet browser a pore load hobe server side component agee load hobe brower a. 


====================================================================================================================================================================================


Setting up Next.js Project
-------------------------------
You have to install Node js

! npx create-next-app@latest > ./ (Create app into the current directory) , Turbopack is next js bundeler previouslt next js usr webpack but now it use Tarbopack. This is firster then webpack > npm run dev

.next => Goes build file into the folder

pages => api => Agar pages k andar api folder k andar app jo bhai file banoga me us file ko api banadunga. jitna bhai backend related code he wo api folder me jaiga

localhost:3000/api/hellow (you can show the api result)


===================================================================================================================================================================================


Client ⚡ Server component



===================================================================================================================================================================================


Router => Page Router (older version) + App Router (latest version)

in Next js 13 version they introduce page.js concepet . every page denotes every routes . if you change page.js name then it will throw 404 error. 


App Router
---------------

Default file in src

=> publick (you can set images into the assets)
=> page.jsx  (like app.js)
=> layout.jsx (is outer part of the page)
=> Error.jsx
=> not-found.jsx
=> Loading.jsx


layout.js (Layout is like react's basic html boilerplate)
-----------------------------------------------------------

const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  )
}

jokhon route hit kore tokhon Next js oii folder r modhe page.js(index.js) k koje r seta k render kore. 
layout.js r modhe page.js render hoi. layout r modhe j children ache seta holo page.js . protek ta router j jono first a layout.js fire hobe tarpor se children modhe pass kore dabe page.js k.  


✅ Fixed Navbar & Footer in every page
-----------------------------------------

src > app > layout.js
-------------------------

const Layout = ({ children }) => {
  return (
    <div>
      <header>Your header</header>
      <main>{children}</main>
      <footer>Your footer</footer>
    </div>
  )
}


✅ Suppose If you want to change your navigation in about route then  (about related joto route hobe sekhane ai navbar apply hoye jabe)
---------------------------------------------------------------------------------------------------------------------------------------------

src > app > about > layout.js
-----------------------------------

const Layout = ({ children }) => {
  return (
    <div>
      <header>about header</header> 
      <main>{children}</main>
      <footer>about footer</footer>
    </div>
  )
}


> Server component r console browser a dakha jabe na but terminal a dakha jabe. 

> Server component a kono hook babohar korajai na but client componet a hook babohar kora jai. 

> cosole kule network tab kule bujte parban j next js jokhon ek componet thake r ek componet a jai tokhon e sai page r content k request kore niya ase


===================================================================================================================================================================================================================

Create single route

! Next js me file base routing perform hota he. 

src > app > prodcuts (folder) > page.js 

page.js 
--------
 export default function Products(){
 
 return <h1>Products page</h1>
 
 }

 >> localhost:3000/prodcuts (you can see the product page)


(if we use normal <a href=""></a> then it will reload full page)

=========================================================================================================

Create Nested Route Under Product page named membership

src > app > prodcuts (folder) > crate membership (folder) > page.js 

page.js 
--------

export default function Membership(){
   return <h1>Membership Page</h1>
}

>> localhost:3000/prodcuts/membership 


------------------------------------------------------------------------------------------------------


Create Nested Route Under  membership page 
import {useRouter} from "next/navigation"

create src > prodcuts (folder) >  membership (folder) > create info (folder) > page.js

page.js 
--------

export default function Info(){

  let router= useRouter();

   return <h1>
   Info Page
   <Link href={'/prodcuts/membership/info'}>Contact</Link>
   <button onClick={()=> router.push('/prodcuts/membership/info')}>Contact Copaney </button>
   </h1>
 
}

 >> localhost:3000/prodcuts/membership/info 


=======================================================================================================

Create Dynamic Route
-----------------------

🍎 import things:
-------------------
page.js
--------
props is object there has two things 1>Params and 2> Search Params

export default async function Home(props){

  let {searchParams, params}= props

   console.log(await searchParams) >>{name:"Anurag" , age:"98"} 
   console.log(await params)
 
   return <h1>Products Details</h1>
}

>> localhost:3000/?name="Anurag"&age=98



Create Dynamic Route
-----------------------

create src > prodcuts (folder) > [kuchbhi] (folder) > page.js 

page.js
--------

async function page({params}){

  console.log(await params); {kuchbhi: "sffdsfdsfdfdsfdfsf"}
   return <h1>Products Details</h1>
}

export default page

>> localhost:3000/prodcuts/sffdsfdsfdfdsfdfsf


==========================================================================================================================================

Nested Dynamic Routeing in Next.js
--------------------------------------

parent page r slug child page access korte pare but child r slug parent page a access kora jaina


Page.js
--------------

app > blogs > [blogID] > comments > [commentID] > page.js

export default async function Page({params}){

const paramsObj= await params;
const {blogID} = paramsObj;

! console.log(paramsObj);      {blogID:"1", commentID:"1"}

return(
<div>
All Comments on <b>{blogID} and <b>{commentID}</b>
</div>
)
}

>> localhost:3000/blogs/comments/12

---------------------------------------------------------------------------------------------------

Dynamic Routing with Two IDs in Next.js in client side


app/
 ├── dashboard/
 │   ├── [user_id]/
 │   │   ├── [transaction_id]/
 │   │   │   ├── page.tsx   (Handles two dynamic IDs)


 app/dashboard/[user_id]/[transaction_id]/page.tsx

 /dashboard/101/5001

"use client";
import { useParams } from "next/navigation";

export default function TransactionPage() {
  const { user_id, transaction_id } = useParams(); // Extract dynamic IDs

  return (
    <div>
      <h1>User ID: {user_id}</h1>
      <h2>Transaction ID: {transaction_id}</h2>
    </div>
  );
}

User ID: 101
Transaction ID: 5001



===================================================================================================================================

Create Cashed Route
---------------------

create src > prodcuts (folder) > [...product-review] (folder) > page.js

page.js
--------

export default async function ProductReview({pramas}){
  console.log(await params) //{ product-review : ["1", "32", "5"]}
   return <h1>Product Review</h1>
}

>> localhost:3000/prodcuts/1/32/5


products / [...product-review] is required cashed all route means you have to put atleast one route like this >> localhost:3000/prodcuts/1 or >> localhost:3000/prodcuts/1/32/5

products / [[...product-review]] is optional Cashed Route means if i not put page.js into products folder then also open [[...product-review]] page ex: >> if you go this page localhost:3000/prodcuts then go to localhost:3000/products /[[...product-review]]

=======================================================================================================================================


Route Groups ( seperate Rotues in logical way but your route not change)
-----------------------------------------------------------------------------

app > (marketing) > about > page.js 


>> localhost:3000/about


======================================================================================================================================================


Private Folders
-----------------

agar hum koi v folder route nahi banana chtege to hame _foldername kark private folder create karna partahe

Private route to normal route
------------------------------

%5foldername


=========================================================================================================================================================


Common Layout in Next js
-------------------------

layout.js < contact < companey < employee 

(this layout create parent of the nested pages component then it component will share it with all of it's children)

layout.js
------------

export default Layout({children}){
return(
<>
!create which is you want to share it ----------------

<header>Header</header>
{
children
}
<footer>Footer</footer>
</>
)
}

======================================================================================================================================

🔥 Static VS Dynamic rendering

(static) means ex: /blogs => iss page k code dubara se run nahi hoga. Ya page build karte wakt sirf ek hi baar first and last time run hoga. ya page build hoke server me rahejatahe
(dunamic) /blog/[blogID] => Sarvar me jabbhi requerst aiga tabhi ran hoga. ya page build time pe run nahi hoga ya run time pe run hoga. har ekk request pe iss page ka pura code run hoga


static and dynamic rendering server site rendering ka hi part he


Next js me client site and server site dono rendering ekksath hota he
-------------------------------------------------------------------------


how to do static side generation 
--------------------------------------

Static site generation is a part of Server site generation. ya build time pe hotahe. 

static site generation k matlam he jo bhai run time pe execute hota he unko build time pahi create kar liya jai

agar hame ya pata hota he ki ya 10 blog posts user open kargahi karega orr uss page me jana liya time na lage iss liya humm static site rendering kartehe. 



Page.js
=========

app > blogs > [blogID] > comments > [commentID] > page.js
--------------------------------------------------------------

export function generateStaticParams(){
return [
{blogID: "1"},
{blogID: "2"},
{blogID: "3"},
]
}

or

export async function generateStaticParams(){
const response = await fetch("api ur");
cnst data= await response.json();
return data.map(({id})=> ({blogID: `${id}`}))
}



export default async function Page({params}){

return(
<div>
All Comments on <b>{blogID} and <b>{commentID}</b>
</div>
)
}

>> npm run build then see the static site generation

Next > server > app > blogs (see the generate pages)



=================================================================================================================================================


Conditional Layout
-------------------------

layout.js < contact < companey < employee 

layout.js
------------
"use client"

import {usePathname} from 'next/navigation'

export default Layout({children}){

const currentPathName= usePathname();

return(
<>
{currentPathName !== '/contact/companey' ? <h1>common layout for childre</h1> : null}
{children}
</>
)
}


*/


//===========================================================================================================================

//✅ Navigate from one page to another page

//when we use <a> lag or <link> that is call linking routing. when we naviate thorutn evnet that is call navigation routing


//in Server Component

src / page.js

page.js

import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Link href={'/products'}><button>Go to product page</button></Link>
    </div>
  )

}

// or (Alternative way to create useing useRoute)


//in Client Component

'use client'
import { useRouter } from 'next/navigation';

export default function Home() {

  const router = useRouter()

  function handleNavigate() {
    router.push('products');
  }

  return (
    <div>
      <button onClick={handleNavigate}>Go to product page</button>
    </div>
  )



  //============================================================================================================================================


  //✅ How to redireact one page to another page 

  export default function Account() {

    //assume that profile info is null then it will redirect to profile page server componet to server component
    const unserProfile = null;

    if (unserProfile === null) redireact('profile')

    return <h1>Accounts Page</h1>
  }


  //============================================================================================================================================


  //✅ Retrive the slug from both client and server component

  //in Client Component

  "use client"

  import { usePathname, useSearchParams } from 'next/navigation';

  export default function Account() {

    const pathName = usePathname();
    const searchParams = useSearchParams();

    console.log(pathName)// "/cart"
    console.log(searchParams.get('search'), searchParams.get('randomValue')) //extraction values from url 


    return <h1>Accounts Page</h1>
  }


  //in Server Component

  export default function Account({ params }) {

    console.log(params)

    return <h1>Accounts Page</h1>
  }


  export default function Account({ serchParams }) {

    console.log(serchParams.search)

    return <h1>Accounts Page</h1>
  }



  //============================================================================================================================================

  //✅ Loading UI


  // src > loading.js

  export default function laoding() {
    return <h1>Loading...</h1>
  }

  // src > app > layout.js

  layout.js

  import Loading from '../Loading';
  import { Suspense } from 'react'

  export default function layout() {
    return (
      <Suspense fallback={<Loading />}>//✅
        {children}
      </Suspense> //✅
    )

  }


  //============================================================================================================================================


  //✅ Custom Not Found Page


  // src > app > not-found.js

  not-found.js

  export default function NotFound() {
    return <h1>Not Found</h1>
  }



  //============================================================================================================================================


  //✅ Data fetchintg 

  //fetch data in a server component


  // src > app > server-data-fetch > page.js 

  page.js

  async function fetchListOfUsers() {

    try {
      const apiResponse = await fetch('https://dummmyjson/user', { cache: 'no-store' });
      const result = await apiResponse.json()
      return result

    } catch (error) {
      throw new Error(error)
    }
  }

  export default async function ServerSideDataFetching() {

    const listOfUsers = await fetchListOfUsers();

    return <div>
      <ul>
        {
          listOfUsers.map((elm) => {
            return (
              <>
                <link href={`/server-data-fetch/${elm._id}`}><li>{elm?.name}</li></link>
              </>
            )
          })
        }
      </ul>
    </div>
  }

  // src > app > server-data-fetch > [details] > page.js

  page.js

  import {notFound} from 'next/navigation';

  async function fetchUserDetails(currentUserId) {
    try {
      const apiResponse = await fetch(`url/${currentUserId}`)
      const result = apiResponse.json()

    } catch (e) {
      throw new Error(e)
    }
  }

  export default async function UserDetails({ params }) {

    console.log(params)//{details:1}

    if(id !== params.details){
      NotFound()
    }

    const userDetails = await fetchUserDetails(params.details);

    return <div>
      <p>{userDetails?.firstName}</p>
    </div>
  }


  // -------------------------------------------------------------------------------------------------------

  // @ means src 
 
  // -------------------------------------------------------------------------------------------------------



  //fetch data in a client component

  // src > app > client-data-fetch > page.js 

  page.js

  'use client'

  import { useState } from react

  export default function ClientDataFetching() {

    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState([])

    async function fetchListOfUsers() {
      try {
        const apiResponse = await fetch(`https://dummyjson/users`);
        const result = await apiResponse.json()

        if (result?.users) {
          setUsers(result.users);
          setLoading(false)
        } else {
          setUsers([]);
          setLoading(true)
        }

      } catch (error) {
        throw new Error(error)
      }

    }
    return (

      <div>

      </div>


    )
  }


  //============================================================================================================================================


  /*
  
  Paralal Data fetching
  ------------------------

  const Todos= async()=>{

    (✅ya api calles ek dusre k upaar dipendent he ek complite hone k baad dusra chalega)

    const response1 = await fetch("api url");
    const todos1= await response1.json();

    const response2 = await fetch("api url");
    const todos2= await response2.json();

    const response3 = await fetch("api url");
    const todos3= await response3.json();

    (✅ jab asa chase he ek api call dusre api call k upar dipendent nahi he tab hum paralal data fetching karete he)

    const [todoResponse, slowResponse2s, slowResponse3s] = await promise.all([
    fetch("api url 1"), fetch("api url 2"), fetch("api url 3")
    ])

    const [todos, data2s, toda3s] = await promise.all([todoResponse.json(), slowResponse2s.json(), slowResponse3s.json()])

  }
  
  
  */


  // ========================================================================================================================================================================
  
  /*

  Rendering Server component into client component
  ---------------------------------------------------------

  Header (active navlink when route match)
  --------------------------------------------

  "use client"
  import {usePathname} from 'next/navigation';

  export default function Header(){

  const pathname = usePathname();

  return(
  <nav className="navbar">
  <ul>
  <li><Link href="/" className={pathname === "/" ? "nav-link active" :  "nav-link"}> Home </Link><li>
  <li><Link href="/" className={pathname === "/" ? "nav-link active" :  "nav-link"}> About </Link><li>
  </nav>
  )

  }

  ✅ Agar page client component hoga to netwirk tab me js response me us page ka full code a jaiga, server compoent me render hone wala koi bhai code yaha nahi jaiga js me

  ✅ client side me jab code run hota he tab scrict varsion me code run hota he iis liya hume dodo bar consle me prient hota he


  page.js
  ---------

  <Services/> //server component (Main Page)
    <ServiceList/> //client Component (Render List) 
       <ServiceItem/> //server component (Prient List)

    Agar Parent component  <ServiceList/> clinet copmpinet ho to child component <ServiceItem/> bhai client component ho jata he and prarent component agar Server component hota he to child bhai server component ban jata he. 

    Now we want <ServiceItem/> render as server coponent into client component
    ----------------------------------------------------------------------------------

    Services
    ---------

    import ServiceItem from "......"

    const Services=()=>{

      const services=[
      "Web Development",
      "Mobile App Development",
      "Consulting Services",
      "Digital Marketing",
      ]

      return(
      <>
      <Header/>
      <ServiceList> 
      {services.map((service)=>(
        <ServiceItem key={service} serviceName={service}/>
      ))}
      </ServiceList>
      </>
      )
    }


    ServiceList.js
    -------------------
    "use client"

    import ServiceITem from './ServiceItem"
    export default function ServiceList({children}){
    return(
    <>
    <ul>{children}</ul>
    </>
    )
    }

  */


  // ===========================================================================================================================================================
  /*

  
  client VS Server component
  ----------------------------------

  1) Server coponents execute only on the server
  2) Client component execute on the server as well as on the client


  ✅ Server Component
  --------------------------
  Next js me by default sab server componet he. 
  
  ! You cannot use any hook in server component 
  
  !If you use useState & useEffect without useClient then you get error because those component are server component . you have to make those componet to client component then you can use those things . "use client" make those componet to client component. 
  
  ! when you console.log() something then it will show into console in case of client componet . when you into server componet then that console will appear into terminal because that are server component. when it is server componet then it also not use react imports . this server componet like ejs.  
  
  !jo javascript se execute hoga use hame "use client" lagake likhna parega

  !puro componet k client componet kornbenna j tuku component r interaction ache setuku k client a change kore seta k setake server coponent a import kore use korun. 
  
  !component me async await sirf server componet me use hota he client me nahi

  !event listener server coponnet me run hoga isse koi error nahi aiga next js event ko server me nahi chalaiga

  "use client"
  import {useState, useEffect} from 'ract';
  
  export default function Home(){

  if(typeof localStorage !== "undefined"){
  console.log(localStorage); //if we user typeof with variable then it cannot give any error it return "undifind" or the value typeof
  }
  

  console.log(localstorage)
  const [count, setCount]= useState(0);
  
  return(
  <div>
  i am a component {count} 
  </div>
  )
  
  }
  
  * You can import client componet into server component 



  page.js
  ----------

  export default function Link(){
  
  return (
  <div onClick={()=> {console.log("like button on server")}}>On Click</div>
  )
  }
  

  
  
  ---------------------------------------------------------------------------------------------------------------
  
  ✅ if you not need full component will the client componet then
  
  Component / Counter.jsx
  -------------------------
  
  "use client"
  
  import React from 'react'
  
  export default function Counter(){
  
  const [counter, setCounter]=useState(0);
  
  useEffect(()=>{
  
    const interval= setInterval(()=>{
      setCounter((current_counter)=>{
        return current_counter + 1;
      })
      })
      return ()=> clearInterval(interval);
  },[])
  
  return(
  <h2>{counter}</h2>
  )
  
  }
  
  About/page.jsx
  ----------------------
  
  import Counter from '@/components/counter'
  
  export default function AboutPage(){
  return(
  <main>
  <Counter/>
  </main>
  )
  }
  
  
  ---------------------------------------------------------------------------------------------------------------
  
  
  
  ✅ Styling
  --------------------------
    
  🔴 Import and Add CSS
  ------------------------------

  import './home.css";  or import '../syles/globals.css'

  const Home=()=>{
    return(
    <>
    <h1>Adding  css</h1>
    </>
    )
  }

  🔴 Modular CSS 
  ------------------------------

  banifit of modular css : Jab componet unmount ho jaiga tab ya css bahi unload hojaigi

  styles > User.module.css
  ---------------------------

  .text{
  color:"red"
  }

  page.jsx (Go to that page jaha pe tum iss css ko usr karoge)
  ------------------------------------------------------------------

  import styles from '../../styles/user.module.css'

  <div classname={styles.text}></div>


  🔴 SCSS in next js
  ------------------------------

  search "scss in next js"

  > npm install --save-dave sass

  home.scss
  -----------

  body{
  background:"Red"
  }

  page.js
  ---------

  import './home.scss'


  🔴 Image
  ---------------
  
  page.jsx
  
  import React from 'react'
  import boyimg from "@/publick/images/thumb.jpg"
  
  export default function CoursePage(){
  return(
  
  <main>
  
  <h1>Course Page</h1>
  
  <Image placeholder="blur" src={boyimg.src} quality={100}/> => fill me relative and absolute hota he
  
  

  ✅ set third party image of cdn
  ----------------------------------
  
  next.config.js
  ----------------
  
  moudle.config={
  
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 's3.amazonaws.com',
          port: '',
          pathname: '/my-bucket/**',
          search: '',
        },
      ],
    },
  
  }
  
  page.jsx
  
  <Image fill src="https://s3.amazon.com/sff/sffdsfd/4ggg"/>    => fill me relative and absolute hota he
  
  </main>
  
  )
  
  }
  

  ✅ Font
  ---------------






 
  ✅ Meta data
  --------------------------
  src > app > about > layout.js  

  !j rokom app r layout.js a koraache serokom korte hobe
  
  layout.js  
  ========
  import React from 'ract'

  export const metadata={
  title:"This is title";
  description: "This is facebook and we can connect"
  }
  
  
  const about=()=>{
      
  }
  export default about
  
 
  ✅ script tag
  --------------------------
  
  const about=()=>{
      <Script>
      {`alert("welcome to about page")`}
      </Script>
  }
  export default about
  
  ✅ image component
  --------------------------
  ! if we use normal img then it will render with it's high resolution it is not need. so we use image componet to optimize image component 
  
  import Image from 'next/image'
  
  const about=()=>{
      
      <div>
      <Image width={100} height={100} src="https//www.image.com/jlsfjd.jpg"/>
      I am home
      </div>
  }
  export default about
  
  ------------------------------------------------------------------------------------------
  

  ✅ Server Actions
 

  import fs from 'fs/promises';

  const about = () => {

    const submitAction = async (e) => {
      'use server'; //if we not write this then we get an error . if you want to post data from server side then you have to do like this
      console.log(e.get("name"), e.get("add"));
      let a = await fs.writeFile("harry.txt", "het I am good");
      console.log(a);
    }

    <div>
      <form action={submitAction}>
        <input type="text" />
        <input type="text" />
      </form>
    </div>
  }
  export default about

  (or)

  import { submitAction } from '@actions/form'

  const about = () => {

    <div>
      <form action={submitAction}>
        <input type="text" />
        <input type="text" />
      </form>
    </div>
  }
  export default about

  actions/form.js
  ===============

  import fs from 'fs/promises';

  'use server';

  export const submitAction = async (e) => {
    console.log(e.get("name"), e.get("add"));
    let a = await fs.writeFile("harry.txt", "het I am good");
    console.log(a);
  }

  ------------------------------------------------------------------------------------------


  Project on Next JS

  /*
  what is client side and server side rendaring and it's defference
  */

  // ✅ Api calling in nextjs (do API call like a pro in NEXT.JS)

  /*
  if we do client side fetching using "use client" like in react then you have to not geting data when you block the internet connection
  */

  FeaturedProduct.jsx

  export default async function FeaturedProduct() {

    // This API is calling in server side. so it daliver it's data verry fast 

    const response = await fetch("https://facebook.com/api/prodcuts?limit=5");

    const data = await response.json();

    return (
      <div className="featured">
        <div>
          <h1>Featured Products</h1>

          {
            data.map((prod) => {
              return <ProductBox />
            })
          }
        </div>
      </div>
    )
  }

  
  
  // Agar fetching in client side then we not do it because seo hum tab he kar sakte he jab sever se data client me ane tak jitna bhai source code a rahahe unsab ko serch engine read kartahe or ussko apne database me save karta he. ager client me hi fetching huya fir SEO nahi ho sakta.



  // ==============================================================================================================

  "💥💥💥How to Fetch data by server actions 💥💥💥"
  
  // Server actions and Data Mutatons
  
  async function serverActionsExample() {
    async function fetchListOfProducts() {
      "use server";
      <h1>Server Actions Examle - Server Components</h1>;
      const res = await fetch("https://dummy.json/products");
      const data = await res.json();
      return data?.products;
    }
  
    const products = await fetchListOfProducts();
    console.log(products);
  
    return <div></div>;
  }
  
  // export default serverActionsExample
  
  // ==================================== (or) ================================================
  
  
  src > actions > index.js;
  
  ("use server");
  
  export async function fetchListOfProducts() {
    const res = await fetch("https://dummy.json/products");
    const data = await res.json();
    return data?.products;
  }
  
  
  
  app > theory > server - page - example > page.js;
  
  import { fetchListOfProducts } from "@/actions";
  
  async function serverActionsExample() {
    const products = await fetchListOfProducts();
    console.log(products);
  
    return <div></div>;
  }
  export default serverActionsExample
  
  // ======================================================================================================
  
  
  //not recomended to use server actions in client component
  
  app > theory > client - page - example > page.js;
  
  'use client'
  
  import { fetchListOfProducts } from "@/actions";
  
  async function serverActionsExample() {
  
      const [products, setProduct]= useState([]);
  
      async function getListOfProducts() {
          const data= await fetchListOfProducts();
          console.log(data);
          if(data) setProducts(data)
      }
  
      useEffect(() => {
          getListOfProducts()
      }, [])
  
    return <div></div>;
  }
  // export default serverActionsExample
  
  // ======================================================================================================
  
  
  app > page.js > Home 
  
  import React from 'react'
  
  export  default function Home() {
  
    const submitAction=(e)=>{
      //if we want to do all this staff into sever site then use this 'use server'. Here we put all backend logic
      'use server'
      fs.writeFile("harry.txt", "Hey I am Good")
    }
  
    return (
      <div>
        <form action={submitAction}>
          <input type="text" />
          <input type="text" />
          <button>Submit</button>
        </form>
      </div>
    )
  }
  
// ========================================================================================================================================


// SEO in Next JS 

export const metadata:Metadata={
  title:"SEO App",
  disccription:"This is a description",
  keywords:"SEO Agency, SEO Complnay",
  openGraph:{
    title:"SEO App",
    disccription:"This is a description",
    images:["image url", "image url"],
    url:"https://mysiteurl.com"
  },
  twitter:{
    title:"SEO App",
    disccription:"This is a description",
    images:["image url", "image url"],
    url:"https://mysiteurl.com",
    card:"summery_large_image",
    creator:"XYZ"
  }
}


// crete Robot.ts file ---------------

// app > app > robots.ts  (Coppy paste from dov of Next js)
import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ["/", "/login", "/prising"], (or) "*"
      disallow: ["/admin/*", ],
    },
    sitemap: 'https://mysite.com/sitemap.xml',
  }
}

// ==================================================================================================

Next js with Typescript (useContext API)


  cosnt dispatch= useDispatch();

  const markTodoAdComplite=({id}:{id:string})=>{
    if(todo.complited) return;
    dispatch(completedTodo(id))
  }


  return(
    <div>
      <checkbox/>
      <h3>{todo.title}</h3>
      <Edit/>
      <Complite onClick={()=> dispatch(deleteTodo(todo.id))} chechked={todo.complited && true}/>
      <Delete onClick={()=>markTodoAdComplite({id:todo.id})}/>
    </div>
  )
}


//✅ Edit tood ------------

// TodoTile.tsx 

import {Todo} from '@/interface';
import {createSlice} from '@redux/toolkit';
import deleteTodo from 'redux/slice'
import {maktodo} from 'redux/slice'


TodoTile=({todo}:{todo:Todo})=>{

  const [editable,setEditable]=useState(false);

  const dispatch= useDispatch();

  const markTodoAdComplite=({id}:{id:string})=>{
    if(todo.complited) return;
    dispatch(completedTodo(id))
  }

  const editTodo=({id}:{id:string})=>{


  }


  return(
    <div>
      <checkbox/>
      <h3 contentEditable={editable}>{todo.title}</h3>
      {
        !todo.complited && editable ? <Save/> : 
        <>
        <Edit onClick={()=> setEditable(!editable)} onClick={()=>editTodo(id: todo.id)}/>
        <Complite onClick={()=> dispatch(deleteTodo(todo.id))} chechked={todo.complited && true}/>
        <Delete onClick={()=>markTodoAdComplite({id:todo.id})}/>
        </>
      }
      
    </div>
  )
}

----------------------------------------------------------------------------------------------------------------

Next js 15 with redux 
----------------------

npm install @reduxjs/toolkit react-redux


✅ Set Up Redux Store
📁 Create a folder: lib/store.js
----------------------------------------
// lib/store.js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})


✅ Create a Slice
📁 Create: lib/features/counterSlice.js
-------------------------------------------
// lib/features/counterSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    reset: (state) => {
      state.value = 0
    },
  },
})

export const { increment, decrement, reset } = counterSlice.actions
export default counterSlice.reducer


✅ Create Provider Component
📁 Create: app/providers.js
-------------------------------------
'use client'

import { Provider } from 'react-redux'
import { store } from '../lib/store'

export function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>
}

✅ Wrap App with Provider
📁 Edit app/layout.js
----------------------------
// app/layout.js
import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Redux with Next.js 15',
  description: 'A simple Redux example',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}


============================================================================================================

  
  





