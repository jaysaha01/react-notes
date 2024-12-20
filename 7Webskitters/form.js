
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
