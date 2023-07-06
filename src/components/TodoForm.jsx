import React, { useState } from "react"
import './TodoForm.css'

const  TodoForm = ({id}) => {
    const storedTodo = JSON.parse(localStorage.getItem('todo'));
    console.log(storedTodo);
    const [newTodo,setNewTodo] = useState('');
    const [todoList, setTodoList] = useState(storedTodo);

    const addNewTodo = () => {
        if(!newTodo) return;
        const todo = {
            title: newTodo,
            is_done:0
        };
        let updatedTodoList = [];
        // Retrieving the object from local storage
        const prevTodoList = JSON.parse(localStorage.getItem('todo'));
        if (Array.isArray(prevTodoList)) {
            updatedTodoList = [...prevTodoList, todo];
        }
        localStorage.setItem('todo', JSON.stringify(updatedTodoList));
        setTodoList(updatedTodoList);
        setNewTodo('');
        console.log(todoList);
    };

    const removeTodo = (index) => { 
        setTodoList((prevTodoList) => {
            const updatedList = [...prevTodoList];
            updatedList.splice(index, 1); // Remove the item at the specified index
            localStorage.setItem('todo', JSON.stringify(updatedList));
            return updatedList;
          });
    };

    return(
        <>
            <div className="todo">
                <label htmlFor={id} style={{fontSize:"20px",fontWeight:"bold"}}>New Item</label>
                <br />
                <input type="text" id={id} value={newTodo} onChange={e => setNewTodo(e.target.value)}/>
                <br />
                <button onClick={addNewTodo}>Add</button>
            </div>
            <hr />
            <div className="todo-list">
                <h4>ToDo List</h4>
                <ul className="list">
                    {todoList && todoList.map((data, index) => (
                        <li key={index}>
                            <label>
                                <input type="checkbox"/>
                                {data.title}
                            </label>
                            <br />
                            <a className="btn btn-danger" style={{cursor:'pointer',fontSize:'12px'}} onClick={()=>removeTodo(index)}>Delete</a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default TodoForm