

// ====================================================================================

let name: string;
let age: Number;
name = "piush";

let isStudent: boolean;
let hobbies: string[];
let role: [Number, string];

role = [5, 5]//❌
role = [5, "added"]//✅

// Decleare object

type Person = {
  name: String;
  age: number;
  age?: number;//if you want to age as a opetional
}

let person: Person = {
  let name: "piyush",
  age: 22,
};

//array of object

let lotsOfPeople: Person[];


//age veriable is number or stirng both of this then

let age: Number | stirng;
age = 5


//Define a function 
function printName(name: string) {
  console.log(name)
}
printName("piush")


let printName: (name: string) => void;
let printName: (name: string) => Never;

//void return undefined but Never returns anything


//===================================================================

// Alies are two types=> Type and interface

type Person = {
  name: String;
  age: number;
  age?: number;//if you want to age as a opetional
}

interface Person {
  name: String;
  age: number;
  age?: number;//if you want to age as a opetional
}

// -------------------------------------

// wnat to access one oject power to another object 

interface Person {
  name: String,
  age?.number
}

interface Guy extends Person {
  profession: string
}

// want to access interface object power to  type

interface Person {
  name: String,
  age?.number
}

type X = Person & {
  a: string;
  b: number
};


(or)


type X = {
  a: string;
  b: number
};

interface Person extends X {
  name: string,
  age?.number
}


//===================================================================

// ✅ 1 st part  ---------------

// Project Note

App.tsx

const App: React.FC = () => {

  const [todo, setTodo] = useState < String | number > ("")

  console.log(todo)

  return <div>
    <inputFeild todo={todo} setTodo={setTodo} />
  </div>
}

export default App

// component > inputFeild.tsx 

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetstateAction<string>> //{hove on the props and get the type name};
}

const InputFeild: React.FC<Props> = ({ todo, setTodo }) => {
  return <form clasName="input">
    <input type="input" value={todo} onChange={(e) => setTodo(e.target.value)} />
    <button>Go</button>
  </form>
}

export default InputFeild



// ✅ 2nd Part ------------------------

component > model.ts  //✅1

export interface Todo {
  id: number;
  todo: string;
  isDone: boolean
}


App.tsx

import { Todo } from './model';  //✅2

const App: React.FC = () => {

  const inputRef = useRef < HTMLInputElement > (null)   //✅9

  const [todo, setTodo] = useState < String | number > ("")

  //✅3
  const [todos, settodos] = useState < Todo[] > ([])

  const hadleAdd = (e: React.FormEvent) => {
    e.PreventDefault() //✅6

    if (todo) { //✅7
      setTodo([...todos, { id: Date.now(), todo: todo, isDone: false }])
      setTodo("");
    }
  }

  console.log(todo)

  return <div>
                   //✅10
    <inputFeild ref={inputRef} todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

    //Todos Rendering
    <TodoList todos={todos} setTodos={settodos} />  //✅8

  </div>
}

export default App


// component > inputFeild.tsx 

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetstateAction<string>> //{hove on the props and get the type name};
  handleAdd: (e: React.FormEvent) => void; //✅4
}
//✅5
const InputFeild: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  //✅11
  return <form clasName="input" onSubmit={(e) => { handleAdd(e); inputRef.current?.blur }} >
    <input type="input" value={todo} onChange={(e) => setTodo(e.target.value)} />
    <button type="submit">Go</button>
  </form>
}

export default InputFeild



// TodoList.tsx  //✅12

import React, { Component, createContext, useState } from 'react'

//✅14
interface props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo>>;
}

//✅13
const TodoList: React.FC = ({ todos, setTodos }: Props) => {
  return (
    <div>
      {
        todos.amp((todo) => {
          <singleTdos todo={todo} todos={todos} setTodos={setTodos} />   //✅16
        })
      }

    </div>
  )
}

export default TodoList


// singleTdos.tsx  //✅15

import React from 'react'

