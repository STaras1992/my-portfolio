import androidProject from '../images/fastProject.png';
import openglProject from '../images/opengl.png';
import kzatAheretProject from '../images/kzatAheretProject.png';
import serverGamesProject from '../images/serverGamesProject.png';
import parkingProject from '../images/parkingProject.png';
import portfolioProject from '../images/portfolioProject.png';
import cvManagerProject from '../images/cvManager.png';
import mytop3Project from '../images/mytop3.png';

const projects = [
  {
    title: 'CV Manager',
    description: 'Resource management web app for easy and accessible job apply.',
    tools:
      'JavaScript, Node.js, React, Redux, Material-UI, Nodemailer, jwt, Draft-js, HTML, SCSS, AWS, S3, RDS, ubuntu, nginx',
    image: cvManagerProject,
    adress: 'https://cv-manager.tk',
    source: 'https://github.com/STaras1992/cv-manager',
  },
  {
    title: 'MyTop3',
    description:
      'Movies app for easy search info about movies using API.But main purpose is to search,share and rate movies recommendations.Currently working on that... ',
    tools: 'JavaScript, Node.js, React, Redux, Material-UI, HTML, SCSS,VS Code, GITHub, AWS, ubuntu, nginx, TMDB API',
    image: mytop3Project,
    adress: 'https://mytop3.tk',
    source: 'https://github.com/STaras1992/mytop3',
  },
  {
    title: 'My portfolio',
    description: 'Portfolio site.',
    tools: 'JavaScript, Node.js, React, Material-UI, Nodemailer, HTML, CSS, VS Code, GITHub, ubuntu, nginx',
    image: portfolioProject,
    adress: '#',
    source: 'https://github.com/STaras1992/my-portfolio',
  },
  {
    title: 'Kzat Aheret',
    description: 'Site for small bread shop located in my neighbourhood.',
    tools: 'JavaScript, React, Bootstrap, HTML, CSS, SCSS, VS Code,GITHub, GITHub Pages',
    image: kzatAheretProject,
    adress: 'https://staras1992.github.io/KzatAheret/',
    source: 'https://github.com/STaras1992/KzatAheret',
  },
  {
    title: 'Forest creator',
    description:
      'Graphics project.Desctop application for creating and design different types of trees on different landscapes.With shadows controlled by light position and lake area for reflection',
    tools: 'C#, .NET, OpenGl, Windows Forms, Visual Studio',
    image: openglProject,
    adress: '#',
    source: 'https://github.com/STaras1992/ForestCreator',
  },
  // {
  //   title: 'Color pro',
  //   description:
  //     'App for design color palettes.You can easely create custom color or palette and use it in your projects.',
  //   tools: 'JavaScript, React, Material-UI, HTML, CSS, VS Code,GITHub,GITHub Pages',
  //   image: colorProProject,
  //   adress: 'https://staras1992.github.io/ColorPro/',
  //   source: 'https://github.com/STaras1992/ColorPro',
  // },
  {
    title: 'Parking controll app',
    description: 'Desktop app for parking controll.Developed while my free time at job (Controll room operator).',
    tools: 'C#, Real time, .NET, Windows Forms, Visual Studio,',
    image: parkingProject,
    adress: '#',
    source: 'https://github.com/STaras1992/Parking-app',
  },
  // {
  //   title: 'Salon Angel',
  //   description: 'Desctop application for nail salon appointment management.',
  //   tools: 'Java, MVC, Swing, Eclipse',
  //   image: angelProject,
  //   adress: '#',
  //   source: 'https://github.com/STaras1992/AngelSalonProject',
  // },
  {
    title: 'Fast and Smart',
    description:
      'Android game for improvement arithmetics skills and response time.3 difficulty stages and about 90 levels.',
    tools: 'Java, Android, Android Studio,GITHub',
    image: androidProject,
    adress: '#',
    source: 'https://github.com/STaras1992/FastAndSmart',
  },
  {
    title: 'Tic tac toe/Catch the bunny',
    description: 'Server and client side for two desctop games.Smart AI algorithms implementation',
    tools: 'JAVA, Multithreading, MVC, Swing, Eclipse',
    image: serverGamesProject,
    adress: '#',
    source: 'https://github.com/STaras1992/ServerGames',
  },
];

const getProjects = () => {
  return projects;
};

export default getProjects;
