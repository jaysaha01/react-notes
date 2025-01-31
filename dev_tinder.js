// 🔥 Dev Tinder

// npm update

/*
App.js
=======
*/

import Navbar from './Navbar';

function App() {
    <Navbar />

}
export default App

// ===================================================================================================

//✅ Setting up Browser Router

/*
Go to react router > Tutoriyal 

Router component / Browser Router */

/*
Body.js
=======
*/

import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Body = () => {
    return (
        <div>
            <Navbar />
            <Outlet /> //any children route over body will render over there
        </div>
    )
}

/*
📁 App.js
=======
*/

// npm i react-router

import Body from "./Body"
import { BrowserRouter, Routes, Route } from 'ract-router-dom';
import { useId, useState } from 'react';

function App() {
    return (
        <>
            <BrowserRouter basename="/">
                <Routes>
                    <Route path="/" element={<Body />}>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/profile" element={<Profile />}></Route>
                    </Route>
                </Routes>
                <Navbar />
            </BrowserRouter>
        </>
    )
}

export default App

// ===================================================================================================

//✅ create login

//npm i axios

// 📁 Login.js

import axios from axios

const Login = () => {

    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {

        try {
            let res = axios.post("https://localhost/login", {
                emailId, password
            }, {
                withCredentials: true // if we not set this then it will not sent back to outher api calls
            });

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='flex'>
                <input type='text' value={emailId} onChange={(e) => setEmailId(e.target.value)} />
                <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleLogin}>Login</button>
            </div>
        </>
    )
}

//console > network > fetch XHR

//we we fetch data from one domain to another domin then we get cors error. this error is throw by browser. install and use cors into express js 


// ===================================================================================================

//✅ Adding RTK (Redux tool kit)

//> npm install @reduxjs/toolkit react-redux        https://redux-toolkit.js.org/tutorials/quick-start

// Create utils folder > appStore.js , userSlice.js

//📁 appStore.js  //✅1

import { configureStore } from '@reduxjs/toolkit'

export const appStore = configureStore({
    reducer: {},
})




/*
📁 App.js
=======
*/

import Body from "./Body"
import { BrowserRouter, Routes, Route } from 'ract-router-dom';
import { useState } from 'react';
import { Provider } from 'ract-redux'; //✅2
import appStore from './utils/appStore'; //✅3

function App() {
    return (
        <>
            <Provider store={appStore}> //✅2

                <BrowserRouter basename="/">
                    <Routes>
                        <Route path="/" element={<Body />}>
                            <Route path="/" element={<Feed />}></Route> //✅15
                            <Route path="/login" element={<Login />}></Route>
                            <Route path="/profile" element={<Profile />}></Route>
                        </Route>
                    </Routes>
                    <Navbar />
                </BrowserRouter>

            </Provider> //✅2

        </>
    )
}

export default App



//📁 userSlice.js  //✅4

import { createSlice } from '@redexjs/toolkit';

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        addUser: (state, action) => {
            return action.payload
        },
        removeUser: (state, action) => {
            return null
        }
    }

})

export const { addUser, removeUse } = userSlice.action;

export default userSlice.reducer;


//📁 appStore.js  

import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice' //✅5

export const appStore = configureStore({
    reducer: {
        user: userReducer  //✅6
    },
})



// 📁 Login.js

import axios from axios
import { useDispatch, useSelector } from 'react-redux'; //✅7

const Login = () => {

    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();  //✅8
    const navigate = useNavigate(); //✅13

    const handleLogin = async () => {

        try {
            let res = axios.post("https://localhost/login", {
                emailId, password
            }, {
                withCredentials: true
            });

            dispatch(addUser(res.data)) //✅9
            return navigate("/") //✅14

        } catch (err) {
            setError(err?.response?.data || "Something went wrong");
        }
    }

    return (
        <>
            <div className='flex'>
                <input type='text' value={emailId} onChange={(e) => setEmailId(e.target.value)} />
                <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleLogin}>Login</button>
            </div>
        </>
    )
}

//open the redux store >> select the adduser slice and select state to see the data


// Navbar.jsx

import { useSelector } from 'react-redux'; //✅10
const Navbar = () => {
    const user = useSelector(store => store.user); //✅11

    return (
        <>
            {user && (
                <div>Profile Picture <img src={user.photoUrl} /></div> //✅12
            )}
        </>
    )
}


// ===================================================================================================

//✅ logedin (if we refresh then our store refresh . but when we have token then we haveto logedin)

/*
Body.js
=======
*/

import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import axios from axios

import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice'
import { useEffect } from 'react';
import useNavigate from 'react-router-dom';

const Body = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector(store => store.user)


    const fetchUser = async () => {

        if (userData) return
        try {
            const user = await axios.get(BaseURL + '/profile/view', {
                withCredentials: true
            });
            dispatch(addUser(res.data));
        } catch (err) {

            if (err.status === 401) {
                navigate('/login')
            }
            console.log(err)
        }
    }

    useEffect(() => {
        fetchUser();
    }, [])


    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}

