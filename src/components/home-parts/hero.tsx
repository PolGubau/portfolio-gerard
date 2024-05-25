import { Link } from "react-router-dom";
import { user } from "../../config/data";
import { buttonVariants, cn } from "pol-ui";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="grid grid-cols-2 py-[200px]">
      <article className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-5xl font-bold">{user.name}</h1>
        <h2 className="text-3xl font-semibold text-secondary-900">
          {user.description}
        </h2>

        <div className="flex gap-2">
          {user.cv && (
            <Link
              to={user.cv.route}
              target="_blank"
              download={user.cv.fileName}
              className={cn(
                buttonVariants({
                  color: "primary",
                  variant: "outline",
                }),
                "rounded-full"
              )}
            >
              {user.cv.label}
            </Link>
          )}
          {user.contactLink && (
            <Link
              to={user.contactLink.href}
              className={cn(buttonVariants(), "rounded-full")}
            >
              {user.contactLink.label}
            </Link>
          )}
        </div>

        <div className="flex gap-4">
          {user.social.github && (
            <Link to={user.social.github} target="_blank">
              <FaGithub size={20} />
            </Link>
          )}
          {user.social.linkedin && (
            <Link to={user.social.linkedin} target="_blank">
              <FaLinkedinIn size={20} />
            </Link>
          )}
        </div>
      </article>
      <article className="flex justify-center w-full">
        <img
          className="rounded-full h-52 w-52 hover:animate-spin"
          src={user.image}
          alt={user.name}
        />
      </article>
    </section>
  );
};

export default Hero;
