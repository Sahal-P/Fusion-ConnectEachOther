import { useEffect } from "react";

const ReplayAttachmentBar = (props) => {
  useEffect(() => {
    if (props.replayTo == null) return;
  }, []);
  if (props.replayTo == null) {
    return null; // Return null to prevent rendering the component
  }
  return (
    <div className="attachedBars-2BCP3l">
      <div className="">
        <div className="clipContainer-31nYlH">
          <div className="container-A2jo65">
            <div className="replyBar-1oi75v">
              <div className="" role="button" tabIndex={0}>
                <div
                  className="text-sm-normal-AEQz4v text-1pxItg replyLabel-WWnhHi"
                  data-text-variant="text-sm/normal"
                  style={{ color: "var(--header-secondary)" }}
                >
                  Replying to{" "}
                  <span
                    className="name-3DDHNY username-3_PJ5r desaturateUserColors-1O-G89"
                    style={{ color: "rgb(46, 204, 113)" }}
                  >
                    {props.to}
                  </span>
                </div>
              </div>
              <div className="actions-1mkm4H">
                <div className="separator-8ngZ3p" aria-hidden="true" />
                <div className="closeButton-3IEry2" role="button" tabIndex={0}>
                  <svg
                    className="closeIcon-1bRhE8"
                    aria-hidden="true"
                    role="img"
                    width={24}
                    height={24}
                    viewBox="0 0 14 14"
                  >
                    <path
                      fill="currentColor"
                      d="M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReplayAttachmentBar;
