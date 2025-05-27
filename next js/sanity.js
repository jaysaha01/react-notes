//ES7+React/Redux/React-Native by deZnajder

// NEXT JS 15, Typescript , Sanity IO , cleark , stripe, Zustand

// > npx crate-next-app@lates ecommerce-youtube-build  -> npm run dev

/*
sanity.io => Crate new project (give name) => coppy the terminal code and paste into the termal (yes, yes, yes,/studio ) -> (If get error the run the command npm i next-sanity@latest --lagacy--peer-deps )
-> npx sanity dev -> locahost:3333

.env.local
-----------
NEXT_PUBLIC_SANITY_DATASET="production";
NEXT_PUBLIC_SANITY_PROJECT_ID="7wg2j5a4";
NEXT_PUBLIC_BASE_URL="http://lcoalhost:3000";


!For santiy studio to ready 
! This is need for sanity to see the required variables in the studio deployed
SANITY_STUDIO_PROJECT_ID="7wg2j5a3"
SANITY_STUDIO_DATASET="production"


http://lcoalhost:3000/studio to check for setup sanity  => login (Go go sanity dashbord)

*/

// -----------------------------------------------------------------------------------------------

/*

sanity > schemas > product-schema.ts 
---------------------------------------

( install sanity.io & sanit.io snippets vs code extention )

import { defineType, defineField } from 'sanity';

import { defineField, defineType } from "sanity";

export default defineType({
    name: "blog",
    title: "Blog",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required().min(5).max(100),
        }),
        defineField({ name: 'description', title: 'description', type: 'text' }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }], 
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: { hotspot: true },
        }),
    ],
});



sanity > schemaTypes > index.ts  
-------------------------------------
export const schema: {type: SchemaTypeDefinition()}={

import {productType} from './catagoryType'
import {orderType} from './orderType'

types[  ....., productType, orderType, salesTypes] (✅ Add your product type into schemaTypes)
}


localhost:3000/studio/ => products => add products => fill the detials




!Show the product into the frontend

Page.tsx
----------

import React from 'react'
import {groq} from "next/sanity"
import {client} front '@/sanity/lib/client';
import { urlFor } from "@/sanity/lib/image";

export default async function Products(){

  const products=await client.fetch(groq `*[_type=="product"]`)
  console.log(products);

  return (
    <div>
    {
    products.map((product:any , index:number)=>(

      <Card key={index} product={product}/>
      ))
    }
    </div>
  )
}

export default Products


Card.tsx
-----------

import React from 'react'

const Card = ({product}:any) => {
  return (
    <>
    <Link href={`product/${product.slug.current}`}>
      <div>
      <h1>{product.name}</h1>
       image={urlFor(image?.asset._ref).width(300).height(300).url()}
      </div>
      </Link>
    </>
  )
}

export default Card


next.config.js
---------------
const nextConfig={
images:{
domains:['cdn.sanity.io']
}
}


>npx sanity start

*/

// ------------------------------------------------------------------------------------------------------------

//! See Full detail page

/*
product > [slug] > page.tsx
--------------------------------

"use client"

import React from 'react'
import {useParams} from 'next/navigation'

import {groq} from "next/sanity"
import {client} front '@/sanity/lib/client';
import {urlForImage} from '@sanity/lib/image';

const page = async () => {

  const {slug}:slug = useParams();
  const products=await client.fetch(groq `*[_type=="product"]`)
  const product= products.find((product:slug)=> product.slug.current == slug)

  return (
    <div>
    <ProductDetails product={product}/>
    </div>
  )
}

export default page



--------------------------------

!Object look like this 

import { TypedObject } from "@portabletext/types";

export interface BlogInterface {
  _id: string;
  content?: TypedObject[]; // ✅ Ensure it's the same everywhere
  description: string;
  title: string;
  image?: { asset: { _ref: string } };
  slug: { current: string };
}

----------------------------------------

ProductDetails.tsx
---------------------

const ProductDetails = ({product}:any) => {

  return (
    <div>
    {product.name}
    </div>
  )
}

export default ProductDetails


*/


// ------------------------------------------------------------------------------------------------------------

//! Stripe Payment


// ------------------------------------------------------------------------------------------------------------

//! Deploy

/*
Git hub => repository => create new repo => 

*/

/*
Versel.com -> login with github -> show your repo => import => coppy all .env file varialble name to key and value=> Deploy 

snaity.io > api > Cors origin > add your domoin

*/


