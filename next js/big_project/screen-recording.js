/*
>npx create-next-app@latest
*/

// 🔥 Home Page 

//Routing

app > (root) //we write like this because we cannot include it into url > layout.tsx , page.tsx
app > (auth) > sign-in > page.tsx


// app > (root) > layout.tsx 

import React, { useState } from 'react'
import Navbar from '@/coponents/Navbar'

const Layout = ({children} : {children:ReactNode}) => {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}

export default Layout


//project > components > Navbar.tsx 

'use client';

import React from 'react'
import Image from 'next/image'
import {useRouter} from 'next/navigation';

const Navbar = () => {
    const router = useRouter()
  return (
    <div>
        <div onClick={()=>router.push("/profile/1234")}>
          <Image src="/assets/icons/logo.svg"/>
        </div>
        
    </div>
  )
}

export default Navbar


// ------------------------------------------------------------------------------------------------------


// 🔥 Create Reuseable Header Component 


//project > index.d.ts > SharedHeaderProps

declare interface SharedHeaderProps {
    subHeader: string;
    title: string;
    userimage?:string 
}

declare interface ParamsWithSearch {
  params: Promise<Record<string, string>>;
  searchParams: Promise<Record<string, string | undefined>>;
}

//project > components > Header.tsx 

import React from 'react'

const Header = ({subHeader, title, userImg} : SharedHeaderProps) => {
  return (
    <div>
        {userImg && (
            <Image src={userImg} alt="profile image" width={66} height={66}/>
        ) }
        <article>
            <p>{subHeader}</p>
            <h1>{title}</h1>
        </article>
    </div>
  )
}

export default Header


// app > (root) > page.tsx

import React from 'react'
import Header from '@/coponents/Header'

const Page = () => {
  return (
    <div>
        <Header title="All Videos" subHeader="Publick Library"/>
      
    </div>
  )
}

export default Page


// ==================================================================================================================

// 🔥 Profile page 

app > (root) > profile > [id] > page.tsx 

import React from 'react'

const Page = async ({params} : ParamsWithSearch) => {
    const {id} = await params;
  return (
    <div>
        <Header subHeader='adred@gmail.com' title="Adrian | Js Mastery" userImg="/assets/images/dummy.jpg"/>
    </div>
  )
}

export default Page

// ======================================================================================================================


// 🔥 Dropdown list 

//project > components > Header.tsx 

import React from 'react'
import DropdownList from 'react'

const Header = ({subHeader, title, userImg} : SharedHeaderProps) => {
  return (
    <div>
        {userImg && (
            <Image src={userImg} alt="profile image" width={66} height={66}/>
        ) }
        <article>
            <p>{subHeader}</p>
            <h1>{title}</h1>
        </article>
        <DropdownList/>
    </div>
  )
}

export default Header


//project > components > DropdownList.tsx

"use client"

import React from 'react'

const DropdownList = () => {

  const [isOpen, setInOpen]= useState(initialState: false);

  return (
    <div>
      <div onClick={()=>seIsOpen(!isOpen)}>
       Most Recent
      </div>
      {isOpen &&(
        <ul>
            {["most recent", "most liked"].map((option)=>{
              return(
                <li className='dropdown'>{option}</li>
              )
            })}
        </ul>
      )}
    </div>
  )
}

export default DropdownList

// ======================================================================================================================

//🔥 Reuseable video card 

//project > index.d.ts > SharedHeaderProps

type Visbility= "public" | "private" | string 

declare interface videoCardProps{
  id:string;
  title:String;
  thumbnail:String;
  userImg:String;
  username:String;
  creatdAt:Date;
  views:number;
  visbility:Visbility;
  duration:number | null;
}

//project > components > videoCard.tsx

'use client'

import React from 'react'

const videoCard = ({
  id,title,thumbnail,creatdAt,userImg,username,views,visbility,duration }: videoCardProps) => {
  return (
    <Link href={`/video/${id}`} className="video-card">
      <Image src={thumbnail || '/assets/images/dummy.jpg'}/>
      <article><Image src={userImg} alt='avatar' width={34} height={160} /></article>
      <p>{visbility}</p>
      <h2>{username}</h2>
      <h2>{title} - {creatdAt.toLocaleDateString(locales: 'en-us',{
        Year:"numeric",
        month:"short",
        day:'numeric'
      })}</h2>
      <button onClick={()=>{}}>Coppy Link</button>

    </Link>
  )
}

export default videoCard


// app > (root) > page.tsx

import React from 'react'
import Header from '@/coponents/Header'
import {dummyCards} from '@/constants';

