import React, { useState } from "react"

const  TodoForm = ({id}) => {
    const [newTodo,setNewTodo] = useState('');
    const [todoList, setTodoList] = useState([]);

    const addNewTodo = () => {
        setTodoList(prevTodoList=>[...prevTodoList,newTodo]);
        setNewTodo('');
        console.log(todoList);
    };

    const removeTodo = (index) => {
        setTodoList((prevTodoList) => {
            const updatedList = [...prevTodoList];
            updatedList.splice(index, 1); // Remove the item at the specified index
            return updatedList;
          });
    };

    return(
        <>
            <div className="todo">
                <label htmlFor={id}>New Item</label>
                <br />
                <input type="text" id={id} value={newTodo} onChange={e => setNewTodo(e.target.value)}/>
                <br />
                <button onClick={addNewTodo}>Add</button>
            </div>
            <div className="todo-list">
                <h1>ToDo List</h1>
                <ul className="list">
                {todoList.map((value, index) => (
                    <li key={index}>
                        <label>
                            <input type="checkbox"/>
                            {value}
                        </label>
                        <button className="btn btn-danger" onClick={()=>removeTodo(index)}>Delete</button>
                    </li>
                ))}
                </ul>
            </div>
        </>
    )
}

export default TodoForm