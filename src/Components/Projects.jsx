import React from "react";
import ArtworkImage from "../assets/FullPageApp.png";
import ArtworkImage2 from "../assets/Screenshot1.png";
import ArtworkImage3 from "../assets/Screenshot2.png";


// const Projects = [
//   {id: 1,
//    descriptions: "It can be challenging to maintain a balance between necessary duties and self-nurt",
//    link : 'https://github.com/Blakenb/project-1-group07.git',
//    image : ArtworkImage,


function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <ul>
        <li>
          <h2>Project 1</h2>
          <p>Project 1 Description</p>
          {/* <p>It can be challenging to maintain a balance between necessary duties and self-nurturing. The Breathe Easy application was created to help users map out their day while prioritizing their mental health. With Breathe Easy, users can track their daily tasks, log their moods, and practice mindfulness strategies. The data gathered will help the user spot trends and correlations between moods and tasks.
          Technologies used were HTML, CSS, and JavaScript.Remember to breathe easy and organize your day.</p> */}
          <ul>
            <li>
            <img src={ArtworkImage} alt="Project 1 Screenshot" />
            </li>
            <li><a href="https://github.com/Blakenb/project-1-group07.git">Project 1 Github Link</a></li>
          </ul>
        </li>
        <li>
          <h2>Project 2</h2>
          <p>Project 2 Description</p>
          <li>
              <img src={ArtworkImage2} alt="Project 1 Screenshot" />
            </li>
          <ul>
            <li><a href="https://github.com/Blakenb/project-1-group07.git">Project 2 Github Link</a></li>
          </ul>
        </li>
        <li>
          <h2>Project 3</h2>
          <p>Project 3 Description</p>
          <li>
              <img src={ArtworkImage3} alt="Project 1 Screenshot" />
            </li>
          <ul>
            <li><a href="https://github.com/Blakenb/project-1-group07.git">Project 3 Github Link</a></li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Projects;
// Compare this snippet from src/Pages/Portfolio.jsx:
