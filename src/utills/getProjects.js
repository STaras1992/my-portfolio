import angelProject from '../images/angelProject.png';
import androidProject from '../images/androidProject.jpeg';
import openGLProject from '../images/openGLProject.png';
import kzatAheretProject from '../images/kzatAheretProject.png';
import serverGamesProject from '../images/serverGamesProject.png';
import colorProProject from '../images/colorProProject.png';

const projects = [
  {
    title: 'Salon Angel',
    description: 'Desctop application for nail salon appointment management.',
    tools: 'Java, MVC, Swing, Eclipse',
    image: angelProject,
    adress: '#',
    source: 'https://github.com/STaras1992/AngelSalonProject',
  },
  {
    title: 'Fast and Smart',
    description:
      'Android game for improvement arithmetics skills and response time.3 difficulty stages and about 90 levels.',
    tools: 'Java, Android, Android Studio',
    image: androidProject,
    adress: '#',
    source: 'https://github.com/STaras1992/FastAndSmart',
  },
  {
    title: 'Forest creator',
    description:
      'Graphics project.Desctop application for creating and design different types of trees on different landscapes.With shadows controlled by light position and lake area for reflection',
    tools: 'C#, .NET, OpenGl, Windows Forms, Visual Studio',
    image: openGLProject,
    adress: '#',
    source: 'https://github.com/STaras1992/ForestCreator',
  },
  {
    title: 'Kzat Aheret',
    description: 'Site for small bread shop located in my neighbourhood.',
    tools: 'JavaScript, React, Bootstrap, HTML, CSS, VS Code',
    image: kzatAheretProject,
    adress: 'https://staras1992.github.io/KzatAheret/',
    source: 'https://github.com/STaras1992/KzatAheret',
  },
  {
    title: 'Color pro',
    description:
      'App for design color palettes.You can easely create custom color or palette and use it in future.One click copy color code (hex.rgb.rgba) and put it in your project code.',
    tools: 'JavaScript, React, Material-UI, HTML, CSS, VS Code',
    image: colorProProject,
    adress: 'https://staras1992.github.io/ColorPro/',
    source: 'https://github.com/STaras1992/ColorPro',
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
