/*Wild Woasis Project - React Query & Supabase*/

/ Eslient configaration

crate
  .eslintrc.json
================

{
    "extends": "react-app"
}

vite.config.js
===============
import eslint from "vite-plugin-eslint";

export default defineConfig({
    plugins: [react(), eslint()]
})

// ====================================================================================

//npm i react-router-dom@6

Routing
--------------------

App.js
========

<BrowserRouter>

<Routes>
    <Route element={<AppLayout/>}>

    <Route index element={<Navigate replace to="dashboard"/>}/>//bydefault opened page
    <Route path="dashboard" element={<Dashboard/>}/>
    <Route path="booking" element={<Booking/>}/>

    </Route>

    <Route path="login" element={<Login/>}/>
    <Route path="*" element={<PageNotFound/>}/>

</Routes>

</BrowserRouter>


AppLayout.js
--------------
import {Outlet} from 'react-router-dom';

function Applayout(){
    return(
        <div>
            <Header/>
            <Sidebar/>
            <Outlet/>
        </div>
    )
}

// ====================================================================================

/*
images should be into publick folder =>
    <img src="/logo-light.png" alt="logo"/>
*/

// How to do active link in ract

// ====================================================================================

//Superbase (Backend as a service)

//✅ Creating a database

/*
Go to superbase.com => start your project => login
new project => Create project => New Organization => Connect => App freamworks => React , vite => coppy the code and crate .env and paste .env code , Coppy utils/supabase.ts and create "utils" and create supabase.js folder and paste the code
Table Editor (add new data)=> Enable row label security => Create a new table =>


Name=Cabin , guest, settings, Booking

Cabin
================================
name  = text
maxCapacity = init
regularPrice = init
discount = init
description = text
image = text

guest
================================
fullname  = text
email = text
nationalID = text
nationality = text
countryFlag = text

settings
================================
minBookingLength = init2;
maxBookingLength = init2;
maxGuestPerBooking = init2;
breakfastPrice = float;

Booking
================================
startDate = timestamp
endDate = timestamp
numNights = init2
numGuests = init2
cabinPrice = float
extraPrice = float
totalPrice = init
status = text
hasBreakfast = bool
isPaid = bool
observations = text
cabinid =  {(click on the link icon) => select a table to refarence = cabins =>select column from = id} save
guest =  {(click on the link icon) => select a table to refarence = guest =>select column from = id} save

save

insert => insert row => write dummy number input of your creted field => save
*/


/*

✅ Adding Securtity Policies (prevent anyone cannot call our data)
========================================================================
Authentication => polies => { cabins = new policy => get startd quicly => Everone to read access => use the tamplate=> review => save , do it for every table same }

✅ Get API from Docs
==================================
API DOCS => select table => bash  => Read all the rows => coppy the code and paste it into terminal to chek the response


✅ connecting superbase with react app
=========================================

APS DOCs => inroduction => copyy ( npm install --save @suberbase/supabase--js ) & coopy also initializing => GO your project


create services folder => create superbase.js, apiCabins.js

superbase.js
----------------
{{ paste superbase initializing part}}

const superbaseUrl = "https://dvLaevxtc.superbase.co";

const superbaseKey = (go to superbase => setting => API => Project API key => unon key coppy it and paste it);

const superbase= createClient(superbaseUrl,superbaseKey);

export default superbase


apiCabins.js
----------------
{{  Go to superbase => API DOCS => Cabins => go to read all the rows section => coppy read all the row query}}

import superbase from './superbase';


export async function getCabins(){
{{ paste the code hare }}
 const {data, error} = await superbase.from("cabins").select("*");
 if(error){
 console.localStorage("Cabin not loaded");
 throw new Error("Cabins couldnot loaded")
 }
 return data;
}



*/

Cabin.jsx
============

import React from 'react'
import {getCabins} from '../services/apiCabins'

const Cabin = () => {
    useEffect(function(){
        getCabin().then((data)=> console.log(data))
    },[])

  return (
    <div>
      <h1>This is cabins</h1>
    </div>
  )
}

export default Cabin

/*

✅ Setting up Storage Buckets
==================================

Go to superbase => storage => new bukcet => name of bukcet = Avtar (Publick) , cabin-images => save =>
upload images => coppy the url

*/

