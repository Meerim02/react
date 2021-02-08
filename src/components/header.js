import React from 'react';
import AddFrom from './AddFrom';

const Header = () => {
    return (
        <div>
            <h1 className="text-center">Todo</h1>
            <AddFrom/>
        </div>
    );
};

export default Header;