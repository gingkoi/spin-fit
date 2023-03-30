import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <div className="scroll-smooth font-poppin">
      <header>
        <Banner />
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
