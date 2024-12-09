/*
npx create-react-app namate-youtube
npm start
*/

// 📁 Header.js
import React, { Children, useEffect, useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux' //✅5
import { toggleMenu } from 'react-redux' //✅5

const dispatch = useDispatch(); //✅6

const toggleMenuHandler = () => {   //✅7
  dispatch(toggleMenu());
}

const Header = () => {
  return (
    <div>
      <img src='hambargar.jpg' onClick={() => toggleMenuHandler()}></img>  //✅4
      <img src='logo.jpg'></img>
      <input type='text' /><button>Search</button>
    </div>
  )
}

export default Header

// 📁 Body.js

import React from 'react'

const Body = () => {
  return (
    <div>
      <Sidebar />
      <MainContainer />
    </div>
  )
}

export default Body

//Utils folder in src => 📁 Store.js ✅ 1

import { ConfigureStore } from "@redux/toolkit";
import appSlice from './appSlice'


const store = ConfigureStore({
  reducer: {
    app: appSlice,
  }

})

export default store;

//Utils folder in src => 📁 appSlice.js ✅ 2

import { createSlice } from "@redux/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  }
}
export const { toggleMenu } = appSlice.actions;
export default appSlice.reducer

// 📁 Sidebar.js

import React from 'react'
import { useSelector } from 'react-redux';

const Sidebar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen)  //✅8

  if (!isMenuOpen) return null; //✅9


  return (
    <div>
      <h1>Subscribstion</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gamming</li>
      </ul>
    </div>
  )
}

// 📁 MainContainer.js

import React from 'react'

const MainContainer = () => {
  return (
    <div>
      <Buttonlist />
      <VideoContainer />
    </div>
  )
}

export default MainContainer

// 📁 Button.js

import React from 'react'

const Button = ({ name }) => {
  return (
    <div>
      <button>{name}</button>
    </div>
  )
}

export default Button

// 📁 Buuttonlist.js

import React from 'react'

const Buttonlist = () => {
  return (
    <div className='flex'>
      <Button name="game" />
      <Button name="kapil Sharma" />
      <Button name="Spider Man" />
    </div>
  )
}

export default Buttonlist



// 📁 VideoContainer.js

import React from 'react'

const VideoContainer = () => {
  return (
    <div>



    </div>
  )
}

export default VideoContainer

//📁 App.js
import { Provider } from 'ract-redux'
import store from './utils/store'
import React from 'react'

//* select the redux extention to check mystore / redux store is working or not
const App = () => {
  return (
    <div>
      <Provider store={store}>  //✅3
        <Head />
        <Body />
      </Provider>  //✅3

    </div>
  )
}

export default App


//✅ Show videos by API of youtube

// create utils folder into src and create Constants.js file

// 📁 VideoCard.js

import React from 'react'

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnail } = snippet

  return (
    <div>
      <img src={thumbnail.high.url}></img>
      <h1>{title}</h1>
      <h2>{channelTitle}</h2>
    </div>
  )
}

export default VideoCard
/* 
📁 Constants.js
-----------------
*/

// get your API key = search youtube api key =>  credential page => create credentials => Crate API key => coppy the key

const GOOGLE_API_KEY = "Afdsfdsffsfcvsffds_dsfdslfjflj";

export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=" + GOOGLE_API_KEY;

// 📁 VideoContainer.js

import React from 'react'
import { useEffect, useState } from 'react';
import { YOUTUBE_VIDEO_API } from '../utils/constants';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  }

  return (
    <div>
      {
        videos.map(video => <VideoCard key={video.id} info={videos} />)
      }

    </div>
  )
}

export default VideoContainer


//✅ Set Up Routing 

/*
⭐ setup Routing
npm i react-router-dom
*/
// 📁 App.js

import { Provider } from 'ract-redux'
import store from './utils/store'
import React from 'react'
import { createBrowserRouter } from "ract-router-dom"; //✅1

let appRouter = createBrowserRouter([{  //✅2
  path: '/',
  element: <Body />,
  children: [
    {
      path: '/',
      element: <MainContainer />
    },
    {
      path: 'watch',
      element: <WatchPage />
    },
  ]
}])
const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Head />
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  )
}

