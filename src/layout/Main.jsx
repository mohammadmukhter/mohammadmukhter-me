import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
