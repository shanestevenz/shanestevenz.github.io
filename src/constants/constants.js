import { DiAndroid, DiAws, DiCode, DiDatabase, DiGit, DiMongodb, DiMysql, DiPhotoshop, DiReact, DiUnitySmall, DiWordpress } from "react-icons/di";
import {GrRobot} from "react-icons/gr";
export const projects = [

  {
    title: 'Autonomous Ocean Cleaning Robot',
    description: "Designing and developing a multi-sensor autonomous marine vehicle to remove plastic from ocean hot spots.     Working in a team of 5 Mechanical Engineers and 3 Computer Science students to fully design and implement a 5ft by 5ft marine robot",
      image: '/images/net_image.jpg',
      tags: ['C++', 'Python', 'ROS2','Linux'],
    source: 'https://github.com/JohnMuirhead000/MQP-boat',
    visit: '',
    id: 0,
  },  


  {
    title: 'Digitization Consultant',
    description:"Designed, developed, and deployed e-commerce websites for businesses in the Worcester, MA region. Utilized agile methodology, working directly with clients to analyze and actualize various business needs. Exceeded client expectations by going above and beyond to improve their businesses through creating logos, colors/themes, and product descriptions. Developed and maintained websites, using a variety of web-builders and hosting platforms.",
    image: '/images/BF.PNG',
    tags: ['WordPress', 'GoDaddy','Business'],
    source: '',
    visit: 'https://blueflamingoentertainment.com/', //update when we get the SSL/HTTPS
    id: 1,
  },
  {
    title: 'Wyvern Choice',
    description: "The app allows users to set up a question/poll, send a unique link to friends, and vote/comment on each option. The user can create an optional login and  username. Designed and developed cloud-based AWS app in a four-person team. Built using test driven development and engineered the backend using Java.",
      image: '/images/wyvernChoice.png',
      tags: ['AWS', 'SQL', 'Java','HTML/CSS'],
    source: 'https://github.com/shanestevenz/WyvernChoice',
    visit: '',
    id: 2,
  },  
  
  {
    title: 'Ubiqtuous EEG Headset',
    description: "Researched and developed a portable EEG headset that provides reliable data for research fields, medical purposes, and general consumer applications. Researched EEG devices and related markets to identify and fill industry gaps. Conducted numerous experiments and thorough data analysis of prototype EEG and FNIRS based devices. Collaborated with and led a team of 10 students over the course of 2 months under the advisement of professional staff.",
    image: '/images/EEG_IQP_BRAIN.png',
    tags: ['Research', 'EEG', 'Overleaf'],
    source: 'https://digital.wpi.edu/pdfviewer/6d570094s',
    visit: 'https://digital.wpi.edu/concern/student_works/wh246w27h?locale=en',
    id: 3,
  },

  {
    title: 'I make Games too!',
    description: "A few times a year, I compete in Ludum Dare. A 72-hour video game coding competetition! To this this date I've made over 9 games from scratch using C# and Unity. I, alongside my friend, publish under the name DevRokket. We've ammased several thousands downloads! Check us out!",
      image: '/images/games.png',
      tags: ['Unity', 'C#','Blender/Maya'],
    source: '',
    visit: 'https://devrokket.itch.io/',
    id: 4,
  },
];


export const technologies = [
  {
    title: 'Front-End',
    description: "HTML/CSS, React, Tailwind",
      icon: DiReact,
    id: 0,
  },  
  {
    title: 'Back-End',
    description: "Express, SQL, MongoDB",
      icon: DiDatabase,
    id: 1,
  },  
  {
    title: 'MongoDB',
    description: "No SQL database for web apps",
      icon: DiMongodb,
    id: 2,
  },
  {
    title: 'MySQL',
    description: "MySQL Workbench for databases",
      icon: DiMysql,
    id: 2,
  },

  {
    title: 'AWS',
    description: "Cloud applications",
      icon: DiAws,
    id: 3,
  },  
  {
    title: 'Unity 3D',
    description: "Game Development Engine",
      icon: DiUnitySmall,
    id: 4,
  },  
  {
    title: 'Git',
    description: "Source control I use for all my Projects",
      icon: DiGit,
    id: 5,
  },  
  {
    title: 'WordPress',
    description: "Website builder for client work",
      icon: DiWordpress,
    id: 6,
  },  
  {
    title: 'ROS2',
    description: "Robot Operating System 2.0",
      icon: DiCode,
    id: 7,
  },  
  {
    title: 'Photoshop',
    description: "Image designer for graphics",
      icon: DiPhotoshop,
    id: 8,
  }, 

];


export const TimeLineData = [
  { year: 2017, text: 'Started my journey', },
  { year: 2018, text: 'Worked as a freelance developer', },
  { year: 2019, text: 'Founded JavaScript Mastery', },
  { year: 2020, text: 'Shared my projects with the world', },
  { year: 2021, text: 'Started my own platform', },
];
