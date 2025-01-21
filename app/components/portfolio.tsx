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
          imageUrl="https://eaog2nkqckp.exactdn.com/wp-content/uploads/2024/06/roboform-best-password-manager-1024x769.webp?strip=all&lossy=1&ssl=1"
          projectUrl="https://eaog2nkqckp.exactdn.com/wp-content/uploads/2024/06/roboform-best-password-manager-1024x769.webp?strip=all&lossy=1&ssl=1"
        />
      </div>
    </section>
  );
}
