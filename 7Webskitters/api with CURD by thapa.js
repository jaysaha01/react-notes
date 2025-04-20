/* Axios is a promise-based HTTP library that helps you easily communicate with servers or APIS over the 
internet. It allows your website or app to send and receive data from a sever like fetching information,
submation, submitting forms, or updating content without reloading the entire page. 

Axios users promises to handle HTTP request and reponses. 


why choose Axios over Fetch?
=================================
Easier syntax and cleaner code. 
Automatic json transfromation without extra code. 
Better built-in error handelling
support for older browser

*/
// =====================================  Project  ====================================================

// HTTP methotds: POST (Create) , GET (Read) , PUT (Update), DELETE (Delete) => CRUD

//! Get methord data from the api

// For normal uses

// >> npm i axios

// create "api" folder >> create "postApi.jsx"

// PostApi.jsx

import axios from 'axios';

const api = axios.create({
  baseURL: "https:/api.com/post"
})

//====== get methord =========
export const getPost = () => {
  return api.get('/post');
}


// Posts.jsx

import React, { useEffect, useState } from 'react'
import { getPost } from './api/PostApi'

const Posts = () => {

  const getPostData = async () => {

    const [data, setData] = useState([])
    const res = await getPost()
    setData(res.data);
    console.log(res)
  }

  useEffect(() => {
    getPostData()

  }, [])

  return (
    <ul>{

      data.map((curElem) => {
        const { id, body, title } = curElem;
        return (
          <li key={curElem.id}>
            <p>{title}</p>
            <p>{body}</p>
            <button>Edit</button>
            <button>Delete</button>
          </li>
        )
      })

    }</ul>
  )
}

export default Posts

// ------------------------------------------------------------------------------------------------------

//! Delte mehord or delete post data


// Posts.jsx

import React, { useEffect, useState } from 'react'
import { getPost, deletePost } from './api/PostApi' //✅3

