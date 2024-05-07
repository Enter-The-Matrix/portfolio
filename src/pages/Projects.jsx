import { useState } from "react";
import chatty1 from "../assets/chatty/chatty1.jpg";
import chatty2 from "../assets/chatty/chatty2.jpg";
import chatty3 from "../assets/chatty/chatty3.jpg";
import chatty4 from "../assets/chatty/chatty4.jpg";
import crio1 from "../assets/crio/crio1.jpg";
import crio2 from "../assets/crio/crio2.jpg";
import crio3 from "../assets/crio/crio3.jpg";
import crio4 from "../assets/crio/crio4.jpg";
import crio5 from "../assets/crio/crio5.jpg";
import crio6 from "../assets/crio/crio6.jpg";

function Projects() {
  const projects = [
    {
      name: "Chatty app ",
      description: "Real Time Chat app (may take time to load as project is hosted on free tier)",
      link: "https://chatty-react-app.onrender.com/",
      img: [chatty1, chatty2, chatty3, chatty4],
    },
    {
      name: "Crio Do Projects",
      description: "Contains Crio Projects",
      link: "https://www.crio.do/learn/portfolio/ashwanisajwan27/",
      img: [crio1, crio2, crio3, crio4, crio5, crio6],
    },
  ];

  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  return (
    <div id="projects" className="md:px-20 mt-10 md:mt-20 font-semibold">
      <h1 className="text-4xl mb-6 text-ends md:text-start text-primary text-glow">
        Projects
      </h1>

      <div className="flex w-full flex-col md:flex-row">
        <div className=" flex overflow-scroll md:flex-col gap-6 border-l-2 border-[#075e7999] md:w-1/5">
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className=" cursor-pointer  "
                onClick={() => setSelectedItemIndex(index)}
              >
                <h1
                  className={`text-lg p-2  md:inline-block  whitespace-nowrap  md:text-2xl ${
                    selectedItemIndex === index
                      ? "text-primary border-primary  py-3 border-l-4 -ml-[3px] bg-[#18343c] "
                      : "text-white"
                  } `}
                >
                  {project.name}
                </h1>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-4 md:w-4/5">
          <h1 className="text-primary text-2xl text-glow">
            <a
              href={projects[selectedItemIndex].link}
              target="_blank"
              title="Click here to visit project page"
            >
              {projects[selectedItemIndex].name}
            </a>
          </h1>

          <h1 className=" "> {projects[selectedItemIndex].description}</h1>

          {/* carousel starts*/}
          <div>
            <div className="carousel w-full">
              {projects[selectedItemIndex].img.map((imageUrl, index) => (
                <div
                  key={index}
                  id={`item${index + 1}`}
                  className="carousel-item w-full"
                >
                  <img
                    src={imageUrl}
                    className="w-full"
                    alt={`Image ${index + 1}`}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
              {projects[selectedItemIndex].img.map((_, index) => (
                <a
                  key={index}
                  href={`#item${index + 1}`}
                  className="btn btn-xs"
                >
                  {index + 1}
                </a>
              ))}
            </div>
          </div>
          {/* carousel  ends*/}
        </div>
      </div>
    </div>
  );
}

export default Projects;
