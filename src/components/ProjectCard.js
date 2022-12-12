import React from 'react'
import Projects from "./Projects"

const ProjectCard = (props) => {
  const data = [
    {
      id: "e1",
      title: "Todo App",
      data: "description",
      img: "./images/p.jpeg"
    },
    {
      id: "e1",
      title: "Food Order App",
      data: "description",
    },
    {
      id: "e1",
      title: "Netflix Clone",
      data: "description",
    },
  ];

  return (
    <>
      <Projects
        id={data[0].id}
        title={data[0].title}
        data={data[0].data}
        img={data[0].img}
      
      ></Projects>
      <Projects
        id={data[1].id}
        title={data[1].title}
        data={data[1].data}
      ></Projects>
      <Projects
        id={data[2].id}
        title={data[2].title}
        data={data[2].data}
      ></Projects>
    </>
  );
}

export default ProjectCard