const Posts = () => {

  const getPostData = async () => {

    const [data, setData] = useState([])
    const res = await getPost()
    setData(res.data);
    console.log(res)
  }

  useEffect(() => {
    getPostData()

  }, [])


  //Function delete
  const handleDelete = async (id) => {  //✅3
    try {
      const res = await deletePost(id);

      if (res.status === 200) {
        const newUpdatedPost = data.filter((curPost) => {
          return curPost.id !== id;
        });
        setData(newUpdatedPost);
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ul>{
      data.map((curElem) => {
        const { id, body, title } = curElem;
        return (
          <li key={curElem.id}>
            <p>{title}</p>
            <p>{body}</p>
            <button>Edit</button>
            <button onClick={() => handleDelete(id)}>Delete</button> ✅1
          </li>
        )
      })
    }</ul>
  )
}

export default Posts


// PostApi.jsx

import axios from 'axios';

const api = axios.create({
  baseURL: "https:/api.com/post"
})

//====== get methord =========
export const getPost = () => {
  return api.get('/post');
}

//====== delete methord ===========

export const deletePost = (id) => {   //✅2
  return api.delete(`/post/${id}`);
}


// ------------------------------------------------------------------------------------------------------

// ! Post methord

//Form.jsx  //✅2
import { postData } from './api/PostApi'

import React from 'react'

const Form = ({ data, setAddData }) => {

  const [addData, setAddData] = useState({
    title: "",
    body: "",
  })

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAddData((prev) => {
      console.log(prev)//We get previous data form hare {title:" " , body:" " }
      return {
        ...prev, [name]: value //we update new data ontop of old data
      }

    })

  }


  const addPostData = async () => {   //✅5
    const res = await postData(addData);

    if (res.status === 201) {

      setData([...data, res.data])
      setAddData({ title: "", body: "" })
      //... means ager purono data
    }
  }


  const handleFormSubmit = (e) => { //✅4
    e.preventDefault();
    addPostData()

  }

  return (
    <form onSubmit={handleFormSubmit}> //✅3
      <div>
        <label htmlFor='title'></label>
        <input type='text' autoComplete='off' id='title' name='title' placeholder='Add Title' value={addData.title} onChange={handleInputChange} />

        <label htmlFor='body'></label>
        <input type='text' autoComplete='off' id='body' name='body' placeholder='Add Post' value={addData.body} onChange={handleInputChange} />
      </div>
    </form>
  )
}

export default Form



// Posts.jsx

const Posts = () => {

  const getPostData = async () => {

    const [data, setData] = useState([])
    const res = await getPost()
    setData(res.data);
    console.log(res)
  }

  useEffect(() => {
    getPostData()

  }, [])


  //Function delete
  const handleDelete = async (id) => {
    try {
      const res = await deletePost(id);

      if (res.status === 200) {
        const newUpdatedPost = data.filter((curPost) => {
          return curPost.id !== id;
        });
        setData(newUpdatedPost);
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ul>{
      data.map((curElem) => {
        const { id, body, title } = curElem;
        return (
          <div>

            <section>
              <Form data={data} setData={setData} /> //✅1
            </section>

            <li key={curElem.id}>
              <p>{title}</p>
              <p>{body}</p>
              <button>Edit</button>
              <button onClick={() => handleDelete(id)}>Delete</button>
            </li>

          </div>

        )
      })
    }</ul>
  )
}


// PostApi.jsx

import axios from 'axios';

const api = axios.create({
  baseURL: "https:/api.com/post"
})

//====== get methord =========
export const getPost = () => {
  return api.get('/post');
}

//====== delete methord ===========

export const deletePost = (id) => {
  return api.delete(`/post/${id}`);
}

//====== Post methord ===========

export const postData = (data) => {    //✅3
  return api.post(`/post/`, data);
}

// ------------------------------------------------------------------------------------------------------

//patch (update) methord   =  part 1 (click edit to show all the data into the form)

// Posts.jsx

const Posts = () => {

  const [data, setData] = useState([])
  const [updateDataApi, setUpdateDataAPi] = useState({}) //✅2

  const getPostData = async () => {


    const res = await getPost()
    setData(res.data);
    console.log(res)
  }

  useEffect(() => {
    getPostData()

  }, [])


  //Function delete
  const handleDelete = async (id) => {
    try {
      const res = await deletePost(id);

      if (res.status === 200) {
        const newUpdatedPost = data.filter((curPost) => {
          return curPost.id !== id;
        });
        setData(newUpdatedPost);
      }

    } catch (error) {
      console.log(error)
    }
  }


  //Function Edit
  const handleUpdatePost = (curElem) => setUpdateDataAPi(curElem)   //✅2 Now here are are the current data


  return (
    <ul>{
      data.map((curElem) => {
        const { id, body, title } = curElem;
        return (
          <div>

            <section>
              <Form data={data} setData={setData} updateDataApi={updateDataApi} setUpdateDataAPi={setUpdateDataAPi} />   //✅3
            </section>

            <li key={curElem.id}>
              <p>{title}</p>
              <p>{body}</p>
              <button onClick={() => handleUpdatePost(curElem)}>Edit</button> //✅1
              <button onClick={() => handleDelete(id)}>Delete</button>
            </li>

          </div>

        )
      })
    }</ul>
  )
}





//Form.jsx  
import { postData } from './api/PostApi'

import React from 'react'

const Form = ({ data, setData, updateDataApi, setUpdateDataApi }) => {    //✅3

  const [addData, setAddData] = useState({
    title: "",
    body: "",
  })


  //get the updated data and add inot input field

  useEffect(() => {    //✅4

    updateDataApi && setAddData({

      title: updateDataApi.title || "",
      body: updateDataApi.body || "",

    })

  }, [updateDataApi])



  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAddData((prev) => {
      console.log(prev)
      return {
        ...prev, [name]: value
      }

    })

  }


  const addPostData = async () => {
    const res = await postData(addData);

    if (res.status === 201) {

      setData([...data, res.data])
      setAddData({ title: "", body: "" })
      //... means ager purono data
    }
  }


  const handleFormSubmit = (e) => {
    e.preventDefault();
    addPostData()

  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor='title'></label>
        <input type='text' autoComplete='off' id='title' name='title' placeholder='Add Title' value={addData.title} onChange={handleInputChange} />

        <label htmlFor='body'></label>
        <input type='text' autoComplete='off' id='body' name='body' placeholder='Add Post' value={addData.body} onChange={handleInputChange} />
      </div>
    </form>
  )
}

export default Form



// ------------------------------------------------------------------------------------------------------

//patch (update) methord   =  part 2 ()


//Form.jsx  
import { postData } from './api/PostApi'

import React from 'react'

const Form = ({ data, setAddData, updateDataApi, setUpdateDataApi }) => {

  const [addData, setAddData] = useState({
    title: "",
    body: "",
  })

  let isEmpty = Object.keys(updateDataApi).length === 0; //✅1


  //get the updated data and add inot input field

  useEffect(() => {

    updateDataApi && setAddData({

      title: updateDataApi.title || "",
      body: updateDataApi.body || "",

    })

  }, [updateDataApi])



  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAddData((prev) => {
      console.log(prev)
      return {
        ...prev, [name]: value
      }

    })

  }


  const addPostData = async () => {
    const res = await postData(addData);

    if (res.status === 201) {

      setData([...data, res.data])
      setAddData({ title: "", body: "" })
      //... means ager purono data
    }
  }


  //Update post data

  const updatePostData = async () => {    //✅5

    try {
      const res = await updateData(updateDataApi.id, addData)
      console.log(res)

      if (res.status === 200) {

        setData((prev) => {
          return prev.map((curElem) => {
            return curElem.id === res.data.id ? res.data : curElem;
          })
        })
        setAddData({ title: "", body: "" }) //to empty the input box
        setUpdateDataApi({})  // to update Edit text to post text into the button

      }
    } catch (error) {
      console.log(error)
    }
  }


  const handleFormSubmit = (e) => {   //✅3
    e.preventDefault();
    const action = e.nativeEvent.submitter.value;
    addPostData()

    if (action === "Add") {
      addPostData()
    } else if (action === 'Edit') {
      updatePostData()
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor='title'></label>
        <input type='text' autoComplete='off' id='title' name='title' placeholder='Add Title' value={addData.title} onChange={handleInputChange} />

        <label htmlFor='body'></label>
        <input type='text' autoComplete='off' id='body' name='body' placeholder='Add Post' value={addData.body} onChange={handleInputChange} />

        <button type='submit' value={isEmpty ? "Add" : "Edit"}>{isEmpty ? "Add" : "Edit"}</button>  //✅2
      </div>
    </form>
  )
}

export default Form


// PostApi.jsx

import axios from 'axios';

const api = axios.create({
  baseURL: "https:/api.com/post"
})

//====== get methord =========
export const getPost = () => {
  return api.get('/post');
}

//====== delete methord ===========

export const deletePost = (id) => {
  return api.delete(`/post/${id}`);
}

//====== Post methord ===========

export const postData = (data) => {
  return api.post(`/post/`, data);
}

//========= Put methord ===========

export const updateData = (id, data) => {   //✅4
  return api.put(`/post/${id}`, data)

}

=============================================================================================================
                                        ✅ React Hook Form
==============================================================================================================



  npm install react-hook-form


  🧩 Step 1: React Hook Form ব্যবহার করা – Basic Example
-------------------------------------------------------

import React from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>React Hook Form Tutorial</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name:</label>
          <input {...register("name", { required: true })} />
          {errors.name && <p style={{ color: "red" }}>Name is required</p>}
        </div>

        <div>
          <label>Email:</label>
          <input {...register("email", { required: true })} />
          {errors.email && <p style={{ color: "red" }}>Email is required</p>}
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}

export default App;


📝 Explanation (বাংলায়):
useForm() → React Hook Form এর main hook যেটা ফর্ম ম্যানেজ করতে সাহায্য করে।

register("name") → ফর্ম ইনপুট কে রেজিস্টার করে।

handleSubmit(onSubmit) → সাবমিট করার সময় এই ফাংশন কল হয়।

errors → ফর্ম ভ্যালিডেশন error দেখায়।


✅ Step 2: Default Values ও Reset করা
----------------------------------------

const { register, handleSubmit, reset } = useForm({
  defaultValues: {
    name: "Ranajay",
    email: "ranajay@example.com"
  }
});

const onSubmit = (data) => {
  console.log(data);
  reset(); // ফর্ম ক্লিয়ার করবে
};



🎯 Step 4: Validation Rules
---------------------------------
<input
  {...register("email", {
    required: "Email is required",
    pattern: {
      value: /^\S+@\S+$/i,
      message: "Invalid email address"
    }
  })}
/>
{errors.email && <p>{errors.email.message}</p>}



🔧 ১. setValue() কী?
  ----------------------

👉 setValue() হলো React Hook Form এর একটি ফাংশন যেটার মাধ্যমে তুমি ম্যানুয়ালি কোনো ইনপুট ফিল্ডের ভ্যালু সেট করতে পারো।

  import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    setValue("username", "ranajay");
  }, [setValue]);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("username")} placeholder="Username" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;

