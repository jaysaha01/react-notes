//📁 TodoContext.js  (create context folder in src and create TodoContext.js file)  ✅1

import { createContext, useContext, useEffect, useState } from "react";

export const TodoContext= createContext({
    todos:[
        {
            id:1,
            todo:"Todo Message",
            complited: false
        }
    ],
    addTodo:(todo)=>{},
    updateTodo: (id, todo)=>{},
    deleteTodo: (id)=>{},
    toggleComplite:(id)=>{}
})

export const useTodo= ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider


//📁 index.js (Create index.js file into contexts folder)          ✅2

export {TodoContext, TodopPovider, useTodo} from './TodoContext'

//📁 App.js                                                        ✅3

import React from 'react'
import {TodoProvider} from './contexts'

const App = () => {

    const [todos, setTodos]= useState([]);

    const addTodo=(todo)=>{                                                  //✅ 6
        setTodos((prev)=> [{id: Date.now(), ...todo},...prev])
    }

    const updateTodo=(id, todo)=>{                                                 //✅ 7
        setTodos((prev)=> prev.map((prevTodo)=> (prevTodo.id === id ? todo : prevTodo)))
    }


    const deleteTodo = (id)=>{                                                      //✅ 8
        setTodos((prev)=> prev.filter((todo)=> todo.id !== id))
    }


    const toggleComplite =(id)=> {                                                     //✅ 9
        setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id === id ? {...prevTodo, complited: !prevTodo.complited} : prevTodo))
    }


    useEffect(()=>{                                                                    //✅ 10
        const todos= JSON.parse(localStorage.getItem("todos"));
        if(todos && todos.length > 0){
            setTodos(todos)
        }
    },[])

    useEffect(()=>{                                                                      //✅ 11
        localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])


  return (

    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplite}}>                //✅4 & 5
    <div>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>        //✅ 26
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}

                        {
                            todos.map((todo)=>(            //✅ 27
                                <div key={todo.id} className="w-full">
                                    <TodoItem todo={todo}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
    </div>
    </TodoProvider>                                                 //✅4

  )
}

export default App


//📁 TodoForm.jsx              //✅ 12

function TodoForm() {
    
    const [todo, setTodo]=useState("");
    const {addTodo}= useTodo()

    const add= (e)=>{                  //✅ 13
        e.preventDefault()
        if(!todo) return 
        addTodo({todo, complited: false})
        setTodo("")
    }

    return (
        <form onSubmit={add}  className="flex">          //✅ 14
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}                            //✅ 15
                onChange={(e)=> setTodo(e.target.value)}        //✅ 16
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;



//📁 TodoItem.jsx               //✅ 13

function TodoItem({ todo }) {
    
    const {updateTodo, deleteTodo, toggleComplete}= useTodo()             //✅ 17

    const [isTodoEditable, setIsTodoEditable]= useState(false);           //✅ 18

    const [todoMsg, setTodoMsg]= useState(todo.todo)                      //✅ 19

    const editTodo=()=>{                                                  //✅ 20
        updateTodo(todo.id, {...todo, todo: todoMsg})
        setIsTodoEditable(false)
    }

    const toggleCompleted = ()=>{                                          //✅ 21
        toggleComplete(todo.id)
    }



    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${        //✅ 22
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input                                                             //✅ 23
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button                                                             //✅ 24
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button                                                              //✅ 25
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;


/*
Create index.js folder in Components folder
------------------------------------------------------

📁 index.js                      //✅ 14
======================
*/

import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

export {TodoForm, TodoItem} 