export default App

//  📁 Body.js

import React from 'react'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
      ! only change MainContainer and whatch page so we use outlet hare.
    </div>
  )
}

export default Body


// 📁 VideoContainer.js

import Link from 'react-router-dom'

const VideoContainer = () => {

  return (
    <div>
      {
        videos.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        ))
      }

    </div>
  )
}

export default VideoContainer


//✅  create buy default close the sidebar while go to the watch page

// 📁 WatchPage.js  //✅ 1

import React from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';

const WatchPage = () => {

  const dispatch = useDispatch();   //✅ 2

  useEffect(() => {   //✅ 3
    dispatch(closeMenu())   //✅ 6
  }, [])

  return (
    <div>

    </div>
  )
}

export default WatchPage

// 📁 appSlice.js

import { createSlice } from "@redux/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {    //✅ 4
      state.isMenuOpen = false;
    },
  }
}
export const { toggleMenu, closeMenu } = appSlice.actions;  //✅ 5
export default appSlice.reducer


//✅  Buld watchpage

//? Know url search params (Read This)

// 📁 WatchPage.js  

import React from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom'

const WatchPage = () => {

  cosnt[searchParams] = useSearchParams();
  console.log(searchParams.get("v")) //if we search v then it will give us video id

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu())
  }, [])

  return (
    <div>
      <iframe src={`http://www.youtube.com/embeed/` + searchParams.get("v")}></iframe>
    </div>
  )
}

//✅ Bulid Search Feature 
//Debouncing

/* 
📁 Constants.js
-----------------
*/

// get your API key = search youtube api key =>  credential page => create credentials => Crate API key => coppy the key

const GOOGLE_API_KEY = "Afdsfdsffsfcvsffds_dsfdslfjflj";

export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=" + GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = "https://youtube.com/slfjjl/serarch/"; //✅1


// 📁 Header.js
import React, { Children, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from 'react-redux'

const Header = () => {

  cosnt[searchQuery, setSearchQuery] = useState(""); //✅2
  cosnt[suggestions, setSuggestions] = useState([]); //✅7

  cosnt[showSuggestion, setShowSuggestion] = useState(false); //✅9

  useEffect(() => {   //✅4

    const timer = setTimeout(() => getSearchSuggestions(), 200)
    return () => {
      clearTimeout(timer)
    };

  }, [searchQuery])

  const getSearchSuggestions = async () => {  //✅5
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]) //✅8
  }

  return (
    <div>
      <input
        type='text'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setShowSuggestion(true)}
        onBlur={() => setShowSuggestion(false)} />  //✅3  & 11

      <button>Search</button>

      {showSuggestion && (                              //✅10 (if showSuggestion true then show or hide it)
        <div className='search_result'>                 //✅6
          <ul>
            {
              suggestions.map(s => <li key={s}>{s}</li>)
            }
          </ul>
        </div>
      )
      }
    </div>
  )
}

//✅ cashe Search feature with redux

// utils folder => 📁 searchSlice.js  ✅1

import { createSlice } from "@redux.js/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      state = Object.assign(state, action.payload)
    }
  }
})

export const { cacheResults } = searchSlice.actions
export default searchSlice.reducer;

// 📁 Store.js           ✅2

import { ConfigureStore } from "@redux/toolkit";
import appSlice from './appSlice'
import searchSlice from './searchSlice'

const store = ConfigureStore({
  reducer: {
    app: appSlice,
    search: searchSlice
  },
})

export default store;

// 📁 Header.js

import React, { Children, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from 'react-redux'
import cacheResults from './utils/serachSlice'

const Header = () => {

  cosnt[searchQuery, setSearchQuery] = useState("");
  cosnt[suggestions, setSuggestions] = useState([]);

  cosnt[showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search)           //✅4
  const dispatch = useDispatch();                                  //✅ 5

  useEffect(() => {

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {                           //✅3
        setSuggestions(searchCache[searchQuery])
      } else {
        getSearchSuggestions()
      }
    }, 200)


    return () => {
      clearTimeout(timer)
    };

  }, [searchQuery])

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1])

    //update my cache  ✅6
    dispatch(cacheResults({
      [searchQuery]: json[1],    //✅7
    }))
  }

  return (
    <div>
      <input
        type='text'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setShowSuggestion(true)}
        onBlur={() => setShowSuggestion(false)} />

      <button>Search</button>

      {showSuggestion && (
        <div className='search_result'>
          <ul>
            {
              suggestions.map(s => <li key={s}>{s}</li>)
            }
          </ul>
        </div>
      )
      }
    </div>
  )
}

