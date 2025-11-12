import React from "react";

function Skills() {
  return (
    <div id="skills" className="mt-5"  >
      <h1 className="text-center font-Montserrat text-2xl font-bold text-blue-950">
        Skills
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-3 justify-items-center text-center md:mt-8">
        <div className="mt-3">
          <i class="fab fa-python fa-3x"></i>
          <h1>PYTHON</h1>
        </div>
        <div className="mt-3">
          <i class="fab fa-html5 fa-3x "></i>
          <h1>HTML</h1>
        </div>

        <div className="mt-3">
          <i class="fab fa-css3-alt fa-3x"></i>
          <h1>CSS</h1>
        </div>
        <div className="mt-3">
          <i class="fab fa-react fa-3x"></i>
          <h1>REACT</h1>
        </div>
        <div className="mt-3">
          <i class=" fab fa-bootstrap fa-3x"></i>
          <h1>BOOTSRAP</h1>
        </div>
        <div className="mt-3">
          <i class="fas fa-code fa-3x"></i>
          <h1>DJANGO</h1>
        </div>
        <div className="mt-3">
          <i class="fab fa-git-alt fa-3x"></i>
          <h1>GIT</h1>
        </div>
        <div className="mt-3">
          <i class="fab fa-github fa-3x"></i>
          <h1>GITHUB</h1>
        </div>

        <div className="mt-3">
          <i class="fas fa-database fa-3x "></i>
          <h1>POSTGRESQL</h1>
        </div>
        <div className="mt-3">
          <i class="fab fa-css3-alt fa-3x"></i>
          <h1>TAILWIND CSS</h1>
        </div>
        <div className="mt-3">
          <i class="fas fa-database fa-3x"></i>
          <h1>MYSQL</h1>
        </div>
        <div className="mt-3">
          <i class="fa-brands fa-docker fa-3x"></i>
          <h1>DOCKER</h1>
        </div>
      </div>
    </div>
  );
}

export default Skills;
