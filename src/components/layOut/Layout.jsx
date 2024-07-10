import React from "react";
import NaveBar from "../navebar/NaveBar";
import { Outlet } from "react-router-dom";
import Serviece from "../../page/toppage/servieceSection/Serviece";
import TopPage from "../../page/toppage/TopPage";
import MidlSection from "../../page/midilSection/MidlSection";
import AboutSection from "../../page/aboutSection/AboutSection";
import Courcess from "../../page/Courcess/Courcess";
import LatestProjects from "../../page/latestProjects/Projects";
import Team from "../../page/team/TeamSection";
import Blog from "../../page/blogs/Blogs";
import { LastSection } from "../../page/LastSection/LastSection";
import { Footer } from "../../page/Footer";

function Layout() {
  return (
    <div>
      {/* <NaveBar /> */}
      <main className="">
        <TopPage />
        <div className="p-2 sm:px-16 mb-5 md:mx-10">
          <Serviece />
          <MidlSection />
          <AboutSection />
          <Courcess />
          <LatestProjects />
          <Team />
          <Blog />
          <LastSection />
        </div>
      </main>
    </div>
  );
}

export default Layout;
