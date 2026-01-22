import s from './HomeLayout.module.scss';
import Header from '../../components/Header/Header';
//import ParticlesReact from '../../components/UIElements/Particles/Particles';
import Footer from '../../components/Footer/Footer';
import MainNavigation from '../../components/Navigation/MainNavigation/MainNavigation';

//<ParticlesReact />
const HomeLayout = ({ children }) => {
  return (
    <div className={s.layout}>

      <Header>
        <MainNavigation />
      </Header>

      {children}

      <Footer />
    </div>
  );
};

export default HomeLayout;