//✅ n lavel nesting comments features

import React from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom'

const WatchPage = () => {

  cosnt[searchParams] = useSearchParams();
  console.log(searchParams.get("v"))

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu())
  }, [])

  return (
    <div>
      <iframe src={`http://www.youtube.com/embeed/` + searchParams.get("v")}></iframe>
    </div>
  )
}

//📁 commentsContainer.js

import React from 'react'

const commentsContainer = () => {

  const commentsData = [
    {
      name: "Aksay Sainai",
      text: "lorem Epsen is a long text from the web. ",
      replies: [
        {
          name: "Aksay Sainai",
          text: "lorem Epsen is a long text from the web. ",
          replies: []
        },
        {
          name: "Aksay Sainai",
          text: "lorem Epsen is a long text from the web. ",
          replies: []
        },
        {
          name: "Aksay Sainai",
          text: "lorem Epsen is a long text from the web. ",
          replies: []
        },
      ]
    },
    {
      name: "Aksay Sainai",
      text: "lorem Epsen is a long text from the web. ",
      replies: [
        {
          name: "Aksay Sainai",
          text: "lorem Epsen is a long text from the web. ",
          replies: []
        },
        {
          name: "Aksay Sainai",
          text: "lorem Epsen is a long text from the web. ",
          replies: []
        },
      ]
    },
    {
      name: "Aksay Sainai",
      text: "lorem Epsen is a long text from the web. ",
      replies: [
        {
          name: "Aksay Sainai",
          text: "lorem Epsen is a long text from the web. ",
          replies: []
        },
      ]
    },
    {
      name: "Aksay Sainai",
      text: "lorem Epsen is a long text from the web. ",
      replies: [
        {
          name: "Aksay Sainai",
          text: "lorem Epsen is a long text from the web. ",
          replies: []
        },
        {
          name: "Aksay Sainai",
          text: "lorem Epsen is a long text from the web. ",
          replies: []
        },
        {
          name: "Aksay Sainai",
          text: "lorem Epsen is a long text from the web. ",
          replies: []
        },

      ]
    },
    {
      name: "Aksay Sainai",
      text: "lorem Epsen is a long text from the web. ",
      replies: [
        {
          name: "Aksay Sainai",
          text: "lorem Epsen is a long text from the web. ",
          replies: [
            {
              name: "Aksay Sainai",
              text: "lorem Epsen is a long text from the web. ",
              replies: [
                {
                  name: "Aksay Sainai",
                  text: "lorem Epsen is a long text from the web. ",
                  replies: [
                    {
                      name: "Aksay Sainai",
                      text: "lorem Epsen is a long text from the web. ",
                      replies: []
                    },
                  ]
                },
              ]
            },
          ]
        },
      ]
    },
  ]

  const Comment = ({ data }) => {
    const { name, text, replies } = data;
    return (
      <div>
        <div>{name}</div>
        <div>{text}</div>
      </div>
    )
  }

  const CommentsList = ({ comments }) => {
    return comments.map((comments, i) => (
      <div className='comments container'>
        <Comment key={i} data={comments} />
        <div className='replies'>
          <CommentsList  key={i} comments={commentsData.replies}/>
        </div>
      </div>
    ))
  }
  return (
    <div>
      <h1>ALl Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  )
}

export default commentsContainer


//✅ Create live chat Feature

//📁 chatMessage.js

import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='w-12'>
      <h1>Live Chat</h1>
      <img src='/sff/sff'></img>
      <span>{name}</span>
      <span>{message}</span>
    </div>
  )
}

//📁 LiveChat.js

import React from 'react'

