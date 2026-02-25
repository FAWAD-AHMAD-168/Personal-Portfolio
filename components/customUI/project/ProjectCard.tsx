"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardAction,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code } from "lucide-react";

interface ProjectCardProps {
  imageSrc: string;
  projectType: string;
  githubLink: string;
  date: string;
  projectTitle: string;
  projectDescription: string;
  techStack: string[];
}

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <Card className="relative  mx-auto w-[95%] md:w-full h-fit md:h-150 lg:h-fit xl:h-143 border-(--bg-projectsCard-color)   bg-(--bg-projectsCard-color)  shadow-[#9ca3af] hover:-translate-y-2 transition-all duration-600 max-w-sm pt-0 rounded-lg cursor-context-menu">
      <Image
        src={props.imageSrc}
        alt="Project Image"
        width={10}
        height={300}
        className="relative z-20 aspect-video w-full object-cover rounded-md"
      />

      <CardHeader>
        <CardAction>
          <Badge className="bg-(--bg-projectType-color) text-(--text-secondary-color) font-semibold">
            {props.projectType}
          </Badge>
        </CardAction>

        <div className="flex gap-6 mb-2">
          <Link
            href={props.githubLink}
            target="_blank"
            className="group w-23.5 flex items-center text-[14px] text-(--text-secondary-color) font-semibold underline hover:text-(--primary-color) transition-all duration-300"
          >
            View Code
            <Code
              size={14}
              className="ml-1 mt-0.5  opacity-0 group-hover:opacity-100 transition-all duration-300 text-current"
            />
          </Link>

          <p className="text-(--text-secondary-color) text-[12px] mt-1">
            {props.date}
          </p>
        </div>

        <CardTitle className="text-(--text-primary-color) font-semibold text-[18px]">
          {props.projectTitle}
        </CardTitle>

        <CardDescription className="mt-2 w-[120%] text-(--text-secondary-color) font-light text-[13px]">
          {props.projectDescription}
        </CardDescription>
      </CardHeader>

      <CardFooter className=" w-full flex flex-wrap gap-2  mb-4">
        <h2 className="text-[16px] font-bold text-(--text-secondary-color) ">
          Tech Stack:
        </h2>
        <div className="w-full flex flex-wrap gap-2 ml-5   ">
          {props.techStack.map((tech, index) => (
            <Badge
              key={index}
              className="bg-(--text-secondary-color) text-(--bg-primary-color) font-semibold"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
