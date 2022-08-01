import React, { useState } from "react"
import './todoList.css';

function TodoList() {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);


    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    //to add the new To-Do
    const AddTodo = () => {
        if (todo !== "") {
            const todoDetails = {
                id: Math.floor(Math.random() * 1000),
                value: todo,
                isCompleted: false,
            };
            setTodoList([...todoList, todoDetails])
        }
    };

    // to mark the completed todo in the list
    const todoCompleted = (e, id) => {
        e.preventDefault();
        //to find index of element
        const element = todoList.findIndex((elem) => elem.id == id);

        //copy array into new variable
        const newTodoList = [...todoList];

        //edit the element
        newTodoList[element] = {
            ...newTodoList[element],
            isCompleted: true,
        };

        setTodoList(newTodoList);
    };


    //to remove the unwanted todo
    const deletetodo = (e, id) => {
        e.preventDefault();
        setTodoList(todoList.filter((t) => t.id != id));
        alert("To-do is removed from the Today's List");
    };


    return (<>
        <div className="todo">
            <input type="text" name="text" id="text" onChange={(e) => handleChange(e)} placeholder="What plans for the day.....?" />
            <button className="btn btn-primary" onClick={AddTodo}> Add </button> <br />
        </div>
        <div className="todo-list">
            {todoList !== [] ?
                <ul>
                    {todoList.map((t) => (
                        <li className={t.isCompleted ? "cross-Text" : "list-item"}>{t.value}
                            <button className="completed" onClick={(e) => todoCompleted(e, t.id)}> completed </button>
                            <button className="delete" onClick={(e) => deletetodo(e, t.id)}> delete </button>
                        </li>
                    ))}

                </ul>

                : null}
        </div>

    </>
    );
}

export default TodoList;