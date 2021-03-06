import { v4 as uuidv4 } from 'uuid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Nathan Cahn',
  subtitle: 'data analyst',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'kid_pic.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://resume.creddle.io/resume/4tocwktsjhi', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv4(),
    img: 'news.jpg',
    title: 'NLP data analysis with news aggregator',
    info: '',
    info2: '',
    url: 'https://nlpheadlines.herokuapp.com/admin/',
    repo: 'https://github.com/natephil/nlpheadlines', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'wcs.jpg',
    title: 'World Color Survey redux',
    info: '',
    info2: '',
    url: 'https://natephil.github.io/color_categories/',
    repo: 'https://github.com/natephil/color_categories/tree/gh-pages', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'george_washington.jpg',
    title: 'presidents of Jeopardy!',
    info: '',
    info2: '',
    url: 'https://natephil.github.io/jeopardy/',
    repo: 'https://github.com/natephil/jeopardy/tree/gh-pages', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'dr_seuss.jpg',
    title: 'markov text chain twitter bot',
    info: '',
    info2: '',
    url: 'https://twitter.com/DrSeuss85134023',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv4(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nathan-cahn-900b63a1/',
    },
    {
      id: uuidv4(),
      name: 'github',
      url: 'https://github.com/natephil',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