const Page = () => {
  return (
    <div>
        <Header title="All Videos" subHeader="Publick Library"/>
        <videoCard  id="1" title="SnamChat Message - 30 june 2025" thumbnail="/assets/samples/thubmlil(1).png"
        creatdAt={new Date(value:"2025-05-01")} userImg="/assets/images/jason.png" username="json" views={10} visbility="public"
        duration={156}/>✅

        or  

        {
          dummyCard.map((card)=>{
             <videoCard key={card.id} {...card}/>
          })
        }
      
    </div>
  )
}

export default Page


// ======================================================================================================================

//Create full video page

app > (root) > video > [videoId] >page.tsx

import React from 'react'

const screen-recording = () => {
  return (
    <div>
      
    </div>
  )
}

export default screen-recording


//===============================================================================================================

//Authentication page & Logic

//install better-auth (npm i better-auth) 

//project name > .env

BETTER_AUTH_SECRECT=/* betterauth > installation > generate sectrate key> page hare */
BETTER_AUTH_URL=/*http://localhost:3000 */

GOOGLE_CLIENT_ID = /*ClientID*/
GOOGLE_CLIENT_SECRET= /*Secrect key */

/* go to console.cloude.google.com > New project > project name:... > create > select porject > Search branding > 

App name:Snap Cast, user email , External, Crate > Client : web, name:Snap Cast, Authorized jS origin url : http://localhost:3000, 

Authorized redirect: http://localhost:3000/auth/callback/google Create > coppy ClientID & Secrect key

Search Google people API > Enable 

*/
 

// app > (auth) > sign-in > page.tsx 

'use client'

import React from 'react'

const Page = () => {

  const handleSignIn = async()=>{
    return await authClient.signIn.social({provider: 'google'})
  }
  return (
    <div>
      <button onClick={handleSignIn}>Sign in with Google</button>
    </div>
  )
}

export default Page


//project name > middleware.ts 

import {NextRequest, NextResponse} from 'next/server';
import {auth} from '@/lib/auth'
import {headers} from 'next/headers';

export async function middleware(request: NextRequest, response:NextResponse){
  const session= await auth.api.getSession({
    headers:await headers()
  })

  id(!session){
    return NextRequest.redirect(new URL(url:'/sign-in', request.url))
  }

  return NextResponse.next()
} 

export const config ={
  matcher:['/((?!api|_next/static|_next/image|favicon.ico|sign-in|assets).*']
}


//===============================================================================================================


// Upload Page

// project name > app > (root) > upload > page.tsx

'use client'

import React from 'react'
import {useState} from 'react';

const page = () => {

  const  [ isSubmitting, setSubmitting] = useState(false);

  const [error, setError]= useState(initialState:"")
  const [formData, setFormData]= useState({
    title:'',
    description:"",
    visbility:'public',

  })
                           //video size
  const video=useFileInput(500*1024*1024)
  const thumbnail=useFileInput(500*1024*1024) //iamge size

  const handleInputChange= (e:ChangeEvent <HTMLInputElement>)=>{
    const {name, value}= e.target;

    setFormData((prevState)=>({...prevState, [name]:value}))
  }

  const handleSubmit= async(e: FormEvent)=>{
    e.preventDefault();

    setSubmitting(value:true);

    try{

      if(!video.file || !thumbnail.file){
        setError( value: "Please Upload video and Thumbnil");
        return
      }

      if(!formData.title || !formData.description){
        setError(value: "Please fill in all the details")
        return
      }

      //Upload to video to Bunny


      //Upload the video to DB

      //Attach Thubmnil

      //Create a new DB Entry for the video details (url, data)


    }catch(err){
      console.log(err)
    }finally{
      setSubmitting(value:false)
    }
  }

  return (
    <div>
      <h1>Uplod a Video</h1>

      {error && <div>{error}</div>}
      
      <form onSubmit={handleSubmit}>
      <FormField 
      id="title"
      label="Title"
      value={formData.title}
      onChange={handleInputChange}
      placeholder="Enter a clear and consise video title"
      />

       <FormField 
      id="description"
      label="Description"
      value={formData.description}
      onChange={handleInputChange}
      placeholder="Describe what this video is about"
      as="textarea"
      />

      <FileInput id="video" label="video" accept="video/*" file={video.file} previewUrl={video.previewUrl} inputRef={video.inputRef} onChange={video.handleFileChnage} onRest={video.resetFile} type="video"/>
      
      <FileInput id="thumbnail" label="thumbnail" accept="image/*" file={thumbnail.file} previewUrl={thumbnail.previewUrl} inputRef={thumbnail.inputRef} onChange={thumbnail.handleFileChnage} onRest={thumbnail.resetFile} type="video"/>

        <FormField 
      id="thumbnail"
      label="thumbnail"
      value={formData.visbility}
      onChange={handleInputChange}
      as="select"
      options={[
        {value:"public", label:"public"},
        {value:"private", label:"private"},
      ]}
      />

      <button type='submit' disabled={isSubmitting }>{isSubmitting ? "Uploading..." : "Upload File"}</button>
      </form>
      
    </div>
  )
}

