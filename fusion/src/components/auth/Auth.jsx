import "./Auth.css";
import { Outlet } from "react-router-dom";

export const Auth = () => {
  return (
    <>
      <div id="logincontainer">
        <div id="logininviteContainer">
          <Outlet />
        </div>
      </div>
    </>
  );
};