// ===================================================================================================

//✅ logout

// Navbar.jsx

import { useSelector } from 'react-redux';
import { removeUser } from '../utils/userSlice'

const Navbar = () => {
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();//✅2
    const navigate = useNavigate(); //✅3

    const handleLogout = async () => { //✅1
        try {
            await axios.post(BaseURL + '/logout', {
                withCredentials: true
            });
            dispatch(removeUser)//✅2
            navigate('/login')//✅3

        } catch (err) {
            //Error Logic maybe redirected to error page
        }
    }

    return (
        <>
            {user && (
                <div>Profile Picture <img src={user.photoUrl} /></div>
            )}
            <p onClick={handleLogout}>Logout</p>
        </>
    )
}

// ===================================================================================================

//✅ Feed

// create "feedSlice.js" into utils folder

// 📁 feedSlice.js //✅1

import { createSlice } from '@redux/toolkit';


const feedSlice = createSlice({
    name: 'feed',
    initialState: null,
    reducers: {
        addFeed: (state, action) => action.payload,
        removeFeed: (state, action) => null
    }
})

export const { addFeed } = feedSlice.actions

export default feedSlice.reducer


//📁 appStore.js  

import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import feedReducer from './feedSlice' //✅2

export const appStore = configureStore({
    reducer: {
        user: userReducer,
        feed: feedReducer //✅2
    },
})


// 📁 Feed.jsx

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from '../utils/feedSlice';
import UserCard from './component/Feed'

const Feed = () => {

    const feed = useSelector((store) => store.feed);
    const dispatch = useDispatch();

    const getFeed = async () => {

        if (feed) return

        try {
            const res = await axios.get(baseurl + 'feed', {
                withCredentials: true
            });
            dispatch(addFeed(red.data))
        } catch (err) {
            //handle error
        }
    }

    useEffect(() => {
        getFeed();
    }, [])

    return (
        feed && (
            <div>
                <UserCard user={feed} />
            </div>
        )
    )
}

// 📁 UserCard.jsx

const userCard = ({ user }) => {
    const { firstName, lastName, photUrl, age, gender, about } = user;

    return (
        <div>
            <img src={photUrl} />
            <h2>{firstName}</h2>
            <p>{about}</p>
            <button>Ignore</button>
            <button>Interested</button>
        </div>
    )
}

export default userCard

// ===================================================================================================

//✅ Profile page

import EditProfile from './EditProfile';
import { useSelector } from 'react-redux';

//📁 Profile.jsx
const Profile = () => {
    const user = useSelector(store => store.user);
    return (
        user && (
            <div>
                <EditProfile user={user} />
            </div>
        )
    )
}



//📁 EditProfile.jsx

import UserCard from './UserCard.jsx'

const EditProfile = ({ user }) => {
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastNameName);
    const [age, setAge] = useState(user.age);
    const [photoUrl, setPhotoUrl] = useState(user.photUrl);

    const dispatch = useDispatch()


    const saveProfile = async () => {

        setError("") //Empty the error
        try {
            const res = await axios.patch(BaseUrl + "/phofile/edit", { firstName, lastName, age, photoUrl }, { withCredentials: true })

            dispatch(addUser(res?.data?.data))

        } catch (err) {
            setError(err.re.message)
        }
    }


    return (
        <>
            <div>
                <input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <input type='text' value={age} onChange={(e) => setAge(e.target.value)} />
                <input type='text' value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} />
                <button onClick={saveProfile}>Save</button>
            </div>
            <UserCard user={{ firstName, lastName, age, gender, about, photoUrl }} />
        </>
    )
}

// ===================================================================================================

//✅ connection page

//📁 connectionSlice.jsx //✅1

import { createSlice } from '@reduxjs/toolkit';

const connectionSlice = createSlice({
    name: "connection",
    initialState: null,
    reducers: {
        addConnections: (state, action) => action.payload,
        removeConnection: () => null
    },
})

export const { addConnections, removeConnection } = connectionSlice.actions;

export default connectionSlice.reducer;



//📁 appStore.js  

import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import feedReducer from './feedSlice'
import connectionReducer from './connectionSlice'; //✅2

export const appStore = configureStore({
    reducer: {
        user: userReducer,
        feed: feedReducer,
        connetions: connectionReducer  //✅2
    },
})


//📁 Connections.jsx

import axios from 'axios';
import { useDispatch, useSelector } from 'react-dom';
import { addConnections } from '../utils/connectionReducer'

const Connections = () => {

    const connections = useSelector((store) => store.connections);

    const dispatch = useDispatch();

    const fetchConnections = async () => {
        try {
            const res = await axios.get(BaseURL + '/user/connections', {
                withCredentials: true
            })
            dispatch(addConnections(res.data.data))
        } catch (err) {
        }
    }

    useEffect(() => {
        fetchConnections();
    })

    if (!connections) return

    if (connections.length === 0) return <h1>No connection Found</h1>

    return (
        <div>
            <h1>Connections</h1>
            {
                connections.map((connection) => {
                    const { firstName, lastName, photoUrl, age, gender, about } = connection
                    return (
                        <div>
                            <img src={photoUrl} />
                            <h1>{firstName}</h1>
                        </div>
                    )
                })
            }

        </div>
    )

}

