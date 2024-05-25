import ExperiencesSection from "../../components/home-parts/Experiences";
import Hero from "../../components/home-parts/hero";
import Technologies from "../../components/home-parts/technologies";
import Navbar from "../../components/layout/navbar";
import ScrollToHashElement from "../../components/scroll";
const HomePage = () => {
  return (
    <main className="w-full flex justify-center ">
      <ScrollToHashElement />
      <div className="flex flex-col gap-6 w-full max-w-4xl">
        <Navbar />
        <Hero />
        <section className="flex flex-col gap-20">
          <ExperiencesSection />
          <Technologies />
        </section>
      </div>
    </main>
  );
};

export default HomePage;
