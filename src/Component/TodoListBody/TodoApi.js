import React, { useEffect } from 'react';
import { useState } from 'react';
import ApiProps from '../ApiProps/ApiProps';
import "./todoBody.css"


const TodoApi = () => {
    const[todoList, setTodoList] = useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res =>res.json())
        .then(data =>setTodoList(data))
    },[])
    return (
        <div className='container'>
          <h1 className='text-primary mb-5'>Welcome To Student Portal:{todoList.length}</h1>

          {/* map the api array */}

          <div className="student-grid">
            {/* make api grid */}
            {
            todoList.map(myTodo => <ApiProps 
                myTodo={myTodo}
            ></ApiProps>)
          }
          </div>
          
          {
            todoList.map(myTodoList =>console.log(myTodoList) )
          }
        </div>
    );
};

export default TodoApi;