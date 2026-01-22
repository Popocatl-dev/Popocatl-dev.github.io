import MainSection from './MainSection/MainSection';
import IntroSection from './IntroSection/IntroSection';
import TechSkills from './TechSkills/TechSkills';
import Resume from './Resume/Resume'
import Contact from './Contact/Contact'
import HomeLayout from '../../layouts/HomeLayout/HomeLayout';
import SectionBG from '../../components/UIElements/SectionBG/SectionBG';

const Home = () => {
  return (
    <HomeLayout>
      <SectionBG>
        <MainSection />
      </SectionBG>
      <IntroSection />
      <TechSkills/>
      <Resume/>
      <Contact/>
    </HomeLayout>
  );
};

export default Home;
