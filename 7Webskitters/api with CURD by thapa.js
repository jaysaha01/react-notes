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

//✅ React Form

// https://react-hook-form.com/

// > npm install react-hook-form

import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"//✅1

const realapi = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors ,isSubmitting }, //✅6
  } = useForm()  //✅2

  const onSubmit= (data) => console.log(data) //✅4 {username:"harray", password:"hrray123"}


  return (
    <div>
      { isSubmitting && <div>Loading</div>}  //✅7
      <container>
        <form action="" onSubmit={handleSubmit(onSubmit)}> //✅3
          <input type="text" {...register("username" , {required: true, minLength: {value: 3, message: "Min Length 3"}, maxLength:{value: 8, message: "Max Length 8"}} )} ></input>  //✅5
          {errors.username && <div className="red">{errors.username.message}</div>}


          <input type="password" {...register("password")} ></input>  //✅5


          <input disabled={isSubmitting} type="submit"/>

        </form>
      </container>
    </div>
  )
}

export default realapi

// -----------------------------------------

// ✅ custom errors

import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"

const realapi = () => {

  const {
    register,
    handleSubmit,
    setError, //✅2
    watch,
    formState: { errors ,isSubmitting }, 
  } = useForm()  

  const onSubmit= (data) =>{
  
    console.log(data) 

    if(data.username !== "subham"){ //✅3
      setError("myform",{message:"You form is not in good order"})
    }

  }

  return (
    <div>
      { isSubmitting && <div>Loading</div>}  
      <container>
        <form action="" onSubmit={handleSubmit(onSubmit)}> 
          <input type="text" {...register("username" , {required: true, minLength: {value: 3, message: "Min Length 3"}, maxLength:{value: 8, message: "Max Length 8"}} )} ></input>  
          {errors.username && <div className="red">{errors.username.message}</div>}


          <input type="password" {...register("password")} ></input>  


          <input disabled={isSubmitting} type="submit"/>
              
          {errors.myform && <div>{errors.myform.message}</div>} //✅1  //(myform => custome name)

        </form>
      </container>
    </div>
  )
}

export default realapi

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

//Read.jsx

import React, { useEffect, useState } from "react";
import axiosInsstance from "../api/axiosInstans";
import { prod_end } from "../api/api";

