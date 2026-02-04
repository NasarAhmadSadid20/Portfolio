import React from "react";
import SectionTitle from "./sectionTitle";
import { SquareArrowOutUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../constants";
import PropTypes from "prop-types";

const Project = React.forwardRef(({ link, title, tags, image }, ref) => {
  return (
    <div ref={ref}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col gap-y-4"
      >
        {/* <div className="relative h-[300px] w-full overflow-hidden rounded-xl before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/80 before:to-black/15 before:opacity-0 before:transition-opacity group-hover:before:opacity-100">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />
          <button className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-50 p-3 opacity-0 transition-opacity group-hover:opacity-100">
            <SquareArrowOutUpRight color="white" />
          </button>
        </div> */}

        <div className="relative h-[250px] w-full overflow-hidden rounded-xl before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/80 before:to-black/15 before:opacity-0 before:transition-opacity group-hover:before:opacity-100">
  <img
    src={image}
    alt={title}
    className="h-full w-full object-cover"
  />
  <button className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-50 p-3 opacity-0 transition-opacity group-hover:opacity-100">
    <SquareArrowOutUpRight color="white" />
  </button>
</div>

        <div className=" flex flex-col gap-y-3">
          <p className="text-base font-medium text-gray-90 transition-colors group-hover:text-primary-50">
            {title}
          </p>
          <div className=" flex flex-wrap gap-2">
           {tags.map((tag, index) => (
  <span 
    key={index} 
    className="flex h-7 items-center justify-center rounded-full border border-solid border-primary-50 px-4 text-sm font-normal text-primary-50"
  >
    {tag}
  </span>
))}
          </div>
        </div>
      </a>
    </div>
  );
});

Project.displayName = "Project";

Project.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  tags: PropTypes.array,
  image: PropTypes.string,
};

const ProjectMotion = motion(Project);

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container relative flex flex-col items-center gap-y-9">
        <SectionTitle
          title="PORTFOLIO"
          subtitle="A Glimpse of what I've Created"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectMotion
              key={project.id || index}
              link={project.link}
              title={project.title}
              tags={project.tags}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;