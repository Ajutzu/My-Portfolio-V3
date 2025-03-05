"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveUpRight, MoveDown, MoveUp, MoveRight } from "lucide-react";
import { useState } from "react";

const jobProjects = [
  {
    imagePath: "/trektribe.png",
    title: "TrekTribe",
    description:
      "A comprehensive web platform developed as my final Web Development project that connects cyclists and runners in a vibrant community. TrekTribe provides specialized features tailored to both sports while capitalizing on the surging popularity of outdoor fitness activities.",
    skills: ["PHP", "HTML5", "CSS3", "JavaScript", "MySQL", "Bootstrap"],
    link: "https://trektribe.wuaze.com",
  },
  {
    imagePath: "/gradify.png",
    title: "Gradify",
    description:
      "A web-based application that allows users to manage and calculate their grades, built with PHP and MySQL. It provides a user-friendly interface for entering grades and calculating final grades. It will also rank the students based on their final grades in a specific classroom.",
    skills: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Bootstrap"],
    link: "https://gradify.likesyou.org",
  },
  {
    imagePath: "/abus.png",
    title: "Abus - DBMS Project",
    description:
      "A comprehensive appointment and booking system for resorts and hotels, developed as a Database Management System (DBMS) project. The system handles reservations and scheduling, demonstrating core booking functionalities without payment integration.",
    skills: ["PHP", "HTML5", "CSS3", "JavaScript", "Python", "PostgreSQL"],
    link: "https://github.com/Ajutzu/System-Project-ADBMS",
  },
  {
    imagePath: "/portfolioV2.png",
    title: "My Portfolio V2",
    description:
      "A simple portfolio website built using React, connected to Google Analytics and featuring Gemini Integration. The website showcases personal projects, skills, and achievements in an elegant and minimalist design. It includes smooth animations, interactive elements, and a chatbot that enhances user engagement.",
    skills: ["React", "Boostrap", "Gemini API"],
    link: "https://aeron-james-castillo.netlify.app/",
  },
  {
    imagePath: "/toDoList.png",
    title: "TimeSand",
    description:
      "This To-Do List app allows users to add and delete tasks, all while saving data in the browser's local storage for persistent use. It provides a clean and simple interface for managing daily tasks, with an easy-to-use design built with HTML, CSS, and Bootstrap.",
    skills: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
    link: "https://ajutzu.github.io/To-Do-List-App/",
  },
  {
    imagePath: "/chatBot.png",
    title: "Chat Bot - Activity",
    description:
      "A simple chat bot built using Python that can answer questions and provide information about the user. It utilizes basic string matching techniques and predefined responses to simulate a conversation. This project demonstrates the fundamentals of AI-driven text processing and serves as a beginner-friendly introduction to chatbot development.",
    skills: ["Python"],
    link: "https://github.com/Ajutzu/Chat-Bot-Project-ACP",
  },
  {
    imagePath: "/portfolioV1.png",
    title: "My Portfolio V1",
    description:
      "A simple portfolio website built using HTML, CSS, and JS, connected to Google Analytics and featuring a simple JS Bot. The website showcases personal projects, skills, and achievements in an elegant and minimalist design. It includes smooth animations, interactive elements, and a chatbot that enhances user engagement.",
    skills: ["HTML5", "CSS3", "JavaScript"],
    link: "https://ajutzu-portfolio-v1.pages.dev/",
  },
  {
    imagePath: "/landingPage.png",
    title: "Landing Page",
    description:
      "A fully responsive and interactive landing page built with Bootstrap CSS and HTML, featuring a user-friendly interface. Designed for modern web accessibility, this landing page ensures smooth navigation across all devices. It includes eye-catching animations, a well-structured layout, and optimized performance for a seamless browsing experience.",
    skills: ["HTML5", "CSS3", "Bootstrap"],
    link: "https://activity-1-bootstrap-wts.pages.dev/",
  },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  // Determine the number of projects to display based on the showAll state
  const displayedProjects = showAll ? jobProjects : jobProjects.slice(0, 3);

  return (
    <section id="projects" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Projects
        </h2>
      </div>
      <>
        {displayedProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer"
          >
            <Card className="group lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50">
              <CardHeader className="h-full w-full lg:w-1/3 mb-4 p-0">
                <Image
                  src={project.imagePath}
                  alt={`Screenshot of ${project.title}`}
                  width={1920}
                  height={1080}
                  priority
                  className="bg-[#141414] mt-2 border border-muted-foreground rounded-[0.5rem]"
                />
              </CardHeader>
              <CardContent className="flex flex-col p-0 w-full lg:w-2/3">
                <p className="text-primary font-bold">
                  {project.title}{" "}
                  <MoveUpRight className="ml-1 inline-block h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                </p>
                <CardDescription className="py-3 text-muted-foreground">
                  {project.description}
                </CardDescription>
                <CardFooter className="p-0 flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <Badge key={index}>{skill}</Badge>
                  ))}
                </CardFooter>
              </CardContent>
            </Card>
          </a>
        ))}
      </>
      <div className="lg:px-12 mt-12">
        <button
          onClick={() => setShowAll(!showAll)}
          className="inline-flex items-center font-medium leading-tight text-foreground group"
        >
          <span className="border-b border-transparent pb-px transition hover:border-primary motion-reduce:transition-none">
            {showAll ? "View Less" : "View More"}
          </span>
          <MoveRight className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
        </button>
      </div>
    </section>
  );
}
