import React, { Component } from 'react';
class TodoItem extends Component {
    state = {
        important: false,
        done: false
    }
    updateState = (state) => {
        return {
            important: !state.important
        }
    }
    postUpdate = () => {
        console.log(this.state.important);
    }
    onClick = () => {
        this.setState(this.updateState, this.postUpdate)
    }
    //  onClick = () =>{
    //      this.setState({
    //          important:!this.state.important
    //      })
    //  }
    render() {
        const className = this.state.important ? "list-group-item todo-item active" : "todo-item list-group-item"
        const spanClassName = 'text done'
        return (
            <li  className={className}>
                <span onClick={this.onClick} className={spanClassName}> {this.props.children}</span>
                <span className ="btn btn-success">Done</span>
            </li>
        );
    };
}

export default TodoItem;