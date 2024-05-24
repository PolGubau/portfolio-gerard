import { Button, Card, FollowerPointer, Navbar } from "pol-ui";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { TbArrowRight } from "react-icons/tb";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <main className="w-full flex justify-center ">
      <div className="flex flex-col gap-6 w-full py-[50px] max-w-4xl">
        <Navbar
          className="max-w-4xl flex justify-center"
          links={[
            {
              href: "#about-me",
              label: "Sobre mi",
            },
            {
              href: "#experience",
              label: "Experiencia",
            },
            { href: "#projects", label: "Proyectos" },
            { href: "#technology", label: "Tecnologías" },
          ]}
        />

        <section className="grid grid-cols-2 py-[200px]">
          <article className="flex flex-col gap-4 justify-center items-center">
            <h1 className="text-4xl font-bold">Gerard Martinez</h1>
            <h2 className="text-2xl font-semibold text-secondary-900">
              Backend developer
            </h2>

            <div className="flex gap-2">
              <Button rounded="full" variant="outline">
                Descargar CV
              </Button>
              <Button rounded="full">Contáctame</Button>
            </div>

            <div className="flex gap-4">
              <Link to="htts://github.com/GerardM5" target="_blank">
                <FaGithub size={20} />
              </Link>
              <Link
                to="htts://linkedin.com/in/gerard-martinez-alcocer"
                target="_blank"
              >
                <FaLinkedinIn size={20} />
              </Link>
            </div>
          </article>
          <article className="flex justify-center w-full">
            <img
              className="rounded-full h-52 w-52 hover:animate-spin"
              src="https://avatars.githubusercontent.com/u/78301921?v=4"
              alt="Gerard Martinez"
            />
          </article>
        </section>

        <section className="flex flex-col gap-4 p-4">
          <h2 id="experience" className="text-3xl font-bold text-center">
            Experiencia
          </h2>

          <FollowerPointer
            content={
              <p className="bg-primary rounded-full flex gap-2 py-1 items-center px-3 text-white">
                <img
                  className="rounded-full h-6 w-6 hover:animate-spin"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABt0lEQVR4AeWXAWSWQRjHf/c8z91mKDU0AZWAJAQkYEZggy8yexeEhtAKgA+EEgCCau8WX4kUK1FCiIRAIQiFKCJGM9/XdcJhsbzcoT9/z/99wY+7u3seN8PyW8HagN55xJUvFNZvgJGgCLYV61OHtlvsffiECz/LAiRbqop9j75r+HbA8itgVBogZSX5g+JXDVm9zfmPNQBSNvww1peKrgzZc/8msz+KAig+5T/eiH6ghHaSuWd93LAcQJYFj2GfY11zWHud6XfFAfJvw94YYUUJgz7Hv+4Q4NJVQecF2d8RIFVL2W9GP5Z0pN16nyObfwUA6NHTDQ5PC74RZE7QiQ4A2b+Uvxl+ILj2IgdfbwuQ6xT9XWNoTyOMYiejXTeAPPv3hm8Dbu0ck5+2BcjV49oBJTSGLgj+UFeAbImGSngea+vYmdwCN054rBH0tBJ2dwLI7PhHneXW+Bjjs4IuKn5GMS0KkGuJ9SnPaN6wRrCjxQFyXebFMUMWlXBG0X3/B8AS96Y8E52WoP4mrH8M619E9a/i7DHSRrCyj1G157h+Q1K/JavflNZvy+sPJvVHs/rDafXx/BdA6rPN7TOYBgAAAABJRU5ErkJggg=="
                  alt="Gerard Martinez"
                />
                Ver más
              </p>
            }
          >
            <Card className="group hover:brightness-90 transition-all bg-secondary-200">
              <header className="flex gap-4 justify-between w-full">
                <h3 className="text-2xl font-semibold flex gap-2 items-center group-hover:underline">
                  Backend developer
                  <TbArrowRight className="hidden group-hover:flex animate-slideRightAndFade" />
                </h3>
                <p>2021 - Actualidad</p>
              </header>
              <h4 className="text-xl opacity-75 flex items-center gap-2 font-semibold">
                <img
                  className="rounded-full h-6 w-6 hover:animate-spin"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABt0lEQVR4AeWXAWSWQRjHf/c8z91mKDU0AZWAJAQkYEZggy8yexeEhtAKgA+EEgCCau8WX4kUK1FCiIRAIQiFKCJGM9/XdcJhsbzcoT9/z/99wY+7u3seN8PyW8HagN55xJUvFNZvgJGgCLYV61OHtlvsffiECz/LAiRbqop9j75r+HbA8itgVBogZSX5g+JXDVm9zfmPNQBSNvww1peKrgzZc/8msz+KAig+5T/eiH6ghHaSuWd93LAcQJYFj2GfY11zWHud6XfFAfJvw94YYUUJgz7Hv+4Q4NJVQecF2d8RIFVL2W9GP5Z0pN16nyObfwUA6NHTDQ5PC74RZE7QiQ4A2b+Uvxl+ILj2IgdfbwuQ6xT9XWNoTyOMYiejXTeAPPv3hm8Dbu0ck5+2BcjV49oBJTSGLgj+UFeAbImGSngea+vYmdwCN054rBH0tBJ2dwLI7PhHneXW+Bjjs4IuKn5GMS0KkGuJ9SnPaN6wRrCjxQFyXebFMUMWlXBG0X3/B8AS96Y8E52WoP4mrH8M619E9a/i7DHSRrCyj1G157h+Q1K/JavflNZvy+sPJvVHs/rDafXx/BdA6rPN7TOYBgAAAABJRU5ErkJggg=="
                  alt="Gerard Martinez"
                />
                Accenture
              </h4>
              <p>
                lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                ipsum dolor sit amet lorem ipsum dolor sit amet...
              </p>
            </Card>
          </FollowerPointer>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
