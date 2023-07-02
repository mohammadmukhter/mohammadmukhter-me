import bgImg from "../../assets/mern.jpg";
import NavBar from "../NavBar/NavBar";

const Home = () => {
  return (
    <div>
      <div
        className="bg-center bg-no-repeat bg-blend-darken bg-gray-800/70 h-full bg-fixed relative text-white"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        {/* <div className="absolute top-0 left-0 bg-black/70 h-full w-full text-white"></div> */}
        <div className="text-white">
          <NavBar></NavBar>

          <h2>This is Home page</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
