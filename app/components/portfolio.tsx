import ProjectCard from "./projectcard";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 ">
      <div className="container w-1/2 mx-auto py-16">
        <h2 className="text-3xl font-bold mb-8">My Portfolio</h2>
        <hr className="w-1/4 border-b border-gray-400 mb-6" />

        <p className="text-lg mb-10">
          Here are some of the projects I've worked on.
        </p>

        <ProjectCard
          title="Password Manager"
          description="For storing a password."
          imageUrl="https://picsum.photos/id/237/250/150"
          projectUrl="https://picsum.photos/id/237/250/150"
        />
      </div>
    </section>
  );
}
