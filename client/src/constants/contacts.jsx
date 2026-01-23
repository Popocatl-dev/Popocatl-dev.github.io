import {AiFillGithub} from '@react-icons/all-files/ai/AiFillGithub';
import {FaLinkedinIn} from '@react-icons/all-files/fa/FaLinkedinIn';
import {FaItchIo} from '@react-icons/all-files/fa/FaItchIo';

export const HEADER={
  en :{
    name :  ( <>Popocatl</> ),
    home : ( <>Home</> ),
    projects :  ( <>Projects</> ),
    resume :  ( <>Resume</> ),
  },
  esp : {
    name :  ( <>Popocatl</> ),
    home : ( <>Inicio</> ),
    projects :  ( <>Proyectos</> ),
    resume :  ( <>CV</> ),
  }
}

export const FOOTER ={
  en :{
    credits : ( <>Template by Snaichuk Volodymyr</> ),
    dev :  ( <>popocatl.dev@gmail.com</> ),
  },
  esp : {
    credits : ( <>Plantilla de Snaichuk Volodymyr</> ),
    dev :  ( <>popocatl.dev@gmail.com</> ),
  }
}

export const CONTACT = {
  en :{
    findme : ( <>CONTACT</> ),
    mail : "popocatl.dev@gmail.com"
  },
  esp : {
    findme : ( <>CONTACTO</> ),
    mail : "popocatl.dev@gmail.com"
  }
}

export const SOCIAL = [
  { 
    name : "Github",
    link : "https://github.com/Popocatl-dev",
    Icon : AiFillGithub
  },
  { 
    name : "Linkedin",
    link : "https://www.linkedin.com/in/jesus-popocatl-lara-31567379/",
    Icon : FaLinkedinIn
  },
  { 
    name : "itchio",
    link : "https://popocatl.itch.io",
    Icon : FaItchIo
  }/*,
  { 
    name : "twitter",
    link : "https://twitter.com/PopocatlDev",
    Icon : AiFillTwitterCircle
  },*/

]
 