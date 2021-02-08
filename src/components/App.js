import React from 'react';
import Header from './Header';
import TodoList from './TodoList';

const App = () => {
    return (
        <div className="container jumbotron">
            <div className="ml-auto mr-auto col-md-6 col-sm-8">
            <Header/>
            <TodoList/>
            </div>
        </div>
    );
};

export default App;
