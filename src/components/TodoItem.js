import React from 'react';

const TodoItem = (props) => {
    let name = "list-group-item " 
    if (props.important){
    name +="active"
    }
    return (
        <li className={name}>{props.children}</li>
    );
};

export default TodoItem;