// ====================================================================================


🔥 React Query
======================

✅ Setting up React Query
==================================

> npm i @tanstack/react-query@4
> npm i @tenstack/react-query-devtools@4   (Download react query dev tools)


App.jsx
========

import { QueryClient, QueryClientProvider } from '@tenstack/react-query'  //✅1
import {ReactQueryDevtools} from '@tenstack/react-query-devtools'; //✅2


const queryClient= new QueryClient({  //✅3
defaultOptions:{
    queries:{
        staleTime: 60 * 1000,
    }
}
})

function App(){

<QueryClientProvider client={queryClient}>  //✅4
  <ReactQueryDevtools initailIsOpen={false}/>
<BrowserRouter>
<Routes>
    <Route element={<AppLayout/>}>
    <Route index element={<Navigate replace to="dashboard"/>}/>
    <Route path="dashboard" element={<Dashboard/>}/>
    <Route path="booking" element={<Booking/>}/>
    </Route>
    <Route path="login" element={<Login/>}/>
    <Route path="*" element={<PageNotFound/>}/>
</Routes>
</BrowserRouter>
</QueryClientProvider>//✅4


}


//click on the icon to open dev tools


✅ Fetching Cabin data
==================================

Cabin.jsx
============

import CabinTable from '../features/cabin/cabinTable';
import React from 'react'
import {getCabins} from '../services/apiCabins'

const Cabin = () => {
    useEffect(function(){
        getCabin().then((data)=> console.log(data))
    },[])

  return (
    <div>
      <CabinTable/>  //✅1
    </div>
  )
}

export default Cabin


CabinTable.jsx  //✅2
=======================

import React from 'react'
import {getCabins} from '../services/apiCabins'

const CabinTable = () => {

    const {isLoading, data:cabins, error} =useQuery({
        queryKey:['cabins'],
        queryFn: getCabin,
    })



    if(isLoading) return <Spinner/>

  return (
    <div>
        <div>Table</div>

        {
            cabins.Map(cabin=><CabinRow cabin={cabin} key={cabin.id}/>)
        }

    </div>
  )
}

export default CabinTable


CabinRow.jsx
==============
import {formatCurrency} from '../../utils/helprs'

function CabinRow({cabin}){

    const {name, maxCapicity, regularPrice, discount, image}= cabin

    return <TableRow role="row">
        <img src={Image}/>
        <h1>{name}</h1>
        <div>Fits Upto {maxCapicity} guest</div>
        <div>Format Currency {regularPric}</div>
        <Discount>{formatCurrency(discount)}</Discount>
        <button>Delte</button>
    </TableRow>
}

export default CabinRow

//open react query icon > select ['cabin'] to see the details of fetched data. (it will help to not fetched twise. when in initial render reat query store the data into cashe so it will help )


helpers.js
===========

> npm i date-fns



✅ Deleting a Cabin
========================

apiCabins.js
----------------

import superbase from './superbase';


export async function getCabins(){

 const {data, error} = await superbase.from("cabins").select("*");

 if(error){
 console.localStorage("Cabin not loaded");
 throw new Error("Cabins couldnot loaded")
 }
 return data;
}


export async function delteCabin(id){

// {{go to api docs => cabins=> delete rows => coppy the code }}

//✅1
const {data, error}= supabase.from("cabins").delete().eq("id", id);

if(error){
    console.localStorage("Cabin not loaded");
    throw new Error("Cabin couldnot loaded")
}
return data;

// {{go to authenticaltion => polices => cabins => new polices => get startd quciky => enable access everyone => use => Delte => Review }}
}

CabinRow.jsx
==============
import {formatCurrency} from '../../utils/helprs'

function CabinRow({cabin}){

    const {id:cabinId ,name, maxCapicity, regularPrice, discount, image}= cabin

    const queryClient= useQueryClient();                             //✅3

    const {isLoading: isDeleting, mutate} = useMutation({         //✅2
        mutationFn:deleteCabin,
        onSuccess:()=>{

            alert("Successfully Deleted")
            queryClient.invalidateQueries({
                queryKey:['cabins']
            })
        },
        onError:(err)=>alert(err.message)
    })

    return <TableRow role="row">
        <img src={Image}/>
        <h1>{name}</h1>
        <div>Fits Upto {maxCapicity} guest</div>
        <div>Format Currency {regularPric}</div>
        <Discount>{formatCurrency(discount)}</Discount>
        <button onclick={()=> mutate(cabinId)} disabled={isDeleting}>Delte</button>  //✅3
    </TableRow>
}

