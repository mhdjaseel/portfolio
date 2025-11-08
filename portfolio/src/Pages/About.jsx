import React from 'react';
import pic from '../assets/pic1.jpg';

function About() {
  return (
    <section id='home' className="max-w-5xl mx-auto px-6 py-16 mt-4 grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
      

      <div className="flex flex-col justify-center items-center">
        <img 
          src={pic} 
          alt="Muhammed Jaseel C A" 
          className="w-2/3 sm:w-4/5  rounded-3xl shadow-lg hover:shadow-2xl " 
        />
        <div className='flex gap-8 mt-2 text-blue-950'> 
            <a className="text-2xl hover:hover:scale-110" href="https://www.linkedin.com/in/muhammed-jaseel-a3a11031b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i class="fa-brands fa-linkedin"></i></a> 
            <a class="text-2xl hover:scale-110" href="https://www.instagram.com/muhammed__jaseel_?igsh=MTl2eGQxZWplMjQ5Yw=="><i class="fa-brands fa-instagram"></i></a> 
            <a class="text-2xl hover:scale-110" href="https://github.com/mhdjaseel"><i class="fa-brands fa-github"></i></a>

        </div>
      </div>


      <div className="text-center sm:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-2">
          Hello, I'm Jaseel
        </h2>
        <h3 className="text-lg sm:text-xl font-medium text-gray-600 mb-4">
          Full-Stack Python Developer
        </h3>
        <p className="text-blue-950 leading-relaxed font-Mulish">
          I’m Muhammed Jaseel C A, a Full-Stack Developer based in Kerala, India. 
          I’m a recent Diploma graduate in Computer Engineering (2025), passionate about 
          improving my coding skills and developing modern web applications. 
          I specialize in building full-stack web apps using Python, Django, React, 
          and the Django REST Framework (DRF). I love creating scalable, high-performance 
          web solutions that combine functionality and clean design.
        </p>
        <div className='text-left ml-5 font-semibold sm:ml-0 xl:text-left xl:ml-0 mt-2'>
        <a download href={pic} className='bg-blue-900 text-white font-Mulish p-2 pl-3 rounded-md   border cursor-pointer  hover:bg-white hover:text-blue-900'>Resume </a>

        </div>
      </div>

    </section>
  );
}

export default About;
