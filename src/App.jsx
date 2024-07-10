import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Layout from "./components/layOut/Layout";
import TopPage from "./page/toppage/TopPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import ProjectPage from "./page/latestProjects/ProjectPage";
// import Projects from "./page/latestProjects/Projects";
import { ContactUs } from "./page/ContactUs/ContactUs";

import BlogPage from "./page/blogs/BlogPage";
import ScrollToTop from "./components/TopScroll";
import BlogDetailPage from "./page/blogs/BlogDetailPage";
import { Services } from "./page/Services/Services";
import { Courses } from "./page/Courses/Courses";
import { CourseDetail } from "./page/CourseDetail";
// import TeamPage from "./page/team/TeamPage";
import TeamScreen from "./page/team/TeamScreen"
import { About } from "./page/About/About";


function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route element={<Home />} path="/">
            <Route path="/" element={<Layout />} />
            {/* <Route path="/projects" element={<Projects />} /> */}
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/blogDetails" element={<BlogDetailPage />} />
            <Route path="/team" element={<TeamScreen />} />
            <Route path="/services" element={<Services />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courseDetails" element={<CourseDetail />} />
            <Route path="/about" element={<About />} />
           
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
