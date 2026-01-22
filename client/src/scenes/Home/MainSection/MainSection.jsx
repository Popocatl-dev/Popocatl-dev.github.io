import s from './MainSection.module.scss';
import homeMainIcon from '../../../assets/home-main.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useLanguage } from '../../../hooks/localHook/localHook';
import Typewriter from '../../../components/UIElements/Typewriter/Typewriter';
import { MAIN } from '../../../constants/intro';


const MainSection = () => {
  const mainText = useLanguage(MAIN);

  return (
    <section className={s.content}>
      <div className={s.header}>
        <h2 style={{ paddingBottom: 15 }} className={s.title}>
         {mainText.welcome}
        </h2>

        <h1 className={s.mainTitle}>
          {mainText.presentation(s.mainName)}
        </h1>

        <div style={{ paddingTop: 20 }} className={s.typewriter}>
          <Typewriter
            strings={mainText.profesion}
            wrapperClassName={s.typewriterWrapper}
            cursorClassName={s.typewriterCursor}
          />
        </div>
      </div>

      <LazyLoadImage
        alt="home-img"
        effect="blur"
        src={homeMainIcon}
        wrapperClassName={s.homeMainIcon}
      />
    </section>
  );
};

export default MainSection;
