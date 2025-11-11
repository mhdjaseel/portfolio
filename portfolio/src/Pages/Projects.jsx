import React from "react";
import pic from "../assets/p1.png";
import pic2 from "../assets/p2.png";
import pic3 from "../assets/p3.png";
import { motion } from "framer-motion"

function Projects() {
  return (
    <motion.div  initial={{scale:0,opacity:0}}  whileInView={{scale:1,opacity:1}} transition={{duration:2}} id="projects" className="mt-5" >
      <h1 className="text-center font-Montserrat text-2xl font-bold text-blue-950 mt-4 ">
        Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 mb-8">
        {/* Card 1 */}
        <div className="border-2 border-blue-950 rounded-lg p-2 sm:m-2">
          <div className="w-full overflow-hidden mb-4">
            <img
              src={pic}
              alt="projects"
              className="w-full h-auto object-cover rounded"
            />
          </div>
          <h1 className="text-lg font-semibold font-Mulish">
            E-Hospitality Management System
          </h1>
          <p className="text-gray-600 mt-1">
            About About E-clinic healthcare management system is designed by
            using React and Django with REST API to empower patients by giving
            them easy and secure access to various health-related services. it
            contain 3 module Patient,Doctors and admin.
          </p>
          <a href="https://github.com/mhdjaseel/E-clinic" className="overflow-hidden underline">
            GitHub Link
          </a>
        </div>

        <div className="border-2 border-blue-950 rounded-lg p-2 sm:m-2">
          <div className="w-full overflow-hidden mb-4">
            <img
              src={pic2}
              alt="projects"
              className="w-full h-auto object-cover rounded"
            />
          </div>
          <h1 className="text-lg font-semibold font-Mulish">Blog Website</h1>
          <p className="text-gray-600 mt-1">
            About A Django-based blog application with post creation, user
            profiles, comment support, and an admin panel for managing content.
            Includes user authentication and profile editing functionality for
            both users and admins.
          </p>
          <a href="https://github.com/mhdjaseel/blog_website" className="overflow-hidden underline"  >
           GitHub Link
          </a>
        </div>

        <div className="border-2 border-blue-950 rounded-lg p-2 sm:col-span-2 sm:m-10 md:m-2 sm:mt-4 md:col-span-1 ">
          <div className="w-full overflow-hidden mb-4">
            <img
              src={pic3}
              alt="projects"
              className="w-full h-auto object-cover rounded"
            />
          </div>
          <h1 className="text-lg font-semibold font-Mulish">Netflix Clone</h1>
          <p className="text-gray-600 mt-1">
            A lightweight Netflix-style movie browser built with React, powered
            by the TMDB API.
          </p>
          <a className="overflow-hidden underline" href=" https://github.com/mhdjaseel/Netflix_clone">
            GitHub Link
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
