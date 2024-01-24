import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../component/navbar/Navbar';
import Footer from '../component/footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;