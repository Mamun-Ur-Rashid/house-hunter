import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../component/navbar/Navbar';
import Footer from '../component/footer/Footer';
import Banner from '../component/home/home/Banner';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;