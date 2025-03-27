

MUI based on Material Design By Google
----------------------------------------


Advantages of MUI
=====================
Time Saving, Prevent Writing css styles frjom scratch, Mordan UI/UX components, Filly Responsive


Installestion
==============
Go to MUI > Get started > installation > install default installatin , icons


Button
=======
go to button

Propertices (varient{styles like outline, contained, etc}). Additional properties like onClick, typem etc
-----------------------------------------------------------------------------------------------------------

import {Button} from @mui.meterialUi
import DeleteIcon from '@mui/icons-material/Delete';

<Button color="success" size="large" varient="contained" sx={{margin:3}} "&:hover":{backgroundColor:"lightBlue"}, "&:disabled":{backgroundColor:"red"}  > First </Button>
<Button size="medium" varient="outline"> Second </Button>
<Button variant="outlined" startIcon={<DeleteIcon />} disableRipple disableElevation> Delete</Button>
      
(You get all props from button API  like color,size,varient, etc..)



Typography
===========
Typography is used to add text on the webpage. Propertices (varient{used to define html tag}). sx use to define css syles
--------------------------------------------------------------------------------------------------------------------------

(CTRL+spacebar)

import { Typograpy } from '@mui/meterail.ui'

const Test=()=>{
<div>  

<Typography varient="h1" sx={{color:"red"}}> Hellow World </Typography>  

</div>    
}



Textfield (Used in forms to add input)
============================================
import {Textfield} from @mui.meterialUi

<TextField type={text} sx={{margin:3}} id="outlined-basic" label="Outlined" variant="outlined" placeholder="name"/>



checkbox 
============================================
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


<FormGroup> //group of check boxes rapped

      <FormControlLabel required control={<Checkbox onChange={()=> setInputs()} />} label="Required" />
      
</FormGroup>




select
============================================

<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Age"
    onChange={handleChange}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>




slider
=======

npm i web-vitals --save-dev (if web vitals not download)

npm uninstall react react-dom

npm i react@18.2.0 react-dom@18.2.0

npm update

https://www.npmjs.com/package/react-material-ui-carousel



use appbar
====================================

go to appbar > coppy and paste in to the component

import AppBar from '@mui/material/AppBar';

 <AppBar varient="outline">

 <h1>Hellow world</h1>
        
</AppBar>

! Toolbar Provides a strcture afor adding elements


<AppBar varient="outline">

<Toolbar>
 <Typography>Logo</Typography>
 <Button varient="contained" sx={{marginLeft:"auto"}} color="warning">Hellow</Button>
</Toolbar>

</AppBar>



Menu and Menuitem Component (is used to list of choices to select)
=======================================================================

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

 <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
</Menu>


GRID System
==============

import Grid from '@mui/material/Grid';

<Grid container spacing={3}> //12 columns

<Grid item xs={1} md={2.4} lg={2}>

    <Card sx={{ maxWidth: 345 }}>

    </Card>

</Grid>

<Grid item xs={3} md={2.4} lg={2}>

    <Card sx={{ maxWidth: 345 }}>

    </Card>

</Grid>

<Grid item xs={3} md={2.4} lg={2}>

    <Card sx={{ maxWidth: 345 }}>

    </Card>

</Grid>

<Grid item xs={3} md={2.4} lg={2}>

    <Card sx={{ maxWidth: 345 }}>

    </Card>

</Grid>

</Grid>


lean more about grid break points


Responsive Navigation Bar
============================

*/

// Navbar.jsx

import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useTheme from "@mui/material/"
import useMediaQuery from "@mui/material"


