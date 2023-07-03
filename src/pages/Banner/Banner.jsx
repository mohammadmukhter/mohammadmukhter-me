import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Tilt } from "react-tilt";
import bannerImg from "../../assets/mine.jpeg";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-gray-800/95">
      <div className="hero-content flex-col lg:flex-row-reverse w-full justify-center items-center px-20">
        <div className="lg:w-1/3 w-full">
          <Tilt
            className="tilt"
            perspective={1000}
            tiltReverse={true}
            tiltMaxAngleX={30}
            tiltMaxAngleY={30}
            transition:true
          >
            <img
              src={bannerImg}
              className="w-72 mx-auto lg:ml-auto rounded-lg shadow-2xl"
            />
          </Tilt>
        </div>
        <div className="lg:w-2/3 w-full space-y-4">
          <div>
            <h3 className="text-4xl text-orange-600">Hello! I'm </h3>
            <h1 className="text-7xl font-bold">Md Mukhter Hossan</h1>
            <p className="text-2xl ">
              <span className="text-green-600">A Front end focused</span> Full
              Stack Developer
            </p>
          </div>
          <button className="bg-orange-200/10 text-white font-medium uppercase px-4 py-2 border-[1px] border-orange-200/10 hover:bg-orange-200 hover:text-gray-800 hover:border-[1px] hover:border-white rounded">
            Download my Resume
          </button>

          <div className="flex gap-3">
            <Link
              target="new"
              to="https://www.linkedin.com/in/md-mukhter-h-95a180191/"
              className="text-3xl"
            >
              <FaLinkedin></FaLinkedin>
            </Link>
            <Link
              target="new"
              to="https://www.facebook.com/mdmukhter.mukhterhossain/"
              className="text-3xl"
            >
              <FaFacebookSquare></FaFacebookSquare>
            </Link>
            <Link
              target="new"
              to="https://github.com/mohammadmukhter"
              className="text-3xl"
            >
              <FaGithubSquare></FaGithubSquare>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
