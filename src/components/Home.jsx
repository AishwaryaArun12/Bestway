import React from "react";
import NaveBar from "./navebar/NaveBar";
import { Outlet } from "react-router-dom";
import { Footer } from "../page/Footer";

function Home() {
  return (
    <div>
      <NaveBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Home;