export default CabinRow


✅ Alert tost
================

> npm i react-hot-tost

App.jsx
===========
import { QueryClient } from '@tenstack/react-query'
import {ReactQueryDevtools} from '@tenstack/react-query-devtools';

const queryClient= new QueryClient({
defaultOptions:{
    queries:{
        staleTime: 60 * 1000,
    }
}
})

<queryClient client={queryClient}>

<BrowserRouter>
<Routes>
    <Route element={<AppLayout/>}>
    <Route index element={<Navigate replace to="dashboard"/>}/>
    <Route path="dashboard" element={<Dashboard/>}/>
    <Route path="booking" element={<Booking/>}/>
    </Route>
    <Route path="login" element={<Login/>}/>
    <Route path="*" element={<PageNotFound/>}/>
</Routes>
</BrowserRouter>

<Toaster position="top center" gutter={12} containerSyle={{margin:"8px"}} toastOptions={{   //✅1
    success:{
        duration:3000,
    },
    error:{
        duration: 5000
    },
    style:{
        fontsize:"16px",
        maxwidth: "5000px",
        padding: "16px 24px",
        backgroundColor:"red",
        color:"white"
    },
}}/>

</queryClient>

//click on the icon to open dev tools


CabinRow.jsx   //✅2
==============
import toast, { Toaster } from 'react-hot-toast';

toast.Error(err.message);
toast.success("Sucessfully");



✅ React Hook from
====================

Cabin.jsx
============

import CabinTable from '../features/cabin/cabinTable';
import React from 'react'
import {getCabins} from '../services/apiCabins'

const Cabin = () => {

    const [showForm, setShowForm]= useState(false);  //✅1

    useEffect(function(){
        getCabin().then((data)=> console.log(data))
    },[])

  return (
    <div>
      <CabinTable/>
      <button onclick={()=> setShowForm((show)=>!show)}>Add new Cabin </button> //✅2

      {
        showForm && <CabinCabinForm/> //✅3
      }
    </div>
  )
}

export default Cabin


CabinCabinForm.jsx  //✅4
=======================

> npm i react-hook-form@7 (install version 7)

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";


import { useForm } from "react-hook-form";
import { createCabin } from "../../services/apiCabins";

function CreateCabinForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();  //✅5



  function onSubmit(data) {   //✅8
    // mutate({ ...data, image: data.image[0] });
    console.log(data)
  }

  function onError(errors) {
    // console.log(errors);
  }

  return (                         //✅7    //✅7
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isCreating}
          {...register("name")}
        />    //✅6
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isCreating}
          {...register("maxCapacity")}
        />  //✅6
      </FormRow>

      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isCreating}
          {...register("regularPrice")}  //✅6
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isCreating}
          defaultValue={0}
          {...register("discount")}  //✅6
        />
      </FormRow>

      <FormRow
        label="Description for website"
        disabled={isCreating}
        error={errors?.description?.message}
      >
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          disabled={isCreating}
          {...register("description", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Cabin photo">
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>Add cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;


✅ Create new Cabin
====================


apiCabins.js
----------------

import superbase from './superbase';


export async function getCabins(){

 const {data, error} = await superbase.from("cabins").select("*");

 if(error){
 console.localStorage("Cabin not loaded");
 throw new Error("Cabins couldnot loaded")
 }
 return data;
}


export async function delteCabin(id){

const {data, error}= supabase.from("cabins").delete().eq("id", id);

if(error){
    console.localStorage("Cabin not loaded");
    throw new Error("Cabin couldnot loaded")
}
return data;

}


export async function createCabin(newCabin){  //✅1

// {{go to authenticaltion => polices => cabins => new polices => get startd quciky => enable access everyone => "Enable Create access fro all" => Insert => true => Review  }}
// {{go to authenticaltion => polices => cabins => new polices => get startd quciky => enable access everyone => "Enable Update access fro all" => Update => true, true => Review  }}

// Api => cabins => "insert rows 's " coppy the code and paste hare

const {data, error} = await supabase.from("cabins").insert([newCabin])

if(error){
  console.log(error)
  thow new Error("Cabin couldnot be created")
}

return data

}



CabinCabinForm.jsx  //✅2
=======================

> npm i react-hook-form@7 (install version 7)

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";


import { useForm } from "react-hook-form";
import { createCabin } from "../../services/apiCabins";

function CreateCabinForm() {

  const queryClient = useQueryClient(); //✅4

  const {mutate, idLoading:isCreating}= useMutation({  //✅3
    mutationFn:createCabin,
    onSuccess:()=>{
      toast.success("New Cabin Successfully Created");
      queryClient.invalidateQueries({
        queryKey: ["cabins"]
      })
      reset()
    },

    onError:(err) => toast.Error(err.message)
  })



  const { register, handleSubmit, reset } = useForm();

  function onSubmit(data) {
    mutate(data); //✅5
  }



  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isCreating}
          {...register("name")}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isCreating}
          {...register("maxCapacity")}
        />
      </FormRow>

      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isCreating}
          {...register("regularPrice")}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isCreating}
          defaultValue={0}
          {...register("discount")}
        />
      </FormRow>

      <FormRow
        label="Description for website"
        disabled={isCreating}
        error={errors?.description?.message}
      >
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          disabled={isCreating}
          {...register("description", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Cabin photo">
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>Add cabin</Button> //✅6
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;




✅ Uploading Image
====================


CabinCabinForm.jsx
=======================

> npm i react-hook-form@7 (install version 7)

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";


import { useForm } from "react-hook-form";
import { createCabin } from "../../services/apiCabins";

function CreateCabinForm() {

  const queryClient = useQueryClient();

  const {mutate, idLoading:isCreating}= useMutation({
    mutationFn:createCabin,
    onSuccess:()=>{
      toast.success("New Cabin Successfully Created");
      queryClient.invalidateQueries({
        queryKey: ["cabins"]
      })
      reset()
    },

    onError:(err) => toast.Error(err.message)
  })



  const { register, handleSubmit, reset } = useForm();

  function onSubmit(data) {     //✅2
    mutate({...DataTransfer, image:data.Image[0]});

  }


  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isCreating}
          {...register("name")}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isCreating}
          {...register("maxCapacity")}
        />
      </FormRow>

      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isCreating}
          {...register("regularPrice")}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isCreating}
          defaultValue={0}
          {...register("discount")}
        />
      </FormRow>

      <FormRow
        label="Description for website"
        disabled={isCreating}
        error={errors?.description?.message}
      >
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          disabled={isCreating}
          {...register("description", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Cabin photo">  //✅1
        <FileInput
          id="image"
          accept="image/*"
          type="file"
          {...register("image", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>Add cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;




✅ Create new Cabin
====================


apiCabins.js
----------------

import superbase, {supabaseUrl} from './superbase'; //✅5


export async function getCabins(){

 const {data, error} = await superbase.from("cabins").select("*");

 if(error){
 console.localStorage("Cabin not loaded");
 throw new Error("Cabins couldnot loaded")
 }
 return data;
}


export async function delteCabin(id){

const {data, error}= supabase.from("cabins").delete().eq("id", id);

if(error){
    console.localStorage("Cabin not loaded");
    throw new Error("Cabin couldnot loaded")
}
return data;

}


export async function createCabin(newCabin){

  const imageName=`${Math.random()}-${newCabin.image.name}`.replace('/', ''); //✅3 //imagename preview: 0.865847847484-cabin-008.jpg

  const imagePath= `${supabaseUrl}/storage/v1/object/publick/cabin-images/${imageName}` //✅4

//1: Create Cabin

const {data, error} = await supabase.from("cabins").insert([...newCabin, image: imagePath])//✅5

if(error){
  console.log(error)
  thow new Error("Cabin couldnot be created")
}

//2: Upload Image

/*
Api => intoduction => javascript => uploading a file => first do configure store , coppy the bellow code and pate it into the code

storage => polices => cabin-images => new Policy => full customization => select all => "give any plicy name" => Target Role="Only for atuthentication users" => Review

*/

const {error:storageError}= await supabase.Storage.from("bucket-name").upload(imageName, newCabin.image)


//3: Delete the cabin if there was an error uploading image

if(storageError){
  await supabase.from("cabins").delete().eq("id", data.id);
  console.error(storageError)
  throw new Error("Cabin image could not be uploaded")
}


return data

}




✅ Editing a Cabin
====================


CabinRow.jsx
==============
import {formatCurrency} from '../../utils/helprs'

function CabinRow({cabin}){

  const [showForm, setShowForm]= useState(false); //✅2

    const {id:cabinId ,name, maxCapicity, regularPrice, discount, image}= cabin

    const queryClient= useQueryClient();

    const {isLoading: isDeleting, mutate} = useMutation({
        mutationFn:deleteCabin,
        onSuccess:()=>{

            alert("Successfully Deleted")
            queryClient.invalidateQueries({
                queryKey:['cabins']
            })
        },
        onError:(err)=>alert(err.message)
    })

    return (
    <>
     <TableRow role="row">
      <img src={Image}/>
      <h1>{name}</h1>
      <div>Fits Upto {maxCapicity} guest</div>
      <div>Format Currency {regularPric}</div>
      <Discount>{formatCurrency(discount)}</Discount>
      <button onclick={()=> setShowForm((show)=>!show)}>Delte</button>
      <button onclick={()=> mutate(cabinId)} disabled={isDeleting}>Edit</button>  //✅1
     </TableRow>
    {
    showForm && <CreateCabinForm cabinToEdit={cabin}/> //✅3
    }
    </>
    )
}

export default CabinRow



CabinCabinForm.jsx
=======================

> npm i react-hook-form@7 (install version 7)

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";


import { useForm } from "react-hook-form";
import { createEditCabin } from "../../services/apiCabins"; //✅11

function CreateCabinForm({cabinToEdit={}}) { //✅4

  const {id:editId,...editValues}=cabinToEdit; //✅5

  const isEditSession = Boolean(editId);  //✅6

  const { register, handleSubmit, reset , getValues} = useForm({ //✅7
    //add values as a default values inthe form
    defaultValues: isEditSession ? editValues : {}
  });


  const queryClient = useQueryClient();

  const {mutate:createCabin, idLoading:isCreating}= useMutation({
    mutationFn:createEditCabin, //✅12
    onSuccess:()=>{
      toast.success("New Cabin Successfully Created");
      queryClient.invalidateQueries({
        queryKey: ["cabins"]
      })
      reset()
    },

    onError:(err) => toast.Error(err.message)
  })

  const {mutate:editCabin, idLoading:isCreating}= useMutation({
    mutationFn:({newCabinData, id})=>createEditCabin(newCabinData, id),   //✅13
    onSuccess:()=>{
      toast.success("New Cabin Successfully Edited");
      queryClient.invalidateQueries({
        queryKey: ["cabins"]
      })
      reset()
    },

    onError:(err) => toast.Error(err.message)
  })

  const isWorking = isCreating || isEditing;  //✅14

  function onSubmit(data) {

    const image = typeof data.image === "string" ? data.image : data.image[0]

    if(isEditingSession) editCabin({newCabinData:{
      ...data , image }, id:editId})

    else createCabin({...DataTransfer, image:image});
  }



  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name")}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          {...register("maxCapacity")}
        />
      </FormRow>

      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register("regularPrice")}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isWorking}
          defaultValue={0}
          {...register("discount")}
        />
      </FormRow>

      <FormRow
        label="Description for website"
        disabled={isWorking}
        error={errors?.description?.message}
      >
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          disabled={isWorking}
          {...register("description", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Cabin photo">    //✅9
        <FileInput
          id="image"
          accept="image/*"
          type="file"
          {...register("image", {
            required: isEditSession ? false :"This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isWorking}>{isEditSession ? "Edit Cabin" : "Create Cabin"}</Button> //✅8
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;



apiCabins.js
----------------

import superbase, {supabaseUrl} from './superbase';


export async function getCabins(){

 const {data, error} = await superbase.from("cabins").select("*");

 if(error){
 console.localStorage("Cabin not loaded");
 throw new Error("Cabins couldnot loaded")
 }
 return data;
}


export async function delteCabin(id){

const {data, error}= supabase.from("cabins").delete().eq("id", id);

if(error){
    console.localStorage("Cabin not loaded");
    throw new Error("Cabin couldnot loaded")
}
return data;

}


export async function createEditCabin(newCabin, id){ //✅10

  const hasImagePath= newCabin.Image?.startsWith?.(supabaseUrl );

  const imageName=`${Math.random()}-${newCabin.image.name}`.replace('/', '');

  const imagePath= hasImagePath ? newCabin.image : `${supabaseUrl}/storage/v1/object/publick/cabin-images/${imageName}`

//1: Create / Edit Cabin
let query= supabase.from('cabins');

//A) Create
if(!id)
  query = query.insert([{...newCabin, image: imagePath}])

//B) Edit  goto api doc => cabis => update rows
if(id)
  query = query.update([{...newCabin, image: imagePath}]).eq("id", id);


const {data, error}= await query.select().single()

if(error){
  console.log(error)
  thow new Error("Cabin couldnot be created")
}

//2: Upload Image

/*
Api => intoduction => javascript => uploading a file => first do configure store , coppy the bellow code and pate it into the code

storage => polices => cabin-images => new Policy => full customization => select all => "give any plicy name" => Target Role="Only for atuthentication users" => Review

*/

const {error:storageError}= await supabase.Storage.from("bucket-name").upload(imageName, newCabin.image)


//3: Delete the cabin if there was an error uploading image

if(storageError){
  await supabase.from("cabins").delete().eq("id", data.id);
  console.error(storageError)
  throw new Error("Cabin image could not be uploaded")
}


return data

}






✅ React Query into custom hooks
======================================

1) Delete ------------------------------

cabins / useDeleteCabin.js

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      toast.success("Cabin successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteCabin };
}



cabin / CabinRow.jsx
--------------------


import styled from "styled-components";
import { useState } from "react";

import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "./useDeleteCabin"; //✅3
import { formatCurrency } from "../../utils/helpers";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { useCreateCabin } from "./useCreateCabin";


function CabinRow({ cabin }) {
  const [showForm, setShowForm] = useState(false);
  const { isDeleting, deleteCabin } = useDeleteCabin(); //✅2

  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
  } = cabin;

  function handleDuplicate() {
    createCabin({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    });
  }

  return (
    <>
      <TableRow role="row">
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>Fits up to {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>&mdash;</span>
        )}
        <div>
          <button disabled={isCreating} onClick={handleDuplicate}>
            <HiSquare2Stack />
          </button>
          <button onClick={() => setShowForm((show) => !show)}>
            <HiPencil />
          </button>
          <button onClick={() => deleteCabin(cabinId)} disabled={isDeleting}>
            <HiTrash />
          </button>
        </div>
      </TableRow>
      {showForm && <CreateCabinForm cabinToEdit={cabin} />}
    </>
  );
}

export default CabinRow;


2) Create -------------------------------------------------------------------------

cabin / useCreateCabin.jsx //✅1
----------------------------

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";

export function useCreateCabin() {
  const queryClient = useQueryClient();

  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("New cabin successfully created");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createCabin };
}


cabin / useEditCabin.jsx //✅1
--------------------------------

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import { toast } from "react-hot-toast";

export function useEditCabin() {
  const queryClient = useQueryClient();

  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("Cabin successfully edited");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editCabin };
}




cabin / crateCabinForm.jsx
----------------------------


import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

import { useCreateCabin } from "./useCreateCabin"; //✅2
import { useEditCabin } from "./useEditCabin";     //✅2


function CreateCabinForm({ cabinToEdit = {} }) {
  const { isCreating, createCabin } = useCreateCabin(); //✅3
  const { isEditing, editCabin } = useEditCabin();  //✅3
  const isWorking = isCreating || isEditing;

  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditSession)
      editCabin(
        { newCabinData: { ...data, image }, id: editId },
        {
          onSuccess: (data) => {
            reset();
          },
        }
      );
    else //✅4
      createCabin(
        { ...data, image: image },
        {
          onSuccess: (data) => {
            reset();
          },
        }
      );
  }

  function onError(errors) {
    // console.log(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          {...register("maxCapacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register("regularPrice", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isWorking}
          defaultValue={0}
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Discount should be less than regular price",
          })}
        />
      </FormRow>

      <FormRow
        label="Description for website"
        error={errors?.description?.message}
      >
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          disabled={isWorking}
          {...register("description", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Cabin photo">
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditSession ? false : "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? "Edit cabin" : "Create new cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;


3) view ---------------------


cabins / useCabins.js   //✅1

import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  return { isLoading, error, cabins };
}


