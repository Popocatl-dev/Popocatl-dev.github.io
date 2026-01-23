import { lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Preloader from '../components/UIElements/Preloader/Preloader';
import ModalProjectCard from '../scenes/Projects/ModalProjectCard/ModalProjectCard';
//scenes
const Home = lazy(() => import('../scenes/Home/Home'));
const Projects = lazy(() => import('../scenes/Projects/Projects'));

export const routes = {
  HOME: '/',
  PROJECTS: '/projects',
  PROJECT: '/project/:id'
};


const scenes = {
  Home: lazy(() => import('../scenes/Home/Home')),
  Projects: lazy(() => import('../scenes/Projects/Projects'))
};

function LazyScene({ name }) {
  const Scene = scenes[name];
  return (
    <Suspense fallback={<Preloader />}>
      <Scene />
    </Suspense>
  );
}


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
        <Routes>
          <Route
            path={routes.Project}
            element={<ModalProjectCard />}
          />
        </Routes>
      )}
    </>
  );
};

export default BaseRoutes;