const Read = () => {
    cosnt[(data, setData)] = useState([]);

    let fetchProduct = () => {
        let api = prod_end
        axiosInsstance
            .get(api)
            .then((res) => {
                console.log(res);
                
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchProduct();
    }, [setData,api]);
    return <div>Read</div>;
};

export default Read;



//Custom controlled form

// Setting up form and take input

import { useState } from 'react';
import './App.css';

function App() {
    let [input, setInput] = useState({ fullname: "", email: "" });

    const changeHandler = (event) => {
        let { name, value } = event.target;

        setInput({ ...input, [name]: value })
    }


    const submitHandeler = (event) => {
        event.preventDefault();
        console.log("Form Submited: ", input)
    }

    return (
        <div className="App">
            <h1>Custom Conroll form</h1>
            <form onSubmit={submitHandeler}>
                <input type="text" name="fullname" placeholder='Enter your full name' onChange={changeHandler} />
                <input type='email' name='email' placeholder='Enter your email' onChange={changeHandler} />
                <input type='submit' value="Add" />
            </form>
        </div>
    );
}

export default App;


// Adding validation and show error into the form


import { useState } from 'react';
import './App.css';

const exEmail = RegExp("^[^\W_]+\w*(?:[.-]\w*)*[^\W_]+@[^\W_]+(?:[.-]?\w*[^\W_]+)*(?:\.[^\W_]{2,})$") //✅5


/*
/  / = wrappiing
^ = start;
(?=.*?[A-Z]) = must atleast one uppercase letter;
()= grouping
.{8,}= match any charecter
*/

function App() {
    let [input, setInput] = useState({
        fullname: "", email: "", errors: {
            fullname: "",   //✅1
            email: ""
        }
    });

    const changeHandler = (event) => {

        let { name, value } = event.target;

        let err = { ...input.errors }     //✅2
        switch (name) {
            case 'fullname':
                if (value.length < 1) {
                    err.fullname = "Required Field"
                } else if (value.length < 2) {
                    err.fullname = "Atlest 2 charecters"
                } {
                    err.fullname = ""
                }
                break;


            case 'email':  //✅2                                     //✅5
                err.email = value.length < 1 ? "Required Field" : exEmail.test(value) ? "" : "Wrogn pattern"
                break;


            default: console.log("Not necessary")

        }
                                               //✅3
        setInput({ ...input, [name]: value, errors: err})
    }

    console.log("vaidation errs :", input.errors)

    const submitHandeler = (event) => {
        event.preventDefault();
        console.log("Form Submited: ", input)
    }


    return (
        <div className="App">
            <h1>Custom Conroll form</h1>
            <form onSubmit={submitHandeler}>
                <input type="text" name="fullname" placeholder='Enter your full name' onChange={changeHandler} />
                <br />
                {input.errors && input.errors.fullname.length > 0 ? <p>{input.errors.fullname}</p> : null} //✅4
                <input type='email' name='email' placeholder='Enter your email' onChange={changeHandler} />
                <br />
                {input.errors && input.errors.email.length > 0 ? <p>{input.errors.email}</p> : null} //✅4
                <input type='submit' value="Add" />
            </form>
        </div>
    );
}

export default App;

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


import { useNavigate, useParams } from "react-router-dom";  ✅redirect 1

const Fullpost = () => {

  let navigate= useNavigate(); ✅redirect 2

  const [dataing, setDataing] = useState([]);

  let { uid } = useParams();

  let dapi = prod_end + "/" + uid;

  useEffect(() => {
    fetching();
  }, []);

  function fetching() {
    let api = prod_end;
    axiosInsstance
      .get(dapi)
      .then((res) => {
        setDataing(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  if (dataing.length === 0) {
    return <Please />;
  }

  function deletehandeler() {
   
    axiosInsstance
      .delete(dapi)
      .then((res) => {
        navigate("/") ✅redirect 3
      })
      .catch((err) => console.log("Error Is " + err));
  }

  return (
    <Container className="mt-5">
      <Row>
        {
          <Col key={dataing.id}>
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src={dataing.imageurl}
                style={{ height: "400px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title className="pb-4 pt-4">{dataing.title}</Card.Title>
                <Card.Text>{dataing.description}</Card.Text>
                <Button variant="primary" onClick={deletehandeler}>
                  Delete Post
                </Button>
              </Card.Body>
            </Card>
          </Col>
        }
      </Row>
    </Container>
  );
};

export default Fullpost;

Update 

import React, { useEffect, useState } from "react";
import axiosInsstance from "../api/axiosInstans";
import { prod_end } from "../api/api";
import Please from "./Please";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate, useParams } from "react-router-dom";
import { MyVerticallyCenteredModal } from "./MyVerticallyCenteredModal";

const Fullpost = () => {
  const [modalShow, setModalShow] = React.useState(false);
  // const [editxt, setEdittxt] = useState(null);

  let navigate = useNavigate();

  const [dataing, setDataing] = useState([]);

  let { uid } = useParams();

  let dapi = prod_end + "/" + uid;

  useEffect(() => {
    fetching();
  }, []);

  function fetching() {
    axiosInsstance
      .get(dapi)
      .then((res) => {
        setDataing(res.data);
        // console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  if (dataing.length === 0) {
    return <Please />;
  }

  function deletehandeler() {
    axiosInsstance
      .delete(dapi)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log("Error Is " + err));
  }

  function edithandeler() {
    // setEdittxt(true);
    setModalShow("Edit Your Post");
  }

  return (
    <Container className="mt-5">
      <Row>
        {
          <Col key={dataing.id}>
            <Card style={{ width: "100%" }}>
              <Card.Img
                variant="top"
                src={dataing.imageurl}
                style={{ height: "400px", objectFit: "cover" }}
              />
              <Card.Body className="p-5">
                <Card.Title className="pb-4 pt-4">{dataing.title}</Card.Title>
                <Card.Text>{dataing.description}</Card.Text>

                <div className="box mt-5 ">
                  <Button
                    variant="primary"
                    onClick={deletehandeler}
                    className="me-3"
                  >
                    Delete Post
                  </Button>
                  <Button variant="primary" onClick={edithandeler}>
                    Edit Post
                  </Button>

                  <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    // edittxt={editxt}
                    dataset={dataing}
                    type="edit"
                    // databaseid={uid}
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
        }
      </Row>
    </Container>
  );
};

export default Fullpost;

// ==============================================================================================================================================================

// Sign Up 

/*
Apiurl.js
================
*/

export const baseurl = "https://wtsacademy.dedicateddevelopers.us/";

export const endpoint = "api/user/signup";

/*
AxiosInstance.js
=======================
*/

import axios from "axios";
import { baseurl } from "./Apiurl";

const instance = axios.create({
  baseURL: baseurl
});

export default instance



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


  const handleChange = (event) => {
    const { name, value } = event.target;

    setInputs((values) => ({ ...values, [name]: value }));
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


    AxiosInstance.post(endpoint, fromValue)
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

      <input type="submit" />
    </form>
  );
};

export default Register;

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


// ========================================================================================================================================================


