import "./App.css";
import Card from "./Components/Card/Card";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Community from "./Pages/Community";
import Gallery from "./Pages/Gallery";
import Whywe from "./Pages/Whywe";
import {FaTrophy,FaClipboardCheck} from "react-icons/fa"


const EligibilityList = [
  "Students of BTech, from any branch",
  "50+ questions solved on any coding platform to get free membership",
  "Mindset to code and learn",
];

const BenifitsList = [
 " Chance to explore career opportunities",
 " Mentorship from top faculties",
 " Platform to show your programming skills",
 " Community support in debugging and review of code",
 " Chance to get compete with other coders of college",
];

function App() {
  return (
    <div>
    <Home/>
    <div className="parent">
    <div className="eligibility"><div className="icons"><FaClipboardCheck  size={50} style={{ color: "#0D1F2D"}} /></div><Card List={EligibilityList} Title={"Eligibility"}/></div>
    <div className="benifits"><div className="icons"><FaTrophy  size={50} style={{ color: "#0D1F2D"}}/></div><Card List={BenifitsList} Title={"Benefits"}/></div>
    </div>
    <Whywe/>
    <About/>  
    <Community/>
    <Gallery/>
      </div>
   
  );
}

export default App;
