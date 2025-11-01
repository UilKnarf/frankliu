import * as React from 'react'

import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  ArrowTopRightIcon,
} from '@radix-ui/react-icons'
import { Project } from '@/lib/types'

interface NavItem {
  name: string;
  url: string;
  pageLink: string;
  icon?: React.ReactNode;
}

export const NAV_ITEMS : NavItem[] = [
  {
    name: 'About',
    url: '#about',
    pageLink: '/about',
  },
  {
    name: 'Projects',
    url: '#projects',
    pageLink: '/projects',
    icon: ''
  },
  {
    name: 'Experience',
    url: '#experience',
    pageLink: '/experience',
  },
]

export const SOCIAL_LINKS = [
  {
    name: 'X',
    url: 'https://x.com/Uil_Knarf',
    icon: <TwitterLogoIcon />,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/UilKnarf',
    icon: <GitHubLogoIcon />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/frankliu10/',
    icon: <LinkedInLogoIcon />,
  },
]

export const PROJECTS: Project[] = [
  {
    name: 'BeanThere',
    url: 'https://coffee-network-ff5156a09eb4.herokuapp.com/',
    github: 'https://github.com/UilKnarf/coffee-network',
    description:
      'The Coffee Social Network is a full-stack web application enabling coffee enthusiasts to connect, share posts, comment,and receive personalized coffee recommendations through React.js',
    image: '/projects/beanthere.png',
    tags: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Passport.js',
      'Cloudinary',
      'Multer',
      'Cloudinary',
      'EJS',
      
    ],
  },
  {
    name: 'DSA Visualizer(actively building)',
    url: 'https://frankdsavisualizer.netlify.app/',
    github: '',
    description:
      'DSA Visualizer is an interactive web application that brings data structures and algorithms to life through clean, minimalist animations. Built with React and TypeScript, it demonstrates why algorithms work—not just how—by visualizing step-by-step logic for lists, recursion, and trees. Designed with a modular architecture, each visualizer has its own engine and wrapper for scalable growth',
    image: '/projects/DSA.png',
    tags: [

      
    ],
  },

]

export const EXPERIENCES = [
  {
    title: 'Software Engineer',
    company: '100devs',
    logo: '/logos/100dev.png',
    date: '2024 - 2025',
    description:
      'Engineered and deployed modern, responsive full-stack web applications with RESTful APIs and MVC/OOP principles, consistently delivering features within an Agile (SCRUM) environment.',
  },
  {
    title: 'Recruiter',
    company: 'Judicial Council of California',
    logo: '/logos/JCC.jpg',
    date: '2024 - 2025',
    description:
      'The Associate Human Resources Analyst supports daily HR operations, processing transactions, conducting basic research, and assisting with HR system upgrades and deployments.',
  },
  {
    title: 'Technical Recruiter',
    company: 'Google',
    logo: '/logos/google.jpg',
    date: '2021 - 2023',
    description:
      'Successfully recruited diverse talent for critical roles, including L5+ Software Engineers (privacy/safety), Product Managers for high-impact products like Ads and eCommerce, and facilitated internal mobility for Product Managers (L4-L7), consistently optimizing hiring processes and candidate experience.',
  },
   {
    title: 'Technical Recruiter',
    company: 'Rocket',
    logo: '/logos/getrocket.jpg',
    date: '2021 - 2021',
    description:
      'Managed the full recruitment lifecycle for a variety of technical roles, from Software Engineers to Engineering Managers and Product Managers, consistently optimizing sourcing strategies and the candidate experience to achieve a high offer acceptance rate.',
  },
     {
    title: 'Senior Recruiter',
    company: 'Aerotek',
    logo: '/logos/aerotek.png',
    date: '2018 - 2020',
    description:
      'Performed full-cycle recruitment while recognized as Top Recruiter of the Month in light industrial, construction, and manufacturing sectors, while also mentoring new recruiters and improving team processes.',
  },
 
 
]
