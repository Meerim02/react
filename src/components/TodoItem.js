import React, { Component } from 'react';
class TodoItem extends Component {
    render() {
        let className = this.props.important ? "list-group-item todo-item active" : "todo-item list-group-item"
        const spanClassName = this.props.done ? "text done" : "text"
        return (
            <li className={className}>
                <span onClick={this.props.changeInportant} className={spanClassName}> {this.props.children}</span>
                <button onClick={this.onClickDone} className="btn btn-success">Done</button>

            </li>
        )
    }
}

export default TodoItem;

