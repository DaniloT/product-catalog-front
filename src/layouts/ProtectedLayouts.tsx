import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const ProtectedLayout: React.FC = () => {
    return (
        <>
            <Header />
            <main style={{ padding: '24px' }}>
                <Outlet />
            </main>
        </>
    );
};

export default ProtectedLayout;
