import React, {useState} from 'react'
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import {AiOutlineCheckCircle} from 'react-icons/ai';
import {AiOutlineEdit} from 'react-icons/ai';

import './Todo.styles.css';


const Todo = ({todos, completeTodo, removeTodo, updateTodo}) => {
    
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id:null,
            value: ''
        })
    }

    if(edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            
            <div className="todo-text">
                {todo.text}
            </div>

            <div className="icons">
                <AiOutlineCheckCircle 
                    onClick={() => completeTodo(todo.id)}
                    className="check-icon"    
                />
                <RiCloseCircleLine 
                    onClick={ () => removeTodo(todo.id) }
                    className="delete-icon"
                />
                <AiOutlineEdit
                    onClick={ ()=> setEdit({ id: todo.id, value: todo.text})} 
                    className="edit-icon"
                />
            </div>
        </div>
    ))
}

export default Todo
