
// 🔥 Firebase

/* 

===================  Firebase overview ======================

1) login with firebas  => go to console => Crate a project button => give name of your project , continue , crate project 

2) can see your project dashboard => project overview 

*/

/* 

===================  Connect React with Frebase ======================

project overview  => </> => Register App= give name, Register App => 

*/


// npm i firebase

// Crate file firebase.js 

// paste the code (from firebase generated code for you)

import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    //...
    databasesURL: "paste the url from real time database "
};

export const app = initializeApp(firebaseConfig);

/*
go to app overview section and [ continue to console ]
*/



// ===================  Authentication (sign up using Email and password) =========================

// project overview => Authntication => get started => Email/password => enable => save =>

// https://firebase.google.com/docs/auth/web/start

import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from './firebase';

const auth = getAuth(app);

const App = () => {

    const signupUser = () => {
        createUserWithEmailAndPassword(auth, 'piyushgarg@gmail.com', 'Piiush1234').then((value) => console.log(value))
    }

    return (
        <div>
            <button onClick={signupUser}>Create User</button>
        </div>
    )
}

export default App

/*
authentication => user
*/


// ===================  Authentication (sign in ussing email and password) =========================

import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from './firebase';

const auth = getAuth(app);

const App = () => {

    const signinUser = () => {
        signInWithEmailAndPassword(auth, 'piyushgarg@gmail.com', 'Piiush1234').then((value) => console.log(value)).catch((err) => console.log(err));
    }

    return (
        <div>
            <button onClick={signinUser}>Create User</button>
        </div>
    )
}

// ===================  Authentication (Google Authntication) =========================


// Google firebase > Google authntication > sign-in-methords > Add New Provider > Google > Enable 

// https://firebase.google.com/docs/auth/web/google-signin

import React from 'react'
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'; //✅1
import { app } from './firebase';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider(); //✅2

const App = () => {

    const signupWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
    }

    return (
        <div>
            <button onClick={signupWithGoogle}>Google</button>
        </div>
    )
}



// ===================  Correct way to use Firebase  =========================

// src > context > Firebase.jsx 

import { createContext } from 'react';
import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword } from './firebase/auth'
import { getDatabase, set, ref } from 'firebase/database';


const firebaseConfig = {
    // ...
};


const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp)

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {

    const sigupUserWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(firebaseAuth, email, password)
    }

    const putData = (key, data) => set(ref(database, key), data);

    return (
        <FirebaseContext.Provider value={{ sigupUserWithEmailAndPassword, putData }}>
            {props.children}
        </FirebaseContext.Provider>
    )
}


// index.js 

import { FirebaseProvider } from './context/Firebase';

<FirebaseProvider>
    <App />
</FirebaseProvider>



// Home.js 
import { useFirebase } from './context/Firebase';

import React from 'react'

const auth = getAuth(app);

const Home = () => {

    const firebase = useFirebase();

    return (
        <div>
            <h1>Hellow {user.email}</h1>
            <button onClick={() => {
                firebase.sigupUserWithEmailAndPassword("sahajay426@gmal.com", "Password123");
                firebase.putData('user/' + "piush", { email, password });
            }}>Sin in</button>

        </div >
    )
}

export default Home


// ===================  Getting Loggedin User  =========================



App.js

import React from 'react'
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const App = () => {

    const [user, setUser] = useState(null);

    const auth = getAuth();

    useEffect(() => {

        onAuthStateChanged(auth, user => {
            if (user) {
                //Yes you are logged in
                console.log("Hellow", user)
                setUser(user)
            } else {
                //Yes you are logged out
                console.log("Hellow", user)
                setUser(null)
            }
        });
    })

    if (user === null) {
        return (
            <div>
                <Signup />
                <Signin />
            </div>
        )
    }

    return (
        <div>
            <h1>Hellow {user.email}</h1>
        </div>
    )
}

export default Header

// ===================  logout  =========================

import React from 'react'
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"; //✅1

const App = () => {

    const [user, setUser] = useState(null);

    const auth = getAuth();

    useEffect(() => {

        onAuthStateChanged(auth, user => {
            if (user) {
                //Yes you are logged in
                console.log("Hellow", user)
                setUser(user)
            } else {
                //Yes you are logged out
                console.log("Hellow", user)
                setUser(null)
            }
        });
    })

    if (user === null) {
        return (
            <div>
                <Signup />
                <Signin />
            </div>
        )
    }

    return (
        <div>
            <h1>Hellow {user.email}</h1>
            <button onClick={() => signOut(auth)}>Logout</button>  //✅2
        </div>
    )
}

export default Header

//=====================  Firebase Firestore  =========================

// Post our data

/*

project overview => Firestore Database => start in test mode => next => enable

+ start a collection => Auto ID => 

    Filed  Type
    ----   --------------
    Name   String  piush
    Age   Number  21
isMale    boolean  true

(add collections => Documents => user > You can also crate user's collection)


*/

