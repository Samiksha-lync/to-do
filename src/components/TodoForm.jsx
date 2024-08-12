import React from "react";
import { useState } from "react";
import {useTodo} from "../Contexts/TodoContext"
import "./TodoForm.css"

function TodoForm(){
    const [todo, setTodo] = useState(" ")
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()
        if (!todo) return
        addTodo({todo, completed: false})
        setTodo("")
    }
    return(
      <>
      <h1>To-do List</h1>
      <form onSubmit={add} className="flex"> 
      <input type = "text"
      placeholder="write todo..."
      className="text-field"
      value={todo}
      onChange={(e)=> setTodo(e.target.value)}
      />
      <button type="submit">
        Add
      </button>
      </form>
      </>
    )

}

export default TodoForm;