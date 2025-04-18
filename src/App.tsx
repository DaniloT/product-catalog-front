import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import AnimatedRoutes from './components/AnimatedRoutes';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
    return (
        <>
            <Router>
                <AnimatedRoutes />
            </Router>
            <ToastContainer position="top-right" autoClose={3000} />
        </>
    );
};

export default App;
