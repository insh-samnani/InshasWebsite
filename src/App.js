import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import Certificates from './components/Certificates';
import Work from './components/Work';
import Awards from './components/Awards';
import Projects from './components/Projects';
import Interests from './components/Interests';
import TextArea from './components/TextArea';
import linkedinImage from './Imagess/linkedIn.png';
import githubImage from './Imagess/gitHub.png';
import phoneImage from './Imagess/phone.png';
import emailImage from './Imagess/email.png';
import fastLogo from './Imagess/fastLogo.png';
import akhssLogo from './Imagess/AkhssLogo.png';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const lang=[
  {
    sno:1,
    name:"English",
    level:"Intermediate"
  },
  {
    sno:2,
    name:"اردو",
    level:"ماہر"
  },
  {
    sno:3,
    name:"ગુજરાતી",
    level:"નિપુણ"
  }
]

const courseLists=[
  {
    code:"CS4051",
    shortForm:"IR",
    fullForm:"Information Retrieval"
  },
  {
    code:"CS3009",
    shortForm:"SE",
    fullForm:"Software Engineering"
  },
  {
    code:"CS3001",
    shortForm:"CN",
    fullForm:"Computer Networks"
  },
  {
    code:"AI2002",
    shortForm:"AI",
    fullForm:"Artificial Intelligence"
  },
  {
    code:"CS3006",
    shortForm:"PDC",
    fullForm:"Parallel and Distributed Computing"
  },
  {
    code:"CS3004",
    shortForm:"SDA",
    fullForm:"Software Design and Analysis"
  },
  {
    code:"CS2009",
    shortForm:"DAA",
    fullForm:"Design and Analysis of Algorithms"
  },
  {
    code:"CS2005",
    shortForm:"DB",
    fullForm:"Database Systems"
  },
  {
    code:"MT3001",
    shortForm:"GT",
    fullForm:"Graph Theory"
  },
  {
    code:"MT2005",
    shortForm:"Prob",
    fullForm:"Probability and Statistics"
  },
  {
    code:"CS3005",
    shortForm:"TOA",
    fullForm:"Theory of Automata"
  },
  {
    code:"CS2008",
    shortForm:"NC",
    fullForm:"Numerical Computing"
  },
  {
    code:"CS2006",
    shortForm:"OS",
    fullForm:"Operating Systems"
  },
  {
    code:"MT1004",
    shortForm:"LA",
    fullForm:"Linear Algebra"
  },
  {
    code:"EE2003",
    shortForm:"COAL",
    fullForm:"Computer Organization and Assembly Language"
  },
  {
    code:"CS2001",
    shortForm:"DS",
    fullForm:"Data Structures"
  },
  {
    code:"CS1005",
    shortForm:"Discrete",
    fullForm:"Discrete Structures"
  },
  {
    code:"MT224",
    shortForm:"DE",
    fullForm:"Differential Equations (Cal II)"
  },
  {
    code:"EL227",
    shortForm:"DLD",
    fullForm:"Digital Logic Design"
  },
  {
    code:"CS217",
    shortForm:"OOP",
    fullForm:"Object Oriented Programming"
  },
  {
    code:"MT119",
    shortForm:"Cal",
    fullForm:"Calculus and Analytical Geometry"
  },{
    code:"EE117",
    shortForm:"AP",
    fullForm:"Applied Physics"
  },
  {
    code:"CS118",
    shortForm:"PF",
    fullForm:"Programming Fundamentals"
  },
  {
    code:"CL117",
    shortForm:"ICT",
    fullForm:"Introduction to Information and Communication Technologies"
  },
  {
    code:"SS152",
    shortForm:"CPS",
    fullForm:"Communication and Presentation Skills"
  },
  {
    code:"SS150",
    shortForm:"ECC",
    fullForm:"English Composition and Comprehension"
  },
  {
    code:"MG1001",
    shortForm:"FoM",
    fullForm:"Fundamentals of Management"
  },
  {
    code:"SS113",
    shortForm:"PS",
    fullForm:"Pakistan Studies"
  },
  {
    code:"SS2003",
    shortForm:"Psych",
    fullForm:"Psychology"
  },
  {
    code:"SS2007",
    shortForm:"TBW",
    fullForm:"Technical and Business Writing"
  },
]

const skillInfo=[
  {
    skill:"HTML",
    level:80
  },
  {
    skill:"PUG",
    level:70
  },
  {
    skill:"CSS",
    level:80
  },
  {
    skill:"JavaScript",
    level:80
  },
  {
    skill:"React.js",
    level:80
  },
  
  {
    skill:"Node.js",
    level:90
  },
  {
    skill:"MySQL",
    level:100
  },
  {
    skill:"Python",
    level:80
  },
  {
    skill:"C++",
    level:90
  },
  {
    skill:"C",
    level:90
  },
  {
    skill:"Microsoft Excel, Word, PowerPoint and Access",
    level:80
  },
  {
    skill:"Leadership",
    level:100
  },
  {
    skill:"Multi-Tasking",
    level:90
  },
  {
    skill:"Time Management",
    level:100
  },
  {
    skill:"Communication",
    level:90
  },
  
]
const educationalInfo=[
  {
    logo:fastLogo,
    institution:"FAST-NUCES",
    degree:"Bachelor's Degree",
    degreeName:"Computer Science",
    year:"2020-2024",
    grade:"3.9",
    more:[ "Guest Relations","Event Management","Media and Promotion"]
  },
  {
    logo:akhssLogo,
    institution:"Aga Khan Higher Secondary School",
    degree:"Intermediate",
    degreeName:"Computer Science",
    year:"2018-2020",
    grade:"A+",
    more:[ "Science and Commerce Olympiad"]
  },
  {
    logo:akhssLogo,
    institution:"Aga Khan School",
    degree:"Matriculation",
    degreeName:"Pre-Medical",
    year:"2016-2018",
    grade:"A+",
    more:[ "AYV Media Festival & SIE Projects Sharing held in Karachi, Pakistan","iEarn Online Collaborative Projects School based Club Activities"]
  }
]

const contactInformation=[
  {
    name:"GitHub",
    link:"https://github.com/insh-samnani",
    details:"",
    img:githubImage
  },
  {
    name:"LinkedIn",
    link:"https://www.linkedin.com/in/insha-samnani-286961215/",
    details:"",
    img:linkedinImage
  },
  {
    name:"Phone Number",
    link:"",
    details:"+92 347 1678725",
    img:phoneImage
  },
  {
    name:"Email",
    link:"",
    details:"insha.samnani2002@gmail.com",
    img:emailImage
  },
]

function App() {


  return (
    <>
    <Router>
    <Navbar title="IS" h1="About" h2="Certifications" h3="WorkExperience" h4="Awards" h5="Projects" h6="Interests"/>
    <Routes>
      <Route exact path='/' element={<TextArea languages={lang} courses={courseLists} skill={skillInfo} edu={educationalInfo} info={contactInformation} name="Insha Samnani" about="I am a goal-oriented and hardworking person, continuously in search of various opportunities relating to my skills. I always try to focus on my aims to achieve them with enthusiasm and get connected with ongoing activities benefiting my skills. Besides, I have good communication and leadership skills and experience in working as a group under many opinions." key="11"/>} />
      <Route exact path='/Certifications' element={<Certificates key="22" />} />
      <Route exact path='/WorkExperience' element={<Work key="33"/>} />
      <Route exact path='/Awards' element={<Awards key="44" />} />
      <Route exact path='/Projects' element={<Projects key="55" />} />
      <Route exact path='/Interests' element={<Interests key="66" />} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
