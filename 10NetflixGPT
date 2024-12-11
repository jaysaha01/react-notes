// https://okneeraj.github.io/netflix-gpt/#/browse
// https://www.behance.net/gallery/211974181/Personal-Portfolio-Website-UIUX-Design-Figma-Web-UI   =>My prortfolio
// https://www.googlecloudcommunity.com/gc/image/serverpage/image-id/53386iDB018235E28CFC9A/image-size/large?v=v2&px=999


// ✅ Initial Stape (Setup Routing)
//npm i -D react-router-dom

// 📁App.jsx
import React, { useEffect, useRef, useState } from 'react'

const App = () => {
    return (
        <div>
            <Body />
        </div>
    )
}

// 📁Body.jsx
import React from 'react'
import { RouterProvider } from 'react-router-dom';

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/browse',
        element: <Browse />
    },
])

const Body = () => {
    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body

// 📁Login.jsx
import React from 'react'

const Login = () => {
    return (
        <div>

        </div>
    )
}

export default Login

// ✅ Toggling Sinin And singup page form

// 📁Header.jsx
import React from 'react'

const Header = () => {
    return (
        <div>

        </div>
    )
}

export default Header

// 📁Login.jsx
import React from 'react'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)  //✅2

    const toggleSighnForm = () => {
        setIsSignInForm(!isSignInForm) //✅3
    }
    return (
        <div>
            <Header />
            <form>
                {!isSignInForm && (<input type='password' placeholder='Full Name' />)}  //✅4
                <input type='text' placeholder='Email Address' />
                <input type='password' placeholder='Password' />
                <button>{isSignInForm ? "Sign In" : "Sign Up"}</button> //✅4
                <p onClick={toggleSighnForm}>{isSignInForm ? "Sign In" : "Sign Up"}</p> //✅1 & 4
            </form>
        </div>
    )
}

export default Login

//Formick form library

// ✅ Form Validation

//Create Utils folder into the src => crate 📁validation.js into it
//📁validation.js  //✅2

export const checkValidData = (email, password) => {

    const isEmailValid = /^ This is Regular expression of email you can get it from online documentation /.test(email);
    const isPasswordValid = /^ password Regex /.test(password);

    if (!isEmailValid) return "Email ID is not valid";
    if (!isPasswordValid) return "Password is not valid";

    return null;
}


// 📁Login.jsx
import React from 'react'
import { checkValidData } from '../utils/validation.js'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null) //✅6

    const email = useRef(null) //✅3
    const password = useRef(null); //✅3

    const toggleSighnForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    const handleButtonClick = () => {
        // validate form data

        console.log(email.current.value)//✅5
        console.log(password.current.value)//✅5

        let message = checkValidData(email.current.value, password.current.value)
        setErrorMessage(message)  //✅7

        //Sign in and sign up

    }
    return (
        <div>
            <Header />
            <form onSubmit={(e) => e.preventDefault()}>
                {!isSignInForm && (<input type='password' placeholder='Full Name' />)}
                <input type='text' placeholder='Email Address' ref={email} />   //✅4
                <input type='password' placeholder='Password' ref={password} />  //✅4
                <button onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button> //✅1
                <p>{errorMessage}</p> //✅6
                <p onClick={toggleSighnForm}>{isSignInForm ? "Sign In" : "Sign Up"}</p>
            </form>
        </div>
    )
}

export default Login

// ✅ Authentication

/* firebase.google.com => Get Started => Add Project => Enter name: NetflixGPT => continue => web => 
    
Resister App: App Nickname:  NetflixGPT
check (ON)= Firebase Hosting

npm install firebase 
coppy the code and create 📁 firebase.js file into utils folder and paste the code

Go to => Project Overview 
Project Overview => Authentication => get started => sign-in-methord => Emailid/password (Enable) => Save 

{ "search firebase documentation" -> Firebase Docs -> surch "Firebase Authentication" -> Web -> Password Authentication -> }

Authentication - user (To see ragistered users)

* Deploy Application on Firebase
npm install -g firebase-tools
firebase login
firebase init
>> Select with spacebar and Enter = Hosting: Configure files for FIrebase Hosting and (optionally) set up GITHUB Action deploy
>>Use an exisint project and select project 
>> what is your publick directory? build
>>NO
>>NO
npm run build
firebase deploy


*/

