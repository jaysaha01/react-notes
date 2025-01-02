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
  const [updateDataApi, setUpdateDataAPi] = useState({})

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
  const handleUpdatePost = (curElem) => setUpdateDataAPi(curElem)   //✅2


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

const Form = ({ data, setAddData, updateDataApi, setUpdateDataApi }) => {    //✅3

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
