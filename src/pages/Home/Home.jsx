import bgImg from "../../assets/mern.jpg";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Skill from "../Skill/Skill";

const Home = () => {
  return (
    <div>
      <div
        className="bg-center bg-no-repeat bg-blend-darken bg-gray-800/70 h-full bg-fixed relative text-white"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        {/* <div className="absolute top-0 left-0 bg-black/70 h-full w-full text-white"></div> */}
        <div className="text-white relative">
          <NavBar></NavBar>
          <div id="home">
            <Banner></Banner>
          </div>
          <div id="services">
            <Services></Services>
          </div>

          <div id="skill">
            <Skill></Skill>
          </div>
          <div className="projects">
            <Projects></Projects>
          </div>

          <div className="contactMe">
            <Contact></Contact>
          </div>

          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default Home;