const LiveChat = () => {

  const dispatch= useDispatch()  //✅3


  const chatMessages = useSelector((store)=> store.chat.messages)   //✅5

  useEffect(()=>{
    const i= setInterval(()=> {
      //API POlling

      dispatch(
        addMessage({            //✅4
        name:"Aksay Saini",
        message: "Lorem Ipsonfdf"
      }))

    },2000)

    return()=> clearInterval(i);

  },[])
  return (
    <div className='w-12'>
      <h1>Live Chat</h1>
      {
        chatMessages.map((c,i)=> <ChatMessage key={i} name={c.name} message={c.message}/>)  //✅6
      }
    </div>
  )
}

export default LiveChat

//📁 WatchPage.js
import React from 'react'

const WatchPage = () => {

  return (
    <div>
      <iframe src={`http://www.youtube.com/embeed/` + searchParams.get("v")}></iframe>

    </div>
  )
}

// create 📁 chatSlice.js in utils folder ✅1

import {chartSlice} from "@redix/toolkit";

const chatSlice = createSlice({
  name: 'chat',
  initialState:{
    messages:[],
  },
  reducers:{
    addMessage:(state, action)=>{ 
      state.messages.splice(10,1)
      state.messages.push(action.payload);
    },
  }
})

export const{addMessage} = chatSlice.action
export default chatSlice.reducer


// 📁 Store.js           

import { ConfigureStore } from "@redux/toolkit";
import appSlice from './appSlice'
import searchSlice from './searchSlice'
import chatSlice from './chatSlice'

const store = ConfigureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chat: chatSlice           //✅2
  },
})

export default store;

//Test store is working or not with redux chrome extention



//✅ Add chat to the live chat feature;

import React from 'react'

const LiveChat = () => {

  cosnt [liveMessage, setLiveMessage]=useState(""); //✅2

  const dispatch= useDispatch()  


  const chatMessages = useSelector((store)=> store.chat.messages)   

  useEffect(()=>{
    const i= setInterval(()=> {
      //API POlling

      dispatch(
        addMessage({            
        name:"Aksay Saini",
        message: "Lorem Ipsonfdf"
      }));

      setLiveMessage("")

    },2000)

    return()=> clearInterval(i);

  },[])
  return (
    <div className='w-12'>
      <h1>Live Chat</h1>
      {
        chatMessages.map((c,i)=> <ChatMessage key={i} name={c.name} message={c.message}/>)  
      }
    <div>

      <form onSubmit={(e)=>{
        e.preventDefault()
        dispatch(addMessage({
          name: "Aksay Saini",
          message: liveMessage
        }))  //✅3
      }}>
      <input type='text' value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)}>
      </input><button>Send</button> //✅1
      </form>
    </div>
    </div>
  )
}

export default LiveChat

//! component getting rerendrs twise for Strict mode. why?

//✅ useMemo

// 📁 Demo.js  (Claculate nthe prime number and toggle theme dark and white)

import React from 'react'

const Demo = () => {

  const [text, setText]= useState(0);
  const[isDarkTheme, setDarkTheme]=useState(false);

  //useMemo hook take first argument as a function or value to memoize, second is  dependency now hare it is dependent on text.  it memoize the function but it will only change when the text change

  //useMemo is React Hook that lets you cache the result of calculation between rerenders. 

  //when we cache the havery operation we can use useMemo hook

  const prime= useMemo(()=> findPrime(text),[text])
  
  return (
    <div className={(isDarkTheme && "bg-gray-980 text-white")}>
      <input type='text' value={text} onChange={(e)=>setText(e.target.value)}/>
      <h1>nth Prime: {prime}</h1>
      <button onClick={()=> setDarkTheme(!isDarkTheme)}>Toggle Theme</button>
    </div>
  )
}

export default Demo


//✅ useRef (when we store some into value into variable but we not want the component rerenders so it is not effect the ui). ref is a object. 

const Demo2 = () => {

  const ref= useRef(0);

  return (
    <div>
      <button onClick={()=> ref.current+1}></button>
      <span>State={ref.current}</span>
    </div>
  )
}

export default Demo2

/*
useMemo
useRef

*/
