import s from './TechSkills.module.scss';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import { useLanguage } from '../../../hooks/localHook/localHook';
import { SKILLS, CODE, SOFTWARE } from '../../../constants/skills';

const ListElement = ({Logo, name, showName})=>{
  return(
    <Grid  item lg={4} md={6} className={s.techIcon}>
      <Tooltip arrow title={
        <h6 className={s.tooltip}>{name}</h6>
      } >
      <Logo />
      </Tooltip>
    </Grid>
  );
}

const TechSkills = () => {
  const skillText = useLanguage(SKILLS);
  const codeList = CODE.map((code) =>
    <ListElement Logo={code.Logo} name={code.language} />
  );

  const softList = SOFTWARE.map((tech) =>
    <ListElement Logo={tech.Logo} name={tech.tech}/>
  );
  return (
    <section className={s.content}>
      <h2 className={s.skills}>
        {skillText.title(s.purple)}
      </h2>
      <br/>

      <Grid container spacing={2} rowSpacing={2}
      justifyContent="space-evenly"
      alignItems="stretch">

        <Grid container lg={4} md={12} 
        justifyContent="space-evenly"
        alignItems="flex-start"
        className={s.container}>
            <Grid  item lg={12} md={12}>
                {skillText.code(s.skills)}
            </Grid>
            {codeList}
        </Grid>
        <Grid container lg={4} md={12}
         justifyContent="space-evenly"
         alignItems="flex-start"
         className={s.container}>
            <Grid  item lg={12} md={12}>
                {skillText.software(s.skills)}
            </Grid>
            {softList}
        </Grid>
      </Grid>
    </section>
  );
};

export default TechSkills;
