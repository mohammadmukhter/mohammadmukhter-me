import { useRef } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import culinaryImg from "../../assets/culinary.png";

const Projects = () => {
  const imageRef = useRef(null);

  return (
    <div>
      <div className="py-12 bg-gray-800/90">
        <h2 className="text-6xl font-bold uppercase text-center">
          All Projects
        </h2>
        <h3 className="text-center text-2xl">
          <span className="text-orange-600">My</span> Projects
        </h3>
        <div className="px-4 py-8 grid grid-cols-1 gap-4">
          <div className="card w-full h-auto rounded-md bg-neutral text-neutral-content">
            <div className="card-body text-white grid grid-cols-1 lg:grid-cols-2">
              <div className="px-4">
                <h2 className="card-title text-3xl">Culinary Compass</h2>
                <div className="text-left">
                  <p className="flex items-center">
                    A online culinary training school website.
                  </p>
                  <div className="text-orange-600 font-bold text-xl mt-4">
                    <span className="uppercase">Features:</span>
                    <div className="ml-4 text-justify">
                      <p className="flex items-start text-white font-medium text-lg">
                        <span>
                          <FaAngleDoubleRight className="mr-1 mt-1"></FaAngleDoubleRight>
                        </span>
                        Email and password based sign up and login system,
                        google based login by firebase
                      </p>
                      <p className="flex items-start text-white font-medium text-lg">
                        <span>
                          <FaAngleDoubleRight className="mr-1 mt-1"></FaAngleDoubleRight>
                        </span>
                        JWT based authentication system in server side and role
                        based access control.
                      </p>
                      <p className="flex items-start text-white font-medium text-lg">
                        <span>
                          <FaAngleDoubleRight className="mr-1 mt-1"></FaAngleDoubleRight>
                        </span>
                        Secure routing system which is provide by based on user
                        logged in or not with jwt.
                      </p>
                      <p className="flex items-start text-white font-medium text-lg">
                        <span>
                          <FaAngleDoubleRight className="mr-1 mt-1"></FaAngleDoubleRight>
                        </span>
                        Payment system (stripe)
                      </p>
                    </div>
                  </div>

                  <div className=" mt-4">
                    <span className="uppercase text-orange-600 font-bold text-xl">
                      Technologies:
                    </span>
                    <br />
                    <div className="ml-4 mt-2">
                      <span className="bg-green-600/30 px-4 py-1 text-white font-semibold inline-block rounded mb-3 mr-3">
                        React JS
                      </span>
                      <span className="bg-green-600/30 px-4 py-1 text-white font-semibold inline-block rounded mb-3 mr-3">
                        Tailwind CSS with daisyUI
                      </span>

                      <span className="bg-green-600/30 px-4 py-1 text-white font-semibold inline-block rounded mb-3 mr-3">
                        Express JS
                      </span>

                      <span className="bg-green-600/30 px-4 py-1 text-white font-semibold inline-block rounded mb-3 mr-3">
                        Node JS
                      </span>
                      <span className="bg-green-600/30 px-4 py-1 text-white font-semibold inline-block rounded mb-3 mr-3">
                        MongoDB
                      </span>
                      <span className="bg-green-600/30 px-4 py-1 text-white font-semibold inline-block rounded mb-3 mr-3">
                        JWT
                      </span>
                      <span className="bg-green-600/30 px-4 py-1 text-white font-semibold inline-block rounded mb-3 mr-3">
                        Stripe Payment system
                      </span>
                      <span className="bg-green-600/30 px-4 py-1 text-white font-semibold inline-block rounded mb-3 mr-3">
                        Firebase authentication
                      </span>
                      <span className="bg-green-600/30 px-4 py-1 text-white font-semibold inline-block rounded mb-3 mr-3">
                        Framer motion animation library
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" w-full h-full overflow-scroll relative ">
                <img
                  ref={imageRef}
                  className="absolute "
                  src={culinaryImg}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
