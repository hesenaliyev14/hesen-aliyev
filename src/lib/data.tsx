import { Github, Twitter, Figma } from 'lucide-react';

import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoGit from '/public/images/logos/icon-git.svg';

import LogoW3YZ from '/public/images/logos/w3yz_logo.jpeg';
import LogoPrelogos from '/public/images/logos/prelogos_logo.jpeg';
import LogoRikaSoft from '/public/images/logos/rikasoft-logo.jpeg';

import ProjectPrelogos from '/public/images/project-prelogos.png';
import ProjectAhmetDilber from '/public/images/project-ahmetdilber.png';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/hesenaliyev14',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/hesenaliyev14',
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Next.js',
    logo: LogoNextjs,
    url: 'https://nextjs.org/',
  },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoW3YZ,
    logoAlt: 'W3yz logo',
    position: 'Front End Developer',
    startDate: new Date(2021, 2),
    endDate: new Date(2024, 7),
    summary: [
      'At W3YZ, I developed dynamic and responsive web applications using GraphQL, Next.js, Tailwind CSS, and REST APIs. I utilized Git for version control and handled API integrations, optimized web performance, and resolved technical issues. Additionally, I managed project workflows and tracked progress using JIRA, ensuring timely project completion and meeting client requirements. I focused on creating user-friendly interfaces and applying best practices to enhance overall project quality.',
    ],
  },
  {
    logo: LogoPrelogos,
    logoAlt: 'Prelogos logo',
    position: 'Front End Developer',
    startDate: new Date(2022, 7),
    currentlyWorkHere: true,
    summary: [
      'As a Web Developer, I developed high-performance, user-friendly web applications using Next.js, TypeScript, Tailwind CSS, and Strapi CMS. I analyzed client requirements, delivered solutions on time, and resolved technical issues independently. Experienced with Git and Agile methodologies, I effectively collaborated with various teams to achieve project goals.',
    ],
  },
  {
    logo: LogoRikaSoft,
    logoAlt: 'RikaSoft logo',
    position: 'Front End Developer',
    startDate: new Date(2021, 0),
    endDate: new Date(2021, 2),
    summary: [
      'At RikaSoft, I developed dynamic and responsive web applications using HTML, Bootstrap, and JavaScript. I collaborated with design and development teams to meet client requirements and optimized web performance. Gained experience in resolving technical issues and delivering projects on time.'
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Prelogos',
    description:
      '',
    url: 'https://www.prelogos.com',
    previewImage: ProjectPrelogos,
    technologies: [
      'NextJs',
      'Tailwind',
      'Strapi',
      'REST API'
    ],
  },
  {
    name: 'Dr. Ahmet Dilber',
    description:
      '',
    url: 'https://ahmetdilber.com/',
    previewImage: ProjectAhmetDilber,
    technologies: [
      'NextJs',
      'Tailwind',
      'Strapi',
      'REST API'
    ],
  },
];