CabinTable.jsx

import styled from "styled-components";

import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins"; //✅2


function CabinTable() {
  const { isLoading, cabins } = useCabins();  //✅3

  if (isLoading) return <Spinner />;

  return (
    <Table role="table">
      <TableHeader role="row">
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </TableHeader>
      {cabins.map((cabin) => (
        <CabinRow cabin={cabin} key={cabin.id} />
      ))}
    </Table>
  );
}

export default CabinTable;


 //✅ Dublicate Cabin feature =======================================================================

//  CabinRow

 import styled from "styled-components";
 import { useState } from "react";

 import CreateCabinForm from "./CreateCabinForm";
 import { useDeleteCabin } from "./useDeleteCabin";
 import { formatCurrency } from "../../utils/helpers";
 import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
 import { useCreateCabin } from "./useCreateCabin";


 function CabinRow({ cabin }) {
   const [showForm, setShowForm] = useState(false);
   const { isDeleting, deleteCabin } = useDeleteCabin();
   const { isCreating, createCabin } = useCreateCabin(); //✅ 3

   const {
     id: cabinId,
     name,
     maxCapacity,
     regularPrice,
     discount,
     image,
     description,
   } = cabin;

   function handleDuplicate() { //✅ 2
     createCabin({
       name: `Copy of ${name}`,
       maxCapacity,
       regularPrice,
       discount,
       image,
       description,
     });
   }

   return (
     <>
       <TableRow role="row">
         <Img src={image} />
         <Cabin>{name}</Cabin>
         <div>Fits up to {maxCapacity} guests</div>
         <Price>{formatCurrency(regularPrice)}</Price>
         {discount ? (
           <Discount>{formatCurrency(discount)}</Discount>
         ) : (
           <span>&mdash;</span>
         )}
         <div>
           <button disabled={isCreating} onClick={handleDuplicate}> //✅1
             <HiSquare2Stack />
           </button>
           <button onClick={() => setShowForm((show) => !show)}>
             <HiPencil />
           </button>
           <button onClick={() => deleteCabin(cabinId)} disabled={isDeleting}>
             <HiTrash />
           </button>
         </div>
       </TableRow>
       {showForm && <CreateCabinForm cabinToEdit={cabin} />}
     </>
   );
 }

 export default CabinRow;



