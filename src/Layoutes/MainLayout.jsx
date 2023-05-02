import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Navber from '../Shared/Navber/Navber';

const MainLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet/>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;