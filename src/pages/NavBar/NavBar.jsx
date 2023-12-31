import { Link } from "react-scroll";

const NavBar = () => {
  const navList = (
    <>
      <li>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-white bg-gray-800 border-[1px] font-medium uppercase hover:text-gray-800 hover:bg-orange-200 focus:visited:text-red-600 focus:visited:bg-orange-200"
          to="home"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-white bg-gray-800 border-[1px] font-medium uppercase hover:text-gray-800 hover:bg-orange-200 focus:visited:text-red-600 focus:visited:bg-orange-200"
          to="services"
        >
          Services
        </Link>
      </li>

      <li>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-white bg-gray-800 border-[1px] font-medium uppercase hover:text-gray-800 hover:bg-orange-200 focus:visited:text-red-600 focus:visited:bg-orange-200"
          to="skill"
        >
          Skills
        </Link>
      </li>

      <li>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-white bg-gray-800 border-[1px] font-medium uppercase hover:text-gray-800 hover:bg-orange-200 focus:visited:text-red-600 focus:visited:bg-orange-200"
          to="projects"
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-white bg-gray-800 border-[1px] font-medium uppercase hover:text-gray-800 hover:bg-orange-200 focus:visited:text-red-600 focus:visited:bg-orange-200"
          to="contactMe"
        >
          Contact me
        </Link>
      </li>
    </>
  );
  return (
    <div className="my-30 sticky top-0 left-0 z-30">
      <div className="navbar bg-gray-800 shadow-md">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-1"
            >
              {navList}
            </ul>
          </div>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="home"
            className=" uppercase font-bold text-2xl hover:cursor-pointer drop-shadow-2xl"
          >
            <span className="text-orange-600">Mukhter's</span> Profile
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">{navList}</ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
