import React from 'react';
import {Outlet} from 'react-router-dom';

const App = () => {
    return (
            <div className="app">
                <h1>Team Members</h1>
                <Outlet />
            </div>
    );
};

export default App;