// 📁Login.jsx
import React from 'react'
import { checkValidData } from '../utils/validation.js'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";  //✅1



const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)

    const email = useRef(null)
    const password = useRef(null);

    const toggleSighnForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    const handleButtonClick = () => {
        // validate form data

        console.log(email.current.value)
        console.log(password.current.value)

        let message = checkValidData(email.current.value, password.current.value)
        setErrorMessage(message)

        if (message) return;

        //Sign in and sign up create a new user 

        if (!isSignInForm) {
            //Signup Logic from DOC  //✅2   => and see firebase to see the ragistered user

            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Sign UP
                    const user = userCredential.user;
                    console.log(user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage) //Show error message
                });

        } else {

            //Signin Logic from DOC //✅ 3

            const auth = getAuth();
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                });
        }
    }
    return (
        <div>
            <Header />
            <form onSubmit={(e) => e.preventDefault()}>
                {!isSignInForm && (<input type='password' placeholder='Full Name' />)}
                <input type='text' placeholder='Email Address' ref={email} />
                <input type='password' placeholder='Password' ref={password} />
                <button onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p>{errorMessage}</p>
                <p onClick={toggleSighnForm}>{isSignInForm ? "Sign In" : "Sign Up"}</p>
            </form>
        </div>
    )
}

export default Login

// ✅ Push Firebase userdata to Redux store to navigate the user

/*
npm i -D @reduxjs/toolkit
npm i react-redux
*/

// 📁appStore.js //✅ 1
import { configureStore } from "@reduxjs/toolkit"
import { useReducer } from './utils/useReducer';

const appStore = configureStore(
    {
        reducers: {
            user: useReducer
        }
    }
)

export default appStore;

// 📁appSlice.js   //✅ 2
import { createSlice } from "@redux/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        addUser: (state, action) => {
            return action.payload;
        },
        removeUser: (state, action) => {
            return null
        },
    }
})

export const { addUser, removeUser } = userSlice.actions;
export default useSlice.reducers


// 📁App.jsx 

import { Provider, useDispatch } from "react-redux";
import appStore from './utils/appStore';

const App = () => {
    return (
        <div>
            <Provider store={appStore}>  //✅ 3
                <Body />
            </Provider>   //✅ 3
        </div>
    )
}

// We use navigator only into router provider

// 📁Header.jsx
import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate, useNavigate } from 'react-router-dom';


const Header = () => {

    const navigator = useNavigate();  //✅7
    const dispatch = useDispatch();  //✅ 5

    useEffect(() => {   //✅ 4
        import { getAuth, onAuthStateChanged } from "firebase/auth";

        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                //This is like a event listener. It call when signin, signup and signout
                // https://firebase.google.com/docs/auth/web/manage-users

                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }))  //✅ 6
                navigator("/browse")  //✅8

            } else {
                // User is signed out
                dispatch(removeUser());
                navigator("/") //✅8
            }
        });

        //unsubscribe when component unmount
        return () => unsubscribe();
    }, [])

    return (
        <div>
            <img src='logo' />
            <button>Sign Out</button>
        </div>
    )
}

export default Header



// ✅ Access TMDB Movie API

// Go to TMDM Website => log in => edit profile => API => || Go to DOCS of TMDB (get started)=> API =>


// 📁 Browse.jsx
import React from 'react'
import { addNowPlayingMovies } from './utils/MovieSlice.js'

const Browse = () => {

    const dispatch = useDispatch();  //✅ 3

    const getNowPlayingMovies = async () => {
        const data = await fetch("TMDM API" + API_OPTIONS);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results))   //✅ 4
    }

    useEffect(() => {
        getNowPlayingMovies()
    }, [])
    return (
        <div>

        </div>
    )
}

// 📁 MovieSlice.jsx ✅1
import { createSlice } from "@redux/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        addNowPlayingMovies: null
    },
    reducers: {
        addNowPlayingMovies: (state, acion) => {
            state.addNowPlayingMovies = acion.payload
        }
    }
})