export default page



//project > components > FormField.tsx

const FormField = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  as = "input",
  options = [],
}: FormFieldProps) => (
  <div className="form-field">
    <label htmlFor={id}>{label}</label>
    {as === "textarea" ? (
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    ) : as === "select" ? (
      <select id={id} name={id} value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    ) : (
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    )}
  </div>
);

export default FormField;


//project > components > FileInput.tsx

import React from 'react'

const FileInput = ({id, label, accept, file, previewUrl, inputRef, onChange, onRest, type}: FileInputProps) => {
  return (
    <div>
      <label href={id}>{label}</label>

      <input type='file' id={id} accept={accept} ref={inputRef} hidden onChange={onChange}/>

      {!previewUrl ? (
        <figure onClick={()=>inputRef.current?.click()}>
          <Image src={"/accets/icons/upload.svg"}/>
          <p>Click to upload</p>
        </figure>
      ):(
      <div>
        {
          type ==="video" ? <video src={previewUrl} controls/> : <Image src={previewUrl} alt="Image" />
        }

        <button type='button' onClick={onReset}>
          <Image src={"/assets/icons/close.svg"} alt="close" width={16} height={16}/>
        </button>

      </div>)}
      

      
    </div>
  )
}

export default FileInput


// lib > hooks > useFileInput.ts 

import { useRef, useState } from 'react'

export const useFileInput = (maxSize:number)=>{

  const [file, setFile]= useState<File | null>(initialState:null);
  const [previewUrl, setPreviewUrl]= useState(initialState: "");
  const [duration, setDuration]= useState(initialState: 0);
  const inputRef = useRef<HTMLInputElement>(initialState: null);

  const handleFileChange=(e: ChangeEvent<HTMLInputElement>)=>{

    if(e.target.files?.[0]){
      const selectedFile = e.target.files?.[0];

      if(selectedFile.size > maxSize) return;

      if(previewUrl) URL.revokeObjectURL(previewUrl);

      setFile(selectedFile)

      const objectUrl = URL.createObjectURL(selectedFile)

      setPreviewUrl(objectUrl);


      if(selectedFile.type.startsWith(searchString:"video")){
        const video = document.createElement(tagname:"video");

        video.preload = "metadata";

        video.onloadmetadata = ()=>{
          if(isFinite(video.duration) && video.duration > 0){
            setDuration(Math.round(video.duration))
          }else{
            setDuration(value:0)
          }

          URL.revokeObjectURL(video.src)
        }

        URL.src = objectUrl

      }

    }
  }

  const resetFile =()=>{
    if(previewUrl) URL.revokeObjectURL(previewUrl)

      setFile(value: null);
      setPreviewUrl(value: "");
      setDuration(value: 0)

      if(inputRef.current) inputRef.current.value=""
  }

  return {
    file, previewUrl,duration, inputRef, handleFileChange, resetFile
  }

}





// ================================================================================================================

//Upload Video thwough from


// project name > app > (root) > upload > page.tsx

import { useState, FormEvent, ChangeEvent, useEffect } from "react";
import {
  getVideoUploadUrl,
  getThumbnailUploadUrl,
  saveVideoDetails,
} from "@/lib/actions/video";
import { useRouter } from "next/navigation";
import { FileInput, FormField } from "@/components";
import { useFileInput } from "@/lib/hooks/useFileInput";
import { MAX_THUMBNAIL_SIZE, MAX_VIDEO_SIZE } from "@/constants";

// ✅2
const uploadFileToBunny = (
  file: File,
  uploadUrl: string,
  accessKey: string
): Promise<void> =>
  fetch(uploadUrl, {
    method: "PUT",
    headers: {
      "Content-Type": file.type,
      AccessKey: accessKey,
    },
    body: file,
  }).then((response) => {
    if (!response.ok)
      throw new Error(`Upload failed with status ${response.status}`);
  });




