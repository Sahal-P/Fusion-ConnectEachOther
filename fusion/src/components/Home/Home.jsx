import ChatWindow from "../Explore";
import { SideBar } from "../NavBar/SideBar";
import SideIcons from "../NavBar/SideIcons";
import { NavBar } from "../NavBar/NavBar";
import LoadingSpinner from "../LoadingSpinner";
import { Outlet } from "react-router-dom";
import { ChannelsBase } from "../channels/ChannelsBase";

export const Home = () => {
  return (
    <>
      <SideIcons />
      <SideBar />
    </>
  );
};