const Navbar = () => { //✅1
  const theme = useTheme(); //✅4
  console.log(theme);

  const isMatch = useMediaQuery({ theme.breakpoints.down('sm') });

  return (
    <div>
      <AppBar position="static" sx={{ background: "red" }}>
        <Toolbar>//tool bar give basic structure of the navigation bar

          {
            isMatch ? <DrawerComp /> :
              <Grid container sx={{ placeItems: "center" }}>
                <Grid item xs={2}>Logo hare</Grid>

                <Grid item xs={6}>
                  <Tabs>
                    <Tab lable="products" />
                    <Tab lable="products" />
                    <Tab lable="products" />
                  </Tabs>
                </Grid>

                <Grid item xs={1} />
                <Grid item xs={3}>
                  <Box display="flex"> //box is container contain child element of the grid
                    <button>Sign Up</button>
                    <button>Sign In</button>
                  </Box>
                </Grid>


              </Grid>
          }
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar


// DrawerComp.jsx //✅2
// -------------------

import React from 'react'
import { Drawer } from '@mui/meterial'

const DrawerComp = () => {

  const [open, setOpen] = useState(false)
  return (
    <>
      <Drawer anchor="left" open={true} onClose={() => setOpen(false)}>

        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>

      </Drawer>
      <span onClick={() => setOpen(!open)}>Icos hambargur</span>
    </>
  )
}

export default DrawerComp


// Box
// ====

import { Box } from '@mui/meterial';

// component="form" or button

<Box p={4} display="flex" justifyContent="space-between" alignItems="center" component="form" sx={{ p: 2, border: "1px solid red", bgcolor: "red" }}>
  <Tyepography>Hellow</Tyepography>
</Box>



Stack (it's work like box)
===============================

<Stack mb={2} direction={{xs:"column",md:"row"}}  spacing={{xs:5,md:10}}> 

<li>Home</li>
<li>Home</li>
<li>Home</li>

</Stack>




// ----------------------------------------------------------------------------------------------

// MUI Project

// > npm install @mui/material @mui/styled-engine-sc styled-components
//> npm install @mui/icons-material


//src > theme.js

// theme.js
import { createTheme } from "@mui/meterial";

export const theme = createTheme({
  palette: {
    primary: {
      main: "red",
      light: "skyblue"
    },
    secondary: {
      main: "pink"
    },
    otherColor: {
      main: "green"
    }
  }
})


// index.js
import { ThemeProvider } from '@mui/meterial';
import { theme } from './theme';
<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>

//App.js

function App() {

  const BlueButton = styled(Button)(({ theme }) => ({

    background: theme.palette.otherColor.main,
    color: "#666",
    "&:hover": { backgroundColor: "lightBlue" },
    "&:disabled": { backgroundColor: "red" }
  }))

  return (
    <BlueButton>This is Button</BlueButton>
  )
}


// ============================================================================================

// 🔥 student website porject
/*

npm install @mui/material @emotion/react @emotion/styled

npm install @mui/material @mui/styled-engine-sc styled-components

npm install @mui/icons-material

*/


// App.jsx

import { Box, ThemeProvider, createTheme } from '@mui/material'
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material';
import LandingPage from './mainfolder/pages/LandingPage';

const MyOwnButton = styled(Button)({
  backgroundColor: "red"
})

const App = () => {
  const [mode, setMode] = useState("light")

  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>

      <Box bgcolor={"background.default"}>
        <LandingPage mode={mode} setMode={setMode} />
      </Box>
    </ThemeProvider>
  )
}

export default App




// LandingPage.jsx
// ----------------

import { Box, Container } from '@mui/material'
import React from 'react'
import NavBar from '../components/navsection/NavBar'
import HeroSection from '../components/hero/HeroSection'
import AccordianSection from '../components/AccordianSection'
import CardDisplay from '../components/cardsection/CardDisplay'
import MainTab from '../components/tabsection/MainTab'
import MainGraph from '../components/graphsection/MainGraph'

const LandingPage = ({ mode, setMode }) => {
  return (
    <Container>//for gap purpose
      <Box> //like a div
        <NavBar />
        <HeroSection />
        <AccordianSection />
        <CardDisplay />
        <MainTab />
        <MainGraph />
      </Box>
    </Container>

  )
}

export default LandingPage


Hero.jsx

import { Box, Stack } from '@mui/material'
import React from 'react'
import HeroText from './HeroText'
import HeroImage from './HeroImage'

const HeroSection = () => {
  return (
    <Stack direction="row" spacing={2} justifyContent='space-between'
      sx={{ display: { xs: "block", sm: "block", md: "flex" } }}
    >
      <Box sx={{ flex: '2' }}>
        <HeroText />
      </Box>
      <Box sx={{ flex: '1' }}>
        <HeroImage />
      </Box>
    </Stack>
  )
}

export default HeroSection


HeroText.jsx

import { Box, Typography } from '@mui/material'
import React from 'react'
import HeroDivider from './HeroDivider'

const HeroText = () => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: { xs: "100%", sm: "100%" },
      marginTop: { xs: "20px", sm: "20px" }
    }}> //left text styling
      <Box>
        <HeroDivider />
      </Box>

    </Box>
  )
}

export default HeroText

HeroImage.jsx

import { Box } from '@mui/material'
import React from 'react'