const page = () => {

  const  [ isSubmitting, setSubmitting] = useState(false);
  const [error, setError]= useState("")
  const [videoDuration, setVideoDuration] = useState<number | null>(null); //✅6

  const [formData, setFormData]= useState({
    title:'',
    description:"",
    visbility:'public',

  })

                           //video size
  const video=useFileInput(500*1024*1024)
  const thumbnail=useFileInput(500*1024*1024) //iamge size


   useEffect(() => { //✅7
    if (video.duration !== null) {
      setVideoDuration(video.duration);
    }
  }, [video.duration]);



  const handleInputChange= (e:ChangeEvent <HTMLInputElement>)=>{
    const {name, value}= e.target;

    setFormData((prevState)=>({...prevState, [name]:value}))
  }

  const handleSubmit= async(e: FormEvent)=>{
    e.preventDefault();

    setSubmitting(value:true);

    try{

      if(!video.file || !thumbnail.file){
        setError( value: "Please Upload video and Thumbnil");
        return
      }

      if(!formData.title || !formData.description){
        setError(value: "Please fill in all the details")
        return
      }

      //Upload to video to Bunny ✅1

      const {
        videoId, uploadUrl:videoUploadUrl, accessKey: videoAccessKey, 
      } = await getVideoUploadUrl()

      if(!videoUploadUrl || !videoAccessKey) throw new Error("Fail to get video upload  credientionals")

      
      //Upload the video to DB

       await uploadFileToBunny(video.file, videoUploadUrl, videoAccessKey); //✅3

      //Attach Thubmnil ✅4

       const {
        uploadUrl: thumbnailUploadUrl,
        cdnUrl: thumbnailCdnUrl,
        accessKey: thumbnailAccessKey,
      } = await getThumbnailUploadUrl(videoId);

      if (!thumbnailUploadUrl || !thumbnailCdnUrl || !thumbnailAccessKey)
        throw new Error("Failed to get thumbnail upload credentials");

      //Create a new DB Entry for the video details (url, data) ✅5

       await saveVideoDetails({
        videoId,
        thumbnailUrl: thumbnailCdnUrl,
        ...formData,
        duration: videoDuration,
      });

       router.push(`/video/${videoId}`); //✅6


    }catch(err){
      console.log(err)
    }finally{
      setSubmitting(value:false)
    }
  }

  return (
    <div>
      <h1>Uplod a Video</h1>

      {error && <div>{error}</div>}
      
      <form onSubmit={handleSubmit}>
      <FormField 
      id="title"
      label="Title"
      value={formData.title}
      onChange={handleInputChange}
      placeholder="Enter a clear and consise video title"
      />

       <FormField 
      id="description"
      label="Description"
      value={formData.description}
      onChange={handleInputChange}
      placeholder="Describe what this video is about"
      as="textarea"
      />

      <FileInput id="video" label="video" accept="video/*" file={video.file} previewUrl={video.previewUrl} inputRef={video.inputRef} onChange={video.handleFileChnage} onRest={video.resetFile} type="video"/>
      
      <FileInput id="thumbnail" label="thumbnail" accept="image/*" file={thumbnail.file} previewUrl={thumbnail.previewUrl} inputRef={thumbnail.inputRef} onChange={thumbnail.handleFileChnage} onRest={thumbnail.resetFile} type="video"/>

        <FormField 
      id="thumbnail"
      label="thumbnail"
      value={formData.visbility}
      onChange={handleInputChange}
      as="select"
      options={[
        {value:"public", label:"public"},
        {value:"private", label:"private"},
      ]}
      />

      <button type='submit' disabled={isSubmitting }>{isSubmitting ? "Uploading..." : "Upload File"}</button>
      </form>
      
    </div>
  )
}

export default page


//lib > actions > video.ts

"use server";

import { db } from "@/drizzle/db";
import { videos, user } from "@/drizzle/schema";
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";
import { and, desc, eq, ilike, or, sql } from "drizzle-orm";
import { auth } from "@/lib/auth";
import {apiFetch, doesTitleMatch, getEnv, getOrderByClause, withErrorHandling} from "@/lib/utils";
import { BUNNY } from "@/constants";
import aj, { fixedWindow, request } from "../arcjet";

// Constants with full names
const VIDEO_STREAM_BASE_URL = BUNNY.STREAM_BASE_URL; //✅2
const THUMBNAIL_STORAGE_BASE_URL = BUNNY.STORAGE_BASE_URL; //✅2
const THUMBNAIL_CDN_URL = BUNNY.CDN_URL;//✅2
const BUNNY_LIBRARY_ID = getEnv("BUNNY_LIBRARY_ID"); //✅2
const ACCESS_KEYS = { //✅2
  streamAccessKey: getEnv("BUNNY_STREAM_ACCESS_KEY"),
  storageAccessKey: getEnv("BUNNY_STORAGE_ACCESS_KEY"),
};


