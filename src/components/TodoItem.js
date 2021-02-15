import React, { Component } from 'react';
class TodoItem extends Component {
    state = {
        important: false,
        done: false
    }
    onClick = () => {
        this.setState((state) => {
            return {
                important: !state.important
            }
        })
    }
    onClickDone = () => {
        this.setState((state) => {
            return {
                done: !state.done
            }
        })
    }
    render() {
        const className = this.state.important ? "list-group-item todo-item active" : "todo-item list-group-item"
        const spanClassName= this.state.done ? "text done" : "text"
        return (
            <li className={className}>
                <span onClick={this.onClick} className={spanClassName}> {this.props.children}</span>
                <button onClick={this.onClickDone} className="btn btn-success">Done</button>

            </li>
        );
    };
}

export default TodoItem;