const singleTdos = ({ todo, todos, setTodos }) => {



  const handleDone = (id: number) => { //✅18

    setTodos(todos.map((todo) => TodoList.id === id ? { ...todo, isDone: !TodoList.idDone } : todo))

  }

  const handleDelete = (id: number) => { //✅19
    setTodos(todos.filter((todo) => todo.id !== id))
  }


  type Props = { //✅16
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo>>
  }

  return (
    <div>
      {  //✅19
        todo.isDone > (
          <s>{todo.todo}</s>
        ): (
      <spa>{todo.todo}</spa>
      )
      }

      <div>
        <delete onClick={() => handleDelete(todo.id)} />
        <edit />
        <done onClick={() => handleDone(todo.id)} /> //✅17
      </div>
    </div>
  )
}

export default singleTdos



// ✅ 3rd Part ----------------

// singleTdos.tsx  

import React from 'react'

const singleTdos = ({ todo, todos, setTodos }) => {

  const [edit, setEdit] = useState < boolean > (false); //✅1
  const [editTodo, setEditTodo] = useState < string > (todo.todo); //✅1


  const handleDone = (id: number) => {

    setTodos(todos.map((todo) => TodoList.id === id ? { ...todo, isDone: !TodoList.idDone } : todo))

  }

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  //✅5
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(todo.map((todo) => (
      todo.id == id ? { ...todo, todo: eidtTodo } : todo
    )))

    setEdit(false)

  }


  type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo>>
  }

  return (

    <form onSubmit={(e) => handleEdit(e, todo.id)}> //✅4

      <div>

        {  //✅3
          edit ? (
            <input value={editTodo} onChange={(e) => setEditTodo(e.target.value)} />
          ) :
            todo.isDone ? (
              <s>{todo.todo}</s>
            ) : (
              <spa>{todo.todo}</spa>
            )
        }


        <div>
          <delete onClick={() => handleDelete(todo.id)} />

          <edit onClick={() =>  //✅2
    if (!edit && !todo.isDone) {
            setEdit(!edit)
          }
          }/>

          <done onClick={() => handleDone(todo.id)} />
        </div>
      </div>

    </form>

  )
}

export default singleTdos






// ===================================================================================================






// TODO APP with typescript

//✅ Basic Setup

import React from 'react'

const App = () => {
  return (
    <div>
      <inputFiled />
    </div>
  )
}

export default App



// inputFile.tsx 

import React from 'react'

const InputFileld = () => {
  return (
    <div>
      <form>
        <input placeholder='Enter To do App' type='text' />
        <button>ADD TO DO</button>
      </form>
    </div>
  )
}

export default inputFile


//✅ setup redux toolkit and write logic

/*
install redux

create "redux" file into the root > "store.ts" >    
*/

// store.ts 

import { configureStore } from "@redeuxjs/toolkit"
import todoSlice from './slice/todoSlice'

export const store = configureStore({
  reducer: {
    todo: todoSlice

  }
})


// todoSlice.ts


import { createSlice } from "@redux/toolkit";

interface Todo {
  id: string,
  title: stirng,
  complited: boolean
}

const todoSLice = createSlice({
  name: "todo",

  initialState: {
    todos: [] as Todo[]
  }

  reducers: {
    addTodo: (state, action: { payload: Todo }) => {
      state.todos.push(action.payload)
    },

    updateTodo: (stete, action: { payload: Todo }) => {
      const index = state.todo.findIndex((todo) => todo, id === action.payload.id)
      state.todos[index] = { ...state.todos[index], ...action.payload }
    }

    deleteTodo: (state, action: { payload: string }) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    }

    compliteTodo: (state, action: { payload: string }) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      state.todos[index].complited = true
      const { complitedTodo } = state.todos.splice(index, 1);
      complitedTodo.coomplited = true;
      state.todos.push(completedTodo)
    }

  }
})

export const { addTodo, updateTodo, deleteTodo, completedTodo } = todoSLice.actions;

export default todoSLice.reducer


// main.tsx

import Provider, { useDispatch } from 'react-redux';
import { store } from 'redux/toolkit';

<Provider store={store}>
  <App />
</Provider>


//✅ Set upDisplay ------------


// interfaces.ts
interface Todo {
  id: string,
  title: stirng,
  complited: boolean
}


import React from 'react'

const App = () => {
  return (
    <div>
      <inputFiled />
      <todoDisplay />
    </div>
  )
}