// Helper functions with descriptive names ✅1
const revalidatePaths = (paths: string[]) => {
  paths.forEach((path) => revalidatePath(path));
};

// Server Actions✅1
const getSessionUserId = async (): Promise<string> => {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) throw new Error("Unauthenticated");
  return session.user.id;
};

// Server Actions✅2
export const getVideoUploadUrl = withErrorHandling(async () => {
  await getSessionUserId();
  const videoResponse = await apiFetch<BunnyVideoResponse>(
    `${VIDEO_STREAM_BASE_URL}/${BUNNY_LIBRARY_ID}/videos`,
    {
      method: "POST",
      bunnyType: "stream",
      body: { title: "Temp Title", collectionId: "" },
    }
  );

  const uploadUrl = `${VIDEO_STREAM_BASE_URL}/${BUNNY_LIBRARY_ID}/videos/${videoResponse.guid}`;
  return {
    videoId: videoResponse.guid,
    uploadUrl,
    accessKey: ACCESS_KEYS.streamAccessKey,
  };
});


// ✅2
export const getThumbnailUploadUrl = withErrorHandling(
  async (videoId: string) => {
    const timestampedFileName = `${Date.now()}-${videoId}-thumbnail`;
    const uploadUrl = `${THUMBNAIL_STORAGE_BASE_URL}/thumbnails/${timestampedFileName}`;
    const cdnUrl = `${THUMBNAIL_CDN_URL}/thumbnails/${timestampedFileName}`;

    return {
      uploadUrl,
      cdnUrl,
      accessKey: ACCESS_KEYS.storageAccessKey,
    };
  }
);

// ✅3
export const saveVideoDetails = withErrorHandling(
  async (videoDetails: VideoDetails) => {

    await validateWithArcjet(userId);
    await apiFetch(
      `${VIDEO_STREAM_BASE_URL}/${BUNNY_LIBRARY_ID}/videos/${videoDetails.videoId}`,
      {
        method: "POST",
        bunnyType: "stream",
        body: {
          title: videoDetails.title,
          description: videoDetails.description,
        },
      }
    );

    const now = new Date();
    await db.insert(videos).values({
      ...videoDetails,
      videoUrl: `${BUNNY.EMBED_URL}/${BUNNY_LIBRARY_ID}/${videoDetails.videoId}`,
      userId,
      createdAt: now,
      updatedAt: now,
    });

    revalidatePaths(["/"]);
    return { videoId: videoDetails.videoId };
  }
);



//===========================================================================================================

//🔥 Fetching Data in home page 

//lib > actions > video.ts

"use server";

import { db } from "@/drizzle/db";
import { videos, user } from "@/drizzle/schema";
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";
import { and, desc, eq, ilike, or, sql } from "drizzle-orm";
import { auth } from "@/lib/auth";
import {apiFetch, doesTitleMatch, getEnv, getOrderByClause, withErrorHandling} from "@/lib/utils";
import { BUNNY } from "@/constants";
import aj, { fixedWindow, request } from "../arcjet";

// Constants with full names
const VIDEO_STREAM_BASE_URL = BUNNY.STREAM_BASE_URL; 
const THUMBNAIL_STORAGE_BASE_URL = BUNNY.STORAGE_BASE_URL; 
const THUMBNAIL_CDN_URL = BUNNY.CDN_URL;
const BUNNY_LIBRARY_ID = getEnv("BUNNY_LIBRARY_ID"); 
const ACCESS_KEYS = { 
  streamAccessKey: getEnv("BUNNY_STREAM_ACCESS_KEY"),
  storageAccessKey: getEnv("BUNNY_STORAGE_ACCESS_KEY"),
};


// Helper functions with descriptive names 
const revalidatePaths = (paths: string[]) => {
  paths.forEach((path) => revalidatePath(path));
};


const getSessionUserId = async (): Promise<string> => {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) throw new Error("Unauthenticated");
  return session.user.id;
};


export const getVideoUploadUrl = withErrorHandling(async () => {
  await getSessionUserId();
  const videoResponse = await apiFetch<BunnyVideoResponse>(
    `${VIDEO_STREAM_BASE_URL}/${BUNNY_LIBRARY_ID}/videos`,
    {
      method: "POST",
      bunnyType: "stream",
      body: { title: "Temp Title", collectionId: "" },
    }
  );

  const uploadUrl = `${VIDEO_STREAM_BASE_URL}/${BUNNY_LIBRARY_ID}/videos/${videoResponse.guid}`;
  return {
    videoId: videoResponse.guid,
    uploadUrl,
    accessKey: ACCESS_KEYS.streamAccessKey,
  };
});


