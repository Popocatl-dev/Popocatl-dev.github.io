
import{DiJavascript1} from '@react-icons/all-files/di/DiJavascript1';
import{DiReact} from '@react-icons/all-files/di/DiReact';
import{DiNodejs} from '@react-icons/all-files/di/DiNodejs';
import{DiGit} from '@react-icons/all-files/di/DiGit';
import{DiSass} from '@react-icons/all-files/di/DiSass';
import{DiPhp} from '@react-icons/all-files/di/DiPhp';
import{DiHtml5} from '@react-icons/all-files/di/DiHtml5';
import{DiVisualstudio} from '@react-icons/all-files/di/DiVisualstudio';

import{SiCplusplus} from '@react-icons/all-files/si/SiCplusplus';
import{SiPython} from '@react-icons/all-files/si/SiPython';
import{SiUnity} from '@react-icons/all-files/si/SiUnity';
import{SiBlender} from '@react-icons/all-files/si/SiBlender';
import{SiUnrealengine} from '@react-icons/all-files/si/SiUnrealengine';
import{SiLua} from '@react-icons/all-files/si/SiLua';
import{SiCsharp} from '@react-icons/all-files/si/SiCsharp';


import {FaJava} from '@react-icons/all-files/fa/FaJava';
import {FaDatabase} from '@react-icons/all-files/fa/FaDatabase';

export const LEVEL = {
  advance : {
    name : "advance",
    logo : "null"
  },
  intermediate : {
    name : "intermediate",
    logo : "null"
  },
  beginer : {
    name : "beginer",
    logo : "null"
  }
}

export const SKILLS = {
    en : {
      title : (mainName) => (<>Professional <b className={mainName}>Skills</b></>),
      code : (mainName) => (<><h2 className={mainName}>Code</h2></>),
      software : (mainName) => (<><h2 className={mainName}>Software</h2></>),
      advance :  "Advance",
      intermediate : "Intermediate",
      beginer : "Beginer"
    },
    esp : {
      title : (mainName) => (<>Habilidades <b className={mainName}>Profesionales</b></>),
      code : (mainName) => (<><h2 className={mainName}>Code</h2></>),
      software : (mainName) => (<><h2 className={mainName}>Software</h2></>),
      advance :  "Avanzado",
      intermediate : "Intermedio",
      beginer : "Principiante"
    },
  }


export const CODE = [
    {language : "C#", level : LEVEL.advance, Logo : SiCsharp},
    {language : "C++", level : LEVEL.intermediate, Logo : SiCplusplus},
    {language : "Javascript", level : LEVEL.advance, Logo : DiJavascript1},
    {language : "Python", level : LEVEL.intermediate, Logo : SiPython},
    {language : "HTML", level : LEVEL.intermediate, Logo : DiHtml5},
    {language : "CSS", level : LEVEL.intermediate, Logo : DiSass},
    {language : "SQL", level : LEVEL.intermediate, Logo : FaDatabase, showText : true},
    {language : "JAVA", level : LEVEL.beginer, Logo : FaJava},
    {language : "PHP", level : LEVEL.beginer, Logo : DiPhp},
    {language : "Lua", level : LEVEL.beginer, Logo : SiLua},
  ];
  export const SOFTWARE = [
    {tech : "Unity", level : LEVEL.advance, Logo : SiUnity},
    {tech : "Unreal", level : LEVEL.beginer, Logo : SiUnrealengine},
    {tech : "Git", level : LEVEL.advance, Logo : DiGit},
    {tech : "Node.js", level : LEVEL.intermediate, Logo : DiNodejs},
    {tech : "React", level : LEVEL.intermediate, Logo : DiReact},
    {tech : "Blender", level : LEVEL.beginer, Logo : SiBlender},
    {tech : "Visual Studio", level : LEVEL.beginer, Logo : DiVisualstudio},
  ];



 