const HeroImage = () => {
  return (
    <Box sx={{
      width: '400px', display: 'flex', flexDirection: 'center',
      justifyContent: 'center', alignItems: 'center', textAlign: 'center',
      width: '100%'
    }}>
      <img src='assets/student.png' style={{ width: '100%' }} />
    </Box>
  )
}

export default HeroImage



CardDisplay.jsx

import { Stack } from '@mui/material'
import React from 'react'
import FirstCard from './FirstCard'
import SecondDisplay from './SecondDisplay'
import ThirdCard from './ThirdCard'

const CardDisplay = () => {
  return (
    <Stack direction='row' gap={3} m={4}
      sx={{ display: { xs: 'block', sm: 'flex', md: 'flex', lg: 'flex' } }}
    >
      <FirstCard />
      <SecondDisplay />
      <ThirdCard />
    </Stack>
  )
}

export default CardDisplay


// Click to show sidebar

SidebarSection.jsx   //✅1

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function SidebarSection({ open, onClose }) {

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>

      <Drawer open={open} onClose={onClose}>
        {DrawerList}
      </Drawer>
    </div>
  );
}



NavBar.jsx

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import SidebarSection from '../SidebarSection';
import Switch from '@mui/material/Switch';

const pages = ['Products', 'Pricing', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


function NavBar({ mode, setMode }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [showBar, setShowBar] = React.useState(false)  //✅2
  const [darkMode, setDarkMode] = React.useState(false)

  const switchHandler = () => [
    setDarkMode(!darkMode),
    setMode(darkMode ? 'light' : 'dark')
  ]

  const barHandler = () => {
    setShowBar(!showBar)   //✅3
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Switch color="warning" onChange={switchHandler} />
          <Typography mr={4}>
            {darkMode ? "Dark Mode" : "Light Mode"}
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography onClick={barHandler}>  //✅4
            Sidebar
          </Typography>
        </Toolbar>
        {showBar && <SidebarSection open={showBar} onClose={() => setShowBar(false)} />} //✅5
      </Container>
    </AppBar>
  );
}
export default NavBar;



// Click to show dark and light mode


NavBar.jsx

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import SidebarSection from '../SidebarSection';
import Switch from '@mui/material/Switch';

const pages = ['Products', 'Pricing', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


function NavBar({ mode, setMode }) { //✅8
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [showBar, setShowBar] = React.useState(false)
  const [darkMode, setDarkMode] = React.useState(false) //✅2

  const switchHandler = () => [
    setDarkMode(!darkMode), //✅2
    setMode(darkMode ? 'light' : 'dark') //✅9
  ]

  const barHandler = () => {
    setShowBar(!showBar)
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Switch color="warning" onChange={switchHandler} />  //✅1,

          <Typography mr={4}>
            {darkMode ? "Dark Mode" : "Light Mode"} //✅3
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography onClick={barHandler}>
            Sidebar
          </Typography>
        </Toolbar>
        {showBar && <SidebarSection open={showBar} onClose={() => setShowBar(false)} />}
      </Container>
    </AppBar>
  );
}
export default NavBar;


// App.jsx

import { Box, ThemeProvider, createTheme } from '@mui/material'
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material';
import LandingPage from './mainfolder/pages/LandingPage';

const MyOwnButton = styled(Button)({
  backgroundColor: "red"
})

const App = () => {
  const [mode, setMode] = useState("light") //✅4

  const darkTheme = createTheme({  //✅5
    palette: {
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme}> //✅6

      <Box bgcolor={"background.default"}>
        <LandingPage mode={mode} setMode={setMode} /> //✅6
      </Box>
    </ThemeProvider>
  )
}

export default App


// LandingPage.jsx
// ----------------

import { Box, Container } from '@mui/material'
import React from 'react'
import NavBar from '../components/navsection/NavBar'
import HeroSection from '../components/hero/HeroSection'
import AccordianSection from '../components/AccordianSection'
import CardDisplay from '../components/cardsection/CardDisplay'
import MainTab from '../components/tabsection/MainTab'
import MainGraph from '../components/graphsection/MainGraph'

const LandingPage = ({ mode, setMode }) => {
  return (
    <Container>//for gap purpose
      <Box> //like a div
        <NavBar mode={mode} setMode={setMode} />  //✅7
        <HeroSection />
        <AccordianSection />
        <CardDisplay />
        <MainTab />
        <MainGraph />
      </Box>
    </Container>

  )
}

export default LandingPage


// ==========================================================================================================

// Responsive

DOCS >> Customizations >> breakpoints

const HeroSection = () => {
  return (
    <Stack direction="row" spacing={2} justifyContent='space-between'
      sx={{ display: { xs: "block", sm: "block", md: "flex" } }}
    >
      <Box sx={{ flex: '2' }}>
        <HeroText />
      </Box>
      <Box sx={{ flex: '1' }}>
        <HeroImage />
      </Box>
    </Stack>
  )
}


const CardDisplay = () => {
  return (
    <Stack direction='row' gap={3} m={4}
      sx={{ display: { xs: 'block', sm: 'flex', md: 'flex', lg: 'flex' } }}
    >
      <FirstCard />
      <SecondDisplay />
      <ThirdCard />
    </Stack>
  )
}

// CTRL + Space to get more results


// ==========================================================================================================

//BLOG APP by Road side Coder


function App() {

  return (
    <Container>
      <Header />
    </Container>
  );
}

export default App;

//🎉 Header.js

import {
  Badge,
  Divider,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { AccountCircle } from "@material-ui/icons";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SideDrawer from "./SideDrawer";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  tagline: {
    fontSize: 20,
    textTransform: "uppercase",
    justifyContent: "center",
    fontFamily: "Montserrat",
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <>
      <Toolbar>
        <IconButton>
          <MenuIcon />
        </IconButton>

        <Typography className={classes.title}>Blog website</Typography>

        <IconButton>
          <NotificationsIcon />
        </IconButton>

        <IconButton>
          <NotificationsIcon />
        </IconButton>
      </Toolbar>

      <Divider />

      <Toolbar className={classes.tagline}>
        Express your emotions through words
      </Toolbar>
    </>
  );
}

export default Header;

// ✅Dark Mode

import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const APP = () => {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header />
      </Container>
    </ThemeProvider>

  );
}

export APP


//change css body to theme in univarse 

// ✅ Featured Post Banner section

import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  cover: {
    backgroundImage: `url(https://images.unsplash.com/photo-1615469038804-6b91aef7026f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max)`,
    backgroundPosition: "center",
    padding: "35px 25px",
  },
  title: {
    fontSize: 40,
    fontFamily: "Montserrat",
  },
  textContainer: {
    color: "white",
  },
});

