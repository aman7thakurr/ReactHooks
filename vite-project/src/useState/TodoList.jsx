import React, { useState } from 'react';

export default function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };

    const handleEditTodo = (index) => {
        setEditIndex(index);
        setEditValue(todos[index]);
    };

    const handleSaveEdit = () => {
        if (editValue.trim() !== '') {
            const updatedTodos = todos.map((todo, index) =>
                index === editIndex ? editValue : todo
            );
            setTodos(updatedTodos);
            setEditIndex(null);
            setEditValue('');
        }
    };

    const handleCancelEdit = () => {
        setEditIndex(null);
        setEditValue('');
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Add a new todo"
            />
            <button onClick={handleAddTodo}>Add</button>

            {editIndex !== null && (
                <div>
                    <input
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                    />
                    <button onClick={handleSaveEdit}>Save</button>
                    <button onClick={handleCancelEdit}>Cancel</button>
                </div>
            )}

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => handleEditTodo(index)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
