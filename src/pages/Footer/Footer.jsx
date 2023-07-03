import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <div className="items-center grid-flow-col">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          ></svg>
          <p>Copyright © 2023 - All right reserved by MUKHTER</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center justify-self-center md:justify-self-end">
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
      </footer>
    </div>
  );
};

export default Footer;
