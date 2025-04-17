import React from 'react';

import Footer from './Component/Footer/Footer'; // Footer
import { Outlet } from 'react-router-dom';
import Header from './Component/Header/Header';

function Layout() {
  return (
    <>
      <Header/>
      <Outlet />
     <Footer/>
    </>
  );
}

export default Layout;