https://firebase.google.com/docs/firestore/quickstart/

App.js

import { getFirestore, collection, addDoc } from "firebase/firestore";

import { app } from "./firebase";

const firestore = getFirestore(app);

function App() {

    const wirteData = () => {
        let results = await addDoc(collection(firestore, 'cities'), {
            name: "dilhi",
            pinCode: 1234,
            let: 123,
            long: 456
        })

        console.log("Results", results)
    }

    const makeSubCollection = async () => {
        await addDoc(collection(firestore, 'cities/put that id whare you want add more data/places'), {
            name: "That is place",
            desc: "Aws des",
            data: Date.now(),
        })
    }

    return (
        <>
            <button onClick={wirteData}>Put data</button>
            <button onClick={makeSubCollection}>Put Sub Data</button>
        </>


    )
}

// Read Our Data

// https://firebase.google.com/docs/firestore/query-data/get-data


App.js

import { getFirestore, collection, addDoc, doc, getDoc } from "firebase/firestore";//✅1

import { app } from "./firebase";

const firestore = getFirestore(app);

function App() {

    const wirteData = () => {
        let results = await addDoc(collection(firestore, 'cities'), {
            name: "dilhi",
            pinCode: 1234,
            let: 123,
            long: 456
        })

        console.log("Results", results)
    }

    const makeSubCollection = async () => {
        await addDoc(collection(firestore, 'cities/put that id whare you want add more data/places'), {
            name: "That is place",
            desc: "Aws des",
            data: Date.now(),
        })
    }

    const getDocument = async () => { //✅2
        const ref = doc(firestore, 'cities', 'id of that city');
        let snap = await getDoc(ref);

        console.log(snap.data);
    }

    return (
        <>
            <button onClick={wirteData}>Put data</button>
            <button onClick={makeSubCollection}>Put Sub Data</button>
            <button onClick={makeSubCollection}>Get Document</button>  //✅3
        </>


    )
}




// Query Our Data (Geting data based on query)

App.js

import { getFirestore, collection, addDoc, doc, getDoc, query, where, getDocs } from "firebase/firestore";//✅1

import { app } from "./firebase";

const firestore = getFirestore(app);

function App() {

    const wirteData = () => {
        let results = await addDoc(collection(firestore, 'cities'), {
            name: "dilhi",
            pinCode: 1234,
            let: 123,
            long: 456
        })

        console.log("Results", results)
    }

    const makeSubCollection = async () => {
        await addDoc(collection(firestore, 'cities/put that id whare you want add more data/places'), {
            name: "That is place",
            desc: "Aws des",
            data: Date.now(),
        })
    }

    const getDocument = async () => {
        const ref = doc(firestore, 'cities', 'id of that city');
        let snap = await getDoc(ref);

        console.log(snap.data);
    }

    const getDocumentByQuery = async () => {  //✅2

        const collectionRef = collection(firestore, "users");
        const q = query(collectionRef, where('isMale', "==", true));
        let snapshort = await getDocs(q);
        snapshort.forEach((data) => console.log(data.data()))

    }

    return (
        <>
            <button onClick={wirteData}>Put data</button>
            <button onClick={makeSubCollection}>Put Sub Data</button>
            <button onClick={getDocumentByQuery}>Get Document By query</button>   //✅3
        </>
    )
}


// update 

App.js

import { getFirestore, collection, addDoc, doc, getDoc, query, where, getDocs, updateDoc } from "firebase/firestore"; //✅1

import { app } from "./firebase";

const firestore = getFirestore(app);

function App() {

    const wirteData = () => {
        let results = await addDoc(collection(firestore, 'cities'), {
            name: "dilhi",
            pinCode: 1234,
            let: 123,
            long: 456
        })

        console.log("Results", results)
    }

    const makeSubCollection = async () => {
        await addDoc(collection(firestore, 'cities/put that id whare you want add more data/places'), {
            name: "That is place",
            desc: "Aws des",
            data: Date.now(),
        })
    }

    const getDocument = async () => {
        const ref = doc(firestore, 'cities', 'id of that city');
        let snap = await getDoc(ref);

        console.log(snap.data);
    }

    const getDocumentByQuery = async () => {

        const collectionRef = collection(firestore, "users");
        const q = query(collectionRef, where('isMale', "==", true));
        let snapshort = await getDocs(q);
        snapshort.forEach((data) => console.log(data.data()))

    }


    const update = async () => { //✅2

        const docRef = doc(firestore, 'cities', 'id that you want to update');

        await updateDoc(docRef, {
            name: "New Delhi"
        })
    }


    return (
        <>
            <button onClick={wirteData}>Put data</button>
            <button onClick={makeSubCollection}>Put Sub Data</button>
            <button onClick={getDocumentByQuery}>Get Document By query</button>

            <button onClick={update}>Update Doucment</button> //✅3
        </>
    )
}