export const getThumbnailUploadUrl = withErrorHandling(
  async (videoId: string) => {
    const timestampedFileName = `${Date.now()}-${videoId}-thumbnail`;
    const uploadUrl = `${THUMBNAIL_STORAGE_BASE_URL}/thumbnails/${timestampedFileName}`;
    const cdnUrl = `${THUMBNAIL_CDN_URL}/thumbnails/${timestampedFileName}`;

    return {
      uploadUrl,
      cdnUrl,
      accessKey: ACCESS_KEYS.storageAccessKey,
    };
  }
);


export const saveVideoDetails = withErrorHandling(
  async (videoDetails: VideoDetails) => {

    await validateWithArcjet(userId);
    await apiFetch(
      `${VIDEO_STREAM_BASE_URL}/${BUNNY_LIBRARY_ID}/videos/${videoDetails.videoId}`,
      {
        method: "POST",
        bunnyType: "stream",
        body: {
          title: videoDetails.title,
          description: videoDetails.description,
        },
      }
    );

    const now = new Date();
    await db.insert(videos).values({
      ...videoDetails,
      videoUrl: `${BUNNY.EMBED_URL}/${BUNNY_LIBRARY_ID}/${videoDetails.videoId}`,
      userId,
      createdAt: now,
      updatedAt: now,
    });

    revalidatePaths(["/"]);
    return { videoId: videoDetails.videoId };
  }
);

//✅1
export const getAllVideos = withErrorHandling(async (
  searchQuery: string = '',
  sortFilter?: string,
  pageNumber: number = 1,
  pageSize: number = 8,
) => {
  const session = await auth.api.getSession({ headers: await headers() })
  const currentUserId = session?.user.id;

  const canSeeTheVideos = or(
      eq(videos.visibility, 'public'),
      eq(videos.userId, currentUserId!),
  );

  const whereCondition = searchQuery.trim()
      ? and(
          canSeeTheVideos,
          doesTitleMatch(videos, searchQuery),
      )
      : canSeeTheVideos

    // Count total for pagination
    const [{ totalCount }] = await db
      .select({ totalCount: sql<number>`count(*)` })
      .from(videos)
      .where(whereCondition);
    const totalVideos = Number(totalCount || 0);
    const totalPages = Math.ceil(totalVideos / pageSize);

    // Fetch paginated, sorted results
    const videoRecords = await buildVideoWithUserQuery()
      .where(whereCondition)
      .orderBy(
        sortFilter
          ? getOrderByClause(sortFilter)
          : sql`${videos.createdAt} DESC`
      )
      .limit(pageSize)
      .offset((pageNumber - 1) * pageSize);

    return {
      videos: videoRecords,
      pagination: {
        currentPage: pageNumber,
        totalPages,
        totalVideos,
        pageSize,
      },
    };
  }
);



// app/(root)/page.tsx

import { EmptyState, Pagination, SharedHeader, VideoCard } from "@/components";
import { getAllVideos } from "@/lib/actions/video";

const page = async ({ searchParams }: SearchParams) => {
  const { query, filter, page } = await searchParams;

  //✅2
  const { videos, pagination } = await getAllVideos(
    query,
    filter,
    Number(page) || 1
  );

  return (
    <main className="wrapper page">
      <SharedHeader subHeader="Public Library" title="All Videos" />

        //✅3
      {videos?.length > 0 ? (
        <section className="video-grid">
          {videos.map(({ video, user }) => (
            <VideoCard
              key={video.id}
              id={video.videoId}
              title={video.title}
              thumbnail={video.thumbnailUrl}
              createdAt={video.createdAt}
              userImg={user?.image ?? ""}
              username={user?.name ?? "Guest"}
              views={video.views}
              visibility={video.visibility}
              duration={video.duration}
            />
          ))}
        </section>
      ) : (
        <EmptyState
          icon="/assets/icons/video.svg"
          title="No Videos Found"
          description="Try adjusting your search."
        />
      )}

      {pagination?.totalPages > 1 && (
        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          queryString={query}
          filterString={filter}
        />
      )}
    </main>
  );
};

export default page;


// components/EmptyState.tsx //✅3

import Image from "next/image";

const EmptyState = ({ icon, title, description }: EmptyStateProps) => {
  return (
    <section className="empty-state">
      <figure>
        <Image src={icon} alt="icon" width={46} height={46} />
      </figure>
      <article>
        <h1>{title}</h1>
        <p>{description}</p>
      </article>
    </section>
  );
};

export default EmptyState;

// ===============================================================================================================

// Video page details 

//lib > actions > video.ts

"use server";

