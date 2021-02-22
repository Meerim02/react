import React, { Component } from 'react';
class TodoItem extends Component {
    render() {
        let className = this.props.important ? "list-group-item todo-item active" : "todo-item list-group-item"
        const spanClassName = this.props.done ? "text done" : "text"
        return (
            <li className={className}>
                <span onClick={this.props.changeImportant} className={spanClassName}> {this.props.children}</span>
                <button onClick={this.props.changeDone} className="btn btn-success">Done</button>
                <button onClick={this.props.deleteItem}className="btn btn-danger">
                <i className="fa fa-trash"></i>
                </button>
            </li>
        )
    }
}

export default TodoItem;

