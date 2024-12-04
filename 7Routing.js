//1 Create Router, Browser router

//npm install react-router-dom

import { Link, NavLink } from "react-dou"
/*
Link = we use Link instade of a tag. because a will refresh the page and reload. so we use Link tag. 

NavLink = <NavLink to={"/"} className={({isActive})=>`{isActive ? "text-orange" : "text-gray-700"}`}>Home</NaLink>
*/

/*
Create component, layout and routing folder in to the src. 
*/

/*
Create Routing.js file into routing folder
📁Routing.js
======================
*/

import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'ract-router-dom'

//BrowserRouter amar create kora path gulok browser a establish kore
//Routes path gulo k contain kore rake aka jaigai. 
//* is a wildcard chrecter it can take any kind of value

const Routing = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/*" element={<PageNotFound />}></Route>
            </Routes>
        </Router>
    )
}

export default Routing

/*
📁App.js
======================
*/

import React from 'react'
import Routing from './routing/Routing'

const App = () => {
    return (
        <div>
            <Routing />
        </div>
    )
}

export default App

/*
📁Header.jsx
======================
*/

import React from 'react'
import { Link } from 'ract-router-dom'

const Header = () => {
    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand> //default path
                    <Navbar.Brand as={Link} to="/home">Navbar</Navbar.Brand>
                    <Navbar.Link as={Link} to="/about">About</Navbar.Link>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header


// ✅ feature to feature 1 (Nested Routing)

/*
📁Routing.js
======================
*/

import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'ract-router-dom'


const Routing = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>

                <Route path="/feature" element={<Feature />}></Route>
                <Route path="/feature/feature1" element={<Feature1 />}></Route>
                <Route path="/feature/feature2" element={<Feature2 />}></Route>

                <Route path="/*" element={<PageNotFound />}></Route>
            </Routes>
        </Router>
    )
}

export default Routing

/*
Create feature folder into the component and create feature.jsx into it. 
crate feature1 folder into the feature folder and craete feature1.jsx 
crate feature2 folder into the feature folder and craete feature2.jsx 
*/

// 📁 Feature.jsx

import React from 'react'

const Feature = () => {
    return (
        <div>
            <h1>Feature Page</h1>
            <Link to="feature1">Feature1</Link>
            <Link to="feature2">Feature2</Link>
        </div>
    )
}

export default Feature


// ✅ Dynamically fetching products in routing

// 📁 User.json

let user = [
    {
        id: 1,
        name: Rnalalfj,
    },
    {
        id: 1,
        name: Rnalalfj,
    },
]

//📁 AllUser.jsx

import React from 'react'
import JsonData from './User.json'

const AllUser = () => {
    return (
        <div>
            {
                JsonData.map(user => (
                    <div key={user.id}>
                        <h2>{user.name}</h2>
                        <Link to={`details/${user.id}`}>Go to Details Page</Link>
                    </div>
                ))
            }
        </div>
    )
}

export default AllUser

//📁 UserDetails.jsx

import React from 'react'
import JsonData from './User.json'
import { useParams } from 'ract-router-dom'


const UserDetails = () => {
    let {uid} = useParams();

    let details= JsonData.find(data=> data.id === Number(uid))
    return (
        <div>
            <h1>Show Details of the product</h1>
        </div>
    )
}

export default UserDetails


/*
📁Routing.js
======================
*/

import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'ract-router-dom'

const Routing = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>

                <Route path="/feature" element={<Feature />}></Route>
                <Route path="/feature/feature1" element={<Feature1 />}></Route>
                <Route path="/feature/feature2" element={<Feature2 />}></Route>

                <Route path="all-user" element={<AllUser />}></Route> //✅
                <Route path="all-user/details/:uid" element={<UserDetails />}></Route> //✅

                <Route path="/*" element={<PageNotFound />}></Route>
            </Routes>
        </Router>
    )
}

export default Routing

/*
📁Header.jsx
======================
*/

import React from 'react'
import { Link } from 'ract-router-dom'

const Header = () => {
    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand> //default path
                    <Navbar.Brand as={Link} to="/home">Navbar</Navbar.Brand>
                    <Navbar.Link as={Link} to="/about">About</Navbar.Link>
                    <Navbar.Link as={Link} to="/all-user">User</Navbar.Link>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