//  app/ services / apiCabins

 import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. Create/edit cabin
  let query = supabase.from("cabins");

  // A) CREATE
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // B) EDIT
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }

  // 2. Upload image
  if (hasImagePath) return data; //✅ 4

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // 3. Delete the cabin IF there was an error uplaoding image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created"
    );
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }

  return data;
}


//✅ User Authntication ================================================================

// src / pages / Login.jsx  //✅1

import styled from "styled-components";
import LoginForm from './feature / Authentication / LoginForm'

function Login() {
  return <LoginLayout>
    <LoginForm/>
  </LoginLayout>;
}

export default Login;


//  Login.jsx  //✅2

import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";


function LoginForm() {
  const [email, setEmail] = useState("someone@gmail.com");
  const [password, setPassword] = useState("password123");
  const {login, isLoading}= useLogin() //✅11

  function handleSubmit(e) {
     //✅6
     e.preventDefault();

     if(!email || !password ) return

     login({email, password})  //✅12

  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address" orientation="vertical">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading} //✅13
        />
      </FormRow>
      <FormRow label="Password" orientation="vertical">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading} //✅13
        />
      </FormRow>
      <FormRow orientation="vertical">
        <Button size="large" disabled={isLoading}> {!isLoading ? "Login" : <Spiner/>}</Button> //✅13
      </FormRow>
    </Form>
  );
}