📌 আমরা কেন Controller ব্যবহার করি?

React Hook Form এ register() হলো একটা ফাংশন — যেটা ইনপুট ফিল্ডকে ফর্মের সাথে যুক্ত করে। <input {...register("name")} />
🧱 Step 2: সমস্যা কোথায় হয়?
🎯 ধরো তুমি Material UI, React Select, অথবা DatePicker ইউজ করছো।
  <TextField />
<Select />
<DatePicker />

  ✅ এইসব ফিল্ডে আমরা register() দিতে পারি না, কারণ:

এরা নিজেরা কাস্টম UI রেন্ডার করে

ভিতরে আসলে আর input থাকে না

React Hook Form বুঝতে পারে না, কোনটা value, কোনটা onChange

  এখন এই সমস্যার সমাধান দিতে আসে 👉 Controller।
যেমন translator যেমন দুই ভাষার মাঝে দোভাষী হয়ে কাজ করে, ঠিক তেমনই:


<Controller
  name="email"
  control={control}
  defaultValue=""
  render={({ field }) => (
    <TextField {...field} label="Email" />
  )}
/>



🧠 isSubmitting কী?

👉 isSubmitting হলো React Hook Form এর একটি built-in স্টেট (state)।
এটা formState অবজেক্টের ভিতরে থাকে।

📌 কাজ: যখন তুমি ফর্ম সাবমিট করো, তখন isSubmitting true হয়ে যায় এবং সাবমিশন শেষ হলে আবার false হয়ে যায়।

import React from "react";
import { useForm } from "react-hook-form";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Submitting:", data);
    // simulate delay like API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Submitted!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true })} placeholder="Your Name" />
      <input {...register("email", { required: true })} placeholder="Your Email" />

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}


      


===========================================================================================================================================================
                                                            ✅ Axios Tutoruyal
===========================================================================================================================================================

src > api > ednPoints.js
---------------------------

export const BASEURL="URLs://fakestore.api.com"

export const endpoints = {
    products: "/products"
}


App.js (GET Request) ✅
-----------------------
const getProducts = async()=>{

    const res= await axios({
        url:"https://faksestore.com.products",
        methord:get,
        params:{
            id:1
        }
    })

    (or)

    const res=await axios.get(`${BASEURL}${endpoints.products}`);
    console.log(res?.data) //axois's reponse
    return res?.data;
}


App.js (POST Request) ✅
-------------------------

const getProducts = async()=>{

    const res= await axios({
        url:"https://faksestore.com.products",
        methord:post,
        data:{
            id:1   //Sending params in post request
        }
    })
}


Axoise Instance Setup & use ✅
------------------------------

src > api > axiosSetup.js  
--------------------------
<!-- Priyanka Chaurasia -->

import axios from "axios"

export const axoisInstanse = axoise.create({
    baseURL:BASEURL,
    timeout:1000,  //API Calling cacel hoya jabe
    headers:{
        authorization:"test" //login r por j token asbe seta k headers a set korar jonno authorization lagbe
    }
})


//Token thek tobe send korbo nahole send korbo na tokhon amara use korbo interceptor

//outgoing request intercepting
axoisInstanse.interceptors.request.use((cofig)=>{

    const getToken= localStorage.getItem("token");

    if(getToken){
        config.headers["x-access-token"]= getToken
        config.headers.Authorization = Bearer${getToken}
    }
    console.log(config, 'config');
    return config
})

//Response intercepting
axoisInstanse.interceptors.response.use(
    (res)=>{
    console.log(res, "Response")
},
(errors)=>{
    console.log(res, "errors")
}
)


