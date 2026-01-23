import s from './ModalProjectCard.module.scss';
import { BiLinkExternal } from '@react-icons/all-files/bi/BiLinkExternal';
import Modal from '../../../components/Modal/Modal';
import Button from '../../../components/UIElements/Button/Button';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useModal } from '../../../hooks/modalHook';
import { PROJECTS, LABELS } from '../../../constants/projects';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useLanguage } from '../../../hooks/localHook/localHook';

const ModalProjectCard = () => {
  const { id } = useParams();
  const { image, title, links, text } = PROJECTS[id];
  //PROJECTS.find((p) => id === p.id,);
  const { isVisible, toggleModal } = useModal();
  const projectText = useLanguage(text);
  const labelsText = useLanguage(LABELS);
  useEffect(() => {
    toggleModal();
  }, []);

  return (
    <Modal show={isVisible} onClose={toggleModal}>
      <div className={s.cardWrapper}>
        <LazyLoadImage
          alt="project-img"
          src={image.src}
          effect="blur"
          width="100%"
          wrapperClassName={s.image}
          placeholderSrc={image.placeholderSrc}
        />

        <div className={s.cardBody}>
          <h3 className={s.title}>{title} / {projectText.position}</h3>
          <p className={s.description} >{projectText.description}</p>
        </div>

        <div className={s.cardFooter}>
          <Button
            style={{ width: '12rem' }}
            className="primary"
            href={links.site}
            target="_blank"
          >
            <BiLinkExternal /> &nbsp; {labelsText.view}
          </Button>
          {
            (links.repo != null) &&
            <Button
            style={{ width: '12rem' }}
            className="primary"
            href={links.repo}
            target="_blank"
            >
              <BiLinkExternal /> &nbsp; {labelsText.more}
            </Button>
          }
        </div>
      </div>
    </Modal>
  );
};

export default ModalProjectCard;
