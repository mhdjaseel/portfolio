import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion"
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div  className="fixed top-0 left-0 right-0 flex justify-between p-4 bg-blue-950 text-white xl:justify-around ">
        <h1 className="font-semibold font-Montserrat">Muhammed Jaseel CA</h1>

        <div  className="hidden sm:flex gap-3 md:pr-5 lg:gap-8">
          <ul className="font-Mulish flex gap-3 cursor-pointer ">
            <Link
              to="home"
              smooth={true}
              duration={600}
              className="cursor-pointer hover:text-teal-400"
            >
              Home
            </Link>

            <Link
              to="skills"
              smooth={true}
              duration={600}
              className="cursor-pointer hover:text-teal-400"
            >
              Skills
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={600}
              className="cursor-pointer hover:text-teal-400"
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={600}
              className="cursor-pointer hover:text-teal-400"
            >
              Contact Me
            </Link>
          </ul>
        </div>

        <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
          <i
            className={`fa-solid ${
              isOpen ? "fa-xmark" : "fa-bars"
            } text-2xl transition-transform duration-300 cursor-pointer`}
          ></i>
        </button>
      </div>
      <div
        className={`fixed top-12 right-0 h-full w-2/4 sm:w-1/3 bg-blue-950 text-white transform transition-transform duration-600 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-6 pt-3 p-6 mt-10 text-lg font-medium">
          <Link
            to="home"
            smooth={true}
            duration={600}
            className="cursor-pointer hover:text-teal-400"
          >
            Home
          </Link>

          <Link
            to="skills"
            smooth={true}
            duration={600}
            className="cursor-pointer hover:text-teal-400"
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={600}
            className="cursor-pointer hover:text-teal-400"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={600}
            className="cursor-pointer hover:text-teal-400"
          >
            Contact Me
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