App.js (GET Request) 
-----------------------
const getProducts = async()=>{

    <!-- akane amara base url set korbo na sudhu endpoints gulo stup  korbo -->
    const res= await axoisInstanse.get(endpoints.products); 
    console.log(res?.data)
}




===========================================================================================================================================================
                                                            ✅ React Queary
===========================================================================================================================================================

  

//🔥 React Query and Tenstack query is same


//What is Rect Query? Why we use React Query ?

//✅ setup the query ------------------------

https://tanstack.com/query/v5/docs/framework/react/installation > installtion > npm i @tanstack/react-query

// npm i @tanstack/react-query-devtools

main.jsx
----------

import {QueryClient, QueryClientProvider} from @tenstack/react-query;
import {ReactQueryDevTools} from '@tanstak/react-query-devtools'

let queryClient = new QueryClient();

<QueryClientProvider client={queryClient}>
  <App/>
  <ReactQueryDevTools initialIsOpen={false}/>
</QueryClientProvider>


//✅ Fetch Posts ---------------------------

api / api.js
-----------------

import axios from "axios";

const api= axios.create({
  baseURL:"https://jsonpalceholder"
})

//to fetch the data

export const fetchPosts= async ()=>{
  const res = await api.get('/posts');
  return res.status === 200 ? res.data : []
}


App.jsx
---------
import {useQuery} from "@tenstack/react-query";
import {fetchPosts} from './api/api'

function App(){

  const {data:postData, isLoading,isError, error , status}=useQuery({
    queryKey:['posts'],//like useState
    queryFn:fetchPosts, //like useEffect
  })

  if(!isLoading) return <p>Loading...</p>
  if(isError) return <p>Error:{error} Something went wrong</p>

  return (
    <div>
      {console.log(data, isLoading)}
    </div>
  )


}


//✅ Garbage Collection time ----------------------

/*

First fime fetch kark query data cashe me dal detahe . qury 5 min tak cash se vo data dikhati he par vo piche data fetch karte rahatahe agar within time new data database pe ata he fir vo uss new data ko user ko dikasake

*/

//✅ stale time (Prevent everytime data fetching) --------------------------

if you increase state time then it will not fetch data

App.jsx
---------

function App(){

  const {data:postData, isLoading,isError, error , status}=useQuery({
    queryKey:['posts'],//like useState
    queryFn:fetchPosts, //like useEffect
    staleTime: 10000 // ✅ 10 sec tak new data fetch nahi hoga , this is in milisecond
  })
}


//✅ (Pooling in React Query) API call within a time interval -----------------------


function App(){

  const {data:postData, isLoading,isError, error , status}=useQuery({
    queryKey:['posts'],
    queryFn:fetchPosts,
    refetchInterval:1000 //✅ Every one sec dta wapas refetch karo. staleTime rahaga to hum server ko retch nahi kar paynga
    refetchIntervalInBackground: true , //✅ when we go to another tob thattime also fetch our data
  })
}



//✅ Dynamic page in react query  ----------------------------

app.js
------

{
  path:"/rq/:id",
  element:<FetchIndv/>
}

FetchRQ.jsx
--------------
return(

  <Navlink to={`/rq/${elm?.id}`}>
  <li>{body}</li>
  <Navlink/>
)

api / api.js
-----------------

import axios from "axios";

const api= axios.create({
  baseURL:"https://jsonpalceholder"
})

//to fetch the data

export const fetchPosts= async ()=>{
  const res = await api.get('/posts');
  return res.status === 200 ? res.data : []
}

//✅ Fetch individual post

export const fetchInvPost= async (id)=>{
  try{
    const res = await api.get(`/posts/${id}`);
    return res.status === 200 ? res.data : []
  }catch(err){
    console.log(err)
  }

}


FetchIndv.jsx
---------------

import React from 'react'
import {useQuery} from "@tenstack/react-query";
import {useParams} from 'react-router-dom';
import fetchInvPost from 'api/api'


const FetchIndv = () => {

  let {id}= useParams()

  const {data, isPending, isError, error}=useQuery({
  queryKey:['post',id],//jab jab id change hoga tab tab queryFun call hoga
  queryFn:()=>fetchInvPost(id),
  })

  console.log(data)

  if(!isLoading) return <p>Loading...</p>
  if(isError) return <p>Error:{error} Something went wrong</p>

  return (
    <div>
      <h1>Single Post</h1>
    </div>
  )
}

export default FetchIndv



//✅ Pagination  ----------------------------


api / api.js
-----------------

import axios from "axios";

const api= axios.create({
  baseURL:"https://jsonpalceholder"
})

//✅1 to fetch the data

export const fetchPosts= async (pageNumber)=>{
  const res = await api.get(`/posts?_start=${pageNumber}&_limit=3`);
  return res.status === 200 ? res.data : []
}


export const fetchInvPost= async (id)=>{
  try{
    const res = await api.get(`/posts/${id}`);
    return res.status === 200 ? res.data : []
  }catch(err){
    console.log(err)
  }
}




FetchRQ.jsx //✅2
-----------------
import {keepPreviosData, useQuery} from "@tenstack/react-query"

import fetchPost form '..api/api';

