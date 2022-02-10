import React from 'react'
import { Helmet } from "react-helmet";
import Footer from './footer';
import NavBar from './navbar';

const Layout = ({
  children,
  title,
  selectLang,
  openLang,
  page = "home"
}) => {
  return (
    <div className='flex flex-col items-center min-h-screen justify-between relative overflow-x-hidden text-app-black-100'>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <NavBar />
      <main className="w-full flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout