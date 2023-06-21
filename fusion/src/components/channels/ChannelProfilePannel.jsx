export const ChannelProfilePannel = () => {
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
  return (
    <section className="channels-side-bar-pannels" aria-label="User area">
      <div className="channels-sidebar-pannel-wrapper" />
      <div className="channels-sidebar-pannel-conatiner">
        <div
          className="channels-sidebar-pannel-avatar-wrapper"
          aria-expanded="false"
          aria-label="Set Status"
          role="button"
          tabIndex={0}
        >
          <div
            className="channels-sidebar-pannel-avatar"
            role="img"
            aria-label="sahal, Do Not Disturb"
            aria-hidden="false"
            style={{ width: 32, height: 32 }}
          >
            <svg
              width={40}
              height={40}
              viewBox="0 0 40 40"
              className="side-bar-pannel-avatar-svg"
              aria-hidden="true"
            >
              <foreignObject
                x={0}
                y={0}
                width={32}
                height={32}
                mask="url(#svg-mask-avatar-status-round-32)"
              >
                <div className="side-bar-pannel-avatar-stack">
                  <img
                    src="https://cdn.discordapp.com/avatars/1068017309110763611/e478c68e74e9885eebd32ed02b40559a.webp?size=32"
                    alt=" "
                    className="side-bar-pannel-avatar"
                    aria-hidden="true"
                  />
                </div>
              </foreignObject>
              <rect
                width={10}
                height={10}
                x={22}
                y={22}
                fill="#f23f43"
                mask="url(#svg-mask-status-dnd)"
                className="side-bar-pannel-rect-event"
              />
            </svg>
          </div>
          <div className="sidebar-pannel-name-tag">
            <div
              className="sidebar-pannel-text-sm-normal"
              data-text-variant="text-sm/normal"
            >
              <div
                className="sidebar-pannel-text-sm-normal"
                data-text-variant="text-sm/normal"
              >
                sahal
              </div>
            </div>
            <div
              className="sidebar-pannel-text-id"
              data-text-variant="text-xs/normal"
            >
              #8168
            </div>
          </div>
        </div>
        <div
          className="channels-sidebar-pannel-icon-flex"
          style={{ flex: "0 1 auto" }}
        >
          <button
            onClick={() => getPermission()}
            role="switch"
            aria-checked="true"
            aria-label="Mute"
            type="button"
            className="side-bar-pannel-button-wrapper"
          >
            <div className="side-bar-pannel-button-contents">
              <svg
                aria-hidden="true"
                role="img"
                width={20}
                height={20}
                viewBox="0 0 24 24"
              >
                <path
                  d="M6.7 11H5C5 12.19 5.34 13.3 5.9 14.28L7.13 13.05C6.86 12.43 6.7 11.74 6.7 11Z"
                  fill="currentColor"
                />
                <path
                  d="M9.01 11.085C9.015 11.1125 9.02 11.14 9.02 11.17L15 5.18V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V11C9 11.03 9.005 11.0575 9.01 11.085Z"
                  fill="currentColor"
                />
                <path
                  d="M11.7237 16.0927L10.9632 16.8531L10.2533 17.5688C10.4978 17.633 10.747 17.6839 11 17.72V22H13V17.72C16.28 17.23 19 14.41 19 11H17.3C17.3 14 14.76 16.1 12 16.1C11.9076 16.1 11.8155 16.0975 11.7237 16.0927Z"
                  fill="currentColor"
                />
                <path
                  d="M21 4.27L19.73 3L3 19.73L4.27 21L8.46 16.82L9.69 15.58L11.35 13.92L14.99 10.28L21 4.27Z"
                  className="strikethrough-2Kl6HF"
                  fill="currentColor"
                />
              </svg>
            </div>
          </button>
          <button
            role="switch"
            aria-checked="false"
            aria-label="Deafen"
            type="button"
            className="side-bar-pannel-button-wrapper"
          >
            <div className="side-bar-pannel-button-contents">
              <svg
                aria-hidden="true"
                role="img"
                width={20}
                height={20}
                viewBox="0 0 24 24"
              >
                <path
                  d="M6.16204 15.0065C6.10859 15.0022 6.05455 15 6 15H4V12C4 7.588 7.589 4 12 4C13.4809 4 14.8691 4.40439 16.0599 5.10859L17.5102 3.65835C15.9292 2.61064 14.0346 2 12 2C6.486 2 2 6.485 2 12V19.1685L6.16204 15.0065Z"
                  fill="currentColor"
                />
                <path
                  d="M19.725 9.91686C19.9043 10.5813 20 11.2796 20 12V15H18C16.896 15 16 15.896 16 17V20C16 21.104 16.896 22 18 22H20C21.105 22 22 21.104 22 20V12C22 10.7075 21.7536 9.47149 21.3053 8.33658L19.725 9.91686Z"
                  fill="currentColor"
                />
                <path
                  d="M3.20101 23.6243L1.7868 22.2101L21.5858 2.41113L23 3.82535L3.20101 23.6243Z"
                  className="strikethrough-2Kl6HF"
                  fill="currentColor"
                />
              </svg>
            </div>
          </button>
          <button
            aria-label="User Settings"
            type="button"
            className="side-bar-pannel-button-wrapper"
          >
            <div className="side-bar-pannel-button-contents">
              <svg
                aria-hidden="true"
                role="img"
                width={20}
                height={20}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
