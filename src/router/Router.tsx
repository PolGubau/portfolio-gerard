import { Routes, BrowserRouter, Route } from "react-router-dom";
import HomePage from "../screens/HomePage/HomePage";
import ProjectsPage from "../screens/ProjectsPage/ProjectsPage";
import ExperiencePage from "../screens/ExperiencePage/ExperiencePage";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experience/:id" element={<ExperiencePage />} />
        <Route path="/technology/:id" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectsPage />} />
        <Route path="*" element={<p>404</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
