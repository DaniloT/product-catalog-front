import React from 'react';
import { useLocation, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import ProductCreatePage from '../pages/ProductCreatePage';
import ProductListPage from '../pages/ProductListPage';
import LoginPage from '../pages/LoginPage';
import ProtectedRoute from './ProtectedRoute';
import ProtectedLayout from '../layouts/ProtectedLayouts';

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
};

const pageTransition = { duration: 0.3 };

const AnimatedRoutes: React.FC = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route
                    path="/login"
                    element={
                        <motion.div
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={pageVariants}
                            transition={pageTransition}
                        >
                            <LoginPage />
                        </motion.div>
                    }
                />
                <Route element={<ProtectedRoute />}>
                    <Route element={<ProtectedLayout />}>
                        <Route
                            path="/products"
                            element={
                                <motion.div
                                    initial="initial"
                                    animate="in"
                                    exit="out"
                                    variants={pageVariants}
                                    transition={pageTransition}
                                >
                                    <ProductListPage />
                                </motion.div>
                            }
                        />
                        <Route
                            path="/products/create"
                            element={
                                <motion.div
                                    initial="initial"
                                    animate="in"
                                    exit="out"
                                    variants={pageVariants}
                                    transition={pageTransition}
                                >
                                    <ProductCreatePage />
                                </motion.div>
                            }
                        />
                        <Route
                            path="/products/edit/:id"
                            element={
                                <motion.div
                                    initial="initial"
                                    animate="in"
                                    exit="out"
                                    variants={pageVariants}
                                    transition={pageTransition}
                                >
                                    <ProductCreatePage />
                                </motion.div>
                            }
                        />
                    </Route>
                </Route>

                {/* Fallback route */}
                <Route path="*" element={<Navigate to="/products" />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
