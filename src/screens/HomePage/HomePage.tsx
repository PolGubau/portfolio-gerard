import ExperiencesSection from "../../components/home-parts/Experiences";
import Hero from "../../components/home-parts/hero";
import Technologies from "../../components/home-parts/technologies";
import Layout from "../../components/layout/layout";
const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <section className="flex flex-col gap-20">
        <ExperiencesSection />
        <Technologies />
      </section>
    </Layout>
  );
};

export default HomePage;
