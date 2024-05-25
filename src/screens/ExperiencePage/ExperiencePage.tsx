import { Link, useParams } from "react-router-dom";
import experiences from "../../data/experiences.json?raw";
import { Experience } from "../../types";
import { Card, Chip, Divider, buttonVariants, cn, parseJSON } from "pol-ui";
import Navbar from "../../components/layout/navbar";
import { TbChevronLeft, TbRocket } from "react-icons/tb";

const ExperiencePage = () => {
  const { id } = useParams();

  if (!id) return null;
  const allExperiences = parseJSON(experiences) as Experience[];
  const experience = allExperiences.find((exp) => exp.slug === id);

  const hasMilestones = experience?.milestones;
  return (
    <div>
      <main className="w-full flex justify-center ">
        <div className="flex flex-col gap-6 w-full max-w-4xl">
          <Navbar />

          <section className="border-l border-secondary-300 py-36 flex flex-col gap-2">
            <Link
              to="/"
              className={cn(
                buttonVariants({ variant: "link" }),
                "w-fit px-10 flex gap-1 items-center"
              )}
            >
              <TbChevronLeft className="text-xl" />
              Volver
            </Link>
            <header className="flex flex-col gap-2 p-10 ">
              <Link to={experience?.company.website ?? ""}>
                <img
                  src={experience?.company.logo}
                  className="h-24 w-24 rounded-full object-cover hover:shadow-lg transition-all"
                  alt={experience?.company.name}
                />
              </Link>

              {experience?.start_date && (
                <div>
                  <p className="text-lg opacity-75">
                    {experience?.start_date} -{" "}
                    {experience?.end_date ?? "Actualidad"}
                  </p>
                  <p>{experience?.location}</p>
                </div>
              )}

              <h1 className="text-4xl flex gap-3">
                <span className="font-bold">{experience?.position}</span>
                at
                <span className="font-bold text-primary">
                  {experience?.company.name}
                </span>
              </h1>

              <h2>{experience?.introduction}</h2>
            </header>
            <Divider />
            <div className="p-10 flex flex-col gap-2">
              <h3 className="text-xl font-semibold">Tareas Principales</h3>
              <ul className="">
                {experience?.tasks.map((task) => (
                  <li key={task.id}>
                    <Card>{task.description}</Card>
                  </li>
                ))}
              </ul>
            </div>
            <Divider />

            <div className="p-10 flex flex-col gap-2">
              <h3 className="text-xl font-semibold">Descripción</h3>
              <div className="flex gap-4">{experience?.description}</div>
            </div>
            <Divider />

            {hasMilestones && (
              <div className="p-10 flex flex-col gap-2">
                <h3 className="text-xl font-semibold">Logros alcanzados</h3>
                <ul className={`grid md:grid-cols-2 gap-4`}>
                  {experience?.milestones.map((l) => (
                    <li
                      key={l.id}
                      className="bg-primary-100 rounded-xl p-4 flex flex-col gap-3"
                    >
                      <TbRocket className="text-primary-500 text-5xl" />
                      {l.description}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <Divider />

            <div className="p-10 flex flex-col gap-2">
              <h3 className="text-xl font-semibold">Tecnologías usadas</h3>
              <div className="flex gap-4">
                {experience?.technologies.map((tech) => (
                  <Chip key={tech.id}>{tech.name}</Chip>
                ))}
              </div>
            </div>
            <Divider />
          </section>
        </div>
      </main>
    </div>
  );
};

export default ExperiencePage;
