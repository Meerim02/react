import React, { Component } from 'react';
import TodoItem from './TodoItem';


class TodoList extends Component {
    state = {
        todoList: [
            { id: 1, name: "Read Book2", important: true, done: false },
            { id: 4, name: "Cook2", important: false, done: true },
            { id: 7, name: "Sleep2", important: true, done: false },
            { id: 9, name: "Play2", important: false, done: true }
        ]
    }
    changeDone = (id) => () => {
        this.setState((state) => {
            const newTodoList = [...state.todoList]
            const newTodo = newTodoList.find(item => item.id === id)
            newTodo.done = !newTodo.done
            return {
                todoList: newTodoList
            }
        })
    }

    // changeDone = (id) => () => {
    //     const todoList = this.state.todoList
    //     const todoIndex = todoList.findIndex((item) => item.id === id)
    //     const todo = todoList[todoIndex]
    //     const newTodo = { ...todo }
    //     newTodo.done = !newTodo.done

    //     const newTodoList = [
    //         ...todoList.slice(0, todoIndex),
    //         newTodo,
    //         ...todoList.slice(todoIndex + 1),
    //     ]
    //     this.setState({
    //         todoList: newTodoList
    //     })

    // }


    changeImportant = (id) => () => {
        this.setState((state) => {
            const newTodoList = [...state.todoList]
            const newTodo = newTodoList.find(item => item.id === id)
            newTodo.important = !newTodo.important
            return {
                todoList: newTodoList
            }
        })
    }

    deleteItem = (id) => () => {
        const filtered = this.state.todoList.filter((todo) => todo.id !== id)
        this.setState({
            todoList: filtered
        })
    }


    render() {
        return (
            <ul className="list-group mt-2">
                {this.state.todoList.map((todo) => {
                    return (

                        <TodoItem
                            key={todo.id}
                            deleteItem={this.deleteItem(todo.id)}
                            changeDone={this.changeDone(todo.id)}
                            changeImportant={this.changeImportant(todo.id)}
                            important={todo.important}
                            done={todo.done}>
                            {todo.name}
                        </TodoItem>)
                })}
            </ul>
        );
    }

};



export default TodoList;