import { Card } from "pol-ui";
import { TbArrowRight } from "react-icons/tb";
import { Experience } from "../../types";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const url = `/experience/${experience.slug}`;
  return (
    <Card
      className="group hover:brightness-90 transition-all bg-secondary-200 w-full"
      childrenClass="w-full"
      href={url}
    >
      <header className="flex gap-4 justify-between w-full  ">
        <h3 className="text-2xl font-semibold flex gap-2 items-center group-hover:underline ">
          {experience.position}
          <TbArrowRight className="hidden group-hover:flex animate-slideRightAndFade" />
        </h3>
        <p className="">
          {experience.start_date?.split("-", 1)} -{" "}
          {experience.end_date?.split("-", 1) ?? "Actualidad"}
        </p>
      </header>
      <h4 className="text-xl opacity-75 flex items-center gap-2 font-semibold">
        <img
          className="rounded-full h-6 w-6 hover:animate-spin"
          src={experience.company.logo}
          alt={experience.company.name}
        />
        {experience.company.name}
      </h4>
      <p>{experience.introduction}</p>
    </Card>
  );
};

export default ExperienceCard;