export default LoginForm;


 //✅3

supabase > authnetication > Providers > Email, Click email , switch off confirm email (for developemnt)>

supabase > authnetication > users > add user > give email and password (create user)

api docs > user Management > coppy " login with email/password " user login code

create apiAuth.js file into services folder



// Services / apiAuth.js   //✅4

import supabase from "./supabase";


export async function signup({email, password }) {

const {data, error} = await supabase.auth.signinWithPassword({  //✅5 paste the code hare
  email,
  password,
})

if(error) throw new Error(error.message)

console.log(data);
return data

}


// useLogin.js  //✅7

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../../services/apiAuth'; //✅9
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  //✅8
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }), //✅10
    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user.user);
      navigate('/dashboard', { replace: true });
    },
    onError: (err) => {
      console.log('ERROR', err);
      toast.error('Provided email or password are incorrect');
    },
  });

  return { login, isLoading };
}



//✅ Authorisation (Only authention use only access the page) =======================================

Create a protected route

// UI / ProtectedRoute.jsx  //✅1

import styled from "styled-components";
import { useUser } from "../features/authentication/useUser"; //✅6
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


function ProtectedRoute({ children }) {


  const navigate = useNavigate();

  // 1. Load the authenticated user
  const { isLoading, isAuthenticated } = useUser(); //✅6

  // 2. If there is NO authenticated user, redirect to the /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  // 3. While loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 4. If there IS a user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;



// App.js

import ProtectedRoute from "./ui/ProtectedRoute"; //✅3

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />

        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute> //✅2
                  <AppLayout />
                </ProtectedRoute> //✅2
              }
            >
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="bookings" element={<Bookings />} />
              <Route path="bookings/:bookingId" element={<Booking />} />
              <Route path="checkin/:bookingId" element={<Checkin />} />
              <Route path="cabins" element={<Cabins />} />
              <Route path="users" element={<Users />} />
              <Route path="settings" element={<Settings />} />
              <Route path="account" element={<Account />} />
            </Route>

            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>

      </QueryClientProvider>
    </DarkModeProvider>
  );
}