export const { addNowPlayingMovies } = movieSlice.actions
export default movieSlice.reducer;


// 📁appStore.js ✅ 2
import { configureStore } from "@reduxjs/toolkit"
import { useReducer } from './utils/useReducer';
import moviesReducer from './MovieSlice'

const appStore = configureStore(
    {
        reducers: {
            user: useReducer,
            movies: moviesReducer
        }
    }
)


//✅ Dispaly them 😇

// 📁 Browse.jsx
import React from 'react'
import { addNowPlayingMovies } from './utils/MovieSlice.js'

const Browse = () => {

    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const data = await fetch("TMDM API" + API_OPTIONS);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results))
    }

    useEffect(() => {
        getNowPlayingMovies()
    }, [])
    return (
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </div>
    )
}


// 📁MainContainer.js

import { Provider, useDispatch } from "react-redux";
import appStore from './utils/appStore';
import { useSelector } from 'react-redux';

const App = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    if (movies == null) return; //or  if(!movies) return; 
    const mainMovie = movies[0];

    const { original_title, overview } = mainMovie;
    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    )
}

// 📁VideoTitle.js

const VideoTitle = ({ title, overview }) => {

    return (
        <div>
            <h1>{title}</h1>
            <p>{overview}</p>
        </div>
    )
}

// 📁VideoBackground.js

const VideoBackground = ({ movieId }) => {

    const trailerVIdeo = useSelector(store => store.movies?.trailerVIdeo);
    const dispatch = useDispatch();

    //Fetch trailer videos

    const getMovies = async = () => {
        const data = await fetch('https://movie/fetch' + API_OPTIONS);
        const json = await data.json();
        const filterData = json.results.filter((video) => video.type == "Trailer");
        const trailer = filterData.length == 0 ? filterData[0] : json.results[0];
        dispatch(addNowPlayingMovies(trailer))
    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <div>
            <iframe src={"www.youtube.com/?v=" + trailerVIdeo?.key + "?&autoPlay=1&nute=1"} ></iframe>
        </div>
    )
}

// ✅Create Secondary Componet

// 📁SecondaryContainer.js

import React from 'react'
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);
    return (
        <div>
            <MovieList title={"Now Playing movies"} movies={movies.nowPlaying} />
        </div>
    )
}

export default SecondaryContainer

// 📁MovieList.js

import React from 'react'

const MovieList = ({ title, movies }) => {
    return (
        <div>
            <h1>{title}</h1>
            {movies.map((movie) => {
                return (movies &
                    <div>
                        <MovieCard key={movie.id} posterPath={movie.poster_path} />
                    </div>
                )
            })}

        </div>
    )
}

export default MovieList

// 📁MovieCard.js

import React from 'react'

const MovieCard = ({ posterPath }) => {

    if(!posterPath) return null
    return (
        <div>
            <img alt="" src={IMG_CDN_URL + posterPath} />
        </div>
    )
}

export default MovieCard

// ✅ GPT Search   (toggle gpt search page)

//📁 gptSlice.js ✅1
const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        shwoGPTSearch: false,
    },
    reducers: {
        toggleGptSearchViews: (state, action) => {
            state.shwoGPTSearch = !state.shwoGPTSearch;
        }
    }
})

export const { toggleGptSearchViews } = gptSlice.actions
export default gptSlice.reducer


// 📁appStore.js ✅ 2
import { configureStore } from "@reduxjs/toolkit"
import { useReducer } from './utils/useReducer';
import moviesReducer from './MovieSlice'
import gptReducer from './gptSlice';

const appStore = configureStore(
    {
        reducers: {
            user: useReducer,
            movies: moviesReducer,
            gpt: gptReducer  //✅ 2
        }
    }
)

// 📁Header.jsx
import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate, useNavigate } from 'react-router-dom';
import { toggleGptSearchViews } from '../utils/gptSlice'  //✅ 3


