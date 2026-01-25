import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiFirebase,
  SiDocker,
  SiRedux,
  SiWebpack,
  SiVite,
  SiJest,
} from 'react-icons/si';
import { DiJavascript1, DiHtml5, DiCss3 } from 'react-icons/di';

export const skills = [
  { name: 'React JS', icon: FaReact, category: 'frontend' },
  { name: 'Next.js', icon: SiNextdotjs, category: 'frontend' },
  { name: 'JavaScript', icon: DiJavascript1, category: 'frontend' },
  { name: 'TypeScript', icon: SiTypescript, category: 'frontend' },
  { name: 'HTML5', icon: DiHtml5, category: 'frontend' },
  { name: 'CSS3', icon: DiCss3, category: 'frontend' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'frontend' },

  { name: 'Node.js', icon: FaNodeJs, category: 'backend' },
  { name: 'Express.js', icon: SiExpress, category: 'backend' },

  { name: 'MongoDB', icon: SiMongodb, category: 'database' },
  { name: 'Firebase', icon: SiFirebase, category: 'database' },

  { name: 'Git', icon: FaGitAlt, category: 'tools' },
  { name: 'GitHub', icon: FaGithub, category: 'tools' },
  { name: 'Docker', icon: SiDocker, category: 'tools' },

  { name: 'Redux Toolkit', icon: SiRedux, category: 'state' },
  
  { name: 'Webpack', icon: SiWebpack, category: 'tools' },
  { name: 'Vite', icon: SiVite, category: 'tools' },
  { name: 'Micro Frontends', icon: SiVite, category: 'architecture' },
  { name: 'Jest', icon: SiJest, category: 'testing' },
];
