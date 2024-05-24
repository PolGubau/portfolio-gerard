import { useParams } from "react-router-dom";

const ExperiencePage = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default ExperiencePage;