const Header = () => {

    const navigator = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        import { getAuth, onAuthStateChanged } from "firebase/auth";

        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                //This is like a event listener. It call when signin, signup and signout
                // https://firebase.google.com/docs/auth/web/manage-users

                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
                navigator("/browse")

            } else {
                // User is signed out
                dispatch(removeUser());
                navigator("/")
            }
        });

        //unsubscribe when component unmount
        return () => unsubscribe();
    }, [])

    const handleGptSearchClick = () => { //✅ 3
        dispatch(toggleGptSearchViews())
    }

    return (
        <div>
            <img src='logo' />
            <button>Sign Out</button>
            <button onClick={handleGptSearchClick}>GPT Search</button>  //✅ 4
        </div>
    )
}

export default Header

// 📁 Browse.jsx
import React from 'react'
import { addNowPlayingMovies } from './utils/MovieSlice.js'
import { useSelector } from 'react-redux'; //✅ 5


const Browse = () => {

    const shwoGptSearch = useSelector((store) => StorageManager.gpt.shwoGPTSearch) //✅ 5
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const data = await fetch("TMDM API" + API_OPTIONS);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results))
    }

    useEffect(() => {
        getNowPlayingMovies()
    }, [])
    return (
        <div>
            <Header />
            {                                         //✅ 6
                shwoGptSearch ? <GptSearch /> :
                    <><MainContainer />
                        <SecondaryContainer />
                    </>
            }

        </div>
    )
}

// ✅ GPT Search   

// 📁GptSearch.js

import React from 'react'

const GptSearch = () => {
    return (
        <div>
            <GptSearchBar />
            <GPTMovieSuggestion/>
        </div>
    )
}

export default GptSearch


// 📁GptSearchBar.js

import React from 'react'

const GptSearchBar = () => {
    return (
        <div>
            <form>
                <input type='text'></input>
                <button>Search</button>
            </form>
        </div>
    )
}

export default GptSearchBar


// ✅ Multilangulage

//📁 languageConstants.js ✅1

const lang = {
    en: {
        search: "Search",
        gptSearchPlaceholder: "what you like to watch today"
    },
    hi: {
        search: "खोज",
        gptSearchPlaceholder: "आज आप क्या देखना पसंद करते हैं"
    },
    sp: {
        search: "buscar",
        gptSearchPlaceholder: "¿Qué te gusta ver hoy?"
    },

}
export default lang;


// 📁GptSearchBar.js

import React from 'react'
import lang from '../utils/languageConstants'; //✅9
const GptSearchBar = () => {

    const langKey = useSelector(store => store.config.lang);  //✅10
    return (
        <div>
            <form>
                <input type='text' placeholder={lang[langKey].gptSearchPlaceholder}></input> //✅2, 11
                <button>{lang[langKey].search}</button>  //✅2, 11
            </form>
        </div>
    )
}

export default GptSearchBar


// 📁Header.js
import { changeLanguage } from '../utils/constants';

const Header = () => {

    const navigator = useNavigate();
    const dispatch = useDispatch();


    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchViews())
    }

    const hangelLanguageChange = (e) => {  //✅7

        dispatch(changeLanguage(e.target.value))  //✅8
    }


    return (
        <div>
            <select onChange={hangelLanguageChange}> //✅3 , 6
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="sp">Spanish</option>
            </select>
            <img src='logo' />
            <button>Sign Out</button>
            <button onClick={handleGptSearchClick}>GPT Search</button>
        </div>
    )
}

// 📁configSlice.js //✅4
import { createSlice } from '@reduxjs/toolkit';

const configSlice = createSlice({
    name: 'config',
    initialState: {
        lang: "en"
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.lang = action.payload
        }
    }
})

export const { changeLanguage } = configSlice.actions;
export default configSlice.reducer


// 📁appStore.js
import { configureStore } from "@reduxjs/toolkit"
import { useReducer } from './utils/useReducer';
import moviesReducer from './MovieSlice'
import gptReducer from './gptSlice';
import configReducer from './configSlice' //✅5

const appStore = configureStore(
    {
        reducers: {
            user: useReducer,
            movies: moviesReducer,
            gpt: gptReducer,
            config: configReducer  //✅5
        }
    }
)


// ✅ GPT API (get movie recomendation from gpt and fetch data form TMDB API and get the data)

/*
https://platform.openai.com/docs/overview => API keys => +create new key => coppy key
    
*/

//📁 constants.js  //✅1

export const OPENAI_KEY = "fdfdfdfdfujdfnvndndfhdfljujrnmv";

