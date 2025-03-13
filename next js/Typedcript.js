

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

import React, { createContext, useState } from 'react'

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









// TODO by thapa

// src > app > page.tsx 

// ✅1 

import React from 'react'

const Page = () => {
  return (
    <div>
      <h1>Next + TypeScraipt</h1>
      <Addtodod/>
      
    </div>
  )
}

export default Page


// Addtodo.tsx 

const Addtodo = () => {

  const [todo, setTodo]=useState("")

  const handleFormSubmit=(e:FormEvent<HTMLElement>)=>{
    e.preventDefault()
    handleAddToDo(todo)
    setTodo("")
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
      <input type="text" name="" id="" placeholder='wirite  your todo' value={todo} onChange={(e)=> setTodo(e.target.value)}/>
      <button type='submit'>Submit</button>
      </form>
     
    </div>
  )
}

export default Addtodo



// ✅2 (Impplument Context API)

// store > todos.tsx 

import { createContext } from 'react';

export type TodosProvideerProps={
  children:ReactNode
  //ReactNode is a generic type that covers a wide range of possible children types, including jsx elements, strings and ohter React coponents. 
}

export type Todo={
  id:string;
  task:string;
  coomplited:boolean;
  createdAt:Date;
}
export type TodosContext={
  tods:Todo[];
  handleAddToDo:(task:string)=> void;
}

export const todosContext = createContext<TodosContext | null>(null)

const handleAddToDo=(task)=>{
  
}

export const TodosProvider=({children}:TodosProvideerProps)=>{
  return <todosContext.Provider value={{todo,handleAddToDo}}>
    {children}
  </todosContext.Provider>
}

// main.tsx 

import TodosProvider from './store/todos.tsx';
<TodosProvider>
  <App/>
</TodosProvider>











































// =========================================================================


// TODO APP with type script

//✅ Basic Setup

import React from 'react'

const App = () => {
  return (
    <div>
      <inputFiled/>
      
      
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
      <input placeholder='Enter To do App' type='text'/>
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

import {configureStore} from "@redeuxjs/toolkit"
import todoSlice from './slice/todoSlice'

export const store= configureStore({
  reducer:{
    todo:todoSlice

  }
})


// todoSlice.ts


import {createSlice} from "@redux/toolkit";

interface Todo{
  id:string,
  title:stirng,
  complited:boolean
}

const todoSLice=createSlice({
  name:"todo",

  initialState:{
    todos:[] as Todo[]
  }

  reducers:{
    addTodo:(state, action: {payload:Todo})=>{
      state.todos.push(action.payload)
    },

    updateTodo:(stete,action:{payload:Todo})=>{
      const index= state.todo.findIndex((todo)=> todo,id === action.payload.id)
      state.todos[index] = {...state.todos[index], ...action.payload}
    }

    deleteTodo:(state,action:{payload:string})=>{
      state.todos= state.todos.filter((todo)=> todo.id !== action.payload)
    }

    compliteTodo:(state,action:{payload: string})=>{
      const index = state.todos.findIndex((todo)=> todo.id === action.payload);
      state.todos[index].complited= true
      const {complitedTodo}= state.todos.splice(index,1);
      complitedTodo.coomplited=true;
      state.todos.push(completedTodo)
    }

  }
})

export const {addTodo, updateTodo, deleteTodo, completedTodo}= todoSLice.actions;

export default todoSLice.reducer


// main.tsx

import Provider, { useDispatch } from 'react-redux';
import {store} from 'redux/toolkit';

<Provider store={store}>
  <App/>
</Provider>


//✅ Set upDisplay ------------


// interfaces.ts
interface Todo{
  id:string,
  title:stirng,
  complited:boolean
}


import React from 'react'

const App = () => {
  return (
    <div>
      <inputFiled/>
      <todoDisplay/>
    </div>
  )
}

export default App


// TodoTile.tsx 

import {Todo} from '@/interface';
import {createSlice} from '@redux/toolkit';


TodoTile=({todo}:{todo:Todo})=>{
  return(
    <div>
      <checkbox/>
      <h3>{todo.title}</h3>
      <Penclil/>
      <Edit/>
      <Delete/>
    </div>
  )
}


//✅ Add tood ------------


// inputFile.tsx 

import React from 'react'
import {addTodo} from '../../redux/store/todoslice'
import Dispatch form 'redux';

const InputFileld = () => {

  const dispatch= useDispatch();

  const addTodoData=(e:FormEvent<HTMLElement>)=>{
    e.preventDefault()
    const todo= e.currentTarget.todo.value.trim();

    if(todo){

      dispatch(addTodo({

        const id= crypto.currentUUID();

        dispatch(addTodo({
          id,
          title:todo,
          complited:false
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
      <input placeholder='Enter To do App' type='text'/>
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

  const todos= useSelector((state: any)=> state.todo.todos as Todo[]);

  return (
    <div>
    {
      todo.map((todo)=>{
        <TodoTile todo={todo} key={todo.id}/>
      })
    }
    
    </div>
  )
}


//✅ Delete tood ------------

// TodoTile.tsx 

import {Todo} from '@/interface';
import {createSlice} from '@redux/toolkit';
import deleteTodo from 'redux/slice'
import {maktodo} from 'redux/slice'


TodoTile=({todo}:{todo:Todo})=>{

  cosnt dispatch= useDispatch();

  const markTodoAdComplite=({id}:{id:string})=>{
    if(todo.complited) return;
    dispatch(completedTodo(id))
  }


  return(
    <div>
      <checkbox/>
      <h3>{todo.title}</h3>
      <Edit/>
      <Complite onClick={()=> dispatch(deleteTodo(todo.id))} chechked={todo.complited && true}/>
      <Delete onClick={()=>markTodoAdComplite({id:todo.id})}/>
    </div>
  )
}


//✅ Edit tood ------------

// TodoTile.tsx 

import {Todo} from '@/interface';
import {createSlice} from '@redux/toolkit';
import deleteTodo from 'redux/slice'
import {maktodo} from 'redux/slice'


TodoTile=({todo}:{todo:Todo})=>{

  const [editable,setEditable]=useState(false);

  const dispatch= useDispatch();

  const markTodoAdComplite=({id}:{id:string})=>{
    if(todo.complited) return;
    dispatch(completedTodo(id))
  }

  const editTodo=({id}:{id:string})=>{


  }


  return(
    <div>
      <checkbox/>
      <h3 contentEditable={editable}>{todo.title}</h3>
      {
        !todo.complited && editable ? <Save/> : 
        <>
        <Edit onClick={()=> setEditable(!editable)} onClick={()=>editTodo(id: todo.id)}/>
        <Complite onClick={()=> dispatch(deleteTodo(todo.id))} chechked={todo.complited && true}/>
        <Delete onClick={()=>markTodoAdComplite({id:todo.id})}/>
        </>
      }
      
    </div>
  )
}