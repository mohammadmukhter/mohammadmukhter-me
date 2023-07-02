import bgImg from "../../assets/mern.jpg";
import Banner from "../Banner/Banner";
import NavBar from "../NavBar/NavBar";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";

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
          <Banner></Banner>
          <Services></Services>
          <Skills></Skills>
          <Projects></Projects>
        </div>
      </div>
    </div>
  );
};

export default Home;