export const FetchFQ=()=>{

  const [pageNumber, setPageNumber]= useState(0)

  const {data:postData, isLoading,isError, error , status}=useQuery({
    queryKey:['posts', pageNumber],
    queryFn:()=> fetchPosts(pageNumber),
    placeholderData:keepPreviousData,//✅3  jab app data fetch karrahaho tab app previos data ko asatise rakhiya and jabhi naya data aye tabhi update kijiya. loading dikhane nahi dikhiya
  })


return(

  <>
  <Navlink to={`/rq/${elm?.id}`}>
    <li>{body}</li>
    <Navlink/>

    <div className="pagination_box">
      <button onclick={()=> setPageNumber(prev)=> prev - 3}  disabled={pageNumber === 0 ? true : false}>Prev</button>
      <p>{pageNumber / 3 }</p>
      <button onclick={()=> setPageNumber(prev)=> prev + 3}>Next</button>
    </div>
  </>

  )


}


//✅ useMustation Hook  ----------------------------

//curd operation me usemutation hook ka use hota he.


1) Delete -----------

FetchRQ.jsx
-----------------
import {keepPreviosData, useQuery, useMuatation, useQuiquClient} from "@tenstack/react-query"
import {deletePost} from "api/api" ✅4

import fetchPost form '..api/api';

export const FetchFQ=()=>{

  const [pageNumber, setPageNumber]= useState(0)

  const queryClient= useQueryClient(); //✅6

  const {data:postData, isLoading,isError, error , status}=useQuery({
    queryKey:['posts', pageNumber],
    queryFn:()=> fetchPosts(pageNumber),
    placeholderData:keepPreviousData,
  })

  //! ✅1 Mutation Function to delete this post
 const deleteMutation = useMutation({
    mutationFn:(id)=> deltePost(id),  //✅5

    onSuccess:(data, id)=>{ //✅7
      queryClient.setQueryData(['posts', pageNumber],(curElm)=>{
        return curElm?.filter((post)=> post.id !== id )
      })
    }
  })



return(

  <>
  <Navlink to={`/rq/${elm?.id}`}>
    <li>{body}</li>
    <button onClick={deleteMutation.mutate(id)}>Delete</button> //✅2  .mutate is call the mutationFn
    <Navlink/>
  </>
  )

}


api / api.js
-----------------

import axios from "axios";

const api= axios.create({
  baseURL:"https://jsonpalceholder"
})

// fetch the data

export const fetchPosts= async (pageNumber)=>{
  const res = await api.get(`/posts?_start=${pageNumber}&_limit=3`);
  return res.status === 200 ? res.data : []
}


export const fetchInvPost= async (id)=>{
  try{
    const res = await api.get(`/posts/${id}`);
    return res.status === 200 ? res.data : []
  }catch(err){
    console.log(err)
  }
}

//✅3 Delete the post

export const deltePost=(id)=>{
  return api.delete(`/posts/${id}`)
}




2) Update -----------

api / api.js
-----------------

import axios from "axios";

const api= axios.create({
  baseURL:"https://jsonpalceholder"
})

// fetch the data

export const fetchPosts= async (pageNumber)=>{
  const res = await api.get(`/posts?_start=${pageNumber}&_limit=3`);
  return res.status === 200 ? res.data : []
}

export const fetchInvPost= async (id)=>{
  try{
    const res = await api.get(`/posts/${id}`);
    return res.status === 200 ? res.data : []
  }catch(err){
    console.log(err)
  }
}

export const deltePost=(id)=>{
  return api.delete(`/posts/${id}`)
}

{/*✅1 to update the post  */}

export const updatePost=()=>{
  return api.patch(`/post/${id}`,{title:"I Have Update"})
};


FetchRQ.jsx
-----------------
import {keepPreviosData, useQuery, useMuatation, useQuiquClient} from "@tenstack/react-query"
import {deletePost, updatePost} from "api/api"

import fetchPost form '..api/api';

export const FetchFQ=()=>{

  const [pageNumber, setPageNumber]= useState(0)

  const queryClient= useQueryClient();

  const {data:postData, isLoading,isError, error , status}=useQuery({
    queryKey:['posts', pageNumber],
    queryFn:()=> fetchPosts(pageNumber),
    placeholderData:keepPreviousData,
  })


 const deleteMutation = useMutation({
    mutationFn:(id)=> deltePost(id),

    onSuccess:(data, id)=>{
      queryClient.setQueryData(['posts', pageNumber],(curElm)=>{
        return curElm?.filter((post)=> post.id !== id )
      })
    }
  })


  //! ✅2 Mutation function to update the post
 const updateMutation = useMutation({
  mutationFn:(id)=> updatePost(id),

  onSuccess:(apiData, postId)=>{
    queryClient.setQueryData(['posts', pageNumber],(postsData)=>{
      return postsData?.map((curPost)=>{
        return curPost.id === postId ? {...curPost, title:apiData.data.title} : curPost
      })
    })
  }
})



return(

  <>
  <Navlink to={`/rq/${elm?.id}`}>
    <li>{body}</li>
    <button onClick={deleteMutation.mutate(id)}>Delete</button>
    <button onClick={updateMutation.mutate(id)}>Update</button>  //✅3
    <Navlink/>
  </>

  )

}



//✅ Infine Scroll  ----------------------------

import React from 'react'
import {useInfiniteQuery} from @tanstack/react-query;
import {fetchUsers} from "api/api"

const InfiniteScroll = () => {


//✅2
const {data, hasNextPage, fetchNextPage, status, isFetchingNextPage}= useInfiniteQuery({
queryKey:['users'],
queryFn:fetchUsers,
getNextPageParams:(lastPage, allpages)=>{
  // getNextPageParams kakam he we have more pages or not

  return lastPage.length === 10 ? allpages.length+1 : undefined
}
})

useEffect(() => {
  window.addEventListener('scroll', handleScroll),
  return ()=> window.removeEventListener('scroll', handleScroll)

  const bottom= window.innerHeight + window.scrollY  > = document.documentElement.scrollHeight - 1;

  if(bottom && hasNextPage){
    fetchNextPage()
  }

}, [])

  return (
    <div>
      {
        data?.pages?.map((page, index)=>(
          <ul>
            {
              page.map((user)=>(
                <li><p>user</p></li>
              ))
            }
          </ul>
        ))
      }
      {isFetchingNextPage ? "Loading..." : null}

    </div>
  )
}

