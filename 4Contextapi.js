/*
! Context API
=================
npm create vite@latest

create "context" folder in src folder => crete  UserContext.js file in "context" folder

📁 UserContext.js
------------------
*/

import React from "react";

const UserContext=React.createContext();

export default UserContext;


/*
create UserContextProvider.jsx file in "context" folder

📁 UserContextProvider.jsx
----------------------------
*/

import React from "react";
import UserContext from './context/UserContext';


const UserContextProvider =({children})=>{

    // ! UserContext provider hum rape karte he pure component pe taki hum puri component ko ya UserContext ka access de sake. 

    const [user, setUser]= React.useState(null)
    return(
        <>
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
        </>
    )

}

export default UserContextProvider

/*
📁 App.js
-----------
*/

import UserContextProvider from './context/UserContextProvider'

function App(){
    return(
        <UserContextProvider>
            <h1>React with Chai</h1>
            <Login/>
            <Profile/>
        </UserContextProvider>
    )
}

export default App

/*
create components folder in src and create Login.jsx and Profile.jsx

📁 Login.jsx
----------------------------
*/

import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext';

function Login(){

    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");

    const {setUser}= useContext(UserContext)

    const handleSubmit =(e)=>{
        e.preventDefault();
        setUser({username,password})
    }
    
    return(
    <>
    <h2>Login</h2>
    <input type="text" value={username}  placeholder="Username" onChange={(e)=> setUsername(e.target.value)}/>
    <input type="text" value={password}  placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
    <button onClick={handleSubmit}>Submit</button>
    </>
    
    )
}

export default Login

/*
📁 Profile.jsx
----------------------------
*/

import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext';

function Profile(){

    const {user}= useContext(UserContext)

    if(!user) return <div>Please Login</div>

    return <div>Wellcome {user.username}</div>
}

export default Profile
