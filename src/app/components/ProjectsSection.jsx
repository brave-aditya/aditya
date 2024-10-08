'use client'
import React from "react";
import { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Social Media Application",
    description: "A complete social media application with beautiful UI.",
    image: "/images/social.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/brave-aditya/social",
    previewUrl: "https://social-umber.vercel.app/",
  },
  {
    id: 2,
    title: "Chatting Apllication",
    description: "An application for chatting where users can add other people into chatrooms and chat simultaneously.",
    image: "/images/chat.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/brave-aditya/chat",
    previewUrl: "https://chat-ochre-zeta.vercel.app/",
  },
  {
    id: 3,
    title: "Snake Game",
    description: "A beautiful memory from our childhood reimagined into a website.",
    image: "/images/snake.png",
    tag: ["All", "Games"],
    gitUrl: "https://github.com/brave-aditya/snake",
    previewUrl: "https://snake-omega-tan.vercel.app/",
  },
  {
    id: 4,
    title: "Weather Apllication",
    description: "A complete weather application to check before travelling anywhere.",
    image: "/images/weather.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/brave-aditya/weather",
    previewUrl: "https://brave-aditya.github.io/weather/",
  },
  {
    id: 5,
    title: "Todo CRUD Application",
    description: "CRUD operations with express and mongoDB",
    image: "/images/todo.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Tic-Tac-Toe Game",
    description: "Simple tic-tac-toe game",
    image: "/images/tictactoe.png",
    tag: ["All", "Games"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <div className="mx-auto pb-1 w-fit bg-gradient-to-br from-[#ff0039] via-[#fc00ff] to-[#ff0039] mb-4">
            <span className="block top-0 bg-[#121212] text-4xl font-bold text-white py-2 px-2">My Projects</span>
          </div>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Games"
          isSelected={tag === "Games"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;