/*
https://www.npmjs.com/package/openai
npm i openai

*/

// 📁 Opeai.js  //✅2
import OpenAI from 'openai';
import { OPENAI_KEY } from './constants';

const Openai = new OpenAI({  //getting form openai package
    apiKey: OPENAI_KEY,
    dengerouslyAllowBrowser:true
});

export default Openai;

// 📁GptSearchBar.js

import React from 'react'
import lang from '../utils/languageConstants';
import Opeai from './utils/Openai';
import addGptMovieResults from './utils/gptSlice'; //✅11
import dispatch from 'ract/redux'; //✅12
const GptSearchBar = () => {

    const dispatch= useDispatch //✅12

    //Search movie 
    const searchMovieTMDB=async(movie)=>{  //✅8
        const data= await fetch(`https://tmdb.com/${movie}`+options);
        const json= await data.json();
        return json.results;

    }

    const handleGptSearchClick = () => {  //✅6

        console.log(searchText.current.value);

        const gptQuery="Act as a Movie Recomendation system an suggest some movie for the query"+ searchText.current.value + "only give me names of 5 movies, comma seperated like the example results given ahead. Example: Gaddar, Sholay, Don, Krrish, Ra.One"

        const gptResults= async function main() {   //getting form openai package   //✅7
            const chatCompletion = await Opeai.chat.completions.create({
                messages: [{ role: 'user', content: gptQuery }],
                model: 'gpt-4o',
            });
        }

        let gptMovies=gptResults.choices[0]?.message?.content.split(",");

        const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie)) //✅9 This is array of promises

        const tmdbResults= Promise.all(promiseArray);


        dispatch(addGptMovieResults({movieName: movieNames,movieResults:tmdbResults})) //✅11

    }


    const langKey = useSelector(store => store.config.lang);
    const searchText = useRef(null); //✅4
    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()} >//✅3
                <input type='text' placeholder={lang[langKey].gptSearchPlaceholder} ref={searchText}></input>
                <button onClick={handleGptSearchClick}>{lang[langKey].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar


//📁 gptSlice.js 
const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        shwoGPTSearch: false,
        movieResults: null, //✅10
        movieNames:null//✅10
    },
    reducers: {
        toggleGptSearchViews: (state, action) => {
            state.shwoGPTSearch = !state.shwoGPTSearch;
        },
        addGptMovieResults:(state,action)=>{  //✅10
            const {movieName, movieResults} = action.payload;
            state.movieName= movieName;
            state.movieResults= movieResults;
        }
    }
})

export const { toggleGptSearchViews , addGptMovieResults} = gptSlice.actions
export default gptSlice.reducer


// ✅ GPT Movie Suggestion page build (Feed the data into the component)


//📁 GPTMovieSuggestion.js

import { useSelector } from 'react-redux';

const GPTMovieSuggestion=()=>{
    const {movieResults, movieNames}= useSelector((store)=> store.gpt);

    if(!movieNames) return null;

    return(
        <div>
            <h1>{movieNames}</h1>
            {
                movieNames.map((movieName, index)=> <MovieList key={movieName} title={movieNames} movies={movieResults[index]}/>)
            }
           
        </div>
    )

}

// ✅ How to hide API keys (Sectret keys)

//Create .env file in src => 

//📁 .env

REACT_APP_OPENAI_KEY= "secreact key of the open AI";
REACT_APP_TMDB_KEY= "TBDB key";

// 📁 constants.js
export const OPENAI_KEY= process.env.REACT_APP_OPENAI_KEY;


// ✅ Memoization (reduse API call rapidly .bcz we alreday store data into our store so itis not need to call API everytime to reduce the API Call we can use Memoizaton)

const Browse = () => {

    const dispatch = useDispatch();  

    const nowPlayingMovies= useSelector(store=> store.moves.nowPlayingMovies); //✅1

    const getNowPlayingMovies = async () => {
        const data = await fetch("TMDM API" + API_OPTIONS);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results))   
    }

    useEffect(() => {
        if(!nowPlayingMovies) getNowPlayingMovies()  //✅2

    }, [])
    return (
        <div>

        </div>
    )
}
