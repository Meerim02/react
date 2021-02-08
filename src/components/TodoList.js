import React from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
    return (
       <ul className="list-group mt-3">
           <TodoItem important>Cook</TodoItem>
           <TodoItem>Read book</TodoItem>   
           <TodoItem>Sleep</TodoItem>

         </ul>
    );
};

export default TodoList;