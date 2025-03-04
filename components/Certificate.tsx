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
import { MoveUpRight, MoveRight } from "lucide-react";
import { useState } from "react";

const certifications = [
  {
    imagePath: "/JS.png", // Replace with your uploaded image
    title: "JavaScript Data Structures",
    description: "learned various JavaScript concepts, including array methods, arrow functions, objects, local storage, query selectors, and DOM manipulation. I also explored working with REST APIs and data structures like stacks.",
    skills: ["JavaScript", "Rest API", "Stacks"],
    link: "https://www.freecodecamp.org/certification/Ajutzu/javascript-algorithms-and-data-structures-v8"
  },
  {
    imagePath: "/CSS.jpg", 
    title: "CSS Complete Course For Beginners",
    description: "Learned the fundamental concepts of CSS through theory and practical demonstrations. I explored writing CSS scripts, various styling techniques, and gained hands-on experience with CSS styles, 2D and 3D transforms. Additionally, I studied CSS backgrounds, animations, and methods of including CSS in HTML.",
    skills: ["CSS"],
    link: "https://www.udemy.com/course/css-complete-course-for-beginners/?couponCode=ST10MT30325G1", 
  },
  {
    imagePath: "/HTML.jpg", 
    title: "HTML For Beginners",
    description: "Learned the basic structure of HTML webpages, how to create an HTML document, and the differences between block-level and inline elements. I also explored how various elements are used within an HTML document.",
    skills: ["HTML"],
    link: "https://www.udemy.com/certificate/UC-0a096914-214a-4678-bb46-99884ff14ab7/", 
  },
];

export default function Certificate() {
  return (
    <section id="certificates" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Certificates
        </h2>
      </div>
      {certifications.map((cert, index) => (
        <a
          key={index}
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:cursor-pointer"
        >
          <Card className="group lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-5 border-transparent hover:border dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50">
            <CardHeader className="h-full w-full lg:w-1/3 mb-4 p-0">
              <Image
                src={cert.imagePath}
                alt={`Image of ${cert.title}`}
                width={1920}
                height={1080}
                priority
                className="border border-muted-foreground rounded-[0.5rem]"
              />
            </CardHeader>
            <CardContent className="flex flex-col p-0 w-full lg:w-2/3">
              <p className="text-primary font-bold">
                {cert.title}
                <MoveUpRight className="ml-1 inline-block h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </p>
              <CardDescription className="py-3 text-muted-foreground">
                {cert.description}
              </CardDescription>
              <CardFooter className="p-0 flex flex-wrap gap-2">
                {cert.skills.map((skill, index) => (
                  <Badge key={index}>{skill}</Badge>
                ))}
              </CardFooter>
            </CardContent>
          </Card>
        </a>
      ))}
    </section>
  );
}
