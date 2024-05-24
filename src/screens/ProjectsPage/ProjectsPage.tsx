import { useParams } from "react-router-dom";

const ProjectsPage = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default ProjectsPage;
