// Blog CURD Project winth mongodb

/*
Server action and datamutation
*/

// Setup Mongodb in atlus  => connect => mongodb for vs code => coppy the code 

// > npm i mongoose joi
src > app > database > index.js
// --------------------------------
index.js

import mongoose from 'monngoose';

const connectToDB = async () => {

    const connectionUrl = 'mongodbcode url';
    mongoose.connect(connectionUrl).then(() => console.log("Connection is successfull")).catch(err => console.log(err));
}

export default connectToDB;


src > models > blog.js
// ----------------------

import mongoose from 'mongoose';

const BlogSchema = new mongoose.schema({
    title: String,
    description: String
})

const Blog = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);

export default Blog;



// (now we create api route)
src > app > api > add - blog > route.js
// ----------------------------------------




src > app > api > get - blog > route.js
// ----------------------------------------


src > app > api > update - blog > route.js
// ----------------------------------------


src > app > api > delete -blog > route.js
// ----------------------------------------














// UI Part 


// Create part -----------------

src > app > page.js
// ---------------------
import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <h2>Browse Our BLog</h2>
            <Link href={'/blogs'}>Go to BLogs</Link>
        </div>
    )
}


src > app > blogs > page.js
// -------------------------

import BlogOverview from '@/componet/BlogOverview'

function BLogs() {
    return (
        <div>
            <BlogOverview />
        </div>
    )
}
export default BLogs


src > components > blog - overview > index.js
// -----------------------------------------------
index.js

'use-client'
import AddNewBlog from '../add-new-blog';

const initialBLogFormData = {
    title: '',
    description: ""
}

export default function BlogOverview() {

    const [openBlogDialog, setOpenBlogDialog] = useState(false);
    const [loading, setLoading] = useState(false);
    const [blogFormData, setBlogFormData] = useState(initialBLogFormData);

    console.log(blogFormData)

    async function handleSaveBlogData() {
        try{
            setLoading(true)
            const apiResponse = await fetch("/api/api/addblog", {
                methord:"POST",
                body:JSON.stringify(blogFormData),
            });

            const result = await apiResponse.json();

            if(result?.success){
                setBlogFormData(blogFormData);
                setOpenBlogDialog(false)
                setLoading(false)
            }
            console.log(result)
        }catch(err){
        }
    }

    return (
        <div>
            <h1>Add Blog Section</h1>
            <button onClick={()=>setOpenBlogDialog(true)}>Add Blog</button>
            < AddNewBlog

                openBlogDialog={openBlogDialog}
                setOpenBlogDialog={setOpenBlogDialog}
                loading={loading}
                setLoading={setLoading}
                blogFormData={blogFormData}
                setBlogFormData={setBlogFormData}
                handleSaveBlogData={handleSaveBlogData}
            />

        </div>
    )
}

src > components > add - new-blog > index.js
// -----------------------------------------------
index.js


'use client'
import Dilog from '@/componet/,,,'

function AddNewBlog({openBlogDialog, setOpenBlogDialog, loading,setLoading, blogFormData, setBlogFormData, handleSaveBlogData}) {
    return (
        <>
            <Dilog open={openBlogDialog} 
            onOpenChange={()=>{
                setOpenBlogDialog(false);
                setBlogFormData({
                    title="",
                    description=""
                })   
            }}
            >
                <input name='title' value={blogFormData.title} onChange={(e)=> setBlogFormDat({ ...blogFormData, title:e.target.value}) }/>
                <input name='description' value={blogFormData.description} onChange={(e)=> setBlogFormDat({ ...blogFormData, description:e.target.value}) }/>
                <button onClick={handleSaveBlogData}>
                    {
                        loading ? "Saving Changes" : "Save Changes"
                    
                    }
                </button>

            </Dilog>
        </>
    )
}

export default AddNewBlog




// View part -----------------


src > app > blogs > page.js
// ------------------------------
import BlogOverview from '@/component/blog-overview';
import { useState } from 'react';

async function fetchListOfBlogs() {

    try {

        const apiResponse = await fetch('https://localhost/api/get-blogs', {
            method: "GET",
            cache: 'no-store'
        });

        const result = await apiResponse.json();
        return result?.data

    } catch (err) {
        throw new Error(error)
    }
}

async function Blogs() {

    const blogList = await fetchListOfBlogs();

    console.log(blogList)

    return <BlogOverview blogList={blogList} />
}
export default Blogs;



src > components > blog - overview > index.js
// -----------------------------------------------
index.js

export default function BlogOverview({ blogList }) {
    return (
        <>
            {
                blogList.map((elm) => {
                    return (
                        <div>
                            <img src={elm.img} />
                        </div>
                    )
                })
            }
        </>
    )
}



// Delete part -----------------

src > components > blog - overview > index.js
// -----------------------------------------------

export default function BlogOverview({ blogList }) {

    async function handleDeleteBlogID(getCurrentID  ) {
        try{
            const apiResponse = await fetch(`api/api/delete/${getCurrentID}`,{
                method:"DELETE"
            })


            
            const result= await apiResponse.json();

            if(result?.success) router.refresh

        }catch(e){
            console.log(e)
        }        
    }


    return (
        <>
            {
                blogList.map((blogitem) => {
                    return (
                        <div>
                            <img src={elm.img} />
                            <button onClick={()=> handleDeleteBlogID(blogitem._id)}>Delete</button>//✅1
                        </div>
                    )
                })
            }
        </>
    )
}