export default InfiniteScroll


api / api.js
-----------------

import axios from "axios";

const api= axios.create({
  baseURL:"https://jsonpalceholder"
})

// fetch the data

export const fetchPosts= async (pageNumber)=>{
  const res = await api.get(`/posts?_start=${pageNumber}&_limit=3`);
  return res.status === 200 ? res.data : []
}

export const fetchInvPost= async (id)=>{
  try{
    const res = await api.get(`/posts/${id}`);
    return res.status === 200 ? res.data : []
  }catch(err){
    console.log(err)
  }
}

export const deltePost=(id)=>{
  return api.delete(`/posts/${id}`)
}

export const updatePost=()=>{
  return api.patch(`/post/${id}`,{title:"I Have Update"})
};

//✅2 infinite scrolling

//pageParam is page no

export const fetchUsers= async({pageParam=1})=>{
  try{
    const res= await axios.get(`https:api.github/users?per_page=10%page=${pageParam}`);

    return res.data

  }catch(error){
    console.length(console.error();
    )
  }
}



// ==============================================================================


// ================================================================================================================

// React Event Propagation

//Buble Phase

import const EventPropagation = () => {

    const handleGrandparent = () => {
        console.log("GrandParent Clikced");
    }

    const handleParentClick = () => {
        console.log("Parent Clicked")
    }

    const handleChildClick = (event) => {
        console.log(event);
        console.log("Child Clicked");
    }

    return (
        <div>
            <div onClick={handleGrandparent}>

                <div onClick={handleParentClick}>

                    <div onClick={handleChildClick}>

                    </div>

                </div>

            </div>
        </div>
    )
}

// > if you click child div then => Child Clicked , Parent Clicked , GrandParent Clikced



import const EventPropagation = () => {

    const handleGrandparent = (event) => {
        console.log("GrandParent Clikced");
        event.stopPropagation() //✅
    }

    const handleParentClick = (event) => {
        console.log("Parent Clicked")
        event.stopPropagation()  //✅
    }

    const handleChildClick = (event) => {
        console.log(event);
        event.stopPropagation()  //✅
        console.log("Child Clicked");
    }

    return (
        <div>
            <div onClick={handleGrandparent}>

                <div onClick={handleParentClick}>

                    <div onClick={handleChildClick}>

                    </div>

                </div>

            </div>
        </div>
    )
}

// > now if we one that console what we want need. Example click on child then => Child Clicked 


//Capturing Phase

import const EventPropagation = () => {

    const handleGrandparent = (event) => {
        console.log("GrandParent Clikced");
    }

    const handleParentClick = (event) => {
        console.log("Parent Clicked")
    }

    const handleChildClick = (event) => {
        console.log(event);
        console.log("Child Clicked");
    }

    return (
        <div>
            <div onClickCapture={handleGrandparent}>

                <div onClickCapture={handleParentClick}>

                    <div onClickCapture={handleChildClick}>

                    </div>

                </div>

            </div>
        </div>
    )
}

// > if you click child div then => GrandParent Clikced ,Parent Clicked , Child Clicked







  
=============================================================================================================================================================
                                                           ✅ Webskitters Real JSON Server and Real API Work
=============================================================================================================================================================

  
// ami jodi dev dependency hisabe download na kore tahole ki effect hobe . 

/*
Create => post
read => get
Update => put (individual or full change), patch (particular change or password change)
delte => delete
*/

/*
json server=> ceate api locally. if you fit the data into the json server then it will not remove


install json server (it is a Dev dependancy)
==============================================

npm i -D json-server

*/


// Create Database folder => debugger.json file 

{
    "product": [
        {
            'id': 'prod',
            'pname': "Mouse",
            "color": "blue",
            "price": "450"
        }
    ]
}

// npx json-server database/db.json --port 2000


// npm i axios react-router-dom bootstrap react-bootstrap


// Create api folder => and apiURl.js and axiosInstance.js file into it 

// apiURl.js
export const baseUrl = "https://localhost:2000/";
export const prod_end = "product";

// axiosInstance.js

/* (we need api every where so for that reason we store base url in that file for reuseability) */

import { baseUrl, prod_end } from "./api";
import axios from "axios";

let axiosInsstance = axios.create({
    baseURL: baseUrl
})

export default axiosInsstance;

//Read.jsx --------------------------------------