const FeaturedPost = () => {
  const classes = useStyles();

  return (
    <Card className={classes.cover}>
      <CardContent className={classes.textContainer}>
        <Typography className={classes.title} gutterBottom>
          Title of a longer featured blog post
        </Typography>
        <Typography variant="h5" component="h2">
          Multiple lines of text that form the lede, informing new readers
          quickly and efficiently about what's most interesting in this post's
          contents.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="text" style={{ color: "#90caf9", fontWeight: 700 }}>
          Read More..
        </Button>
      </CardActions>
    </Card>
  );
};

export default FeaturedPost;

// ✅ two cards section

import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  Container,
  Grid, //✅1
} from "@material-ui/core";

const APP = () => {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header />
      </Container>
      <br/>
      {/* two cards section */} //✅2
      <Grid container spacing={4}> 
        {
          FeaturedPost.map((elm,i)=>{
            <PostCard post={post} key={i}/>
          })
        }
      </Grid>
    </ThemeProvider>

  );
}

export APP


// PostCard.js 

import React from 'react'
import { Grid , makeStyles} from "@material-ui/core"; //✅3

const useStyles= makeStyles({
  card:{
    display:"flex",
  },
  cardDetails:{
    flex:1
  },
  cardMedia:{
    with:160
  }

})

const PostCard = () => {

  const classes= useStyles();
  return (
    <Grid item xs={12} md={6}>
      <Card>

      </Card>
      
    </Grid>
  )
}

export default PostCard



// ✅ Post Section 

import React from 'react'
import { ThemeProvider, createTheme , makeStyles} from '@mui/material/styles';
import { Container,Grid,} from "@material-ui/core";


const APP = () => {

  const useStyles=makeStyles((theme)=>{
    minGrid:{
      marginTop:theme.spacing(3)
    }
  })

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const classes= useStyles();

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header />
      </Container>


      <br/>
      <Grid container spacing={4}> 
        {
          FeaturedPost.map((elm,i)=>{
            <PostCard post={post} key={i}/>
          })
        }
      </Grid>

      <Grid container className={classes.minGrid} spacing={4}>  //✅1
        <Main/>
        <Sidebar/>
      </Grid>


    </ThemeProvider>

  );
}

export APP

// Main.js   //✅2

import React from 'react'
import { Grid , makeStyles} from "@material-ui/core"; 

