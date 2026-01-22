import { lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
//modals
import ModalProjectCard from '../scenes/Projects/ModalProjectCard/ModalProjectCard';
//scenes
const Home = lazy(() => import('../scenes/Home/Home'));
const Projects = lazy(() => import('../scenes/Projects/Projects'));

export const routes = {
  HOME: '/',
  PROJECTS: '/projects',
  PROJECT: '/project/:id'
};

const BaseRoutes = () => {
  const location = useLocation();
  const background = location.state?.background

  return (
    <>
      <Routes location={background || location}>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.PROJECTS} element={<Projects />} />
        <Route path={routes.PROJECT} element={<ModalProjectCard />} />
      </Routes>

      {background && (
        <Route path={routes.PROJECT} element={<ModalProjectCard />} />
      )}
    </>
  );
};

export default BaseRoutes;