export default App


// TodoTile.tsx 

import { Todo } from '@/interface';
import { createSlice } from '@redux/toolkit';


TodoTile = ({ todo }: { todo: Todo }) => {
  return (
    <div>
      <checkbox />
      <h3>{todo.title}</h3>
      <Penclil />
      <Edit />
      <Delete />
    </div>
  )
}


//✅ Add tood ------------


// inputFile.tsx 

import React from 'react'
import { addTodo } from '../../redux/store/todoslice'
import Dispatch form 'redux';

const InputFileld = () => {

  const dispatch = useDispatch();

  const addTodoData = (e: FormEvent<HTMLElement>) => {
    e.preventDefault()
    const todo = e.currentTarget.todo.value.trim();

    if (todo) {

      dispatch(addTodo({

        const id = crypto.currentUUID();

        dispatch(addTodo({
          id,
          title: todo,
          complited: false
        }))

        e.currentTarget.reset()
        return

    }))


  }
  console.log(todo)

}
return (
  <div>
    <form onSubmit={addTodoData}>
      <input placeholder='Enter To do App' type='text' />
      <button>ADD TO DO</button>
    </form>
  </div>
)
}

export default inputFile


// todoDisplay.tsx

import React from 'react'
import { useSelector } from 'react-redux';


export const todoDisplay = () => {

  const todos = useSelector((state: any) => state.todo.todos as Todo[]);

  return (
    <div>
      {
        todo.map((todo) => {
          <TodoTile todo={todo} key={todo.id} />
        })
      }

    </div>
  )
}


//✅ Delete tood ------------

// TodoTile.tsx 

import { Todo } from '@/interface';
import { createSlice } from '@redux/toolkit';
import deleteTodo from 'redux/slice'
import { maktodo } from 'redux/slice'


TodoTile = ({ todo }: { todo: Todo }) => {

  cosnt dispatch = useDispatch();

  const markTodoAdComplite = ({ id }: { id: string }) => {
    if (todo.complited) return;
    dispatch(completedTodo(id))
  }


  return (
    <div>
      <checkbox />
      <h3>{todo.title}</h3>
      <Edit />
      <Complite onClick={() => dispatch(deleteTodo(todo.id))} chechked={todo.complited && true} />
      <Delete onClick={() => markTodoAdComplite({ id: todo.id })} />
    </div>
  )
}


//✅ Edit tood ------------

// TodoTile.tsx 

import { Todo } from '@/interface';
import { createSlice } from '@redux/toolkit';
import deleteTodo from 'redux/slice'
import { maktodo } from 'redux/slice'


TodoTile = ({ todo }: { todo: Todo }) => {

  const [editable, setEditable] = useState(false);

  const dispatch = useDispatch();

  const markTodoAdComplite = ({ id }: { id: string }) => {
    if (todo.complited) return;
    dispatch(completedTodo(id))
  }

  const editTodo = ({ id }: { id: string }) => {


  }


  return (
    <div>
      <checkbox />
      <h3 contentEditable={editable}>{todo.title}</h3>
      {
        !todo.complited && editable ? <Save /> :
          <>
            <Edit onClick={() => setEditable(!editable)} onClick={() => editTodo(id: todo.id)}/>
            <Complite onClick={() => dispatch(deleteTodo(todo.id))} chechked={todo.complited && true} />
            <Delete onClick={() => markTodoAdComplite({ id: todo.id })} />
          </>
      }

    </div>
  )
}



























































// ================================================================================================




// ====================================================================================================



















































































































































// Next Js , Typescript witn Redux 

> npm install @reduxjs/toolkit  npm install react-redux

src > lib > store > store.js

//store variable is global variable . we have to use redux only on client component
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './feature/cart/cartSlice';


export const makeStore = () => {
  //ab jab ya function call hoga tab configureStore create hojaiga

  //if we privide store like this then the global obj is shared with every users (Mera data dusre user k sath bhai share ho sakta he) because it's render in server. hume ya store user k per request me crete karna hoga
  return configureStore({
    reducer: {
      cart: cartReducer,
    }
  })

}


// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']



// app > StoreProvider.tsx 

/*
redux ek client side state management libray he. redux ko server side me use nahi karna chiya.
layout ek andar servar component render hota he. provider ko issliya hum layout me wrap nahi karsakte. 
client k andar server componet ko wrap kar saktehe. StoreProvider.tsx create kiya kuk hume yaha "use client"
likna tha. hum yaha client component k andar sever component ko wrap kiya he. 

*/

'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../lib/store'
import { add } from '@/lib/store/features/cart/cartSlice';

export default function StoreProvider({
  children
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef < AppStore | null > (null) //useRef k andar data store kar sakte he. agar hum chatae he ki data change hone k baad component redrender na ho tab hum useRef use kartahe

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
    //add initial state
    storeRef.current.dispatch(add("testProductid"))
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}

// layout.tsx 

<StoreProvider>
  <Header>
    {children}
  </Header>
</StoreProvider>


src > lib > store > features > cart > createSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// Define a type for the slice state
export interface CartState {
  items: string[]
}

// Define the initial state using that type
const initialState: CartState = {
  items: []
}

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    add: (state, action) => {
      state.items.push(action.payload)
    }
  }
})

export const { add } = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default cartSlice.reducer



// store > hooks > index.ts 

import { useDispatch, useSelector, useStore } from 'react-redux'
import type { AppDispatch, AppStore, RootState } from '../store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes < AppDispatch > ()
export const useAppSelector = useSelector.withTypes < RootState > ()
export const useAppStore = useStore.withTypes < AppStore > ()


// productCart.tsx

'use client'

import { useDispatch } from 'react-redux';

const dispatch = useDispatch()

const handleAddToCart = (productId: string) => {
  console.log("Adding to Cart", productId)
  dispatch(add(productid))
}

return (

  <button onClick={() => handleAddToCart(product.id)}>Add to cart</button>
)


// Header.tsx
'use client'

componet > addToCartButton.tsx

import React from 'react'

const addToCartButton = () => {

  const itms = useAppSelector(state => state.cart.item)
  return (
    <div>
      <span>
        {
          itms.map((ellm) => return ellm.length)
        }

      </span>

    </div>
  )
}

export default addToCartButton


//Todo  -----   Ecommerce project with typescript and nextjs  -------


//! src > api > endpoints > index.ts 

export const baseURL = 'https://fakestoreapi.com';

export const endpoints = {
  products: '/products',
  product: (id: string) => `/products/${id}`,
  categories: '/products/categories',
  productByCategory: '/products/category/:category',
}


//! src > api > axiosInstance > index.ts 

import axios from "axios";
import { baseURL } from "../endpoints";

