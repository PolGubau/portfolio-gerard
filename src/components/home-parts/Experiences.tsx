import { parseJSON } from "pol-ui";
import experiences from "../../data/experiences.json?raw";
import { Experience } from "../../types";
import ExperienceCard from "../experience/ExperienceCard";

const ExperiencesSection = () => {
  const allExperiences = parseJSON(experiences) as Experience[];
  return (
    <section className="flex flex-col gap-4 p-4">
      <h2 id="experience" className="text-3xl font-bold text-center">
        Experiencia
      </h2>
      {allExperiences.map((experience) => (
        <ExperienceCard key={experience.slug} experience={experience} />
      ))}
    </section>
  );
};

export default ExperiencesSection;
