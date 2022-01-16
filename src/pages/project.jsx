import React from "react";
import { projectheader } from "../components/portfolio";
import Project_img from "../assets/images/undraw_Coding.svg";
import "../assets/css/projects.css";
import { ProjectDetails } from "../components/projects";

class Projects extends React.Component {
  render() {
    return (
      <div>
        <div className="projects-main">
          <div className="basic-projects">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <img src={Project_img} alt="" />
              </div>
              <div className="projects-heading-text-div">
                <p className="projects-heading-text">
                  {projectheader["title"]}
                </p>
                <p className="projects-header-description">
                  {projectheader["description"]}
                </p>
              </div>
            </div>
          </div>

          <div className="container-fluid mb-5">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row gy-4">
                  <div className="row row-cols-1 row-cols-md-3 g-4">
                    {ProjectDetails.map((project) => {
                      return (
                        <div className="col">
                          <div className="card h-100">
                            <img
                              src={project.img}
                              className="card-img-top"
                              alt="..."
                              id="project_img"
                            />
                            <div className="card-body">
                              <h5 className="card-title">{project.title}</h5>
                              <p className="card-text">
                                {project.description}.
                              </p>
                              <a
                                href={project.link}
                                className="btn btn-primary stretched-link"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Code
                              </a>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