const axiosInstance = axios.create({
  baseURL,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosInstance;


//! src > api > functions > getAllProducts.ts 

import axiosInstance from "../axiosInstance";
import { endpoints } from "../endpoints";

export const getAllProducts = async () => {
  try {
    const response = await axiosInstance.get(endpoints.products);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


//! src > api > functions > getProductDetails.ts 

import axiosInstance from "../axiosInstance";
import { endpoints } from "../endpoints";

export const getProductDetails = async (id: string) => {
  try {
    const response = await axiosInstance.get(endpoints.product(id));
    return response.data;
  } catch (error) {
    console.error(error);
  }
};


//! src > hooks > react-query > useGetProducts.ts 

"use client";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../../api/functions/getAllProducts";

export const useGetProducts = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  return { data, isLoading, isError };
};


//! layout,.tsx 
import TanstackProvider from "@/utils/TanstackProvider";

function Layout() {
  return (
    <html lang="en">
      <ReduxStoreProvider>
        <TanstackProvider>
          <body className={inter.className}>{children}</body>
        </TanstackProvider>
      </ReduxStoreProvider>
    </html>
  );

}

//! src > typescript > types > product.types.ts

export type Product = { //scructure like css
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  qty:number
}

//! src > app > product > page.tsx 

"use client";

import { useGetProducts } from "@/hooks/react-query/useGetProducts";
import { Product } from "@/typescript/types/product.types";

const truncateDescription = (description: string, wordLimit: number) => {
  const words = description.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return description;
};


const Products = () => {
  const { data, isLoading, isError } = useGetProducts();
  const router = useRouter();
  const dispatch = useAppDispatch();
  if (isLoading) return <Loader />;
  if (isError) return <div>Error fetching products</div>;

  const handleProductClick = (productId: number) => {
    router.push(`/product/${productId}`);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      
      <Grid container spacing={3}>
        {data.map((product: Product) => ( //j data asche seta datatype define korte hobe
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.title}
                sx={{ objectFit: "contain", p: 2, cursor: "pointer" }}
                onClick={() => handleProductClick(product.id)}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  noWrap
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleProductClick(product.id)}
                >
                  {product.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    mb: 2,
                    fontSize: "0.8rem",
                    height: "3em",
                    overflow: "hidden",
                  }}
                >
                  {truncateDescription(product.description, 10)}
                </Typography>
                <Typography
                  variant="h6"
                  color="primary"
                  sx={{ fontWeight: "bold" }}
                >
                  ${product.price.toFixed(2)}
                </Typography>
              </CardContent>
              <Box
                sx={{ p: 2, display: "flex", justifyContent: "space-between" }}
              >
                <Button
                  variant="contained"
                  startIcon={<ShoppingCartIcon />}
                  size="small"
                  onClick={() => {
                    dispatch(addProduct(product)), router.push("/product/cart");
                  }}
                >
                  Add to Cart
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<PaymentIcon />}
                  size="small"
                >
                  Buy Now
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;

// =================================================================================================













































































































































// Youtube clone 

//Theme setup

src > theme > muiTheme.tsx

import React from 'react'
import { cssBaseline, StyledEnglineProvider, ThemeProvider, createTheme } from "@mui/materail";
import { MuiThemeOptions } from './themeOptions'

const MuiTheme = ({ children }: { children: React.ReactNode }) => {

  const _themeOptions = useMemo(() => {
    return MuiThemeOptions('dark')
  }, [])
  const theme = createTheme(_themeOptions)
  return (
    <StyleEngineProvider>
      <ThemeProvider theme={theme}>
        <cssBaseline />
        {children}
      </ThemeProvider>
    </StyleEngineProvider>
  )
}

export default MuiTheme


src > theme > pallate.ts

import { PaletteMode, PaletteOptions } from "@mui/meterial"
export const PrimaryColor = {
  white: "#ffff",
  success_color: "#Ddffdf"
}
export const pallete = (mode: PaleteMode): PaleteOptions => {
  return (
    mode,
    background: {
      default: "#455444",
  paper: "#0000"
    },
primary: {
  main: PrimaryColor.primary,
    dark: PrimaryColor.Primary_600
},
secondary: {
  main: PrimaryColor.secondary
},
error: {
  main: PrimaryColor.errorMain
},
warning: {
  main: Primary.warningMain
}
  )
}

src > theme > themeOptions.ts
import { PaleteMode } from '@mui/material/syle';
import type { ThemeOptions } from "@mui/material/syle"
import { pallete } from './palete'

export const MuiThemeOptions = (mode: PaleteMode): ThemeOptions => {
  return {
    pallate: pallete(mode),
    typography: {
      fontFamily: ["Romoto"].join(',')
    },
    components: {
      MuiSkeleton: {
        defaultProps: {
          animations: "wave"
        }
      }
    }
  }
}

src > page

import React from 'react'
import MuiTheme from '@/theme/muiTheme'

const App = () => {
  return (
    <div>
      <MuiTheme>
        {chomponent}
      </MuiTheme>

    </div>
  )
}

export default App

// --------------------------------------------------------------------------

// Home page setup 

/*
src > layout > wrapper.tsx 
-----------------------------
*/

import React from 'react'

const wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      the coode of drawer coponent
      {children}
    </div>
  )
}

export default wrapper

// (paste drwwer code from mui)


/*
src > app > page.tsx 
------------------------
*/

import React from 'react'

import wrapper from './wrapper'

const page = () => {
  return (
    <div>
      <wrapper>
        <h1>Home</h1>
      </wrapper>
    </div>
  )
}

export default page


/*
src > app > Header.tsx 
------------------------
*/

cut the app bar from dashborad coponent and paste it into Headers.Then import Header over there.coppy 
all the import to the header delete which imports is not used.

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
}) < AppBarProps > (({ theme }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));


