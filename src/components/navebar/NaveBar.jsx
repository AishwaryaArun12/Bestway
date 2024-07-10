import React, { useState } from "react";

function NaveBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar z-50">
      <div
        onClick={() => {
          window.location.href = "/";
        }}
        className="navbar-logo sm:ml-10 font-extrabold text-xl cursor-pointer "
      >
        Exim InfoTech
      </div>
      <div className={`navbar-links text-white text-lg ${isOpen ? "open" : ""}`}>
        <a
          className={`${
            window.location.pathname == "/services" ? "text-[#3D9970]" : ""
          }`}
          href="/services"
        >
          Services
        </a>
        <a
          className={`${
            window.location.pathname == "/projects" ? "text-[#3D9970]" : ""
          }`}
          href="/projects"
        >
          Projects
        </a>

        <a
          className={`${window.location.pathname == "/Courses" ? "text-[#3D9970]" : ""}`}
          href="/Courses"
        >
          Courses
        </a>
        <a
          className={`${window.location.pathname == "/about" ? "text-[#3D9970]" : ""}`}
          href="/about"
        >
          About Us
        </a>
        <a
          className={`${window.location.pathname == "/contact" ? "text-[#3D9970]" : ""}`}
          href="/contact"
        >
          Contact Us
        </a>
        <div className='lg:flex ml-28  hidden'>
      <label htmlFor=""><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6743 0C7.94237 0 5.21055 1.04209 3.12621 3.12631C-1.04207 7.2946 -1.04207 14.0543 3.12621 18.2226C5.21043 20.3068 7.94245 21.3489 10.6743 21.3489C13.1739 21.3489 15.6721 20.4777 17.6751 18.7339L22.7251 23.7808C22.8706 23.9262 23.0625 23.9997 23.2529 23.9997C23.4448 23.9997 23.6353 23.9262 23.7807 23.7808C24.0731 23.4899 24.0731 23.0161 23.7807 22.7252L18.7307 17.6783C22.3848 13.4843 22.2139 7.11764 18.2224 3.12631C16.1382 1.04209 13.4062 0 10.6743 0ZM10.6743 2.63601V2.63751C10.2845 2.63601 9.89915 2.6645 9.5138 2.72148H9.5093C9.36086 2.74547 9.21841 2.81594 9.10445 2.9299C8.81206 3.22079 8.81206 3.69462 9.10445 3.9855C9.2499 4.13245 9.44182 4.20442 9.63225 4.20442C9.68323 4.20442 9.73271 4.20142 9.78219 4.19093H9.78369C10.0791 4.15044 10.3775 4.12945 10.6758 4.12945C12.3507 4.12945 14.0241 4.76822 15.3032 6.04573C16.4353 7.1778 17.065 8.62025 17.194 10.0989V10.1019C17.2075 10.2728 17.2795 10.4422 17.4114 10.5727V10.5742C17.5569 10.7196 17.7488 10.7931 17.9392 10.7931C18.1297 10.7931 18.3216 10.7196 18.467 10.5742C18.638 10.4033 18.7085 10.1693 18.6785 9.94744V9.94594C18.515 8.13763 17.7428 6.37577 16.3588 4.99036C14.7889 3.42197 12.7317 2.63601 10.6743 2.63601ZM10.6743 1.49193C13.024 1.49193 15.375 2.38858 17.1669 4.18191C20.7535 7.76705 20.7535 13.5818 17.1669 17.167C15.375 18.9603 13.0239 19.857 10.6743 19.857C8.32477 19.857 5.97519 18.9603 4.18182 17.167C0.595149 13.5818 0.595149 7.76712 4.18182 4.18191C5.97515 2.38858 8.32477 1.49193 10.6743 1.49193Z" fill="white" fill-opacity="0.6"/>
</svg>
</label>
      <input type="text"  className=' bg-transparent w-28 text-white'/>
    </div>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
}

export default NaveBar;
