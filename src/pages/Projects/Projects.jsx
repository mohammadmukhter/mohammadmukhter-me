import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import culinaryImg from "../../assets/culinary.png";
import recipeImg from "../../assets/recipe.png";
import toyImg from "../../assets/toybikroy.png";

const Projects = () => {
  return (
    <div>
      <div className="py-12 bg-gray-800/90">
        <h2 className="text-6xl font-bold uppercase text-center drop-shadow-2xl">
          All Projects
        </h2>
        <h3 className="text-center text-2xl drop-shadow-2xl">
          <span className="text-orange-600">My</span> Projects
        </h3>
        <div className="px-4 py-8 grid grid-cols-1 gap-4">
          {/* project one No: */}
          <div className="card w-full h-auto rounded-md bg-neutral text-neutral-content shadow-md">
            <div className="card-body text-white grid grid-cols-1 lg:grid-cols-2">
              <div className="px-4">
                <div className="flex justify-between">
                  <div>
                    <h2 className="card-title text-3xl">Culinary Compass</h2>
                    <p className="flex items-center">
                      A online culinary training school website.
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <Link
                      className="text-blue-500 hover:text-red-500 text-lg"
                      target="new"
                      to="https://culinary-compass-client.web.app/"
                    >
                      Live-site
                    </Link>
                    <Link
                      className="text-blue-500 hover:text-red-500 text-lg"
                      target="new"
                      to="https://github.com/mohammadmukhter/culinary-compass-client"
                    >
                      Client-code
                    </Link>
                    <Link
                      className="text-blue-500 hover:text-red-500 text-lg"
                      target="new"
                      to="https://github.com/mohammadmukhter/culinary-compass-server"
                    >
                      Server-code
                    </Link>
                  </div>
                </div>
                <div className="text-left">
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
              <div className="w-full overflow-scroll relative lg:h-auto h-96">
                <img
                  className="lg:absolute top-0 lg:w-full lg:h-auto"
                  src={culinaryImg}
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* project two No */}
          <div className="card w-full h-auto rounded-md bg-neutral text-neutral-content shadow-md">
            <div className="card-body text-white grid grid-cols-1 lg:grid-cols-2">
              <div className="px-4">
                <div className="flex justify-between">
                  <div>
                    <h2 className="card-title text-3xl">Toy bikroy</h2>
                    <p className="flex items-center">
                      Online toy selling website(simple e-commerce)
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <Link
                      className="text-blue-500 hover:text-red-500 text-lg"
                      target="new"
                      to="https://toy-bikroy.web.app/"
                    >
                      Live-site
                    </Link>
                    <Link
                      className="text-blue-500 hover:text-red-500 text-lg"
                      target="new"
                      to="https://github.com/mohammadmukhter/toy-bikroy-client"
                    >
                      Client-code
                    </Link>
                    <Link
                      className="text-blue-500 hover:text-red-500 text-lg"
                      target="new"
                      to="https://github.com/mohammadmukhter/toy-bikroy-server"
                    >
                      Server-code
                    </Link>
                  </div>
                </div>
                <div className="text-left">
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
                        Secure routing system which is provide by based on user
                        logged in or not.
                      </p>
                      <p className="flex items-start text-white font-medium text-lg">
                        <span>
                          <FaAngleDoubleRight className="mr-1 mt-1"></FaAngleDoubleRight>
                        </span>
                        This website provides a secure route to access detailed
                        information about toy details, by ensuring that only
                        signed-in users can access the route.
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
                        Firebase authentication
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full overflow-scroll relative lg:h-auto h-96">
                <img
                  className="lg:absolute top-0 lg:w-full lg:h-auto"
                  src={toyImg}
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* project Three No */}
          <div className="card w-full h-auto rounded-md bg-neutral text-neutral-content shadow-md">
            <div className="card-body text-white grid grid-cols-1 lg:grid-cols-2">
              <div className="px-4">
                <div className="flex justify-between">
                  <div>
                    <h2 className="card-title text-3xl">Recipe Dish</h2>
                    <p className="flex items-center">
                      Indian Recipe related online website
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <Link
                      className="text-blue-500 hover:text-red-500 text-lg"
                      target="new"
                      to="https://recipe-dish.web.app/Home/"
                    >
                      Live-site
                    </Link>
                    <Link
                      className="text-blue-500 hover:text-red-500 text-lg"
                      target="new"
                      to="https://github.com/mohammadmukhter/recipe-dish-client"
                    >
                      Client-code
                    </Link>
                    <Link
                      className="text-blue-500 hover:text-red-500 text-lg"
                      target="new"
                      to="https://github.com/mohammadmukhter/recipe-dish-server"
                    >
                      Server-code
                    </Link>
                  </div>
                </div>
                <div className="text-left">
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
                        Secure routing system which is provide by based on user
                        logged in or not.
                      </p>
                      <p className="flex items-start text-white font-medium text-lg">
                        <span>
                          <FaAngleDoubleRight className="mr-1 mt-1"></FaAngleDoubleRight>
                        </span>
                        This website provides different types of recipe and its
                        details with secure route.
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
                        Firebase authentication
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full overflow-scroll relative lg:h-auto h-96">
                <img
                  className="lg:absolute top-0 lg:w-full lg:h-auto"
                  src={recipeImg}
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