interface HeaderProps {
  open: boolean,
  handleDrawer: () => any,
}
const Header = ({ open, handleDraweropen }: HeaderProps) => {
  return (
    <Appbar>
      sx={{ open }}
      onClick={{ handleDraweropen }}

      <styleDirection>

        <stack width="100%" flex={1} direction='row' justifyContent="space-between">
          <stack><youtubeicons /></stack>
          <stack>
            Search Bar
            <stack>
              <Textfield

                inputProps={{
                  startAddorment: {
        < IconButton >
                    <SearchIcon></SearchIcon>
        </IconButton>
      }
    }}
    
    />

          </stack>
        </stack>
        <stack>logos</stack>
      </stack>


    </styleDirection>
    
    </Appbar >
  )
}


wrapper
--------

< Header open = { open } handleDrawerOpen = { handleDraweropen } />


// src > ui > icons >youtubeicons.tsx 

import React from 'react'

const youtubeicons = () => {
  return (
    <div>
      paste svg element

    </div>
  )
}

export default youtubeicons


// main content Area 

import React from 'react'
import Tagsection from './Tagsection/Tagsection'

const Home = () => {
  return (
    <div>
      <wrapper>
        {/* Tag section  */}
        <Tagsection />

        {/* Content section  */}
        <HomeVideoSection />


        {/* Shorts Section  */}


      </wrapper>
    </div>
  )
}

export default Home

// src >component > Tagsection > Tagsection.tsx 

import React from 'react'
import { Chip, Stack } from "@mui/meterail";
import { styled } from '@mui/materal/styles';

const StyledChip = styled(Chip)(({ theme }) => ({
  borderRadius: '15px',
  padding: '10px 20px'
}))

const category = ["All", "Cooking", "Tech", "Teacng"]

const Tagsection = () => {
  return (
    <div>

      <Stack mb={2} direction="row" alignment="center" spacing="1">
        {
          category?.map((item, index) => <StyledChip label="All" key={item + index} />)
        }
      </Stack>


    </div>
  )
}

export default Tagsection



// src > component > card > HomeVideoCard.tsx

import React from 'react'
import { styled } from '@mui/matariyal/styles';
import Card from '@mui/meterial/card'
import Menu from '@mui/meterial/menu'

const HomeVideoCard = () => {

  const SyledHomeVideoCard = styled(Card)(() => ({
    background: "transparent"
  }))

  return (
    <SyledHomeVideoCard>
      <CardMedia>

      </CardMedia>
      <IconButton onClick={handleClick}>
        <Mediaicon />
      </IconButton>


      <Menu id="basic-menu" anchorEl="ancherEl" open={open} onClose={handleClose}>
        paste manu component code
      </Menu>

    </SyledHomeVideoCard>
  )
}

export default HomeVideoCard


// src > component > VideoSection > HomeVideoSection.tsx

import React from 'react'
import { Grid } from "@mui.meterial";

const HomeVideoSection = () => {
  return (
    <div>
      <Grid container>
        {
          [1, 11, 33, 55].map((_, index) => <Grid p={1} item md={4} xs={12} key={index}><HomeVideoCard /></Grid>)
        }

      </Grid>


    </div>
  )
}

export default HomeVideoSection


// =================================================================================================

App > Coponent > Addtodo.tsx 

const AddTodo=()=>{
  return <form>
    <input type='text' placeholder='Write a new todo...'/>
    <button>Add Todo</button>
  </form>
}

// TodoList.tsx 

type TodoListProps={
  items:{id:string, text:string}[]
}

const TodoList React.FC<TodoListProps>=(props)=>{
  return <>
  <h1>Todo List</h1>
  </>
}


App.js 

import React from 'react'

const App = () => {

  const Todos=[{id:1, text:"this is text"}];

  return ( 
    <div>
      <AddTodo/>
      <TodoList items={Todos}/>
    </div>
  )
}

export default App

//===================================================================

// React with typescript piush