import { db } from "@/drizzle/db";
import { videos, user } from "@/drizzle/schema";
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";
import { and, desc, eq, ilike, or, sql } from "drizzle-orm";
import { auth } from "@/lib/auth";
import {apiFetch, doesTitleMatch, getEnv, getOrderByClause, withErrorHandling} from "@/lib/utils";
import { BUNNY } from "@/constants";
import aj, { fixedWindow, request } from "../arcjet";

// Constants with full names
const VIDEO_STREAM_BASE_URL = BUNNY.STREAM_BASE_URL; 
const THUMBNAIL_STORAGE_BASE_URL = BUNNY.STORAGE_BASE_URL; 
const THUMBNAIL_CDN_URL = BUNNY.CDN_URL;
const BUNNY_LIBRARY_ID = getEnv("BUNNY_LIBRARY_ID"); 
const ACCESS_KEYS = { 
  streamAccessKey: getEnv("BUNNY_STREAM_ACCESS_KEY"),
  storageAccessKey: getEnv("BUNNY_STORAGE_ACCESS_KEY"),
};


// Helper functions with descriptive names 
const revalidatePaths = (paths: string[]) => {
  paths.forEach((path) => revalidatePath(path));
};


const getSessionUserId = async (): Promise<string> => {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) throw new Error("Unauthenticated");
  return session.user.id;
};


export const getVideoUploadUrl = withErrorHandling(async () => {
  await getSessionUserId();
  const videoResponse = await apiFetch<BunnyVideoResponse>(
    `${VIDEO_STREAM_BASE_URL}/${BUNNY_LIBRARY_ID}/videos`,
    {
      method: "POST",
      bunnyType: "stream",
      body: { title: "Temp Title", collectionId: "" },
    }
  );

  const uploadUrl = `${VIDEO_STREAM_BASE_URL}/${BUNNY_LIBRARY_ID}/videos/${videoResponse.guid}`;
  return {
    videoId: videoResponse.guid,
    uploadUrl,
    accessKey: ACCESS_KEYS.streamAccessKey,
  };
});


export const getThumbnailUploadUrl = withErrorHandling(
  async (videoId: string) => {
    const timestampedFileName = `${Date.now()}-${videoId}-thumbnail`;
    const uploadUrl = `${THUMBNAIL_STORAGE_BASE_URL}/thumbnails/${timestampedFileName}`;
    const cdnUrl = `${THUMBNAIL_CDN_URL}/thumbnails/${timestampedFileName}`;

    return {
      uploadUrl,
      cdnUrl,
      accessKey: ACCESS_KEYS.storageAccessKey,
    };
  }
);


export const saveVideoDetails = withErrorHandling(
  async (videoDetails: VideoDetails) => {

    await validateWithArcjet(userId);
    await apiFetch(
      `${VIDEO_STREAM_BASE_URL}/${BUNNY_LIBRARY_ID}/videos/${videoDetails.videoId}`,
      {
        method: "POST",
        bunnyType: "stream",
        body: {
          title: videoDetails.title,
          description: videoDetails.description,
        },
      }
    );

    const now = new Date();
    await db.insert(videos).values({
      ...videoDetails,
      videoUrl: `${BUNNY.EMBED_URL}/${BUNNY_LIBRARY_ID}/${videoDetails.videoId}`,
      userId,
      createdAt: now,
      updatedAt: now,
    });

    revalidatePaths(["/"]);
    return { videoId: videoDetails.videoId };
  }
);


export const getAllVideos = withErrorHandling(async (
  searchQuery: string = '',
  sortFilter?: string,
  pageNumber: number = 1,
  pageSize: number = 8,
) => {
  const session = await auth.api.getSession({ headers: await headers() })
  const currentUserId = session?.user.id;

  const canSeeTheVideos = or(
      eq(videos.visibility, 'public'),
      eq(videos.userId, currentUserId!),
  );

  const whereCondition = searchQuery.trim()
      ? and(
          canSeeTheVideos,
          doesTitleMatch(videos, searchQuery),
      )
      : canSeeTheVideos

    // Count total for pagination
    const [{ totalCount }] = await db
      .select({ totalCount: sql<number>`count(*)` })
      .from(videos)
      .where(whereCondition);
    const totalVideos = Number(totalCount || 0);
    const totalPages = Math.ceil(totalVideos / pageSize);

    // Fetch paginated, sorted results
    const videoRecords = await buildVideoWithUserQuery()
      .where(whereCondition)
      .orderBy(
        sortFilter
          ? getOrderByClause(sortFilter)
          : sql`${videos.createdAt} DESC`
      )
      .limit(pageSize)
      .offset((pageNumber - 1) * pageSize);

    return {
      videos: videoRecords,
      pagination: {
        currentPage: pageNumber,
        totalPages,
        totalVideos,
        pageSize,
      },
    };
  }
);