const Main = () => {
  return (
    <Grid item xs={12} md={8}>

    </Grid>
  )
}

export default Main

// Sidebar.js   //✅3

import React from 'react'
import { Grid , makeStyles} from "@material-ui/core"; 

const Main = () => {
  return (
    <Grid item xs={12} md={4}>


    </Grid>
  )
}

export default Main


// ✅ Drawer Section

// SideDrawer.js

// coppy and paste drawer code

export default function SideDrawer({children}){

  return(
    <Button onClick={toggleDrawer("left, true")}>{children}</Button>
  )
}


//🎉 Header.js

import {
  Badge,
  Divider,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { AccountCircle } from "@material-ui/icons";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SideDrawer from "./SideDrawer"; //✅1

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  tagline: {
    fontSize: 20,
    textTransform: "uppercase",
    justifyContent: "center",
    fontFamily: "Montserrat",
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <>
      <Toolbar>
        <SideDrawer> //✅2

        <IconButton>
          <MenuIcon />
        </IconButton>

        </SideDrawer>
        

        <Typography className={classes.title}>Blog website</Typography>

        <IconButton>
          <NotificationsIcon />
        </IconButton>

        <IconButton>
          <NotificationsIcon />
        </IconButton>
      </Toolbar>

      <Divider />

      <Toolbar className={classes.tagline}>
        Express your emotions through words
      </Toolbar>
    </>
  );
}

export default Header;



MUI Dark mode light mode toggle 😀
----------------------------------
      
context/ThemeContext.tsx
"use client";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type ThemeMode = "light" | "dark";

interface ThemeContextProps {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within ThemeProvider");
  }
  return context;
};

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>("light");

  // Persist theme mode in localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("theme") as ThemeMode;
    if (savedMode) setMode(savedMode);
  }, []);

  const toggleTheme = () => {
    setMode((prevMode) => {
      const newMode = prevMode === "light" ? "dark" : "light";
      localStorage.setItem("theme", newMode);
      return newMode;
    });
  };

  const theme = createTheme({✅
    palette: {
      mode,
    },
  });

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}> ✅
        <CssBaseline /> ✅
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};


app/layout.tsx (Create a context to manage the theme state globally.)
-------------------------------------------------------------------------
import { ThemeContextProvider } from "@/context/ThemeContext";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </body>
    </html>
  );
}


app/components/ThemeToggle.tsx  (Modify app/layout.tsx to include the ThemeContextProvider)
--------------------------------------------------------------------------------------------------

"use client";

import { useThemeContext } from "@/context/ThemeContext";
import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const ThemeToggle = () => {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};

export default ThemeToggle;


app/page.tsx
--------------
import ThemeToggle from "@/components/ThemeToggle";
import { Typography, Container } from "@mui/material";

export default function HomePage() {
  return (
    <Container>
      <ThemeToggle />
      <Typography variant="h4">Welcome to My Next.js App</Typography>
    </Container>
  );
}

====================================================================================================

how to use mui dark mode and lignt mode in next js typescript in app approuter 

/*Modify your custom div component to access the MUI theme.

How It Works:
Uses useTheme() to access the current MUI theme.

Dynamically changes backgroundColor, color, and border based on the theme.palette.mode.
*/

"use client"; 

import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

const CustomDiv = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: "16px",
        borderRadius: "8px",
        textAlign: "center",
        fontSize: "18px",
        fontWeight: "bold",
        backgroundColor: theme.palette.mode === "dark" ? "#333" : "#fff",
        color: theme.palette.mode === "dark" ? "#fff" : "#000",
        border: `1px solid ${theme.palette.divider}`,
      }}
    >
      This is a Custom Div
    </Box>
  );
};

export default CustomDiv;


or

/*If you want a cleaner approach, you can use styled from @mui/material/styles.

Uses MUI's styled API to create a styled div.

Dynamically updates styles based on theme.palette.mode.

*/
"use client";

import { styled } from "@mui/material/styles";

const StyledDiv = styled("div")(({ theme }) => ({
  padding: "16px",
  borderRadius: "8px",
  textAlign: "center",
  fontSize: "18px",
  fontWeight: "bold",
  backgroundColor: theme.palette.mode === "dark" ? "#333" : "#fff",
  color: theme.palette.mode === "dark" ? "#fff" : "#000",
  border: `1px solid ${theme.palette.divider}`,
}));

const StyledCustomDiv = () => {
  return <StyledDiv>This is a Styled Custom Div</StyledDiv>;
};

export default StyledCustomDiv;

      
