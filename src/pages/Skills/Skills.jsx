import {
  FaBootstrap,
  FaCcStripe,
  FaConnectdevelop,
  FaDatabase,
  FaHtml5,
  FaJsSquare,
  FaNode,
  FaReact,
  FaUserLock,
} from "react-icons/fa";

const Skills = () => {
  return (
    <div>
      <div className="py-12 bg-gray-800/90">
        <h2 className="text-6xl font-bold uppercase text-center">
          Professional Skills
        </h2>
        <h3 className="text-center text-2xl">
          <span className="text-orange-600">My</span> Skills
        </h3>
        <div className="px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="card w-full h-68 rounded-md bg-neutral text-neutral-content">
            <div className="card-body items-center text-white ">
              <div className="flex items-center justify-between w-full">
                <div className="flex gap-2">
                  <span>
                    <FaReact className="text-5xl"></FaReact>
                  </span>
                  <h2 className="card-title text-center">React JS</h2>
                </div>
                <div className="text-2xl font-semibold text-orange-600">
                  Expert{" "}
                </div>
              </div>
              <div className="text-left">
                <p className="flex items-center">
                  A popular front end library using for client side. I have
                  moderate skills on react js and i have done many pet project
                  using react js.
                </p>
              </div>
            </div>
          </div>
          <div className="card w-full h-68 rounded-md bg-neutral text-neutral-content">
            <div className="card-body items-center text-white ">
              <div className="flex items-center justify-between w-full">
                <div className="flex gap-2">
                  <span>
                    <FaJsSquare className="text-5xl"></FaJsSquare>
                  </span>
                  <h2 className="card-title text-center">Javascript</h2>
                </div>
                <div className="text-2xl font-semibold text-orange-600">
                  Expert{" "}
                </div>
              </div>
              <div className="text-left">
                <p className="flex items-center">
                  JavaScript is a lightweight, interpreted, or just-in-time
                  compiled programming language with first-class functions. I
                  have mid level skills on js. I created many pet project using
                  js DOM.
                </p>
              </div>
            </div>
          </div>
          <div className="card w-full h-68 rounded-md bg-neutral text-neutral-content">
            <div className="card-body items-center text-white ">
              <div className="flex items-center justify-between w-full">
                <div className="flex gap-2">
                  <span>
                    <FaBootstrap className="text-5xl"></FaBootstrap>
                  </span>
                  <h2 className="card-title text-center">
                    TailwindCSS and Bootstrap
                  </h2>
                </div>
                <div className="text-2xl font-semibold text-orange-600">
                  Expert{" "}
                </div>
              </div>
              <div className="text-left">
                <p className="flex items-center">
                  Those are popular CSS framework for responsive website. I have
                  comport and mid level experience about those framework.
                </p>
              </div>
            </div>
          </div>
          <div className="card w-full h-68 rounded-md bg-neutral text-neutral-content">
            <div className="card-body items-center text-white ">
              <div className="flex items-center justify-between w-full">
                <div className="flex gap-2">
                  <span>
                    <FaHtml5 className="text-5xl"></FaHtml5>
                  </span>
                  <h2 className="card-title text-center">HTML and CSS</h2>
                </div>
                <div className="text-2xl font-semibold text-orange-600">
                  Expert{" "}
                </div>
              </div>
              <div className="text-left">
                <p className="flex items-center">
                  Html is markup language for web and css is style sheet. I have
                  mid level skill on html and css.
                </p>
              </div>
            </div>
          </div>
          <div className="card w-full h-68 rounded-md bg-neutral text-neutral-content">
            <div className="card-body items-center text-white ">
              <div className="flex items-center justify-between w-full">
                <div className="flex gap-2">
                  <span>
                    <FaNode className="text-5xl"></FaNode>
                  </span>
                  <h2 className="card-title text-center">
                    Express JS and <br></br>Node JS
                  </h2>
                </div>
                <div className="text-2xl font-semibold text-orange-600">
                  Familiar{" "}
                </div>
              </div>
              <div className="text-left">
                <p className="flex items-center">
                  I have initial level skill on express and node js. I created
                  some project using full stack (MERN).
                </p>
              </div>
            </div>
          </div>
          <div className="card w-full h-68 rounded-md bg-neutral text-neutral-content">
            <div className="card-body items-center text-white ">
              <div className="flex items-center justify-between w-full">
                <div className="flex gap-2">
                  <span>
                    <FaDatabase className="text-5xl"></FaDatabase>
                  </span>
                  <h2 className="card-title text-center">MongoDB</h2>
                </div>
                <div className="text-2xl font-semibold text-orange-600">
                  Familiar{" "}
                </div>
              </div>
              <div className="text-left">
                <p className="flex items-center">
                  I have initial level skill on mongodb which is no-sql based
                  database management system.
                </p>
              </div>
            </div>
          </div>
          <div className="card w-full h-68 rounded-md bg-neutral text-neutral-content">
            <div className="card-body items-center text-white ">
              <div className="flex items-center justify-between w-full">
                <div className="flex gap-2">
                  <span>
                    <FaConnectdevelop className="text-5xl"></FaConnectdevelop>
                  </span>
                  <h2 className="card-title text-center">Rest API</h2>
                </div>
                <div className="text-2xl font-semibold text-orange-600">
                  Familiar{" "}
                </div>
              </div>
              <div className="text-left">
                <p className="flex items-center">
                  I have initial level skill on rest Api using express js and I
                  followed best MVC pattern file structure.
                </p>
              </div>
            </div>
          </div>
          <div className="card w-full h-68 rounded-md bg-neutral text-neutral-content">
            <div className="card-body items-center text-white ">
              <div className="flex items-center justify-between w-full">
                <div className="flex gap-2">
                  <span>
                    <FaUserLock className="text-5xl"></FaUserLock>
                  </span>
                  <h2 className="card-title text-center">JWT</h2>
                </div>
                <div className="text-2xl font-semibold text-orange-600">
                  Familiar{" "}
                </div>
              </div>
              <div className="text-left">
                <p className="flex items-center">
                  I have experience on JWT token based authorization and I have
                  completed some pet project using JWT token authorization
                </p>
              </div>
            </div>
          </div>
          <div className="card w-full h-68 rounded-md bg-neutral text-neutral-content">
            <div className="card-body items-center text-white ">
              <div className="flex items-center justify-between w-full">
                <div className="flex gap-2">
                  <span>
                    <FaCcStripe className="text-5xl"></FaCcStripe>
                  </span>
                  <h2 className="card-title text-center">
                    Payment Integration
                  </h2>
                </div>
                <div className="text-2xl font-semibold text-orange-600">
                  Familiar{" "}
                </div>
              </div>
              <div className="text-left">
                <p className="flex items-center">
                  I have implemented payment gateway system using stripe on some
                  pet project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