// Services / apiAuth.js    //✅4

import supabase from "./supabase";

export async function signup({email, password }) {
const {data, error} = await supabase.auth.signinWithPassword({
  email,
  password,
})

if(error) throw new Error(error.message)
console.log(data);
return data

}

export async function getCurrentUser() { //✅4
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  return data?.user;
}


// useUser.js   //✅5

import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}



//✅ Logout =======================================

// features / authentication / Logout.jsx  //✅1

import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <ButtonIcon disabled={isLoading} onClick={logout}>
      {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default Logout;


// UI / Header.jsx  //✅2

import styled from "styled-components";
import Logout from "../features/authentication/Logout.jsx";

function Header() {
  return (
    <StyledHeader>
       <Logout/>
    </StyledHeader>
  );
}

export default Header;


// Services / apiAuth.js     //✅3

import supabase from "./supabase";

export async function signup({email, password }) {
const {data, error} = await supabase.auth.signinWithPassword({
  email,
  password,
})

if(error) throw new Error(error.message)
console.log(data);
return data

}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  return data?.user;
}

export async function logout() { //✅3
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}


// useLogout.js      //✅4

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth"; //✅5
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi, //✅6
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
  });

  return { logout, isLoading };
}


//✅ Create Signup page =======================================


// Services / apiAuth.js     //✅1

import supabase from "./supabase";

export async function signup({email, password }) {
const {data, error} = await supabase.auth.signinWithPassword({
  email,
  password,
})

if(error) throw new Error(error.message)
console.log(data);
return data

}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function signup({ fullName, email, password }) { //✅1
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}



// useSignup.js  //✅2

import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success(
        "Account successfully created! Please verufy the new account from the user's email address."
      );
    },
  });

  return { signup, isLoading };
}



// SignupForm.jsx

import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignup } from "./useSignup"; //✅3

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { signup, isLoading } = useSignup(); //✅4
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ fullName, email, password }) {
    signup(  //✅4
      { fullName, email, password },
      {
        onSettled: () => reset(),
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isLoading}
          {...register("fullName", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          disabled={isLoading}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Passwords need to match",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          disabled={isLoading}
          onClick={reset}
        >
          Cancel
        </Button>
        <Button disabled={isLoading}>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;


/*
Now go to Authentication > Provider > Email > turn on confirm mail , [save]  >

Email templace (when you confirm your email then a cnformation mail to go to your mail ) > URL Configaration = chnage site url

*/


//✅ Updating Row lavel sequrity (Protecting our data from unauthorized user) ===================================

/*
Authorization > Polices > edit all the tables as Target roll = "Authenticatd" > Save Policey
*/
