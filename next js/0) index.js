/*

https://www.geeksforgeeks.org/next-js-interview-questions-answers/

Next js is Freamwork of React js. Next work for both frontend and backend. Next js server side rendering karwata he matlam next ka code server pe render hota ha . 
server side pe rendering hone k waje se SEO k liya a66a hota he qki app ka website ache tarhase crawl ho payega and a66a se DB+API se connection ho payega  also make Backend, you can Navigate easily, and you can write optimized code. 

We upload build js file to to server. jab user open karega unki react website to tab js file will load (This bundle is too heavy) uska ek waiting time hoga. uskabad baad lad hoga that website.  filr useEffect hook run hoga file api se data feth hoga jab data wapas a jaiga then component will rerender with the data uska baad he user can see the website. This process is timetaken. React render in client side so it is not posible to recrease the load time. React js internally webpack use kartahe we know webpack takes time to bundle of the code. 
but in case of next js when we build the nextjs file tab next pahelasahi baad me render honewala data get karke html and css file bana datahe he. jab wo build up upload kartaho sever pe tab user ko html and css file render huya milta he jo ki bohot fast he and data prefetched miltahe . SEO ke hisab se Next js bohot he a66a he. Next js use Rust internally for bundelling which to bundle things fast batter then webpack. Next js make my versal.com which companey is hosting provide side


===================================================================================================================================================================================

NEXT JS VS REACT JS

CSR VS SSR VS RSC (React Server Component)


>> CSR(Client Side Rendering) => user r dara server a request jai tarpor server acta response dai sekahne html,css and js thake. client side rendering a html, css mile acta blank div ready kore js download ho66a. js download howar por amara colorfull webpage ta dakte pari. 

>> SSR (Server Slide Rendering) => server html css js send kore user ka tarpor oi html and css dara coponet show hobe but js load howar por site interactive hobe. Server side rendering browser k simulate kore macine chaiya requested page html k render kore generated html send kore di66a. 

>> React server coponent React baniyache. In RSC amara each and every component ka client side and server site componet a chinhito kortapari. client side componet browser a pore load hobe server side component agee load hobe brower a. 


====================================================================================================================================================================================


Setting up Next.js Project
-------------------------------

npx create-next-app@latest > npm run dev

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


layout.js
----------

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
      <header>about header</header> //Modified navbar for about
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

create src > prodcuts (folder) > page.js 

page.js 
--------
 export default function Products(){
 
 return <h1>Products page</h1>
 
 }

 >> localhost:3000/prodcuts (you can see the product page)

---------------------------------------------------------------------------------------------------

Create Nested Route Under Product page named membership

create src > prodcuts (folder) > crate membership (folder) > page.js 

page.js 
--------

export default function Membership(){
   return <h1>Membership Page</h1>
}

>> localhost:3000/prodcuts/membership 


------------------------------------------------------------------------------------------------------

Create Nested Route Under  membership page


create src > prodcuts (folder) >  membership (folder) > create info (folder) > page.js

page.js 
--------

export default function Info(){
 
   return <h1>Info Page</h1>
 
}

 >> localhost:3000/prodcuts/membership/info 


------------------------------------------------------------------------------------------------------


Create Dynamic Route

create src > prodcuts (folder) > [details] (folder) > page.js 

page.js
--------

export default function ProductsDetails(){
 
   return <h1>Products Details</h1>
 
}

>> localhost:3000/prodcuts/1


------------------------------------------------------------------------------------------------------


Create Cashed Route

create src > prodcuts (folder) > [...product-review] (folder) > page.js

page.js
--------

export default function ProductReview(){
 
   return <h1>Product Review</h1>
 
}

>> localhost:3000/prodcuts/1/32/5

*/


//============================================================================================================================================

//✅ Navigate from one page to another page

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


  //✅ Custom Error Page

  // src > app > error.js

  //error hole react life circle r methord r modhame dhorte hoi tai ata clent page hobe

  'use client' // Error boundaries must be Client Components

  import { useEffect } from 'react'

  export default function Error({ error, reset }) {
    useEffect(() => {
      // Log the error to an error reporting service
      console.error(error)
    }, [error])

    return (
      <div>
        <h2>Something went wrong!</h2>
        <button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </div>
    )
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
  
  ✅ Server Component
  --------------------------
  Next js me duy default sab server componet he. 
  
  ! You cannot use any hook in server component 
  
  !If you use useState & useEffect without useClient then you get error because those component are server component . you have to make those componet to client component then you can use those things . "use client" make those componet to client component. 
  
  ! when you console.log() something then it will show into console in case of client componet . when you into server componet then that console will appear into terminal because that are server component. when it is server componet then it also not use react imports . this server componet like ejs.  
  
  !jo javascript se execute hoga use hame "use client" lagake likhna parega

  !puro componet k client componet kornbenna j tuku component r interaction ache setuku k client a change kore seta k setake server coponent a import kore use korun. 
  
  "use client"
  import {useState, useEffect} from 'ract';
  
  export default function Home(){
  
  const [count, setCount]= useState(0);
  
  return(
  <div>
  i am a component {count} 
  </div>
  )
  
  }
  
  * You can import client componet into server component 
  
  
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

  "💥💥💥💥How to Fetch data by server actions 💥💥💥"
  
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



