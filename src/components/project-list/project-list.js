import React from "react";
import ProjectListItem from "../project-list-item";

import "./project-list.scss";

const ProjectList = ({ projects }) => {
  const elements = projects.map(item => {
    if (item != null && typeof item == "object") {
      const { id, ...itemProps } = item;
      return (
        <ProjectListItem key={id} {...itemProps} />
      );
    };
  });
  return (
    <div>
      <h2 className='projects-h1'>Кое-что из моих проектов</h2>
      <div className='block-scroll'>
        <div className='projects-block'>{elements}</div>
      </div>
    </div>
  )
};

export default ProjectList;
