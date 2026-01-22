import s from './Resume.module.scss';
import { ReactComponent as DownloadIcon } from '../../../assets/download.svg';
import Button from '../../../components/UIElements/Button/Button';

import { RESUME } from '../../../constants/resume';
import { useLanguage } from '../../../hooks/localHook/localHook';


const Resume = () => {
  const resumeText = useLanguage(RESUME);
  const resumeLink = resumeText.link;

  return (
    <Button
          style={{ margin: 'auto', width: '50%', height: '3.5em' }}
          className={"primary"}
          href={resumeLink}
          target="_blank"
        >
          <DownloadIcon fill="#fff" />
          <span className={s.downloadText}> {resumeText.download}</span>
        </Button>
  );
};

export default Resume;