const Read = () => {
   
    let fetchProduct = () => {
        let api = prod_end
        axiosInsstance
            .get(api)
            .then((res) => {
                console.log(res);
                
            })
            .catch((err) => console.log(err));
    };

    
/*
HTTP request handle (get, post, put)

API testing tool = Postman, Thunder client

API r throught te add , delete, post

1) Open postman => new => HTTP=> paste url into the box => GET => send =>(now you can get the response. This is get methord)


2) paste url into the box => POST => BODY => FORM Data => key (name) = webskitters, (username) = ranajay => send => { "name":  webskitters, "username": ranajay} => Save

*/

// Submit input data through API

import { useState } from 'react';
import './App.css';
import axios from 'axios'; //✅1

const exEmail= RegExp("^[^\W_]+\w*(?:[.-]\w*)*[^\W_]+@[^\W_]+(?:[.-]?\w*[^\W_]+)*(?:\.[^\W_]{2,})$")

const apiURL= "https://jsonplaceholder.typicode.com/users";  //✅2

/*
/  / = wrappiing
^ = start;
(?=.*?[A-Z]) = must atleast one uppercase letter;
()= grouping
.{8,}= match any charecter
*/

function App() {
  let [input, setInput] =useState({fullname:"", email: "", errors:{
    fullname:"",
    email: ""
  }});

  const changeHandler=(event)=>{
    let {name, value}= event.target;
    let err={...input.errors}
    switch(name){
      case 'fullname':
        if(value.length < 1){
          err.fullname="Required Field"
        }else{
          err.fullname=""
        }
      break;
      case 'email':
        err.email= value.length < 1 ? "Required Field" : exEmail.test(value) ? "" : "Wrogn pattern"
      break;
      default: console.log("Not necessary")

    }
    setInput({...input,[name]:value, errors:err})
  }

  console.log("vaidation errs :" ,input.errors)

  const submitHandeler=(event)=>{   
    event.preventDefault();
    console.log("Form Submited: " , input)

    let fromValue={   //✅3
      name: input.fullname,
      email: input.email
    }

    //✅3  (Value send korar jonno api request = post)
    axios.post(apiURL,fromValue).then(res=>{
      alert("User added");
      console.log("Axois resolved", res);
    }).catch(err=>{

      alert("Error added");
      console.log("Axois err", err)
    })
    

  }
  return (
    <div className="App">
      <h1>Custom Conroll form</h1>
      <form onSubmit={submitHandeler}>
        <input type="text" name="fullname" placeholder='Enter your full name' onChange={changeHandler}/>
        <br/>
        {input.errors && input.errors.fullname.length > 0 ? <p>{input.errors.fullname}</p> : null}
        <input type='email' name='email' placeholder='Enter your email' onChange={changeHandler}/>
        <br/>
        {input.errors && input.errors.email.length > 0 ? <p>{input.errors.email}</p> : null}
        <input type='submit' value="Add"/>
      </form>
    </div>
  );
}

export default App;


// Delete and redirect post

  function deletehandeler() {
   
    axiosInsstance
      .delete(dapi)
      .then((res) => {
        navigate("/") ✅redirect 3
      })
      .catch((err) => console.log("Error Is " + err));
  }

 

// ==============================================================================================================================================================

// browser => console=> payload (data ki formate a gache), preview , Response (documentation r response ta dakhai) 


// ========================================================================================================================================================


// Image upload 

import React, { useEffect } from "react";
import { useState } from "react";
import AxiosInstance from "../api/AxiosInstance";
import { endpoint } from "../api/Apiurl";

const Register = () => {
  const [inputs, setInputs] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  let [imgState, setImgState] = useState();  //✅3

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleImage = (event) => {    //✅2

    //event print kore dakha nao image ta asche kothai
    console.log("event for img", event.target.files);
    setImgState(event.target.files[0]);
    console.log(inputs, imgState);

  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Received Data", inputs);

    let fromValue = {
      first_name: inputs.first_name,
      last_name: inputs.last_name,
      email: inputs.email,
      password: inputs.password,
    };

    let data = new FormData();  //✅3
    data.append("first_name", inputs.first_name);
    data.append("last_name", inputs.last_name);
    data.append("email", inputs.email);
    data.append("password", inputs.password);
    data.append("profile_pic", imgState);

    AxiosInstance.post(endpoint, data, {   //✅4
      headers: {
        "Content-Type": "application/form-data",
      },
    })
      .then((res) => {
        console.log("User Added", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your first name:
        <input
          type="text"
          name="first_name"
          value={inputs.first_name}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter your last name:
        <input
          type="text"
          name="last_name"
          value={inputs.last_name}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter your email:
        <input
          type="email"
          name="email"
          value={inputs.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter your password:
        <input
          type="password"
          name="password"
          value={inputs.password}
          onChange={handleChange}
        />
      </label>

      <label>
        Upload Image file:
        <input type="file" onChange={handleImage} multiple accept="*image/*" />  //✅1
      </label>
      <input type="submit" />
    </form>
  );
};

export default Register;

//(binary)

// ========================================================================================================================================================

//✅ Login and sove token in local storage

/*
Apiurl.js
================
*/

export const baseurl = "https://wtsacademy.dedicateddevelopers.us/";

export const endpoint = "api/user/signup";

export const signinEndpoint = "api/user/signin";  //✅


/*
AxiosInstance.js
=======================
*/

import axios from "axios";
import { baseurl } from "./Apiurl";

const instance = axios.create({
  baseURL: baseurl
});

instance.interceptors.request.use(    //✅
  async function (config) {
    const token = sessionStorage.getItem("token");

    if (token) {
      config.headers['x-access-token'] = token
    }
    return config
  },
  function (err) {
    return Promise.reject(err);
  }
)

export default instance


//login.jsx

import React, { useEffect } from "react";
import { useState } from "react";
import AxiosInstance from "../api/AxiosInstance";
import { signinEndpoint } from "../api/Apiurl";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Received Data", inputs);

    let fromValue = {
      email: inputs.email,
      password: inputs.password,
    };

    AxiosInstance.post(signinEndpoint, fromValue)
      .then((res) => {
        console.log("User SignIn", res);
        if (res?.data.status === 200) {
          alert(res.data.message);
          window.sessionStorage.setItem("token", res.data.token);
          navigate("/home");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your email:
        <input
          type="email"
          name="email"
          value={inputs.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Enter your password:
        <input
          type="password"
          name="password"
          value={inputs.password}
          onChange={handleChange}
        />
      </label>

      <input type="submit" />
    </form>
  );
};

export default Login;

//after login this we get a token

//go to json webtoken => coppy the token => see the payload

// ========================================================================================================================================================

/*
Apiurl.js
================
*/

export const baseurl = "https://wtsacademy.dedicateddevelopers.us/";

export const endpoint = "api/user/signup";

export const signinEndpoint = "api/user/signin";

export const profile_url = "api/user/profile-details"; //✅


//Home.jsx

import React, { useEffect, useState } from "react";
import AxiosInstance from "../api/AxiosInstance";
import { profile_url } from "../api/Apiurl";


const Home = () => {

  const [usedetails, setusedetails] = useState({
    email: "",
    first_name: "",
    last_name: "",
    profile_pic: ""
  })


  const fetchingdata = () => {
    AxiosInstance.get(profile_url)
      .then((res) => {

        if (res.data.status === 200) {

          console.log("User profile", res);

          //For image

          let baseurl = "https://wtsacademy.dedicateddevelopers.us/";
          let folder_path = "uploads/user/profile_pic/"
          let profile_image = baseurl + folder_path + res.data.data.profile_pic;

          setusedetails({ ...usedetails, first_name: res.data.data.first_name, last_name: res.data.data.last_name, profile_pic: profile_image, email: res.data.data.email })

        }

      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchingdata();
  }, []);


  console.log(usedetails)

  return (
    <div>
      <h1>Home</h1>
      <img src={usedetails.profile_pic} style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "100%" }} />
    </div>
  );
};

export default Home;
// https://wtsacademy.dedicateddevelopers.us/uploads/user/profile_pic/profilepicurl (to get profile image)

//Now we get the details of signup response. amra folder path diya profile display korate pari . folder pathe backend developer dabe


==============================================================================================================================================

✅ How to upload image in json server

const Addbook = () => {

  let [mainimg, setMainimg] = useState("")

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { book_name, book_description, book_image } = data;
    console.log(book_name, book_description, book_image[0])



    ✅ Convert Image to Base64 for upload to json server

    let file = book_image[0];
    let reader = new FileReader();
    let base64String = "";

    reader.onload = function () {
      base64String = reader.result.replace("data:", "")
        .replace(/^.+,/, "");
      let imageBase64Stringsep = base64String;

      let formdb = {
        book_name: book_name,
        book_description: book_description,
        book_image: base64String
      }
  
      instance.post(port, formdb).then((res) => {
        alert("Data Add to DB")
      })
        .catch((err) => {
          alert("Error : Data not added")
        })
    }
    reader.readAsDataURL(file);

  

  };
  return (
    <Container className="pt-5 pb-5">
      <Row>
        <Col>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Book Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Book Name"
                {...register("book_name")}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Book Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Book Description"
                {...register("book_description")}
              />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Default file input example</Form.Label>
              <Form.Control type="file" {...register("book_image")} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>


          </Form>
        </Col>
      </Row>
    </Container>
  );
};

index.jsx
==============

 <Row className='pt-3 justify-content-center'>
          {product.map((dtls) => (
            <Col className='mb-5' md={3} key={dtls.id}>
              <Card style={{ width: '100%', height: "100%" }} className='pt-4 pb-4'>
                <Card.Img
                  variant="top"
                  src={`data:image/png;base64,${dtls.book_image}`}
          
                  style={{ height: "200px", objectFit: "contain" }}
                />
            
              </Card>
            </Col>
          ))}
  </Row> 

  

====================================================================================================

      Redux tutoriyal
====================================================================================================

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

============================================================================================================


TODO APP With Next js 15, typescript and context api

todo-app/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
├── components/
│   ├── AddTodo.tsx
│   ├── TodoList.tsx
├── context/
│   └── TodoContext.tsx
├── types/
│   └── todo.ts
├── styles/
│   └── globals.css
├── tsconfig.json
└── package.json

Define Types – types/todo.ts
----------------------------
export interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

Create Context – context/TodoContext.tsx
---------------------------------------------
'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Todo } from '../types/todo';

interface TodoContextType {
  todos: Todo[];
  addTodo: (task: string) => void;
  removeTodo: (id: number) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) throw new Error('useTodo must be used within TodoProvider');
  return context;
};

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (task: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      task,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};




Layout Setup – app/layout.tsx
----------------------------

  import './globals.css';
import { TodoProvider } from '../context/TodoContext';

export const metadata = {
  title: 'Todo App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TodoProvider>
          <main className="p-6 max-w-xl mx-auto">{children}</main>
        </TodoProvider>
      </body>
    </html>
  );
}


Home Page – app/page.tsx
-------------------------

  import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}


AddTodo Component – components/AddTodo.tsx
-------------------------------------------

'use client';

import { useState } from 'react';
import { useTodo } from '../context/TodoContext';

export default function AddTodo() {
  const { addTodo } = useTodo();
  const [task, setTask] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!task.trim()) return;
    addTodo(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={task}
        onChange={e => setTask(e.target.value)}
        placeholder="Enter a task"
        className="border p-2 rounded mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add
      </button>
    </form>
  );
}


TodoList Component – components/TodoList.tsx
----------------------------------------------

'use client';

import { useTodo } from '../context/TodoContext';

export default function TodoList() {
  const { todos, removeTodo } = useTodo();

  return (
    <ul className="space-y-2">
      {todos.map(todo => (
        <li key={todo.id} className="flex justify-between items-center border p-2 rounded">
          <span>{todo.task}</span>
          <button
            onClick={() => removeTodo(todo.id)}
            className="text-red-500 hover:underline"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}


