import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  projectUrl,
}) => {
  return (
    <Link href={projectUrl}>
      <div className="w-full">
        <div className="flex flex-row gap-5 mb-4">
          <img src={imageUrl} className="rounded-lg w-1/2" alt="" />
          <div className="my-4">
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
