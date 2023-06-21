import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import SideBarChannel from "./SideBarChannel";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import CallIcon from "@mui/icons-material/Call";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MicIcon from "@mui/icons-material/Mic";
import HeadsetIcon from "@mui/icons-material/Headset";
import SettingsIcon from "@mui/icons-material/Settings";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import "./SideBar.css";
import { useDispatch } from "react-redux";
import { CreateChannelActions } from "../../redux/features/pop/CreateChannelPopSlice";

export const SideBar = () => {
  const dispatch = useDispatch();

  const createChannel = () => {
    dispatch(CreateChannelActions.setChannelPop(true));
  };
  const closeChannelPopOut = () => {
    dispatch(CreateChannelActions.setChannelPop(false));
  };
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <Link
          style={{
            color: "inherit",
            textDecoration: "inherit",
          }}
          to={"/"}
        >
          <h2>Fusion</h2>
        </Link>
        <ExpandMoreIcon />
      </div>

      <div className="sidebar_channels">
        <div className="sidebar_channelsHeader">
          <div onClick={closeChannelPopOut} className="sidebar_header">
            <ExpandMoreIcon />
            <h4>Text channels</h4>
          </div>
          <div onClick={createChannel}>
            <AddIcon className="sidebar_addChannel" />
          </div>
        </div>
        <div className="channels_list">
          <div>
            <Link
              style={{
                color: "inherit",
                textDecoration: "inherit",
              }}
              to={"/"}
            >
              <SideBarChannel name={"Home"} />
            </Link>
            <SideBarChannel name={"Message"} />
            <Link
              style={{
                color: "inherit",
                textDecoration: "inherit",
              }}
              to={"/video"}
            >
              <SideBarChannel name={"Video"} />
            </Link>
            <Link
              style={{
                color: "inherit",
                textDecoration: "inherit",
              }}
              to={"/feed"}
            >
              <SideBarChannel name={"Feed"} />
            </Link>
          </div>
        </div>
      </div>

      <div className="sidebar_voice">
        <SignalCellularAltIcon
          className="sidebar_voice_icon-"
          fontSize="medium"
        />
        <div className="sidebar_voice_info">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>
        <div className="sidebar_voice_icon">
          <InfoOutlinedIcon />
          <CallIcon />
        </div>
      </div>
      <div className="sidebar_profile">
        <Avatar src="https://radcliffechambers.com/wp-content/uploads/2019/03/avtar-khangure-qc-3.png" />
        <div className="sidebar_profile_info">
          <h3>Someone</h3>
          <p>#This is my id</p>
        </div>
        <div className="sidebar_profile_icons">
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
};