//✅1
export const getVideoById = withErrorHandling(async (videoId: string) => {
  const [videoRecord] = await buildVideoWithUserQuery().where(
    eq(videos.videoId, videoId)
  );
  return videoRecord;
});


// app/(root)/video/[videoId]/page.tsx //✅2

import { redirect } from "next/navigation";

import { VideoDetailHeader, VideoInfo, VideoPlayer } from "@/components";
import { getTranscript, getVideoById } from "@/lib/actions/video";

const page = async ({ params }: Params) => {
  const { videoId } = await params; //✅3

  const { user, video } = await getVideoById(videoId); 
  if (!video) redirect("/404");  //✅4

  const transcript = await getTranscript(videoId);

  return (
    <main className="wrapper page">
      <VideoDetailHeader
        title={video.title}
        createdAt={video.createdAt}
        userImg={user?.image}
        username={user?.name}
        videoId={video.videoId}
        ownerId={video.userId}
        visibility={video.visibility}
        thumbnailUrl={video.thumbnailUrl}
      />

      <section className="video-details">
        <div className="content">
          {/* ✅4 */}
          <VideoPlayer videoId={video.videoId} /> 
        </div>

        <VideoInfo
          transcript={transcript}
          title={video.title}
          createdAt={video.createdAt}
          description={video.description}
          videoId={videoId}
          videoUrl={video.videoUrl}
        />
      </section>
    </main>
  );
};

export default page;


// components/VideoPlayer.tsx {/* ✅5 */}

"use client";

import { createIframeLink } from "@/lib/utils";


const VideoPlayer = ({ videoId}: VideoPlayerProps) => {

  return (
    <div className={cn("video-player", className)}>
      {state.isProcessing ? (
        <div>
          <p>Processing video...</p>
        </div>
      ) : (
        <iframe
          ref={iframeRef}
          src={createIframeLink(videoId)}
          loading="lazy"
          title="Video player"
          style={{ border: 0, zIndex: 50 }}
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          onLoad={() => setState((prev) => ({ ...prev, isLoaded: true }))}
        />
      )}
    </div>
  );
};

export default VideoPlayer;


// components/VideoDetailHeader.tsx ✅6

"use client";
import { daysAgo } from "@/lib/utils";
import { deleteVideo, updateVideoVisibility } from "@/lib/actions/video";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { visibilities } from "@/constants";
import DropdownList from "./DropdownList";
import ImageWithFallback from "./ImageWithFallback";

const VideoDetailHeader = ({
  title,
  createdAt,
  userImg,
  username,
  videoId,
  ownerId,
  visibility,
  thumbnailUrl,
}: VideoDetailHeaderProps) => {




  
  const [isDeleting, setIsDeleting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [visibilityState, setVisibilityState] = useState<Visibility>(
    visibility as Visibility
  );
  const [isUpdating, setIsUpdating] = useState(false);
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const userId = session?.user.id;
  const isOwner = userId === ownerId;

  return (
    <header className="detail-header">
      <aside className="user-info">
        <h1>{title}</h1>
        <figure>
          <button onClick={() => router.push(`/profile/${ownerId}`)}>
            <ImageWithFallback
              src={userImg ?? ""}
              alt="Jason"
              width={24}
              height={24}
              className="rounded-full"
            />
            <h2>{username ?? "Guest"}</h2>
          </button>
          <figcaption>
            <span className="mt-1">・</span>
            <p>{daysAgo(createdAt)}</p>
          </figcaption>
        </figure>
      </aside>
      <aside className="cta">
        <button onClick={copyLink}>
          <Image
            src={
              copied ? "/assets/images/checked.png" : "/assets/icons/link.svg"
            }
            alt="Copy Link"
            width={24}
            height={24}
          />
        </button>
        {isOwner && (
          <div className="user-btn">
            <button
              className="delete-btn"
              onClick={handleDelete}
              disabled={isDeleting}
            >
              {isDeleting ? "Deleting..." : "Delete video"}
            </button>
            <div className="bar" />
            {isUpdating ? (
              <div className="update-stats">
                <p>Updating...</p>
              </div>
            ) : (
              <DropdownList
                options={visibilities}
                selectedOption={visibilityState}
                onOptionSelect={handleVisibilityChange}
                triggerElement={TriggerVisibility}
              />
            )}
          </div>
        )}
      </aside>
    </header>
  );
};

export default VideoDetailHeader;