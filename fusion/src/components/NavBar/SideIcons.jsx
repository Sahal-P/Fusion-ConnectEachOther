import "./SideIcons.css";
import Logo from "../images/logo/Logo2.png";
import LoadingSpinner from "../LoadingSpinner";
import { useState } from "react";
import { Link } from "react-router-dom";
import AddServer from "./AddServer";
import { useDispatch } from "react-redux";
import { CreateCommunityActions } from "../../redux/features/pop/CreateCommunity";

const SideIcons = () => {
  const dispatch = useDispatch();
  let details = navigator.userAgent;

  /* Creating a regular expression 
containing some mobile devices keywords 
to search it in details string*/
  let regexp = /android|iphone|kindle|ipad/i;

  /* Using test() method to search regexp in details
it returns boolean value*/
  let isMobileDevice = regexp.test(details);

  if (isMobileDevice) {
    console.log("You are using a Mobile Device");
    console.log(details);
  } else {
    console.log("You are using Desktop");
  }

  const [loading, setLoading] = useState(false);

  const getPermission = () => {
    // window.Notification.requestPermission().then(function(permission) {
    //      console.log('permiss', permission)
    //     });
    const permissions = navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false,
    });
    permissions
      .then((stream) => {
        alert("accepted the permissions");
        console.log("yes");
      })
      .catch((err) => {
        console.log(`${err.name} : ${err.message}`);
      });
  };

  const createCommunity = () => {
    dispatch(CreateCommunityActions.setCommunityPop(true));
  };
  const closeCommunityPopOut = () => {
    dispatch(CreateCommunityActions.setCommunityPop(false));
  };
  return (
    <>
      {" "}
      {loading ? (
        <LoadingSpinner active={true} />
      ) : (
        <LoadingSpinner active={false} />
      )}
      <div className="servers">
        <Link to={"/auth/login"}>
          <div className="logo">
            <div className="select_indicator">
              <span className="item_indicator"></span>
            </div>
            <img src={Logo} alt="Discord" />
          </div>
        </Link>

        <div className="list_item_">
          <div className="item_line"></div>
        </div>

        <div className="server-start">
          <div onClick={() => getPermission()} className="server-logo">
            <span className="message_count">1</span>
            <img
              src="https://media.discordapp.net/attachments/1038329663187062804/1084651182766702592/grid_0-47-gigapixel-art-scale-6_00x.png?width=616&height=616"
              alt="server"
            />
          </div>
          <Link
            style={{
              color: "inherit",
              textDecoration: "inherit",
            }}
            to={"/channels/988876654545"}
          >
            <div className="server-logo">
              <span className="message_count">5</span>
              <img
                src="https://media.discordapp.net/attachments/1038329663187062804/1084651184696086589/grid_0-gigapixel-art-scale-6_00x.png?width=616&height=616"
                alt="server"
              />
            </div>
          </Link>
          <div className="server-logo">
            <span className="message_count">8</span>
            <img
              src="https://media.discordapp.net/attachments/1038329663187062804/1084651188781338674/grid_0-1-gigapixel-art-scale-6_00x.png?width=616&height=616"
              alt="server"
            />
          </div>
          <div className="server-logo">
            <span className="message_count"></span>
            <img
              src="https://media.discordapp.net/attachments/1038329663187062804/1084651171614040157/grid_0_copy-gigapixel-art-scale-6_00x.png?width=616&height=616"
              alt="server"
            />
          </div>
          <div className="server-logo">
            <span className="message_count">8</span>
            <img
              src="https://media.discordapp.net/attachments/1038329663187062804/1084651188781338674/grid_0-1-gigapixel-art-scale-6_00x.png?width=616&height=616"
              alt="server"
            />
          </div>
          <div className="server-logo">
            <span className="message_count">5</span>
            <img
              src="https://media.discordapp.net/attachments/1038329663187062804/1084651184696086589/grid_0-gigapixel-art-scale-6_00x.png?width=616&height=616"
              alt="server"
            />
          </div>
        </div>
        <div onClick={createCommunity}>
          <AddServer />
        </div>
      </div>
    </>
  );
};

export default SideIcons;
