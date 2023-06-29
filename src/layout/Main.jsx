import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h2>Navigation here</h2>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