export default Connections


// ===================================================================================================

//✅ request page 

// 📁 requestSlice.jsx //✅1

const requestSlice = createSlice({
    name: "requests",
    initialState: null,
    reducers: {
        addRequests: (state, action) => action.payload,
        removeRequest: (state, action) => {
            const newArray = state.filter((r) => r._id !== action.payload)
            return newArray
        }
    },
})

export const { addRequests, removeRequest } = requestSlice.actions;
export default requestSlice.reducer;



//📁 appStore.js  

import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import feedReducer from './feedSlice'
import connectionReducer from './connectionSlice';
import requestReducer from './requestSlice'; //✅2


export const appStore = configureStore({
    reducer: {
        user: userReducer,
        feed: feedReducer,
        connetions: connectionReducer,
        reuests: requestReducer, //✅2
    },
})

//📁 Request.jsx

import { useDispatch } from 'react-redux';
import { addRequests, removeRequest } from '../utils/requestSlice';


const Request = () => {

    const requests = useSelector(store => store.requests);
    const dispatch = useDispatch();

    const reviewRequest = async (status, _id) => {

        try {
            const res = axios.post(Baseurl + "/request/review/" + status + "/" + _id, {}, { withCredentials: true });

            dispatch(removeRequest(_id))

        } catch (err) {

        }

    }

    const fetchRequest = async () => {
        try {
            const res = await axios.get(BaseUrl + "/user/requests/received", {
                withCredentials: true
            });
            dispatch(addRequests(red.data.data))
        } catch (err) {
        }
    }

    useEffect(() => {
        fetchRequest()
    }, [])

    if (!requests) return

    if (requests.length === 0) return <h1>No Requests Found</h1>

    return (
        <div>
            <h1>Requests</h1>
            {
                requests.map((request) => {
                    const { firstName, lastName, photoUrl, age, gender, about } = request.formUserId
                    return (
                        <div>
                            <img src={photoUrl} />
                            <h1>{firstName}</h1>
                            <button onClick={() => reviewRequest("rejected", request._id)}>Reject</button>
                            <button onClick={() => reviewRequest("accepted", request._id)}>Accept</button>
                        </div>
                    )
                })
            }

        </div>
    )
}

// ===================================================================================================

//✅ accept and reject

//📁 feedSlice.js  //✅1

const feedSlice = createSlice({
    name: "feed",
    initialState: null,
    reducers: {
        addFeed: (state, action) => action.payload,
        removeUserFeed: (state, action) => {
            const newFeed = state.filter((user) => user._id !== action.payload)
            return newFeed
        }
    },
})

export const { addFeed, removeUserFeed } = feedSlice.actions;
export default feedSlice.reducer;



//📁 appStore.js  

import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import feedReducer from './feedSlice'
import connectionReducer from './connectionSlice';
import requestReducer from './requestSlice';


export const appStore = configureStore({
    reducer: {
        user: userReducer,
        feed: feedReducer,
        connetions: connectionReducer,
        reuests: requestReducer,
    },
})



// 📁 UserCard.jsx

import { useDispatch } from 'react-redux'; //✅3

const userCard = ({ user }) => {
    const { _id, firstName, lastName, photUrl, age, gender, about } = user;
    const dispatch = useDispatch() //✅3


    const handleSendRequest = async (status, userId) => {   //✅2
        try {
            const res = await axios.post(BaseURL + "/request/send/" + status + "/" + userId, {}, {
                withCredentials: true
            });

            dispatch(removeUserFeed(useId)) //✅4

        } catch (err) {

        }
    }

    return (
        <div>
            <img src={photUrl} />
            <h2>{firstName}</h2>
            <p>{about}</p>
            <button onClick={() => handleSendRequest("ignore", _id)}>Ignore</button> //✅5
            <button onClick={() => handleSendRequest("interested", _id)}>Interested</button> //✅5
        </div>
    )
}

export default userCard


// 📁 Feed.jsx

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from '../utils/feedSlice';
import UserCard from './component/Feed'

const Feed = () => {

    const feed = useSelector((store) => store.feed);
    const dispatch = useDispatch();

    const getFeed = async () => {

        if (feed) return

        try {
            const res = await axios.get(baseurl + 'feed', {
                withCredentials: true
            });
            dispatch(addFeed(red.data))
        } catch (err) {
            //handle error
        }
    }

    useEffect(() => {
        getFeed();
    }, [])

    if (!feed) return //✅6

    if (feed.length < 0) return <h1> NO new User founds</h1> //✅7

    return (
        feed && (
            <div>
                <UserCard user={feed} />
            </div>
        )
    )
}


// ===================================================================================================



